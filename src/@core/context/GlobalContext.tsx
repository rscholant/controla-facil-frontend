import { SettingsConsumer, SettingsProvider } from '@core/context';
import { ThemeComponent } from '@core/theme';
import { CssBaseline } from '@mui/material';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AppProps } from './App.props';
import { AuthContext } from './AuthContext';

export function GlobalContext(props: AppProps) {
  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => {
          return (
            <ThemeComponent settings={settings}>
              <CssBaseline />
              <ToastContainer />
              <AuthContext {...props} />
            </ThemeComponent>
          );
        }}
      </SettingsConsumer>
    </SettingsProvider>
  );
}
