"use server";

import {  profileSchemaBack } from "@/schemas";
import { auth } from "@/auth";
import { addExtraData, addUserDni, getUserById, getUserDni } from "@/data/user";
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

export const showProfile = async () => {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const user = await getUserById(session.user.id);
  if (!user) {
    throw new Error("User not found");
  }

  return user.status === "approved";
};

export const updateProfile = async (data: FormData) => {
  const parsedData = profileSchemaBack.safeParse(Object.fromEntries(data));

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