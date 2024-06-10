"use server";

import { imageSchema } from "@/schemas";
import { auth } from "@/auth";
import { addExtraData, addUserDni, getUserDni } from "@/data/user";
import { redirect } from "next/navigation";

export const verifyDni = async () => {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  } else {
    const dni = await getUserDni(session.user.id);
    if (!dni || !dni.front) {
      redirect("/dni");
    } else {
      redirect("/profile");
    }
  }
};

export const showDni = async () => {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const dni = await getUserDni(session.user.id);
  if (dni && dni.front) {
    const base64Image = Buffer.from(dni.front).toString("base64");
    return `data:image/png;base64,${base64Image}`;
  } else {
    throw new Error("DNI not found");
  }
};

export const updateProfile = async (data: FormData) => {
  const dni = data.get("dni") as string;
  const birthdayString = data.get("birthday") as string;
  const birthday = new Date(birthdayString);
  if (isNaN(birthday.getTime())) {
    throw new Error("Invalid date format");
  }
  const country = data.get("country") as string;
  const province = data.get("province") as string;
  const address = data.get("address") as string;
  const addressNumber = data.get("addressNumber") as string;
  const apartment = data.get("apartment") as string | undefined;
  const dniFront = data.get("dniFront") as File | undefined;
  const dniBack = data.get("dniBack") as File | undefined;

  const validation = imageSchema.safeParse({ dniFront, dniBack });
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  } else if (!validation.success || !dniFront || !dniBack) {
    console.log(validation.error?.errors[0].message);
  } else {
    const bytesFront = await dniFront.arrayBuffer();
    const bufferFront = Buffer.from(bytesFront);

    const bytesBack = await dniBack.arrayBuffer();
    const bufferBack = Buffer.from(bytesBack);

    await addUserDni(session.user.id, bufferFront, bufferBack);
    await addExtraData(
      session.user.id,
      dni,
      birthday,
      country,
      province,
      address,
      addressNumber,
      apartment
    );
  }
};
