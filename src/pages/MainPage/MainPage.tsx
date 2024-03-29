import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetCurrencies } from 'hooks/useGetCurrencies';
import { Container } from '@mui/material';
import { Header } from 'components/Header';
import { Loader } from 'components/Loader';
import { CurrencyList } from 'components/CurrencyList';
import { ErrorPlaceholder } from 'components/ErrorPlaceholder';

const StyledContainer = styled(Container)`
  margin-top: 114px;
`;

export const MainPage = () => {
  const { data, isLoading, error } = useGetCurrencies();
  const [searchParams] = useSearchParams();
  const search = searchParams.get('s');

  const currencies = useMemo(() => {
    return search
      ? data?.currenciesList.filter((currency) =>
          currency.currencyCode?.toLowerCase()?.startsWith(search)
        )
      : data?.currenciesList;
  }, [search, data?.currenciesList]);

  return (
    <Container>
      <Header />
      <StyledContainer>
        <>
          {isLoading && <Loader />}
          {!isLoading && data && (
            <CurrencyList baseCurrency={data?.baseCurrency} currencies={currencies} />
          )}
          {!isLoading && error && <ErrorPlaceholder />}
        </>
      </StyledContainer>
    </Container>
  );
};
