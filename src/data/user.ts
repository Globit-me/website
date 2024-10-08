import { db } from "@/lib/db";
import { User } from "@/types/user";

export const getUserByEmail = async (email: string) => {
  try {
    return await db.user.findUnique({
      where: { email: email },
    });
  } catch (e) {
    return null;
  }
};

export const getUserStatus = async (id: string) => {
  try {
    return await db.user.findUnique({
      where: { id },
      select: {
        status: true,
      },
    });
  } catch (error) {
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

export const getUserByOrderId = async (orderId: string) => {
  try {
    const user = await db.user.findFirst({
      where: {
        orders: {
          some: {
            id: orderId,
          },
        },
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};

export const createUser = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    return await db.user.create({
      data: {
        email,
        password,
        name,
      },
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw new Error("Error creating a new user");
  }
};

export const updateUserPassword = async (id: string, password: string) => {
  try {
    return await db.user.update({
      where: { id },
      data: { password },
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw new Error("Error updating password user");
  }
};

export const updateUserEmail = async (id: string, email: string) => {
  try {
    return await db.user.update({
      where: { id: id },
      data: {
        emailVerified: new Date(),
        email: email,
      },
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw new Error("Error updating email user");
  }
};

export const getUsersDniVerification = async (): Promise<User[]> => {
  try {
    return await db.user.findMany({
      where: {
        status: "pending",
        dniImage: {
          isNot: null,
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        password: true,
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
    return [];
  }
};

export const getUsersRecentViewedVerification = async (
  twoDaysAgo: Date
): Promise<User[]> => {
  try {
    return await db.user.findMany({
      where: {
        status: {
          not: "pending",
        },
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
    return [];
  }
};

export const postApproveUser = async (id: string, date: Date) => {
  try {
    return await db.user.update({
      where: { id },
      data: {
        status: "approved",
        viewedDate: date,
      },
    });
  } catch (error) {
    return null;
  }
};

export const postRejectUser = async (id: string, date: Date) => {
  try {
    return await db.user.update({
      where: { id },
      data: {
        status: "rejected",
        viewedDate: date,
      },
    });
  } catch (error) {
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
        viewedDate: null,
        status: "pending",
      },
    });
  } catch (error) {
    return null;
  }
};

export const getRole = async (email: string) => {
  try {
    return await db.user.findUnique({
      where: { email },
      select: {
        role: true,
      },
    });
  } catch (error) {
    console.error("Error fetching user role:", error);
    return null;
  }
};
