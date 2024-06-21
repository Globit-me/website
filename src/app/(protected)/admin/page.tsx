import { openOrders, recentOrders } from "@/actions/admin";
import DniSection from "@/components/dni/DniSection";
import OrderSection from "@/components/order/OrderSection";


const AdminPage = async () => {
  const open_orders = await openOrders();
  const recent_orders = await recentOrders();

  return (
    <div className="max-w-6xl md:mx-auto mt-28 mb-8 md:mb-28 md:mt-56 mx-6">
      <h1 className="text-3xl font-bold text-center mb-12">
        Panel de administración
      </h1>
      <div className="space-y-12">
        <OrderSection orders={open_orders} recentOrders={recent_orders} />
        <DniSection />
        {/* <AccountsSection */}
      </div>
    </div>
  );
};

export default AdminPage;
