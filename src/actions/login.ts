"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: validatedFields.error.errors[0].message };
  }

  const { email, password } = validatedFields.data;

  const user = await db.user.findUnique({
    where: { email },
  });
  
  if (!user) {
    return { error: "Usuario no encontrado" };
  }
  
  if(user.password){
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      return { success: "Usuario logueado" };
    } else {
      return { error: "Contraseña incorrecta" };
    }    
  }

};
