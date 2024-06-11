import { db } from "@/lib/db";

export type data = {
    email: string;
    token: string;
    expires: Date;
};

export const getPasswordResetTokenByToken = async (token: string) => {
    try {
        return await db.passwordResetToken.findUnique({
            where: { token },
        });
    } catch (error) {
        return null;
    }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
    try {
        return await db.passwordResetToken.findFirst({
            where: { email },
        });
    } catch (error) {
        return null;
    }
};

export const deletePasswordResetTokenById = async (id: string) => {
    try {
        await db.passwordResetToken.delete({
            where: { id },
        });
    } catch (error) {
        console.log("ERROR: ", error);
        throw new Error("Error deleting password reset token");
    }
}

export const createPasswordResetToken = async ({ email, token, expires }: data) => {
    try {
        return await db.passwordResetToken.create({
            data: {
                email,
                token,
                expires,
            },
        });
    } catch (error) {
        console.log("ERROR: ", error);
        throw new Error("Error creating password reset token");
    }
}