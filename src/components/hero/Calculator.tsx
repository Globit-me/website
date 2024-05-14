"use client";

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';

type Bank = {
  name: string;
  currency: string;
  exchangeRate: number;
}

const Calculator: React.FC = () => {
  const banks: Bank[] = [
    { name: 'Bank 1', currency: 'USD', exchangeRate: 1 },
    { name: 'Bank 2', currency: 'ARS', exchangeRate: 95 },
  ];

  const [fromBank, setFromBank] = useState<Bank>(banks[0]);
  const [toBank, setToBank] = useState<Bank>(banks[0]);
  const [amount, setAmount] = useState<number>(0);
  const [exchangedAmount, setExchangedAmount] = useState<number>(0);

  const calculateExchange = useCallback((amount: number) => {
    if (fromBank && toBank) {
      const exchangedAmount = amount * fromBank.exchangeRate / toBank.exchangeRate;
      setExchangedAmount(exchangedAmount);
    }
  }, [fromBank, toBank]);

  useEffect(() => {
    calculateExchange(amount);
  }, [fromBank, toBank, amount, calculateExchange]);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setAmount(value);
    calculateExchange(value);
  };

  const handleFromBankChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedBank = banks.find(bank => bank.name === e.target.value);
    setFromBank(selectedBank ?? banks[0]);
  };

  const handleToBankChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedBank = banks.find(bank => bank.name === e.target.value);
    setToBank(selectedBank ?? banks[0]);
  };



  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4 flex items-center">
          <div className="flex-grow mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
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

          <div className="flex-grow ml-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fromBank">
              Desde Banco
            </label>
            <select
              id="fromBank"
              value={fromBank.name}
              onChange={handleFromBankChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {banks.map((bank) => (
                <option key={bank.name} value={bank.name}>
                  {bank.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <div className="flex-grow mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="exchangedAmount">
              Recibes
            </label>
            <input
              id="exchangedAmount"
              type="text"
              value={exchangedAmount}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex-grow ml-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toBank">
              A Banco
            </label>
            <select
              id="toBank"
              value={toBank.name}
              onChange={handleToBankChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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