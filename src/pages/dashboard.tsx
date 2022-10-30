import { VerticalLayout } from '@components/Layout';
import { menuConfig } from '@configs/menuConfig';
import { useSettings } from '@core/hooks';
import { Theme, Typography, useMediaQuery } from '@mui/material';
import { VerticalAppBarContent } from '@ui/appBar';
import { signOut } from 'next-auth/react';
import React from 'react';

const Dashboard = () => {
  const { settings, saveSettings } = useSettings();

  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  return (
    <VerticalLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      verticalNavItems={menuConfig()}
      verticalAppBarContent={(
        props // AppBar Content
      ) => (
        <VerticalAppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      Teste
    </VerticalLayout>
  );
};

Dashboard.auth = true;

export default Dashboard;
