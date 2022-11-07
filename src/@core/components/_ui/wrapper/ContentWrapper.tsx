import { useTheme, Box, BoxProps } from '@mui/material';
import React from 'react';

export const ContentWrapper: React.FC<BoxProps> = ({
  children,
  sx,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100%',
        padding: theme.spacing(6),
        transition: 'padding .25s ease-in-out',
        [theme.breakpoints.down('sm')]: {
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4)
        },
        ...sx
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
