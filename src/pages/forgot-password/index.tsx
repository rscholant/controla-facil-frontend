import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { GridItemOne } from '@ui/grid';
import { ForgotForm } from '@components/forgot-password';

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
        <ForgotForm />
      </GridItemOne>
    </div>
  );
};

export default Home;
