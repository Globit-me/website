"use client";

import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import RotatingButton from "./RotatingButton";
import AmountInput from "./AmountInput";
import BankSelect from "./BankSelect";
import { Bank } from "../../../types/Calculator";
import { useCalculator } from "@/hooks/useCalculator";

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
            amount={exchangedAmount}
            onChange={() => {}}
            readOnly
          />
          <BankSelect
            label="A Banco"
            selectedBank={toBank.name}
            onChange={handleToBankChange}
          />
        </div>
        <div className="mt-2 flex flex-col md:flex-row items-center w-full">
          <button
            onClick={() => { console.log("Button Clicked") }}
            className="bg-custom-blue text-white font-bold py-2 px-4 rounded w-full md:w-1/2 hover:scale-105 transition duration-300"
          >
            Solicita tu envío
          </button>
          <div className="text-xs space-y-1 leading-tight mt-2 md:mt-0 md:ml-4 text-gray-500 text-center md:text-left">
            <p>Comisiones y gastos: 6% + 10 USD.</p>
            <p>48 horas hábiles al recibir el pago.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;