"use client";

import React, { useState, useEffect, useCallback, ChangeEvent } from "react";

type Bank = {
  name: string;
  currency: string;
  exchangeRate: number;
};

const Calculator: React.FC = () => {
  const banks: Bank[] = [
    { name: "Bank 1", currency: "USD", exchangeRate: 1 },
    { name: "Bank 2", currency: "ARS", exchangeRate: 95 },
  ];

  const [fromBank, setFromBank] = useState<Bank>(banks[0]);
  const [toBank, setToBank] = useState<Bank>(banks[0]);
  const [amount, setAmount] = useState<number>(0);
  const [exchangedAmount, setExchangedAmount] = useState<number>(0);

  const calculateExchange = useCallback(
    (amount: number) => {
      if (fromBank && toBank) {
        const exchangedAmount =
          (amount * fromBank.exchangeRate) / toBank.exchangeRate;
        setExchangedAmount(exchangedAmount);
      }
    },
    [fromBank, toBank]
  );

  useEffect(() => {
    calculateExchange(amount);
  }, [fromBank, toBank, amount, calculateExchange]);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setAmount(value);
    calculateExchange(value);
  };

  const handleFromBankChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedBank = banks.find((bank) => bank.name === e.target.value);
    setFromBank(selectedBank ?? banks[0]);
  };

  const handleToBankChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedBank = banks.find((bank) => bank.name === e.target.value);
    setToBank(selectedBank ?? banks[0]);
  };

  return (
    <div className="flex flex-col md:flex-1 items-center justify-center p-4">
      <div className="bg-white shadow-md rounded px-4 py-6 md:px-8 md:pt-6 md:pb-8 mb-4 flex flex-col w-full">
        <div className="mb-4 flex flex-col md:flex-row items-center">
          <div className="flex-grow mb-4 md:mb-0 md:mr-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Envías {fromBank.currency}
            </label>
            <input
              id="amount"
              type="text"
              value={amount}
              onChange={handleAmountChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex-grow md:ml-2">
            <label
              className="text-gray-700 text-sm font-bold mb-2 hidden md:block"
              htmlFor="fromBank"
            >
              Desde Banco
            </label>
            <select
              id="fromBank"
              value={fromBank.name}
              onChange={handleFromBankChange}
              className="text-sm md:text-base shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {banks.map((bank) => (
                <option key={bank.name} value={bank.name}>
                  {bank.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4 flex flex-col md:flex-row items-center">
          <div className="flex-grow mb-4 md:mb-0 md:mr-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="exchangedAmount"
            >
              Recibes
            </label>
            <input
              id="exchangedAmount"
              type="text"
              value={exchangedAmount}
              readOnly
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex-grow md:ml-2">
            <label
              className="text-gray-700 text-sm font-bold mb-2 hidden md:block"
              htmlFor="toBank"
            >
              A Banco
            </label>
            <select
              id="toBank"
              value={toBank.name}
              onChange={handleToBankChange}
              className="text-sm md:text-base shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {banks.map((bank) => (
                <option key={bank.name} value={bank.name}>
                  {bank.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
