import {
  ListSubheaderProps,
  ListSubheader as MuiListSubheader,
  useTheme
} from '@mui/material';
import React from 'react';

export const ListSubheader: React.FC<ListSubheaderProps> = ({
  children,
  sx,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <MuiListSubheader
      component="li"
      sx={{
        lineHeight: 1,
        display: 'flex',
        position: 'relative',
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(2),
        backgroundColor: 'transparent',
        transition: 'padding-left .25s ease-in-out',
        ...sx
      }}
      {...rest}
    ></MuiListSubheader>
  );
};
