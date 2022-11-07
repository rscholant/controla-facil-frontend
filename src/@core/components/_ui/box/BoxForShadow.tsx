import { Box, BoxProps } from '@mui/material';
import React from 'react';

export const BoxForShadow: React.FC<BoxProps> = ({ children, sx, ...rest }) => {
  return (
    <Box
      {...rest}
      sx={{
        top: 50,
        left: -8,
        zIndex: 2,
        height: 75,
        display: 'none',
        position: 'absolute',
        pointerEvents: 'none',
        width: 'calc(100% + 15px)',
        '&.d-block': {
          display: 'block'
        },
        ...sx
      }}
    >
      {children}
    </Box>
  );
};
