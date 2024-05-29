import AnimatedTitle from "@/components/form/AnimatedTitle";
import OrderSection from "@/components/order/OrderSection";

const AdminPage = () => {
  return (
    <div className="max-w-6xl md:mx-auto mt-28 mb-8 md:mb-28 md:mt-56 mx-6">
      <AnimatedTitle title="Panel de Administración" />
      <OrderSection />
    </div>
  );
};

export default AdminPage;
