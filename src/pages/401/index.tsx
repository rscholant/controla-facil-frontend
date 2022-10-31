import React from 'react';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import LoadingButton from '@ui/button/LoadingButton';
import Image from 'next/image';

export default function Page401() {
  return (
    <Grid container height="100vh" width="100%" bgcolor="primary.500">
      <Grid item xs={12} md={12} component={Paper} elevation={6} square>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            width="28rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Stack
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              <Image
                src="/images/pages/401/401.svg"
                width="500px"
                height="500px"
              />

              <Typography
                fontWeight="500"
                fontStyle="normal"
                fontSize="2rem"
                lineHeight="1.3rem"
                textAlign="center"
              >
                Você não esta autorizado! 🔐
              </Typography>
              <Typography
                fontWeight="400"
                fontStyle="italic"
                fontSize="0.8rem"
                lineHeight="1.3rem"
                textAlign="center"
              >
                Você não tem acesso a esta pagina. Volte para o inicio!
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
