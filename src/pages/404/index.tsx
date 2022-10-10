import React from 'react';

import { Box, Grid, Paper, Stack, Typography } from '@mui/material';

import NewReleasesIcon from '@mui/icons-material/NewReleases';

import Link from 'next/link';
import LoadingButton from '@ui/button/LoadingButton';

//5 pontos de quebra  xs, sm, md, lg e xl.

export default function Page404() {
  return (
    <Grid container height="100vh" width="100%" bgcolor="primary.500">
      <Grid item xs={12} md={12} component={Paper} elevation={6} square>
        <Box
          alignItems="center"
          justifyContent="center"
          position="absolute"
          height="3rem"
          width="100%"
          sx={{
            backgroundColor: 'primary.100',
            display: 'flex'
          }}
        >
          <Typography
            fontWeight="bold"
            fontStyle="italic"
            fontSize="1.5rem"
            color="#fff"
          >
            Controla fácil
          </Typography>
        </Box>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="15rem"
        >
          <Box
            width="28rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <NewReleasesIcon
              color="error"
              sx={{ mb: '1.3rem', fontSize: '3.75rem' }}
            />
            <Stack
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              <Typography
                fontWeight="500"
                fontStyle="normal"
                fontSize="1.5rem"
                lineHeight="2rem"
                textAlign="center"
              >
                Ops, algo deu errado
              </Typography>

              <Typography
                fontWeight="400"
                fontStyle="normal"
                fontSize="1rem"
                lineHeight="1.3rem"
                textAlign="center"
              >
                Estamos passando por instabilidades no nosso sistema, mas nosso
                time está trabalhando nisto. Tente novamente mais tarde.
              </Typography>
            </Stack>

            <Box display="flex" alignItems="center" justifyContent="center">
              <Link href="/" passHref>
                <LoadingButton text="Voltar ao início" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
