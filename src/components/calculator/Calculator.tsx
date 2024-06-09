"use client";

import RotatingButton from "./RotatingButton";
import AmountInput from "./AmountInput";
import BankSelect from "./BankSelect";
import { useCalculator } from "@/hooks/useCalculator";
import InfoTooltip from "./InfoTooltip";
import { Bank } from "@/types/Calculator";

interface CalculatorProps {
  banks: Bank[];
  exchangeRates: { buy: number; sell: number };
}

const Calculator = ({ banks, exchangeRates }: CalculatorProps) => {
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

  if (!banks.length || !exchangeRates) {
    console.log(banks, exchangeRates);
    return <div>Loading...</div>;
  }

  if (!fromBank || !toBank) {
    return <div>Error: Banks data not loaded correctly.</div>;
  }

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
