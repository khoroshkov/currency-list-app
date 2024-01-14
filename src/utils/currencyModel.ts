import { CurrencyType } from 'hooks/useGetCurrencies';
import { currencyCountryMapper } from './currencyCountryMapper';

export const currencyModel = (currency: CurrencyType | undefined) => {
  const countryInfo = Boolean(currency?.currency)
    ? currencyCountryMapper(currency?.currency as string)
    : null;

  return {
    exchangeRate: currency?.exchangeRate || null,
    flags: currency?.flags || null,
    currencyCode: currency?.currency || null,
    currencyName: currency?.nameI18N || null,
    precision: currency?.precision || null,
    banknoteRate: currency?.banknoteRate || null,
    countryCode: countryInfo?.CountryCode?.toLowerCase() || null,
    country: countryInfo?.Country || null
  };
};
