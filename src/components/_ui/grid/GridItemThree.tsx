import React, { ReactNode } from 'react';
import { Grid, Stack, GridProps } from '@mui/material';

interface GridItemTreeProps extends GridProps {
  children: ReactNode;
}
export function GridItemThree({ children, ...rest }: GridItemTreeProps) {
  return (
    <Grid item xs={12} sm={12} md={12} lg={4} {...rest}>
      <Stack columnGap={2} sx={{ width: '100%' }}>
        {children}
      </Stack>
    </Grid>
  );
}
