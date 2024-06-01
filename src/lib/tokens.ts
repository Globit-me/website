import { 
    getVerificationTokenByEmail, 
    deleteVerificationTokenById,
    createToken,
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

    const verificationToken = await createToken({ email, token, expires });

    return verificationToken;
}