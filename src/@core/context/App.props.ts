import { EmotionCache } from '@emotion/react';
import { NextPage } from 'next';
import { AppProps as NextAppProps } from 'next/app';

export interface AppProps extends NextAppProps {
  Component: NextPage;
  emotionCache?: EmotionCache;
}
