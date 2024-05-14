"use client"

import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const banks = [
    { name: 'Bank 1', currency: 'USD', exchangeRate: 1 },
    { name: 'Bank 2', currency: 'ARS', exchangeRate: 95 },
    // Add more banks as needed
  ];

  const [banksState, setBanksState] = useState({ fromBank: banks[0], toBank: banks[0] });
  const [amount, setAmount] = useState(0);
  const [exchangedAmount, setExchangedAmount] = useState(0);
  
  const calculateExchange = (amount: number) => {
    const { fromBank, toBank } = banksState;
    if (fromBank && toBank) {
      const exchangedAmount = amount * fromBank.exchangeRate / toBank.exchangeRate;
      setExchangedAmount(exchangedAmount);
    }
  };
  
  useEffect(() => {
    calculateExchange(amount);
  }, [banksState]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4 flex items-center">
          <div className="flex-grow mr-2">

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Envias {banksState.fromBank.currency}
            </label>
            <input id="amount" type="text" value={amount} onChange={(e) => {
              setAmount(Number(e.target.value));
              calculateExchange(Number(e.target.value));
            }} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            
          </div>
  
          <div className="flex-grow ml-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fromBank">
            </label>
            <select 
              id="fromBank" 
              value={banksState.fromBank.name} 
              onChange={(e) => setBanksState(prevState => ({ ...prevState, fromBank: banks.find(bank => bank.name === e.target.value) ?? banks[0] }))} 
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
            <input id="exchangedAmount" type="text" value={exchangedAmount} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
  
          <div className="flex-grow ml-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toBank">
            </label>
            <select 
              id="toBank" 
              value={banksState.toBank.name} 
              onChange={(e) => setBanksState(prevState => ({ ...prevState, toBank: banks.find(bank => bank.name === e.target.value) ?? banks[0] }))} 
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