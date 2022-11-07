import { useTheme } from '@mui/material';
import React from 'react';

export type BadgeContentSpanProps = React.DetailedHTMLProps<
  React.HtmlHTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export const BadgeContentSpan: React.FC<BadgeContentSpanProps> = ({
  children,
  style,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: theme.palette.success.main,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        ...style
      }}
      {...rest}
    >
      {children}
    </span>
  );
};
