import React, { ReactNode } from 'react';
import { Grid, GridProps, Stack } from '@mui/material';

interface GridItemXs2Props extends GridProps {
  children: ReactNode;
}
export function GridItemXs2({ children, ...rest }: GridItemXs2Props) {
  return (
    <Grid item xs={12} sm={12} md={12} lg={2} {...rest}>
      <Stack columnGap={2} sx={{ width: '100%' }}>
        {children}
      </Stack>
    </Grid>
  );
}
