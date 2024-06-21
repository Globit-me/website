import { Order } from "@prisma/client";
import React from "react";
import OrderItem from "./OrderItem";


interface OrderListProps {
  orders: Order[];
}


const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  return (
    <div>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
