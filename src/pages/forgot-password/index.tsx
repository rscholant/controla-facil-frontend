import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { GridItemOne } from '@core/components/_ui/grid';
import { ForgotForm } from '@core/components/forgot-password';

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
