import { AppBarProps, AppBar as MUIAppBar, useTheme } from '@mui/material';
import React from 'react';

export const AppBar: React.FC<AppBarProps> = ({ children, sx, ...rest }) => {
  const theme = useTheme();
  return (
    <MUIAppBar
      sx={{
        transition: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0, 6),
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        minHeight: theme.mixins.toolbar.minHeight,
        [theme.breakpoints.down('sm')]: {
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4)
        },
        ...sx
      }}
      {...rest}
    >
      {children}
    </MUIAppBar>
  );
};
