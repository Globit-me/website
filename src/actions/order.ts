"use server";

import { auth } from "@/auth";
import { getUserById } from "@/data/user";
import { redirect } from "next/navigation";
import { OrderData } from "@/types/OrderData";
import { createOrder, getOrdersByUserId } from "@/data/order";

export const appendOrder = async (orderData: OrderData) =>  {
    const session = await auth();

    if (!session) redirect("/login");

    const user = await getUserById(session.user.id);

    if (!user) redirect("/login");

    if (user.status !== "approved") redirect("/dni");

    if (orderData.amount <= 0) return { error: "Debe ingresar una cantidad correcta de dinero " };

    try {
        createOrder(orderData, user.id);
        return { success: "Se ha enviado la orden correctamente!",  };
    } catch (error) {
        return { error: "Hubo algún error al crear la orden" };
    }
}

export const getUserOrders = async () => {
    const session = await auth();

    if (!session) redirect("/login");

    const orders = await getOrdersByUserId(session.user.id);

    return orders;
}
