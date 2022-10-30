import { Box, BoxProps, useTheme } from '@mui/material';
import React from 'react';

export const MenuHeaderWrapper: React.FC<BoxProps> = ({
  children,
  sx,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Box
      {...rest}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: theme.spacing(4.5),
        transition: 'padding .25s ease-in-out',
        minHeight: theme.mixins.toolbar.minHeight,
        ...sx
      }}
    >
      {children}
    </Box>
  );
};
