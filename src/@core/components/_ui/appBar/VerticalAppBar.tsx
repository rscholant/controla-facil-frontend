import React, { ReactNode } from 'react';
import { Settings } from '@core/context';
import { useTheme } from '@mui/material';
import { AppBar } from '@core/components/_ui/appBar';
import { TollBar } from '@core/components/_ui/tollBar';
export type VerticalAppBarProps = {
  hidden: boolean;
  settings: Settings;
  toggleNavVisibility: () => void;
  saveSettings: (values: Settings) => void;
  verticalAppBarContent?: (props?: any) => ReactNode;
};

export const VerticalAppBar: React.FC<VerticalAppBarProps> = props => {
  const { settings, verticalAppBarContent: userVerticalAppBarContent } = props;
  const theme = useTheme();
  const { contentWidth } = settings;
  return (
    <AppBar
      elevation={0}
      color="default"
      className="layout-navbar"
      position="static"
    >
      <TollBar
        className="navbar-content-container"
        sx={{
          ...(contentWidth === 'boxed' && {
            '@media (min-width:1440px)': {
              maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)`
            }
          })
        }}
      >
        {(userVerticalAppBarContent && userVerticalAppBarContent(props)) ||
          null}
      </TollBar>
    </AppBar>
  );
};
