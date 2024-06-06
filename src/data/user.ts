import { db } from "@/lib/db"
import { VerificationToken } from "@prisma/client";

export const getUserByEmail = async (email: string) => {
    try {
        return await db.user.findUnique({
            where: { email: email }
        });
    } catch (e) {
        return null;
    }
}

export const getUserById = async (id: string) => {
    try {
        return await db.user.findUnique({
            where: { id }
        })
    } catch (error) {
        return null;
    }
}

export const createUser = async (email: string, password: string, name: string) => {
    try {
        return await db.user.create({
            data: {
                email,
                password,
                name
            }
        })
    } catch (error) {
        console.log("ERROR: ", error);
        throw new Error("Error creating a new user");
    }
}

export const updateUserPassword = async (id: string, password: string) => {
    try {
        return await db.user.update({
            where: { id },
            data: { password }
        })
    } catch (error) {
        console.log("ERROR: ", error);
        throw new Error("Error updating password user");
    }
}

export const updateUserEmail = async (id: string, email: string) => {
    try {
        return await db.user.update({
            where: {id: id},
            data: {
                emailVerified: new Date(),
                email: email,
            }
        });
    } catch (error) {
        console.log("ERROR: ", error);
        throw new Error("Error updating email user");
    }
}

export const getUserDni = async (userId: string) => {
    try {
        return await db.dNIImage.findFirst({
            where: { userId }
        });
    } catch (error) {
        return null;
    }
}

export const addUserDni = async (userId: string, front: Buffer, reverse: Buffer) => {
    try {
        return await db.dNIImage.create({
            data: {
                userId,
                front,
                reverse
            }
        });
    } catch (error) {
        return null;
    }
}

export const addExtraData = async (id:string, dni: string, birthday: string, country: string, province: string, address: string, addressNumber: string, /* apartment: string */) => {
    try {
        return await db.user.update({
            where: { id },
            data: {
                dni,
                dob: birthday,
                country,
                province,
                address,
                addressNumber,
                /* apartment */
            }
        });
    } catch (error) {
        return null;
    }
}