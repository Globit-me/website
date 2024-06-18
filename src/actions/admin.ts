"use server"

import {
  getUserDni,
  getUsersDniVerification,
  getUsersRecentViewedVerification,
  postApproveUser,
  postRejectUser,
} from "@/data/user";

export const showFrontUserDni = async (id: string) => {
  const dni = await getUserDni(id);
  if (dni && dni.front) {
    const base64Image = Buffer.from(dni.front).toString("base64");
    return `data:image/png;base64,${base64Image}`;
  } else {
    throw new Error("DNI not found");
  }
};

export const showBackUserDni = async (id: string) => {
  const dni = await getUserDni(id);
  if (dni && dni.reverse) {
    const base64Image = Buffer.from(dni.reverse).toString("base64");
    return `data:image/png;base64,${base64Image}`;
  } else {
    throw new Error("DNI not found");
  }
};


export const showUsersToVerify = async () => {

  return await getUsersDniVerification();
};

export const showRecentViewedUsers = async () => {
  const date = new Date();
  const twoDaysAgo = new Date(date.setDate(date.getDate() - 2));

  return await getUsersRecentViewedVerification(twoDaysAgo);
};

export const approveUser = async (id: string) => {
  const date = new Date();

  await postApproveUser(id, date);
};

export const rejectUser = async (id: string) => {
  const date = new Date();
  await postRejectUser(id, date);
};
