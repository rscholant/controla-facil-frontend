import { Settings } from '@core/context';
import { styled } from '@mui/system';
import { MenuHeaderTitle } from '@ui/text';
import { MenuHeaderWrapper } from '@ui/wrapper';
import Link from 'next/link';
import React, { ReactNode } from 'react';
export type VerticalNavHeaderProps = {
  hidden: boolean;
  settings: Settings;
  toggleNavVisibility: () => void;
  verticalNavMenuBranding?: (props?: any) => ReactNode;
  saveSettings: (values: Settings) => void;
};

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
});

export const VerticalNavHeader: React.FC<VerticalNavHeaderProps> = props => {
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props;
  return (
    <MenuHeaderWrapper sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href="/" passHref>
          <StyledLink>
            <MenuHeaderTitle variant="h6" sx={{ ml: 3 }}>
              📑 Controla fácil
            </MenuHeaderTitle>
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  );
};
