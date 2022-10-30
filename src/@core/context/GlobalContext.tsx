import { SettingsConsumer, SettingsProvider } from '@core/context';
import { ThemeComponent } from '@core/theme';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function GlobalContext({ children }: Props) {
  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => {
          return (
            <ThemeComponent settings={settings}>{children}</ThemeComponent>
          );
        }}
      </SettingsConsumer>
    </SettingsProvider>
  );
}
