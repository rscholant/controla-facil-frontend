import React, { useRef } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { SideBackgroundCard } from '@components/login';
import { SignInLayout } from '@components/Layout';
import { TitleH1, TitleH2, TitleH3 } from '@ui/text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { TextField } from '@ui/form';
import LoadingButton from '@ui/button/LoadingButton';

const Home: NextPage = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <div>
      <Head>
        <title>Controla fácil</title>
        <meta
          name="description"
          content="Sistema para controle de estoque e ordem de serviço"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        container
        width="100%"
        sx={{ height: { xs: '80vh', sm: '80vh', md: '100vh' } }}
      >
        <SideBackgroundCard />
        <SignInLayout>
          <TitleH2
            sx={{
              color: 'primary.main',
              mb: '0.5rem'
            }}
          >
            Entrar!
          </TitleH2>
          <TitleH3
            sx={{
              textAlign: 'center',
              pl: { xs: '1rem', sm: '1rem', md: '0rem' },
              pr: { xs: '1rem', sm: '1rem', md: '0rem' },
              width: '100%'
            }}
          >
            Olá! Identifique-se para acessar o Controla fácil.
          </TitleH3>
          <Box sx={{ width: '100%', p: '1rem' }}>
            <Form ref={formRef} onSubmit={data => console.log(data)}>
              <Stack
                spacing={2}
                sx={{
                  alignItems: 'center'
                }}
              >
                <TextField name="email" label="E-mail" type="email" />
                <TextField name="password" label="Senha" type="password" />
                <LoadingButton text="Entrar" type="submit" />
              </Stack>
            </Form>
          </Box>
        </SignInLayout>
      </Grid>
    </div>
  );
};

export default Home;
