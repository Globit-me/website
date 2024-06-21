
import OrderList from "@/components/order/OrderList";

import { Order } from "@prisma/client";

interface OrderSectionProps {
  orders: Order[];
  recentOrders: Order[];
}

const OrderSection = ({ orders, recentOrders }: OrderSectionProps) => {
  const openOrders = orders.filter((order) => order.status === "Abierta");

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
          {openOrders.length > 0 ? (
            <OrderList orders={openOrders} />
          ) : (
            <p>No hay órdenes abiertas por cerrar</p>
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Órdenes Recientes</h3>
          {recentOrders.length > 0 ? (
            <OrderList orders={recentOrders} />
          ) : (
            <p>No hay órdenes recientes</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
