import { Box } from '@mui/material';
import { BackgroundImageCard6 } from '@ui/card';
import { TitleH1, TitleH2 } from '@ui/text';
import React from 'react';

export const SideBackgroundCard: React.FC = () => {
  return (
    <BackgroundImageCard6 image="/bg-home.png">
      <Box
        display="flex"
        alignItems="end"
        justifyContent="center"
        flexDirection="column"
        sx={{
          width: '100%',
          mt: { xs: '20', sm: '20', md: '20rem', lg: '30rem', xl: '50rem' },
          pr: '1rem',
          backgroundColor: 'rgb(200,200,200,0.8)'
        }}
      >
        <TitleH1>Resolva tudo por aqui.</TitleH1>
        <TitleH2>O mais completo para você.</TitleH2>
      </Box>
    </BackgroundImageCard6>
  );
};
