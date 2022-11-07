import React, { ReactNode } from 'react';
import { Grid, GridProps, Stack } from '@mui/material';

interface GridItemTwoProps extends GridProps {
  children: ReactNode;
}
export function GridItemTwo({ children, ...rest }: GridItemTwoProps) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item width="100%" xs={12} sm={12} md={6} {...rest}>
        <Stack spacing={2} sx={{ width: '100%' }}>
          {children}
        </Stack>
      </Grid>
    </Grid>
  );
}
