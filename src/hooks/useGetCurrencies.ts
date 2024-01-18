import { useQuery } from '@tanstack/react-query';
import { getAllCurrencies } from 'api/currencies';
import { currencyModel } from 'utils/currencyModel';

export type RateType = {
  buy: number;
  middle: number;
  sell: number;
  indicator: number;
  lastModified: string;
};

export type CurrencyType = {
  banknoteRate?: RateType;
  currency?: string;
  exchangeRate?: RateType;
  flags?: Array<string>;
  nameI18N?: string;
  precision?: number;
};

type ResponseData = {
  baseCurrency: string;
  comparisonDate: string;
  fx: Array<CurrencyType>;
  institute: number;
  lastUpdated: string;
};

export type SearchResponse = {
  data?: ResponseData;
};

export const useGetCurrencies = () => {
  const { isLoading, data, error } = useQuery<SearchResponse, unknown>({
    queryKey: ['getAllCurrencies'],
    queryFn: getAllCurrencies
  });

  const mappedData = {
    baseCurrency: data?.data?.baseCurrency,
    comparisonDate: data?.data?.comparisonDate,
    institute: data?.data?.institute,
    lastUpdated: data?.data?.lastUpdated,
    currenciesList:
      data?.data?.fx?.map((currency: CurrencyType | undefined) => currencyModel(currency)) ?? []
  };

  return { isLoading, data: mappedData, error };
};
