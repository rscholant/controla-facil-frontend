import React, { ReactNode } from 'react';
import { Grid, GridProps, Stack } from '@mui/material';

interface GridItemXs6Props extends GridProps {
  children: ReactNode;
}
export function GridItemXs6({ children, ...rest }: GridItemXs6Props) {
  return (
    <Grid item xs={12} sm={12} md={12} lg={6} {...rest}>
      <Stack columnGap={2} sx={{ width: '100%' }}>
        {children}
      </Stack>
    </Grid>
  );
}
