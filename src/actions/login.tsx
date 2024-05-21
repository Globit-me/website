"use server";

import * as z from "zod";
import bcrypt from "bcrypt";
import { LoginSchema } from "@/schemas";
import { db } from "@/lib/db";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  try {
    const loginData = LoginSchema.safeParse(values);

    if (loginData.data) {
      const user = await db.user.findUnique({
        where: { email: loginData.data.email },
      });
      if (!user) {
        return { error: "Usuario no encontrado" };
      }

      const valid = await bcrypt.compare(
        loginData.data.password,
        user.password
      );
      if (!valid) {
        return { error: "Contraseña invalida" };
      }

      return { success: "Usuario encontrado" };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: "Error en la entrada de datos" };
    }
    return { error: "Algo fue mal en el servidor" };
  }
};
