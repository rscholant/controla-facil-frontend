/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, List, useTheme } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import React, { ReactNode, useRef, useState } from 'react';
import { VerticalNavHeader, VerticalNavItems } from '@components/navigation';
import { BoxForShadow } from '@ui/box';
import { hexToRGBA } from '@shared/services/utils';
import { Settings } from '@core/context';
import { VerticalNavItemsType } from '@core/layouts';
import { Drawer } from '@ui/drawer';

export type NavigationProps = {
  hidden: boolean;
  navWidth: number;
  settings: Settings;
  children: ReactNode;
  navVisible: boolean;
  toggleNavVisibility: () => void;
  setNavVisible: (value: boolean) => void;
  VerticalNavItems?: VerticalNavItemsType;
  saveSettings: (values: Settings) => void;
  verticalNavMenuContent?: (props?: any) => ReactNode;
  afterVerticalNavMenuContent?: (props?: any) => ReactNode;
  beforeVerticalNavMenuContent?: (props?: any) => ReactNode;
};

export const Navigation: React.FC<NavigationProps> = props => {
  const {
    hidden,
    afterVerticalNavMenuContent,
    beforeVerticalNavMenuContent,
    verticalNavMenuContent: userVerticalNavMenuContent
  } = props;
  const [groupActive, setGroupActive] = useState<string[]>([]);
  const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([]);
  const shadowRef = useRef(null);
  const theme = useTheme();
  const handleInfiniteScroll = (ref: any) => {
    if (ref) {
      ref._getBoundingClientRect = ref.getBoundingClientRect;

      ref.getBoundingClientRect = () => {
        const original = ref._getBoundingClientRect();

        return { ...original, height: Math.floor(original.height) };
      };
    }
  };
  const scrollMenu = (container: any) => {
    container = hidden ? container.target : container;
    if (shadowRef && container.scrollTop > 0) {
      if (!(shadowRef as any)?.current?.classList.contains('d-block')) {
        (shadowRef as any)?.current?.classList.add('d-block');
      }
    } else {
      (shadowRef as any)?.current?.classList.remove('d-block');
    }
  };

  const ScrollWrapper = hidden ? Box : PerfectScrollbar;

  return (
    <Drawer {...props}>
      <VerticalNavHeader {...props} />
      <BoxForShadow
        ref={shadowRef}
        sx={{
          background: `linear-gradient(${
            theme.palette.background.default
          } 40%,${hexToRGBA(
            theme.palette.background.default,
            0.1
          )} 95%,${hexToRGBA(theme.palette.background.default, 0.05)})`
        }}
      />
      <Box sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        {/* @ts-ignore */}
        <ScrollWrapper
          containerRef={(ref: any) => handleInfiniteScroll(ref)}
          {...(hidden
            ? {
                onScroll: (container: any) => scrollMenu(container),
                sx: { height: '100%', overflowY: 'auto', overflowX: 'hidden' }
              }
            : {
                options: { wheelPropagation: false },
                onScrollY: (container: any) => scrollMenu(container)
              })}
        >
          {beforeVerticalNavMenuContent
            ? beforeVerticalNavMenuContent(props)
            : null}
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            {userVerticalNavMenuContent ? (
              userVerticalNavMenuContent(props)
            ) : (
              <List
                className="nav-items"
                sx={{ transition: 'padding .25s ease', pr: 4.5 }}
              >
                <VerticalNavItems
                  groupActive={groupActive}
                  setGroupActive={setGroupActive}
                  currentActiveGroup={currentActiveGroup}
                  setCurrentActiveGroup={setCurrentActiveGroup}
                  {...props}
                />
              </List>
            )}
          </Box>
        </ScrollWrapper>
      </Box>
      {afterVerticalNavMenuContent ? afterVerticalNavMenuContent(props) : null}
    </Drawer>
  );
};
