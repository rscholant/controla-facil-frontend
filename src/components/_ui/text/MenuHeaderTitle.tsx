import { Typography, TypographyProps, useTheme } from '@mui/material';
import React from 'react';

export const MenuHeaderTitle: React.FC<TypographyProps> = ({
  children,
  sx,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        fontWeight: 600,
        lineHeight: 'normal',
        textTransform: 'uppercase',
        color: theme.palette.text.primary,
        transition: 'opacity .25s ease-in-out, margin .25s ease-in-out',
        ...sx
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};
