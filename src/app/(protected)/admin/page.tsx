import DniSection from "@/components/dni/DniSection";

const AdminPage = () => {
  return (
    <div className="max-w-6xl md:mx-auto mt-28 mb-8 md:mb-28 md:mt-56 mx-6">
      <h1 className="text-3xl font-bold text-center mb-12">
        Panel de administración
      </h1>
      <div className="space-y-12">
        {/* <OrderSection /> */}
        <DniSection />
        {/* <AccountsSection */}
      </div>
    </div>
  );
};

export default AdminPage;
