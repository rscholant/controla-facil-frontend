import React from 'react';
import { SessionProvider, signIn, useSession } from 'next-auth/react';
import { AppProps } from './App.props';
import { VerticalLayout } from '@components/Layout';
import { useSettings } from '@core/hooks';
import { Theme, useMediaQuery } from '@mui/material';
import { menuConfig } from '@configs/menuConfig';
import { VerticalAppBarContent } from '@ui/appBar';

function Auth({ children }: any) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;

  const { settings, saveSettings } = useSettings();

  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  React.useEffect(() => {
    if (status === 'loading') return;
    if (!isUser) signIn();
  }, [isUser, status]);

  if (isUser) {
    return (
      <VerticalLayout
        hidden={hidden}
        settings={settings}
        saveSettings={saveSettings}
        verticalNavItems={menuConfig()}
        verticalAppBarContent={props => (
          <VerticalAppBarContent
            hidden={hidden}
            settings={settings}
            saveSettings={saveSettings}
            toggleNavVisibility={props.toggleNavVisibility}
          />
        )}
      >
        {children}
      </VerticalLayout>
    );
  }
  return <div>Loading...</div>;
}

export function AuthContext({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={(pageProps as any).session} refetchInterval={0}>
      {(Component as any).auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}
