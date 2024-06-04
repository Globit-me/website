import { Order } from "@/types/order";
import OrderItem from "./OrderItem";

interface RecentOrderListProps {
  orders: Order[];
}

const RecentOrderList: React.FC<RecentOrderListProps> = ({ orders }) => {
  return (
    <div>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} isRecent={true} />
      ))}
    </div>
  );
};

export default RecentOrderList;
