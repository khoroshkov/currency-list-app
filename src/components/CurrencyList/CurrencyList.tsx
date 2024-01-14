import React from 'react';
import { useTranslation } from 'react-i18next';

import { RateType } from 'hooks/useGetCurrencies';
import { Container, Divider, Typography, Stack } from '@mui/material';
import { CurrencyListItem } from './CurrencyListItem';

export type CurrencyType = {
  exchangeRate: RateType | null;
  flags: Array<string> | null;
  currencyCode: string | null;
  currencyName: string | null;
  precision: number | null;
  banknoteRate: RateType | null;
};

type CurrencyListProps = {
  currencies: Array<CurrencyType> | [];
  baseCurrency?: string;
};

export const CurrencyList = ({ baseCurrency, currencies }: CurrencyListProps) => {
  const { t } = useTranslation(['common']);
  return (
    <Container>
      <Typography variant="h4" align="center" aria-live="polite" mb={2}>
        {t('result.found_currencies', { total: currencies.length })}
      </Typography>
      <Divider />
      <Stack spacing={2} mt={2}>
        {currencies.map((currency) => (
          <CurrencyListItem baseCurrency={baseCurrency} currency={currency} />
        ))}
      </Stack>
    </Container>
  );
};
