"use server";

import * as z from "zod";
import bycript from "bcrypt";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";

export const registration = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: validatedFields.error.errors[0].message };
  }

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bycript.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: { email },
  });


  return { success: "user created" };
};
