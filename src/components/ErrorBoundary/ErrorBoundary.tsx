import React, { Component, ErrorInfo, ReactNode } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Typography, Stack, Button } from '@mui/material';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

const SvgIconWrapper = styled.div`
  svg {
    width: 8rem;
    height: 8rem;
  }
`;

interface Props extends WithTranslation {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { t } = this.props;

    if (this.state.hasError) {
      return (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: '100%', height: '100vh' }}>
          <SvgIconWrapper>
            <HeartBrokenIcon color="primary" />
          </SvgIconWrapper>
          <Typography variant="h2" color="textPrimary" mb={4} mt={4}>
            {t('errors.error_occurred')}
          </Typography>
          <Button variant="contained" onClick={() => window.location.reload()}>
            {t('errors.try_again')}
          </Button>
        </Stack>
      );
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
