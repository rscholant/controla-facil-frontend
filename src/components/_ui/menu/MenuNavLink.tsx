import { ListItemButton, ListItemButtonProps, useTheme } from '@mui/material';
import React, { ElementType } from 'react';

export const MenuNavLink: React.FC<
  ListItemButtonProps & {
    component?: ElementType;
    target?: '_blank';
  }
> = ({ children, sx, ...rest }) => {
  const theme = useTheme();
  return (
    <ListItemButton
      sx={{
        width: '100%',
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        color: theme.palette.text.primary,
        padding: theme.spacing(2.25, 3.5),
        transition: 'opacity .25s ease-in-out',
        '&.active, &.active:hover': {
          boxShadow: theme.shadows[3],
          backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`
        },
        '&.active .MuiTypography-root, &.active .MuiSvgIcon-root': {
          color: `${theme.palette.common.white} !important`
        },
        ...sx
      }}
      {...rest}
    >
      {children}
    </ListItemButton>
  );
};
