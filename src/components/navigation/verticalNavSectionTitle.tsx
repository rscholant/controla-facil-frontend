import React from 'react';
import { ListSubheader } from '@components/_ui/list';
import { Divider, useTheme } from '@mui/material';
import { HeaderText } from '@ui/text';
import { NavSectionTitle } from '@core/layouts';
export type VerticalNavSectionTitleProps = {
  item: NavSectionTitle;
};

export const VerticalNavSectionTitle: React.FC<VerticalNavSectionTitleProps> =
  ({ item }) => {
    const theme = useTheme();
    return (
      <ListSubheader
        sx={{
          px: 0,
          py: 1.75,
          color: theme.palette.text.disabled,
          '& .MuiDivider-root:before, & .MuiDivider-root:after, & hr': {
            borderColor: `rgba(${theme.palette.customColors.main}, 0.12)`
          }
        }}
      >
        <Divider
          textAlign="left"
          sx={{
            m: 0,
            width: '100%',
            lineHeight: 'normal',
            textTransform: 'uppercase',
            '&:before, &:after': { top: 7, transform: 'none' },
            '& .MuiDivider-wrapper': {
              px: 2.5,
              fontSize: '0.75rem',
              letterSpacing: '0.21px'
            }
          }}
        >
          <HeaderText noWrap>{item.sectionTitle}</HeaderText>
        </Divider>
      </ListSubheader>
    );
  };
