import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { LoginForm } from '@components/login';
import { GridItemOne } from '@ui/grid';

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

      <GridItemOne>
        <LoginForm />
      </GridItemOne>
    </div>
  );
};

export default Home;
