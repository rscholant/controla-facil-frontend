import React from 'react';
import { Grid } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { LoginForm } from '@components/login';

const Home: NextPage = () => {
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
        <LoginForm />
      </Grid>
    </div>
  );
};

export default Home;
