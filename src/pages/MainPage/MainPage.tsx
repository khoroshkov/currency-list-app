import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetCurrencies } from 'hooks/useGetCurrencies';
import { Container } from '@mui/material';
import { Header } from 'components/Header';
import { Loader } from 'components/Loader';
import { CurrencyList } from 'components/CurrencyList';

const StyledContainer = styled(Container)`
  margin-top: 114px;
`;

export const MainPage = () => {
  const { data, isLoading } = useGetCurrencies();
  const [searchParams] = useSearchParams();
  const search = searchParams.get('s');

  const currencies = search
    ? data.currenciesList.filter((currency) =>
        currency.currencyCode?.toLowerCase()?.startsWith(search)
      )
    : data.currenciesList;

  return (
    <Container>
      <Header />
      <StyledContainer>
        {isLoading && <Loader />}
        {!isLoading && <CurrencyList baseCurrency={data.baseCurrency} currencies={currencies} />}
      </StyledContainer>
    </Container>
  );
};
