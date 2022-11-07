import React, { ReactNode } from 'react';
import { Grid, GridProps, Stack } from '@mui/material';

interface GridItemFourProps extends GridProps {
  children: ReactNode;
}
export function GridItemFour({ children, ...rest }: GridItemFourProps) {
  return (
    <Grid item width="100%" xs={12} sm={6} md={4} lg={3} {...rest}>
      <Stack spacing={2} columnGap={2} sx={{ width: '100%', p: '1rem' }}>
        {children}
      </Stack>
    </Grid>
  );
}
