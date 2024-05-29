"use client";

import AnimatedTitle from "@/components/form/AnimatedTitle";
import OrderList from "@/components/order/OrderList";
import { Order } from "@/types/order";
import { useState } from "react";

const ordersData: Order[] = [
  {
    id: 1,
    clientName: "Juan Perez",
    status: "Abierta",
    clientDNI: "12345678",
    clientDOB: "1990-01-01",
    clientAddress: "Calle Falsa 123",
    clientImage: "/dni.jpg",
  },
  {
    id: 2,
    clientName: "Maria Gomez",
    status: "Cerrada",
    clientDNI: "87654321",
    clientDOB: "1985-05-05",
    clientAddress: "Avenida Siempre Viva 742",
    clientImage: "/dni.jpg",
  },
];

const OrderSection = () => {
  const [orders, setOrders] = useState<Order[]>(ordersData);

  const closeOrder = (id: number) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: "Cerrada" } : order
      )
    );
  };

  const rejectOrder = (id: number) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: "Rechazada" } : order
      )
    );
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h2 className="text-xl font-semibold mb-4">Órdenes Recientes</h2>
        <OrderList
          orders={orders.filter((order) => order.status !== "Abierta")}
          onClose={closeOrder}
          onReject={rejectOrder}
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Órdenes Abiertas por Cerrar
        </h2>
        <OrderList
          orders={orders.filter((order) => order.status === "Abierta")}
          onClose={closeOrder}
          onReject={rejectOrder}
        />
      </div>
    </section>
  );
};

export default OrderSection;
