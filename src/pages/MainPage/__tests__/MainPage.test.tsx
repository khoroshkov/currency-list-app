import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CurrencyListAppContextProvider } from 'context';
import { useGetCurrencies } from 'hooks/useGetCurrencies';
import { MainPage } from 'pages/MainPage';
import { mockedData } from './mockedData';

jest.mock('hooks/useGetCurrencies');
const useGetCurrenciesMock = useGetCurrencies as jest.Mock;

const init = () => {
  return render(
    <CurrencyListAppContextProvider>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </CurrencyListAppContextProvider>
  );
};

describe('Render Main Page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should show loading state component and correct amount of loading rows', () => {
    useGetCurrenciesMock.mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true
    });

    init();
    expect(screen.getByTestId('loader-section')).toBeInTheDocument();
    expect(screen.getAllByTestId(/currencies-loading-row-\d+/)).toHaveLength(10);
  });

  it('Should show ErrorPlaceholder component if fetch currencies error occurs', () => {
    useGetCurrenciesMock.mockReturnValue({
      data: undefined,
      error: {},
      isLoading: false
    });

    init();
    expect(screen.getByTestId('error-placeholder-section')).toBeInTheDocument();
  });

  it('Should render CurrencyList component with correct amount of currency items', () => {
    useGetCurrenciesMock.mockReturnValue({
      data: mockedData,
      error: undefined,
      isLoading: false
    });

    init();
    expect(screen.getByTestId('currency-list-section')).toBeInTheDocument();
    expect(screen.getByTestId('currency-list-result-header')).toBeInTheDocument();
    expect(screen.getAllByTestId('currency-list-item')).toHaveLength(3);
  });

  it('Should render CurrencyList component with no-result header', () => {
    const noResultData = {
      ...mockedData,
      currenciesList: []
    };
    useGetCurrenciesMock.mockReturnValue({
      data: noResultData,
      error: undefined,
      isLoading: false
    });

    init();
    expect(screen.getByTestId('currency-list-section')).toBeInTheDocument();
    expect(screen.queryByTestId('currency-list-result-header')).not.toBeInTheDocument();
    expect(screen.getByTestId('currency-list-no-result-header')).toBeInTheDocument();
  });
});
