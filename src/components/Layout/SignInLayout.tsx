import { Grid, Paper } from '@mui/material';
import React from 'react';
export type SignInLayoutProps = {
  children: any;
};
export const SignInLayout: React.FC<SignInLayoutProps> = ({ children }) => {
  return (
    <Grid
      item
      xs={12}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ bgcolor: 'primary.100', height: '100vh' }}
    >
      <Grid
        container
        component={Paper}
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          width: { xs: '90%', sm: '90%', md: '70%', lg: '60%', xl: '40%' },
          p: '1rem',
          borderRadius: '12px'
        }}
        elevation={12}
      >
        {children}
      </Grid>
    </Grid>
  );
};
