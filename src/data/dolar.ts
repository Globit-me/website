"use server";

async function getDolar() {
  const res = await fetch("https://dolarapi.com/v1/dolares/blue");

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  return res.json();
}

export const getExchangeRates = async () => {
  const dolarData = await getDolar();

  return {
    buy: dolarData.compra, 
    sell: dolarData.venta,
  };
};
