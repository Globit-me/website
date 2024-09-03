import { useState, ChangeEvent, useCallback, useMemo } from "react";
import { Bank } from "../types/Calculator";

const numberRegex = /^\d*\.?\d*$/;

export const useCalculator = (
  banks: Bank[],
  exchangeRates: { buy: number; sell: number } | null
) => {
  const [fromBank, setFromBank] = useState(banks[0]);
  const [toBank, setToBank] = useState(banks[5]);
  const [amount, setAmount] = useState(0);

  const exchangedAmount = useMemo(() => {
    if (fromBank && toBank && exchangeRates) {
      let amountAfterCommission = amount;

      // Aplica la comisión de PayPal si el banco de origen es PayPal
      if (fromBank.name === "Paypal") {
        amountAfterCommission = amountAfterCommission * (1 - 0.045);
      }

      if (fromBank.currency === "USD" && toBank.currency === "ARS") {
        // Cobro de 10 USD adicional
        amountAfterCommission = amountAfterCommission - 10;
        
        // Comisión de 5.5% para cambiar de USD a ARS
        amountAfterCommission = amountAfterCommission * (1 - 0.055);
        
        return Number((amountAfterCommission * exchangeRates.sell).toFixed(2));
      }
     else if (fromBank.currency === "ARS" && toBank.currency === "USD") {
        // Comisión de 6.5% y cobro de 10 USD para cambiar de ARS a USD
        const commission = amountAfterCommission * 0.065;
        const totalDeduction = commission + 10 * exchangeRates.buy;
        amountAfterCommission = amountAfterCommission - totalDeduction;
        return Number((amountAfterCommission / exchangeRates.buy).toFixed(2));
      }
    }
    return 0;
  }, [fromBank, toBank, amount, exchangeRates]);



  const calculateExchange = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;

      return (amount: number) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setAmount(amount);
        }, 700);
      };
    })(),
    []
  );

  const handleFromBankChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedBank = banks.find((bank) => bank.name === e.target.value);
    setFromBank(selectedBank ?? banks[0]);
  };

  const handleToBankChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedBank = banks.find((bank) => bank.name === e.target.value);
    setToBank(selectedBank ?? banks[1]);
  };

  const handleSwitchBanks = () => {
    const temp = fromBank;
    setFromBank(toBank);
    setToBank(temp);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!numberRegex.test(value)) return;
    const numberValue = Number(value);
    setAmount(numberValue);
    calculateExchange(numberValue);
  };

  return {
    fromBank,
    toBank,
    amount,
    exchangedAmount,
    handleFromBankChange,
    handleToBankChange,
    handleSwitchBanks,
    handleAmountChange,
  };
};
