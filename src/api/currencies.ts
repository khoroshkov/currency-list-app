import axios from 'axios';

const currencyUrl: string | undefined = process.env.REACT_APP_GET_CURRENCIES_URL;

export const getAllCurrencies = async (): Promise<any> => {
  const headers = {
    'Content-Type': 'application/json'
  };

  return await axios.get(currencyUrl as string, { headers });
};
