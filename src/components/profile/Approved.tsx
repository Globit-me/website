"use client";

import React, { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import CreateOrder from "./CreateOrder";
import Dollars from "./Dollars";
import Orders from "./Orders";

const Approved: React.FC = () => {
  const [selection, setSelection] = useState<string>("create-order");

  const renderContent = () => {
    switch (selection) {
      case "create-order":
        return <CreateOrder />;
      case "orders":
        return <Orders />;
      case "dollars":
        return <Dollars />;
      default:
        return <CreateOrder />;
    }
  };

  return (
    <div className="flex flex-col">
      <NavigationMenu onSelect={setSelection} />
      <section className="flex-grow relative max-w-6xl md:mx-auto mt-8 mb-24 mx-6 md:mb-40">
        {renderContent()}
      </section>
    </div>
  );
};

export default Approved;
