import React from 'react';

import { RateType } from 'hooks/useGetCurrencies';
import { Container, Divider, Stack } from '@mui/material';
import { CurrencyListItem } from './CurrencyListItem';
import { ResultHeader } from './ResultHeader';

export type CurrencyType = {
  exchangeRate: RateType | null;
  flags: Array<string> | null;
  currencyCode: string | null;
  currencyName: string | null;
  precision: number | null;
  banknoteRate: RateType | null;
  country: string | null;
  countryCode: string | null;
};

type CurrencyListProps = {
  currencies: Array<CurrencyType> | [];
  baseCurrency?: string;
};

export const CurrencyList = ({ baseCurrency, currencies }: CurrencyListProps) => {
  return (
    <Container data-testid="currency-list-section">
      <ResultHeader total={currencies.length} />
      <Divider />
      <Stack spacing={2} mt={2}>
        {currencies.map((currency: CurrencyType) => (
          <CurrencyListItem
            key={currency.currencyCode}
            baseCurrency={baseCurrency}
            currency={currency}
          />
        ))}
      </Stack>
    </Container>
  );
};
