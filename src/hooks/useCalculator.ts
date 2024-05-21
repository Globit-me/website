import { useState, ChangeEvent, useCallback } from 'react';
import { Bank } from '../types/Calculator'; 

const numberRegex = /^\d*\.?\d*$/

export const useCalculator = (banks: Bank[]) => {
  const [fromBank, setFromBank] = useState(banks[0]);
  const [toBank, setToBank] = useState(banks[1]);
  const [amount, setAmount] = useState(0);
  const [exchangedAmount, setExchangedAmount] = useState(0);

  const calculateExchange = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;

      return (amount: number) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          if (fromBank && toBank) {
            const exchangedAmount =
              (amount * fromBank.exchangeRate) / toBank.exchangeRate;
            setExchangedAmount(exchangedAmount);
          }
        }, 700);
      };
    })(),
    [fromBank, toBank]
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