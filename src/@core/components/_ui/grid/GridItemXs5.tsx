import React, { ReactNode } from 'react';
import { Grid, GridProps, Stack } from '@mui/material';

interface GridItemXs5Props extends GridProps {
  children: ReactNode;
}
export function GridItemXs5({ children, ...rest }: GridItemXs5Props) {
  return (
    <Grid item xs={12} sm={12} md={12} lg={5} {...rest}>
      <Stack columnGap={2} sx={{ width: '100%' }}>
        {children}
      </Stack>
    </Grid>
  );
}
