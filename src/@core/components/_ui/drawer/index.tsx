import { Settings } from '@core/context';
import { SwipeableDrawer, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';

export type DrawerProps = {
  hidden: boolean;
  navWidth: number;
  settings: Settings;
  navVisible: boolean;
  children: ReactNode;
  setNavVisible: (value: boolean) => void;
  saveSettings: (values: Settings) => void;
};

export const Drawer: React.FC<DrawerProps> = props => {
  const { hidden, children, navWidth, navVisible, setNavVisible } = props;
  const theme = useTheme();

  const MobileDrawerProps = {
    open: navVisible,
    onOpen: () => setNavVisible(true),
    onClose: () => setNavVisible(false),
    ModalProps: {
      keepMounted: true // Better open performance on mobile.
    }
  };

  const DesktopDrawerProps = {
    open: true,
    onOpen: () => null,
    onClose: () => null
  };

  return (
    <SwipeableDrawer
      className="layout-vertical-nav"
      variant={hidden ? 'temporary' : 'permanent'}
      {...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
      PaperProps={{ sx: { width: navWidth } }}
      sx={{
        overflowX: 'hidden',
        transition: 'width .25s ease-in-out',
        '& ul': {
          listStyle: 'none'
        },
        '& .MuiListItem-gutters': {
          paddingLeft: 4,
          paddingRight: 4
        },
        '& .MuiDrawer-paper': {
          left: 'unset',
          right: 'unset',
          overflowX: 'hidden',
          transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out',
          borderRight: 0,
          backgroundColor: theme.palette.background.default
        },
        width: navWidth
      }}
    >
      {children}
    </SwipeableDrawer>
  );
};
