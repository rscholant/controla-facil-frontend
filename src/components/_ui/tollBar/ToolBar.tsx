import { ToolbarProps, Toolbar as MUIToolbar, useTheme } from '@mui/material';
import React from 'react';

export const TollBar: React.FC<ToolbarProps> = ({ children, sx, ...rest }) => {
  const theme = useTheme();
  return (
    <MUIToolbar
      sx={{
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: `${theme.spacing(0)} !important`,
        minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
        transition:
          'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out',
        ...sx
      }}
      {...rest}
    >
      {children}
    </MUIToolbar>
  );
};
