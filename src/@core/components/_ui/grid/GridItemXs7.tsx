import React, { ReactNode } from 'react';
import { Grid, GridProps, Stack } from '@mui/material';

interface GridItemXs7Props extends GridProps {
  children: ReactNode;
}
export function GridItemXs7({ children, ...rest }: GridItemXs7Props) {
  return (
    <Grid item xs={12} sm={12} md={12} lg={7} {...rest}>
      <Stack columnGap={2} sx={{ width: '100%' }}>
        {children}
      </Stack>
    </Grid>
  );
}
