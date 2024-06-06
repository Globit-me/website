"use server";

import { db } from "@/lib/db"
import { getUserByEmail, updateUserEmail } from "@/data/user";
import { deleteVerificationTokenById, getVerificationTokenByToken } from "@/data/verification-token";

export const newVerification = async (token: string) => {
    try {
        const existingToken = await getVerificationTokenByToken(token);

        if (!existingToken) {
            return { error: "El token no existe!" };
        }
    
        const hasExpired = new Date(existingToken.expires) < new Date();
        if (hasExpired) {
            return { error: "El token ha expirado!" };
        }
    
        const existingUser = await getUserByEmail(existingToken.email);
        if (!existingUser) {
            return { error: "El email no existe!" };
        }
    
        await db.user.update({
            where: {id: existingUser.id},
            data: {
                emailVerified: new Date(),
                email: existingToken.email,
            }
        });

        await updateUserEmail(existingUser.id, existingToken.email);

        await deleteVerificationTokenById(existingToken.id);
    
        return { success: "Email verificado!" };
    } catch (error: any) {
        return { error: "Algo ha salido mal!" };
    }
}