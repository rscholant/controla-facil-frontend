import React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache } from '@styles/createEmotionCache';
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { GlobalContext } from '@core/context';
import { SessionProvider, signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import themeConfig from 'src/configs/themeConfig';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import { NextPage } from 'next';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  Component: NextPage;
  emotionCache?: EmotionCache;
}

function Auth({ children }: any) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  React.useEffect(() => {
    if (status === 'loading') return;
    if (!isUser) signIn();
  }, [isUser, status]);

  if (isUser) {
    return children;
  }
  return <div>Loading...</div>;
}

if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName}`}</title>
        <meta
          name="description"
          content={`${themeConfig.templateName} – A melhor plataforma para se controlar o seu negócio.`}
        />
        <meta
          name="keywords"
          content="Controla fácil, ordem de serviço, os, controle de estoque"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SessionProvider session={(pageProps as any).session} refetchInterval={0}>
        <GlobalContext>
          <CssBaseline />
          <ToastContainer />
          {(Component as any).auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </GlobalContext>
      </SessionProvider>
    </CacheProvider>
  );
}

export default MyApp;
