"use server";

import { profileSchema } from "@/schemas";
import { auth } from "@/auth";
import { addExtraData, addUserDni, getUserDni } from "@/data/user";
import { redirect } from "next/navigation";
import { z } from "zod";

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

export const updateProfile = async (data: z.infer<typeof profileSchema>) => {
  const parsedData = profileSchema.safeParse(data);

  if (!parsedData.success) {
    throw new Error(parsedData.error.errors[0].message);
  }

  const {
    dni,
    birthday,
    country,
    province,
    address,
    addressNumber,
    apartment,
    dniFront,
    dniBack,
  } = parsedData.data;

  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  } else {
    const bytesFront = await dniFront.arrayBuffer();
    const bufferFront = Buffer.from(bytesFront);

    const bytesBack = await dniBack.arrayBuffer();
    const bufferBack = Buffer.from(bytesBack);

    await addUserDni(session.user.id, bufferFront, bufferBack);
    await addExtraData(
      session.user.id,
      dni,
      new Date(birthday),
      country,
      province,
      address,
      addressNumber,
      apartment
    );
  }
};
