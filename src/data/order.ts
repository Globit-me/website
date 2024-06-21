import { db } from "@/lib/db";
import { OrderData } from "@/types/OrderData"


export const createOrder = async (orderData: OrderData, id: string) => {
    await db.order.create({
        data: {
            amountSent: orderData.amount,
            amountReceived: orderData.exchangedAmount,
            sendingBank: orderData.fromBank,
            userId: id,
            status: "Abierta",
        }
    });
}

export const getOrdersByUserId = async (id: string) => {
    return await db.order.findMany({
        where: {
            userId: id
        },
    });
}

export const getOpenOrders = async () => {
    return await db.order.findMany({
        where: {
            status: "Abierta",
        }
    })
}

export const getRecentClosedOrders = async (twoDaysAgo: Date) => {
    return await db.order.findMany({
        where: {
            status: {
              not: "Aprobada",
            },
            closedDate: {
              gte: twoDaysAgo,
            },
          },        
    })
}

export const postApproveOrder = async (orderId: string, date: Date) => {
    await db.order.update({
        where: {
            id: orderId,
        },
        data: {
            status: "Cerrada",
            closedDate: date,
        }
    });
}

export const postRejectOrder = async (orderId: string, date: Date) => {
    await db.order.update({
        where: {
            id: orderId,
        },
        data: {
            status: "Rechazada",
            closedDate: date,
        }
    });
}
