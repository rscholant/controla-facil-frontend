import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

export type TitleH3Props = TypographyProps;
export const TitleH3: React.FC<TitleH3Props> = ({ children, sx, ...rest }) => {
  return (
    <Typography
      sx={{
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '2rem',
        fontSize: '1rem',
        color: 'primary.100',
        ...sx
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};
