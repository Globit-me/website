import { getExchangeRates } from "@/data/dolar";
import Calculator from "../calculator/Calculator";
import HeroText from "./HeroText";
import { Bank } from "@/types/Calculator";

const Hero = async () => {
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
    <section className="flex flex-col md:flex-row mt-32 mb-8 md:mb-32 md:mt-56 mx-6 md:mx-0 space-y-5 items-center">
      <HeroText />
      <Calculator banks={banks} exchangeRates={exchangeRates} />
    </section>
  );
};

export default Hero;
