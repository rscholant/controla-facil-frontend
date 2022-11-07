import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

export type TitleH1Props = TypographyProps;
export const TitleH1: React.FC<TitleH1Props> = ({ sx, children, ...rest }) => {
  return (
    <Typography
      sx={{
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: {
          xs: '2rem',
          sm: '2rem',
          md: '2.5rem',
          lg: '3rem',
          xl: '4rem'
        },
        color: 'primary.main',
        ...sx
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};
