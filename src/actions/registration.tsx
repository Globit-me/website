"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";

export const registration = async (values: z.infer<typeof RegisterSchema>) => {
  try {
    const userData = RegisterSchema.safeParse(values);

    if (userData.data) {
      const hashedPassword = await bcrypt.hash(userData.data.password, 10);

      const user = await db.user.create({
        data: {
          email: userData.data.email,
          name: userData.data.name,
          password: hashedPassword,
        },
      });

      return { success: "Usuario registrado" };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: "Error en la entrada de datos" };
    }
    return { error: "Algo fue mal en el servidor" };
  }
};
