import React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache } from '@styles/createEmotionCache';
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { GlobalContext } from '@contexts/GlobalContext';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <GlobalContext>
        <CssBaseline />
        <ToastContainer />
        <Component {...pageProps} />
      </GlobalContext>
    </CacheProvider>
  );
}

export default MyApp;
