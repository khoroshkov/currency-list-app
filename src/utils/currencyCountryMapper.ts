import countries from './countries.json';

export const currencyCountryMapper = (currencyCode: string) => {
  const foundCountryInfo = countries.find(
    (country) => country.Code.toLowerCase() === currencyCode.toLowerCase()
  );

  return foundCountryInfo;
};
