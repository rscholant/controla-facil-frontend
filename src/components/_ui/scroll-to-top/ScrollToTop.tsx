import { useScrollTrigger, useTheme, Zoom } from '@mui/material';
import React, { ReactNode } from 'react';

export type ScrollToTopProps = {
  className?: string;
  children: ReactNode;
};

export const ScrollToTop: React.FC<ScrollToTopProps> = props => {
  const { children, className } = props;
  const theme = useTheme();
  const trigger = useScrollTrigger({
    threshold: 400,
    disableHysteresis: true
  });
  const handleClick = () => {
    const anchor = document.querySelector('body');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Zoom in={trigger}>
      <div
        className={className}
        onClick={handleClick}
        role="presentation"
        style={{
          zIndex: 11,
          position: 'fixed',
          right: theme.spacing(6),
          bottom: theme.spacing(10)
        }}
      >
        {children}
      </div>
    </Zoom>
  );
};
