import { Box, Grid } from '@mui/material';
import React from 'react';

export type BackgroundImageCard6Props = {
  image: string;
  children: any;
};

export const BackgroundImageCard6: React.FC<BackgroundImageCard6Props> = ({
  image,
  children
}) => {
  return (
    <Grid item xs={12} lg={6} sx={{ display: { xs: 'none', lg: 'flex' } }}>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};
