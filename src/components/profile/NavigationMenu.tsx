"use client"

import React, { useState } from "react";

interface NavigationMenuProps {
  onSelect: (selection: string) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ onSelect }) => {
  const [selected, setSelected] = useState<string>("create-order");

  const handleSelect = (selection: string) => {
    setSelected(selection);
    onSelect(selection);
  };

  const getLinkClass = (selection: string) => {
    return selected === selection
      ? "bg-custom-blue-dark text-white py-2 px-3 rounded transition duration-200 rounded-full"
      : "hover:text-custom-blue-dark py-2 px-3";
  };

  return (
    <div className="text-custom-blue flex flex-row p-4 justify-center">
      <nav className="w-full max-w-xl">
        <ul className="flex flex-row justify-evenly">
          <li>
            <button
              onClick={() => handleSelect("create-order")}
              className={getLinkClass("create-order")}
            >
              Pedido
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelect("orders")}
              className={getLinkClass("orders")}
            >
              Historial
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelect("dollars")}
              className={getLinkClass("dollars")}
            >
              Dólares
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;
