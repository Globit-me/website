"use client";

import React, { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import CreateOrder from "./CreateOrder";
import Dollars from "./Dollars";
import Orders from "./Orders";
import { Bank } from "@/types/Calculator";

interface CalculatorProps {
  banks: Bank[];
  exchangeRates: { buy: number; sell: number };
}


const Approved = ({ banks, exchangeRates }: CalculatorProps) => {
  const [selection, setSelection] = useState<string>("create-order");

  const renderContent = () => {
    switch (selection) {
      case "create-order":
        return <CreateOrder banks={banks} exchangeRates={exchangeRates}/>;
      case "orders":
        return <Orders banks={banks}/>;
      case "dollars":
        return <Dollars />;
      default:
        return <CreateOrder banks={banks} exchangeRates={exchangeRates}/>;
    }
  };

  return (
    <div className="flex flex-col">
      <NavigationMenu onSelect={setSelection} />
      <section className="flex-grow relative max-w-6xl md:mx-auto mb-24 mx-6 md:mb-40">
        {renderContent()}
      </section>
    </div>
  );
};

export default Approved;
