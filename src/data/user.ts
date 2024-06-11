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