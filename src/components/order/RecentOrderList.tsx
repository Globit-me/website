import { Order } from "@/types/order";
import OrderItem from "./OrderItem";

interface RecentOrderListProps {
  orders: Order[];
  onRevert: (id: number) => void;
}

const RecentOrderList: React.FC<RecentOrderListProps> = ({ orders, onRevert }) => {
  return (
    <div>
      {orders.map((order) => (
        <OrderItem
          key={order.id}
          order={order}
          onRevert={onRevert}
          isRecent={true}
        />
      ))}
    </div>
  );
};

export default RecentOrderList;

