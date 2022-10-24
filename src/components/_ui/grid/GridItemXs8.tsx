import React, { ReactNode } from 'react';
import { Grid, GridProps, Stack } from '@mui/material';

interface GridItemXs8Props extends GridProps {
  children: ReactNode;
}
export function GridItemXs8({ children, ...rest }: GridItemXs8Props) {
  return (
    <Grid item xs={12} sm={12} md={12} lg={8} {...rest}>
      <Stack columnGap={2} sx={{ width: '100%' }}>
        {children}
      </Stack>
    </Grid>
  );
}
