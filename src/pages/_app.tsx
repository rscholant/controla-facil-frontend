import React from 'react';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache } from '@core/theme';
import { AppProps, GlobalContext } from '@core/context';
import Head from 'next/head';
import themeConfig from 'src/configs/themeConfig';
import { Router } from 'next/router';
import NProgress from 'nprogress';

const clientSideEmotionCache = createEmotionCache();

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

function MyApp(props: AppProps) {
  const { emotionCache = clientSideEmotionCache } = props;

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

      <GlobalContext {...props} />
    </CacheProvider>
  );
}

export default MyApp;
