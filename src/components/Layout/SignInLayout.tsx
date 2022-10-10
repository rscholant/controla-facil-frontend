import { Box, Grid, Paper } from '@mui/material';
import { borderRadius } from '@mui/system';
import React from 'react';
export type SignInLayoutProps = {
  children: any;
};
export const SignInLayout: React.FC<SignInLayoutProps> = ({ children }) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      component={Paper}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      elevation={0}
    >
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          width: { xs: '100%', sm: '100%', md: '28rem' },
          p: '1rem',
          borderRadius: '12px'
        }}
        elevation={12}
      >
        {children}
      </Paper>
    </Grid>
  );
};
