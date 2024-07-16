import { getUserOrders } from "@/actions/order";
import { Bank } from "@/types/Calculator";
import { useEffect, useState } from "react";

interface OrderProps {
  banks: Bank[];
}

const Orders = ({ banks }: OrderProps) => {
  const [orders, setOrders] = useState<
    {
      id: string;
      status: string;
      closedDate: Date | null;
      amountSent: number;
      amountReceived: number;
      sendingBank: string;
    }[]
  >([]);

  const fetchOrders = async () => {
    const UserOrders = await getUserOrders();
    setOrders(UserOrders.reverse());
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const getCurrency = (bankName: string) => {
    const bank = banks.find((b) => b.name === bankName);
    return bank ? bank.currency : "Unknown Currency";
  };

  const getOppositeCurrency = (currency: string) => {
    return currency === "USD" ? "ARS" : "USD";
  };

  const formatDate = (date: Date | null) => {
    return date ? date.toLocaleDateString() : "N/A";
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {orders.map((order) => {
          const sendingCurrency = getCurrency(order.sendingBank);
          const receivingCurrency = getOppositeCurrency(sendingCurrency);

          return (
            <div
              key={order.id}
              className="bg-white p-4 sm:p-6 mb-4 sm:mb-6 rounded-lg shadow-md"
            >
              <p className="text-custom-black font-bold text-xs sm:text-lg mb-2 sm:mb-4">
                {order.id}
              </p>
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="mb-2 sm:mb-0 sm:mr-4">
                  <p className="text-custom-black text-sm sm:text-base">
                    Orden: {order.status}
                  </p>
                  <p className="text-custom-black text-sm sm:text-base">
                    Cierre: {formatDate(order.closedDate)}
                  </p>
                </div>
                <div>
                  <p className="text-custom-black text-sm sm:text-base">
                    Se envía: {order.amountSent} {sendingCurrency}
                  </p>
                  <p className="text-custom-black text-sm sm:text-base">
                    Se recibe: {order.amountReceived} {receivingCurrency}
                  </p>
                  <p className="text-custom-black text-sm sm:text-base">
                    Banco: {order.sendingBank}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
