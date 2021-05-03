import axios from "axios";

export const getPrice = async (coin) => {
  const res = await axios.get(
    `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD`
  );

  return res.data;
};

export const setNotification = async (data) => {
  const res = await axios.post("http://localhost:7777/notify", data);
  return res;
};
