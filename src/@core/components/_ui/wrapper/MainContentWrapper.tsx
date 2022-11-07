import { Box, BoxProps } from '@mui/material';
import React from 'react';

export const MainContentWrapper: React.FC<BoxProps> = ({
  children,
  sx,
  ...rest
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        minWidth: 0,
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        ...sx
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
