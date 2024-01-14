import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppThemeProvider } from 'theme/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { ErrorBoundary } from 'components/ErrorBoundary';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <div className="App">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </AppThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
