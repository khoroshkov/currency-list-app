import { CurrencyType } from 'hooks/useGetCurrencies';
import { currencyModel } from '../currencyModel';
import { CurrencyType as MappedCurrencyType } from 'components/CurrencyList';

const currencyTestData: Array<CurrencyType> = [
  {
    currency: 'FJD',
    precision: 2,
    nameI18N: 'Fiji Dollar',
    exchangeRate: {
      buy: 2.0,
      middle: 2.25,
      sell: 2.5,
      indicator: 0,
      lastModified: '2012-02-14T23:00:00Z'
    },
    banknoteRate: {
      buy: 2.2,
      middle: 2.4,
      sell: 2.6,
      indicator: 0,
      lastModified: '2018-11-06T23:00:00Z'
    },
    flags: ['provided']
  },
  {
    currency: 'STD',
    precision: 2
  }
];

const currencyMappedData: Array<MappedCurrencyType> = [
  {
    exchangeRate: {
      buy: 2.0,
      middle: 2.25,
      sell: 2.5,
      indicator: 0,
      lastModified: '2012-02-14T23:00:00Z'
    },
    flags: ['provided'],
    currencyCode: 'FJD',
    currencyName: 'Fiji Dollar',
    precision: 2,
    banknoteRate: {
      buy: 2.2,
      middle: 2.4,
      sell: 2.6,
      indicator: 0,
      lastModified: '2018-11-06T23:00:00Z'
    },
    countryCode: 'fj',
    country: 'Fiji'
  },
  {
    exchangeRate: null,
    flags: null,
    currencyCode: 'STD',
    currencyName: null,
    precision: 2,
    banknoteRate: null,
    countryCode: 'st',
    country: 'Sao Tome and Principe'
  }
];

describe('currencyModel', () => {
  const mappedCurrencies = currencyTestData.map((currency) => currencyModel(currency));

  it('Each element of mapped currencies array should match currencyMappedData', () => {
    mappedCurrencies.forEach((currency: MappedCurrencyType, index: number) => {
      expect(currency).toMatchObject(currencyMappedData[index]);
    });
  });
});
