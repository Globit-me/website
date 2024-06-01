"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";

type ErrorType = "CredentialsSignin" |  "default";

const errorMessages: Record<ErrorType, string> = {
  CredentialsSignin: "Credenciales Invalidas. Por favor, intentelo de nuevo.",
  default: "Ha ocurrido un error. Por favor, intentelo de nuevo.",
}

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Los datos son incorrectos. Por favor, intentelo de nuevo." };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
      return { error: "Este Email no existe. Por favor, intentelo de nuevo." };
  }
  
  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(existingUser.email);
    return { success: "Reenviando mail de confirmación." };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return { success: "Inicio de sesión exitoso" };
  } catch (error) {
    if (error instanceof AuthError) {
      const errorMessage = errorMessages[error.type as ErrorType] || errorMessages.default;
      return { error: errorMessage };
    }

    throw error; //prevents a bug, otherwise will not redirect the user
  }
  
};
