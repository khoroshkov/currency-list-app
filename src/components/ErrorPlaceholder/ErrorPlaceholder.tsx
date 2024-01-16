import React from 'react';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Stack } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { THEME_MODE, colors } from 'theme';

const Container = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:
    theme.palette.mode === THEME_MODE.DARK ? colors.grayTransparent : colors.whiteTransparent,
  padding: theme.spacing(2, 1),
  color: theme.palette.mode === THEME_MODE.DARK ? colors.white : colors.gray15percent,
  backdropFilter: 'blur(7px)',
  border: theme.palette.mode === THEME_MODE.DARK ? `1px solid #595959` : '1px solid #404040'
}));

const SvgIconWrapper = styled(Box)`
  svg {
    width: 6rem;
    height: 6rem;
  }
`;

export const ErrorPlaceholder = () => {
  const { t } = useTranslation(['common']);

  return (
    <Container>
      <SvgIconWrapper>
        <ErrorIcon color="primary" />
      </SvgIconWrapper>
      <Typography variant="h4" color="textPrimary" align="center" mt={4}>
        {t('errors.fetch_error')}
      </Typography>
    </Container>
  );
};
