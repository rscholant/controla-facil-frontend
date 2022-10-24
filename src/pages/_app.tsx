import React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache } from '@styles/createEmotionCache';
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { GlobalContext } from '@contexts/GlobalContext';
import { SessionProvider, signIn, useSession } from 'next-auth/react';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
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

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
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
