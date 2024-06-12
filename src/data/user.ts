import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    return await db.user.findUnique({
      where: { email: email },
    });
  } catch (e) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    return await db.user.findUnique({
      where: { id },
    });
  } catch (error) {
    return null;
  }
};

export const getUsersDniVerification = async (twoDaysAgo: Date) => {
  try {
    return await db.user.findMany({
      where: {
        status: "pending",
        viewedDate: {
          gte: twoDaysAgo,
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        password: true,
        role: true,
        image: true,
        dni: true,
        dob: true,
        country: true,
        province: true,
        address: true,
        addressNumber: true,
        apartment: true,
        status: true,
        viewedDate: true,
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUserDni = async (userId: string) => {
  try {
    return await db.dNIImage.findFirst({
      where: { userId },
    });
  } catch (error) {
    return null;
  }
};

export const addUserDni = async (
  userId: string,
  front: Buffer,
  reverse: Buffer
) => {
  try {
    return await db.dNIImage.create({
      data: {
        userId,
        front,
        reverse,
      },
    });
  } catch (error) {
    return null;
  }
};

export const addExtraData = async (
  id: string,
  dni: string,
  birthday: Date,
  country: string,
  province: string,
  address: string,
  addressNumber: string,
  apartment?: string
) => {
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
        apartment,
      },
    });
  } catch (error) {
    return null;
  }
};
