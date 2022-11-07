import React, { ReactNode } from 'react';
import { Grid, Stack, GridProps } from '@mui/material';

interface GridItemOneProps extends GridProps {
  children: ReactNode;
}
export function GridItemOne({ children, ...rest }: GridItemOneProps) {
  return (
    <Grid item width="100%" {...rest}>
      <Stack
        spacing={2}
        columnGap={2}
        sx={{
          width: '100%'
        }}
      >
        {children}
      </Stack>
    </Grid>
  );
}
