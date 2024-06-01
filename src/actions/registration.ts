"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens"; 

export const registration = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: validatedFields.error.errors[0].message };
  }

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Este email ya está en uso. Por favor, elige otro." };
  }

  try {
    await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    const verificationToken = await generateVerificationToken(email);
    return { success: "Mail de Confirmación Enviado!" }
  } catch (error: any) {
    return { error: "Error al crear el usuario. Por favor, inténtalo de nuevo."};
  }
};
