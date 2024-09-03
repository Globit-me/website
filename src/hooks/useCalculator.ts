import { useState, ChangeEvent, useCallback, useMemo } from "react";
import { Bank } from "../types/Calculator";

const numberRegex = /^\d*\.?\d*$/;

export const useCalculator = (
  banks: Bank[],
  exchangeRates: { buy: number; sell: number } | null
) => {
  const [fromBank, setFromBank] = useState(banks[0]);
  const [toBank, setToBank] = useState(banks[1]);
  const [amount, setAmount] = useState(0);

  const exchangedAmount = useMemo(() => {
    if (fromBank && toBank && exchangeRates) {
      let amountAfterCommission = amount;
  
      // Aplicar comisión adicional de PayPal si el banco de origen es PayPal
      if (fromBank.name === "Paypal" || toBank.name == "Paypal") {
        amountAfterCommission = amountAfterCommission * (1 - 0.045);
      }
  
      if (fromBank.currency === "USD" && toBank.currency === "USD") {
        // Aplicar comisión de 6.5% + 10 USD para transferencias de dólar a dólar
        const commission = amountAfterCommission * 0.065;
        const totalDeduction = commission + 10;
        amountAfterCommission = amountAfterCommission - totalDeduction;
  
        // Asegurarse de que no sea negativo
        amountAfterCommission = Math.max(amountAfterCommission, 0);
  
        return Number(amountAfterCommission.toFixed(2));
      } else if (fromBank.currency === "USD" && toBank.currency === "ARS") {
        // Comisión de 5.5% para cambiar de USD a ARS
        amountAfterCommission = amountAfterCommission * (1 - 0.055);
        
        // Descontar 10 USD adicionales antes de convertir a ARS
        amountAfterCommission = amountAfterCommission - 10;
  
        // Asegurarse de que no sea negativo
        amountAfterCommission = Math.max(amountAfterCommission, 0);
        
        // Luego, convertir el monto a ARS
        return Number((amountAfterCommission * exchangeRates.sell).toFixed(2));
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
