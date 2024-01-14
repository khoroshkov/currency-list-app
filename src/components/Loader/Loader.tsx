import React from 'react';
import { arrayRange } from 'utils/arrayRange';

import { Stack, Skeleton, useMediaQuery, useTheme } from '@mui/material';

export const Loader = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Stack spacing={3}>
      {arrayRange(1, 10).map((i: number) => (
        <React.Fragment key={i}>
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
        </React.Fragment>
      ))}
    </Stack>
  );
};
