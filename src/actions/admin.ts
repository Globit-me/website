"use server";

import {
  getOpenOrders,
  getRecentClosedOrders,
  postApproveOrder,
  postRejectOrder,
} from "@/data/order";

import {
  getRole,
  getUserById,
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

export const getUser = async (id: string) => {
  const user = await getUserById(id);
  if (user?.status === "approved") {
    return {
      id: user.id!,
      name: user.name!,
      email: user.email!,
      dni: user.dni!,
      birthday: user.dob!,
      viewedDate: user.viewedDate!,
      address: user.address!,
    };
  }
  return null;
};

export const openOrders = async () => {
  return await getOpenOrders();
};

export const recentOrders = async () => {
  const date = new Date();
  const twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
  return await getRecentClosedOrders(twoDaysAgo);
};

export const approveOrder = async (id: string) => {
  console.log("Approving order", id);
  const date = new Date();
  await postApproveOrder(id, date);
};

export const rejectOrder = async (id: string) => {
  console.log("Rejecting order", id);
  const date = new Date();
  await postRejectOrder(id, date);
};

export const verifyRole = async (email: string) => {
  const user = await getRole(email);
  console.log("User role", user?.role);
  return user?.role === "ADMIN";
};
