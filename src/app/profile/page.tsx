import { showProfile } from "@/actions/profile";
import Pending from "@/components/profile/Pending";
import Approved from "@/components/profile/Approved";
import { Bank } from "@/types/Calculator";
import { getExchangeRates } from "@/data/dolar";

const ProfilePage = async () => {
  const currentUser = await showProfile();
  const banks: Bank[] = [
    { name: "Payoneer", currency: "USD" },
    { name: "Paypal", currency: "USD" },
    { name: "Wise", currency: "USD" },
    { name: "Zelle", currency: "USD" },
    { name: "Deel", currency: "USD" },
    { name: "Banco Arg", currency: "ARS" },
    { name: "Mercado pago", currency: "ARS" },
    { name: "Uala", currency: "ARS" },
    { name: "Brubank", currency: "ARS" },
  ];
  const exchangeRates = await getExchangeRates();

  return (
    <div className="flex">
      <section className="flex-grow relative max-w-6xl md:mx-auto mt-32 mb-56 mx-6">
        {currentUser.status === "approved" ? (
          <Approved banks={banks} exchangeRates={exchangeRates} />
        ) : (
          <Pending />
        )}
      </section>
    </div>
  );
};

export default ProfilePage;
