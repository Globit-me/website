"use server";

import { deletePasswordResetTokenById, getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail, updateUserPassword } from "@/data/user";
import { NewPasswordSchema } from "@/schemas";

import * as z from "zod";
import bcrypt from "bcryptjs";

export const newPassword = async (values: z.infer<typeof NewPasswordSchema>, token?: string | null) => {
    try {
        if (!token) return { error: "Token faltante" };

        const validatedFields = NewPasswordSchema.safeParse(values);
    
        if (!validatedFields.success) return { error: "Campos Inválidos" };
    
        const { password } = validatedFields.data;
    
        const existingToken = await getPasswordResetTokenByToken(token);
    
        if (!existingToken) return { error: "Token inválido" };
    
        const hasExpired = new Date(existingToken.expires) < new Date();
    
        if (hasExpired) return { error: "Token expirado" };
    
        const existingUser = await getUserByEmail(existingToken.email);
    
        if (!existingUser) return { error: "Email no encontrado" };
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        await updateUserPassword(existingUser.id, hashedPassword);

        await deletePasswordResetTokenById(existingToken.id);
    
        return { success: "Contraseña Actualizada!" };

    } catch (error: any) {
        return { error: "Algo ha salido mal!" };
    }
}