import { db } from "@/lib/db";

type data = {
    email: string;
    token: string;
    expires: Date;
}

export const getVerificationTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: { email }
        });
        return verificationToken;
    } catch {
        return null;
    }
}

export const getVerificationTokenByToken = async (token: string) => {
    try {
        const verificationToken = await db.verificationToken.findUnique({
            where: { token }
        });
        return verificationToken;
    } catch {
        return null;
    }
}

export const deleteVerificationTokenById = async (id: string) => {
    try {
        await db.verificationToken.delete({
            where: { id }
        });
    } catch (error) {
        console.log("ERROR: ", error);
        throw new Error("Error deleting verification token");
    }
}

export const createVerificationToken = async ({ email, token, expires }: data) => {
    try {
        const verificationToken = await db.verificationToken.create({
            data: {
                email,
                token,
                expires
            }
        });
        return verificationToken;
    } catch (error) {
        console.log("ERROR: ", error);
        throw new Error("Error creating verification token");
    }
}