"use client";

import React from "react";
import RotatingButton from "./RotatingButton";
import AmountInput from "./AmountInput";
import BankSelect from "./BankSelect";
import { Bank } from "../../types/Calculator";
import { useCalculator } from "@/hooks/useCalculator";
import InfoTooltip from "./InfoTooltip";

const banks: Bank[] = [
  { name: "Payoneer", currency: "USD", exchangeRate: 1 },
  { name: "Bank 2", currency: "ARS", exchangeRate: 95 },
];

const Calculator = () => {
  const {
    fromBank,
    toBank,
    amount,
    exchangedAmount,
    handleFromBankChange,
    handleToBankChange,
    handleSwitchBanks,
    handleAmountChange,
  } = useCalculator(banks);

  return (
    <div className="flex flex-col md:flex-1 items-center justify-center my-8 md:my-0 border-4">
      <div className="bg-white shadow-md rounded px-4 py-6 md:px-8 md:pt-6 md:pb-8 flex flex-col w-full">
        <div className="mb-0 md:mb-4 flex flex-col md:flex-row items-center">
          <AmountInput
            label={`Envías ${fromBank?.currency}`}
            amount={amount}
            onChange={handleAmountChange}
          />
          <BankSelect
            label="Desde Banco"
            selectedBank={fromBank.name}
            onChange={handleFromBankChange}
          />
        </div>

        <RotatingButton onClick={handleSwitchBanks} className="mb-4" />

        <div className="mb-0 md:mb-4 flex flex-col md:flex-row items-center">
          <AmountInput
            label={`Recibes ${toBank.currency}`}
            amount={Number(exchangedAmount.toFixed(2))}
            onChange={() => {}}
            readOnly
          />
          <BankSelect
            label="A Banco"
            selectedBank={toBank.name}
            onChange={handleToBankChange}
          />
        </div>
        <div className="mt-2 flex flex-row items-center w-full">
          <button
            onClick={() => {
              console.log("Button Clicked");
            }}
            className="bg-custom-blue text-white font-bold py-2 px-4 rounded w-full md:w-8/12 hover:bg-custom-blue-dark transition duration-300"
          > 
            Solicita tu envío
          </button>
          <InfoTooltip />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
