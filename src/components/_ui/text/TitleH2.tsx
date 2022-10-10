import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

export type TitleH2Props = TypographyProps;
export const TitleH2: React.FC<TitleH2Props> = ({ children, sx, ...rest }) => {
  return (
    <Typography
      sx={{
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '2rem',
        fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem', lg: '1.5rem' },
        color: 'primary.100',
        ...sx
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};
