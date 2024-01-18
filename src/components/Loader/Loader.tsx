import React from 'react';
import { arrayRange } from 'utils/arrayRange';

import { Box, Stack, Skeleton, useMediaQuery, useTheme } from '@mui/material';

export const Loader = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Stack spacing={3} data-testid="loader-section">
      {arrayRange(1, 10).map((i: number) => (
        <Box
          key={i}
          data-testid={`currencies-loading-row-${i}`}
          sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Skeleton
            animation="wave"
            variant="rounded"
            width={isDesktop ? 640 : '33%'}
            height={20}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={isDesktop ? 860 : '100%'}
            height={50}
          />
        </Box>
      ))}
    </Stack>
  );
};
