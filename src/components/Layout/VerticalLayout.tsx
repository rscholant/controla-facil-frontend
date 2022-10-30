import React, { useState } from 'react';
import { Navigation } from '@components/navigation';
import themeConfig from '@configs/themeConfig';
import { LayoutProps } from '@core/layouts';
import {
  ContentWrapper,
  MainContentWrapper,
  VerticalLayoutWrapper
} from '@ui/wrapper';
import { VerticalAppBar } from '@ui/appBar';
import { ScrollToTop } from '@ui/scroll-to-top';
import { Fab } from '@mui/material';
import { ArrowUp } from 'mdi-material-ui';

export const VerticalLayout: React.FC<LayoutProps> = props => {
  const { settings, children, scrollToTop } = props;
  const { contentWidth } = settings;
  const [navVisible, setNavVisible] = useState<boolean>(false);
  const toggleNavVisibility = () => setNavVisible(!navVisible);

  const navWidth = themeConfig.navigationSize;
  return (
    <>
      <VerticalLayoutWrapper className="layout-wrapper">
        <Navigation
          navWidth={navWidth}
          navVisible={navVisible}
          setNavVisible={setNavVisible}
          toggleNavVisibility={toggleNavVisibility}
          {...props}
        />
        <MainContentWrapper>
          <VerticalAppBar
            toggleNavVisibility={toggleNavVisibility}
            {...props}
          />
          <ContentWrapper
            className="layout-page-content"
            sx={{
              ...(contentWidth === 'boxed' && {
                mx: 'auto',
                '@media (min-width:1440px)': { maxWidth: 1440 },
                '@media (min-width:1200px)': { maxWidth: '100%' }
              })
            }}
          >
            {children}
          </ContentWrapper>
        </MainContentWrapper>
      </VerticalLayoutWrapper>
      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className="mui-fixed">
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}
    </>
  );
};
