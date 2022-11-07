import React, { ReactNode } from 'react';
import { Grid, GridProps, Stack } from '@mui/material';

interface GridItemXs3Props extends GridProps {
  children: ReactNode;
}
export function GridItemXs3({ children, ...rest }: GridItemXs3Props) {
  return (
    <Grid item xs={12} sm={12} md={12} lg={3} {...rest}>
      <Stack columnGap={2} sx={{ width: '100%' }}>
        {children}
      </Stack>
    </Grid>
  );
}
