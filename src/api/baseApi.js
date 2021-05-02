import axios from "axios";

export const getPrice = async (coin) => {
  const res = await axios.get(
    `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD`
  );

  return res.data;
};
