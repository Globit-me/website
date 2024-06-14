import { auth } from "@/auth";
import {
  getUserDni,
  getUsersDniVerification,
  postApproveUser,
  postRejectUser,
} from "@/data/user";

export const showUserDni = async (id: string) => {
  const dni = await getUserDni(id);
  if (dni && dni.front) {
    const base64Image = Buffer.from(dni.front).toString("base64");
    return `data:image/png;base64,${base64Image}`;
  } else {
    throw new Error("DNI not found");
  }
};

export const showUsersToVerify = async () => {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const date = new Date();
  date.setDate(date.getDate() - 2);

  return await getUsersDniVerification(date);
};

export const approveUser = async (id: string) => {
  const date = new Date();

  await postApproveUser(id, date);
};

export const rejectUser = async (id: string) => {
  const date = new Date();
  await postRejectUser(id, date);
};
