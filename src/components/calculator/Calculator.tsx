"use client";

import React, { useState } from "react";

import RotatingButton from "./RotatingButton";
import AmountInput from "./AmountInput";
import BankSelect from "./BankSelect";
import { useCalculator } from "@/hooks/useCalculator";
import InfoTooltip from "./InfoTooltip";
import { Bank } from "@/types/Calculator";
import { appendOrder } from "@/actions/order";
import { OrderData } from "@/types/OrderData";
import { ToastError } from "../form/toast-error";
import { ToastSuccess } from "../form/toast-success";


interface CalculatorProps {
  banks: Bank[];
  exchangeRates: { buy: number; sell: number };
}

const Calculator = ({ banks, exchangeRates }: CalculatorProps) => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const {
    fromBank,
    toBank,
    amount,
    exchangedAmount,
    handleFromBankChange,
    handleToBankChange,
    handleSwitchBanks,
    handleAmountChange,
  } = useCalculator(banks, exchangeRates);

  const onSubmit = async () => {
    const orderData: OrderData = {
      fromBank: fromBank.name,
      toBank: toBank.name,
      amount,
      exchangedAmount
    };

    const response = await appendOrder(orderData);
    console.log(response);
    response.success ? setSuccess(response.success) : setError(response.error);
  }

  return (
    <div className="flex flex-col md:flex-1 items-center justify-center my-8 md:my-0 border-4">
      <ToastError message={error} />
      <ToastSuccess message={success} />
      <div className="bg-white shadow-md rounded px-4 py-6 md:px-8 md:pt-6 md:pb-8 flex flex-col w-full">
        <div className="mb-0 md:mb-4 flex flex-col md:flex-row items-center">
          <AmountInput
            label={`Envías ${fromBank?.currency}`}
            amount={amount}
            onChange={handleAmountChange}
          />
          <BankSelect
            label="Desde Banco"
            selectedBank={fromBank?.name}
            onChange={handleFromBankChange}
            banks={banks}
          />
        </div>

        <RotatingButton onClick={handleSwitchBanks} className="mb-4" />

        <div className="mb-0 md:mb-4 flex flex-col md:flex-row items-center">
          <AmountInput
            label={`Recibes ${toBank?.currency}`}
            amount={exchangedAmount}
            onChange={() => {}}
            readOnly
          />
          <BankSelect
            label="A Banco"
            selectedBank={toBank?.name}
            onChange={handleToBankChange}
            banks={banks}
          />
        </div>
        <div className="mt-2 flex flex-row items-center w-full">
          <button
            type="submit"
            onClick={onSubmit}
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
