import React, { ReactNode } from 'react';
import { Grid, Stack, GridProps } from '@mui/material';

interface GridItemOneProps extends GridProps {
  children: ReactNode;
}
export function GridItemOne({ children, ...rest }: GridItemOneProps) {
  return (
    <Grid item width="100%" {...rest}>
      <Stack
        spacing={2}
        columnGap={2}
        sx={{
          width: '100%',
          pt: '1rem',
          pb: '1rem',
          pl: { xs: '0.1rem', sm: '0.1rem', md: '1rem' },
          pr: { xs: '0.1rem', sm: '0.1rem', md: '1rem' }
        }}
      >
        {children}
      </Stack>
    </Grid>
  );
}
