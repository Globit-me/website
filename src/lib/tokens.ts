import { 
    deletePasswordResetTokenById, 
    getPasswordResetTokenByEmail,
    createPasswordResetToken
} from "@/data/password-reset-token";

import { 
    getVerificationTokenByEmail, 
    deleteVerificationTokenById,
    createVerificationToken,
} from "@/data/verification-token";

import { v4 as uuidv4 } from "uuid";

const ONE_HOUR = 3600 * 1000;

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + ONE_HOUR); 

    const existingToken = await getVerificationTokenByEmail(email);
    if (existingToken) {
        await deleteVerificationTokenById(existingToken.id);
    }

    const verificationToken = await createVerificationToken({ email, token, expires });

    return verificationToken;
}

export const generatePasswordResetToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + ONE_HOUR); 

    const existingToken = await getPasswordResetTokenByEmail(email);
    if (existingToken) {
        await deletePasswordResetTokenById(existingToken.id);
    }

    const passwordResetToken = await createPasswordResetToken({ email, token, expires });

    return passwordResetToken;
}