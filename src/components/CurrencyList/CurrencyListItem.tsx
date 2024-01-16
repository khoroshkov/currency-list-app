import React from 'react';
import { useTranslation } from 'react-i18next';
import { RateType } from 'hooks/useGetCurrencies';

import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CurrencyType } from './CurrencyList';
import { THEME_MODE, colors } from 'theme';

const Item = styled(Paper)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  },
  justifyContent: 'space-between',
  minHeight: '80px',
  backgroundColor:
    theme.palette.mode === THEME_MODE.DARK ? colors.grayTransparent : colors.whiteTransparent,
  ...theme.typography.body2,
  padding: theme.spacing(1, 2),
  color: theme.palette.mode === THEME_MODE.DARK ? colors.white : colors.gray15percent,
  backgroundImage: 'none',
  backdropFilter: 'blur(7px)',
  border: theme.palette.mode === THEME_MODE.DARK ? `1px solid #595959` : '1px solid #404040'
}));

const ImageContainer = styled(Box)`
  width: 30px;
  height: 20px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

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

  const { currencyCode, currencyName, exchangeRate, country, countryCode } = currency;

  return (
    <Item>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {Boolean(countryCode) ? (
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <ImageContainer>
              <img
                src={`/img/flags/${countryCode}.png`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = '/img/flags/placeholder.png';
                }}
                alt={`flag of ${country}`}
              />
            </ImageContainer>
            <Typography sx={{ fontWeight: 'light', fontSize: '18px' }}>{country}</Typography>
          </Box>
        ) : (
          <Typography sx={{ fontWeight: 'light', fontSize: '14px' }}>
            {t('result.not_available')}
          </Typography>
        )}

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
