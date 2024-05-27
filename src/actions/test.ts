"use server";

import { db } from "@/lib/db";
import fs from "fs";
import path from "path";

interface User {
  email: string;
  password: string;
  image: string;
}

const encodeImageToBase64 = (filePath: string): string => {
  const file = fs.readFileSync(filePath);
  return Buffer.from(file).toString('base64');
};

export const createUsers = async (): Promise<void> => {
  const users: User[] = [];
  const userImagePath = path.join(process.cwd(), 'public', 'logos', 'ASAEDE-1.png');
  const userImageBase64 = encodeImageToBase64(userImagePath);

  for (let i = 0; i < 100; i++) {
    users.push({
      email: `user${i}@example.com`,
      password: `password${i}`,
      image: userImageBase64,
    });
  }

  for (const user of users) {
    await db.user.create({
      data: {
        email: user.email,
        password: user.password,
      },
    });
  }
};

export const fetchUsers = async (): Promise<void> => {
  try {
    const users = await db.user.findMany();
    for (const user of users) {
      console.log(user.email, user.password);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
