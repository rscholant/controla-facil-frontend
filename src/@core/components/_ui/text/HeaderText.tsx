import { Typography, TypographyProps, useTheme } from '@mui/material';
import React from 'react';

export const HeaderText: React.FC<TypographyProps> = ({
  children,
  sx,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        fontSize: '0.75rem',
        lineHeight: 'normal',
        letterSpacing: '0.21px',
        textTransform: 'uppercase',
        color: theme.palette.text.disabled,
        fontWeight: theme.typography.fontWeightMedium,
        ...sx
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};
