import React from 'react';
import styled from 'styled-components';
import { useGetCurrencies } from 'hooks/useGetCurrencies';
import { Container } from '@mui/material';
import { Header } from 'components/Header';
import { Loader } from 'components/Loader';
import { CurrencyList } from 'components/CurrencyList';

const StyledContainer = styled(Container)`
  margin-top: 140px;
`;

export const MainPage = () => {
  const { data, isLoading } = useGetCurrencies();

  return (
    <div>
      <Header />
      <StyledContainer>
        {isLoading && <Loader />}
        {!isLoading && (
          <CurrencyList baseCurrency={data.baseCurrency} currencies={data.currenciesList} />
        )}
      </StyledContainer>
    </div>
  );
};
