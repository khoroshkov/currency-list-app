import React from 'react';
import { useTranslation } from 'react-i18next';
import { RateType } from 'hooks/useGetCurrencies';

import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CurrencyType } from './CurrencyList';
import { THEME_MODE, colors } from 'theme';

const Item = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: '80px',
  backgroundColor: theme.palette.mode === THEME_MODE.DARK ? colors.gray35percent : colors.white,
  ...theme.typography.body2,
  padding: theme.spacing(1, 2),
  color: theme.palette.mode === THEME_MODE.DARK ? colors.white : colors.gray15percent
}));

type CurrencyListItemProps = {
  currency: CurrencyType;
  baseCurrency?: string;
};

type ExchangeSectionProps = {
  exchangeRate: RateType | null;
  baseCurrency?: string;
};

const ExchangeSection = ({ baseCurrency, exchangeRate }: ExchangeSectionProps) => {
  const { t } = useTranslation(['common']);
  if (!exchangeRate) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ display: 'inline' }}>
          <strong>{t('result.exchange_rate')}: </strong>
          <Typography
            sx={{ display: 'inline-block', fontWeight: 'light', fontSize: '14px', width: '165px' }}>
            {t('result.not_available')}
          </Typography>
        </Typography>
      </Box>
    );
  }

  const { buy, sell, middle } = exchangeRate;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Typography>
        <strong>{t('result.exchange_rate')}: </strong>{' '}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '165px' }}>
        <Typography sx={{ fontWeight: 'light', fontSize: '14px' }}>
          <strong>{t('result.buy')}:</strong> {buy} {baseCurrency}
        </Typography>
        <Typography sx={{ fontWeight: 'light', fontSize: '14px' }}>
          <strong>{t('result.sell')}:</strong> {sell} {baseCurrency}
        </Typography>
        <Typography sx={{ fontWeight: 'light', fontSize: '14px' }}>
          <strong>{t('result.middle')}:</strong> {middle} {baseCurrency}
        </Typography>
      </Box>
    </Box>
  );
};

export const CurrencyListItem = ({ baseCurrency, currency }: CurrencyListItemProps) => {
  const { t } = useTranslation(['common']);

  const { currencyCode, currencyName, exchangeRate } = currency;

  return (
    <Item>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontWeight: 'light', fontSize: '14px' }}>
          <strong>{t('result.currency_code')}:</strong> {currencyCode || t('result.not_available')}
        </Typography>

        <Typography sx={{ fontWeight: 'light', fontSize: '14px' }}>
          <strong>{t('result.currency_name')}:</strong> {currencyName || t('result.not_available')}
        </Typography>
      </Box>
      <ExchangeSection baseCurrency={baseCurrency} exchangeRate={exchangeRate} />
    </Item>
  );
};
