"use client";

import OrderList from "@/components/order/OrderList";
import RecentOrderList from "@/components/order/RecentOrderList";
import { Order } from "@/types/order";
import { useState } from "react";
import dayjs from "dayjs";

const ordersData: Order[] = [
  {
    id: 1,
    clientName: "Juan Perez",
    status: "Abierta",
    clientDNI: "12345678",
    clientDOB: "1990-01-01",
    clientAddress: "Calle Falsa 123",
    clientImage: "/dni.jpg",
    closedDate: null,
  },
  {
    id: 2,
    clientName: "Maria Gomez",
    status: "Cerrada",
    clientDNI: "87654321",
    clientDOB: "1985-05-05",
    clientAddress: "Avenida Siempre Viva 742",
    clientImage: "/dni.jpg",
    closedDate: new Date(),
  },
];

const OrderSection = () => {
  const [orders, setOrders] = useState<Order[]>(ordersData);

  const closeOrder = (id: number) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? { ...order, status: "Cerrada", closedDate: new Date() }
          : order
      )
    );
  };

  const rejectOrder = (id: number) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? { ...order, status: "Rechazada", closedDate: new Date() }
          : order
      )
    );
  };

  const revertOrder = (id: number) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? { ...order, status: "Abierta", closedDate: null }
          : order
      )
    );
  };

  const recentOrders = orders
    .filter(
      (order) =>
        order.status !== "Abierta" &&
        dayjs(order.closedDate).isAfter(dayjs().subtract(2, "day"))
    )
    .slice(-2);

  return (
    <section className="flex flex-col">
      <h2 className="text-2xl md:text-3xl font-semibold text-custom-blue mb-4 underline">
        Órdenes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Órdenes Abiertas por Cerrar
          </h3>
          <OrderList
            orders={orders.filter((order) => order.status === "Abierta")}
            onClose={closeOrder}
            onReject={rejectOrder}
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Órdenes Recientes</h3>
          {recentOrders.length > 0 ? (
            <RecentOrderList orders={recentOrders} onRevert={revertOrder} />
          ) : (
            <p>No hay órdenes recientes</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
