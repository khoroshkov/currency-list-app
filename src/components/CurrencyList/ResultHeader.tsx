import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { THEME_MODE, colors } from 'theme';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    width: '70%'
  },
  minHeight: '40px',
  backgroundColor:
    theme.palette.mode === THEME_MODE.DARK ? colors.grayTransparent : colors.whiteTransparent,
  ...theme.typography.body2,
  padding: theme.spacing(1, 2),
  margin: '0 auto 16px auto',
  color: theme.palette.mode === THEME_MODE.DARK ? colors.white : colors.gray15percent,
  backdropFilter: 'blur(4px)',
  border: theme.palette.mode === THEME_MODE.DARK ? `1px solid #595959` : '1px solid #ECECEC'
}));

type ResultHeaderProps = {
  total: number;
};

export const ResultHeader = ({ total }: ResultHeaderProps) => {
  const { t } = useTranslation(['common']);

  return (
    <>
      {total === 0 ? (
        <Container>
          <Typography variant="h5" aria-live="polite" align="center">
            {t('result.not_found_currencies')}
          </Typography>
        </Container>
      ) : (
        <Container>
          <Typography variant="h5" aria-live="polite" align="center">
            {t('result.found_currencies', { total })}
          </Typography>
        </Container>
      )}
    </>
  );
};
