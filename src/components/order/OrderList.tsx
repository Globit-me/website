import { Order } from "@/types/order";
import OrderItem from "./OrderItem";

interface OrderListProps {
  orders: Order[];
  onClose: (id: number) => void;
  onReject: (id: number) => void;
}

const OrderList: React.FC<OrderListProps> = ({ orders, onClose, onReject }) => {
  return (
    <div>
      {orders.map((order) => (
        <OrderItem
          key={order.id}
          order={order}
          onClose={onClose}
          onReject={onReject}
        />
      ))}
    </div>
  );
};

export default OrderList;
