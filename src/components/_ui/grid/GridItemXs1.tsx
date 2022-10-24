import React, { ReactNode } from 'react';
import { Grid, GridProps, Stack } from '@mui/material';

interface GridItemXs1Props extends GridProps {
  children: ReactNode;
}
export function GridItemXs1({ children, ...rest }: GridItemXs1Props) {
  return (
    <Grid item xs={12} sm={12} md={12} lg={1} {...rest}>
      <Stack columnGap={2} sx={{ width: '100%' }}>
        {children}
      </Stack>
    </Grid>
  );
}
