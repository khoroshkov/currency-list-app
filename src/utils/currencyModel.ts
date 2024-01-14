import { CurrencyType } from 'hooks/useGetCurrencies';

export const currencyModel = (currency: CurrencyType | undefined) => {
  return {
    exchangeRate: currency?.exchangeRate || null,
    flags: currency?.flags || null,
    currencyCode: currency?.currency || null,
    currencyName: currency?.nameI18N || null,
    precision: currency?.precision || null,
    banknoteRate: currency?.banknoteRate || null
  };
};
