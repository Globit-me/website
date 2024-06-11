"use server";
import { sendPasswordResetEmail } from "@/lib/mail";
import { getUserByEmail } from "@/data/user";
import { ResetSchema } from "@/schemas"
import { z } from "zod"
import { generatePasswordResetToken } from "@/lib/tokens";

export const reset = async (values: z.infer<typeof ResetSchema> ) => {
    try {
        const validatedFields = ResetSchema.safeParse(values);
    
        if (!validatedFields.success) {
            return { error: "Email inválido!" };
        }
    
        const { email } = validatedFields.data;
    
        const existingUser = await getUserByEmail(email);
    
        if (!existingUser) {
            return { error: "Email no encontrado!" };
        }
    
        const passwordResetToken = await generatePasswordResetToken(email);
    
        if (!passwordResetToken) {
            return { error: "Error al generar el token!" };
        }
    
        await sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token);
    
    
        return { success: "Email de reestablecimiento enviado!" };
        
    } catch (error: any) {
        return { error: "Algo ha salido mal!" };
    }
}