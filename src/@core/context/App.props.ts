import { EmotionCache } from '@emotion/react';
import { NextPage } from 'next';
import { AppProps as NextAppProps } from 'next/app';
import type { Session } from 'next-auth';

export interface AppProps extends NextAppProps<{ session: Session }> {
  Component: NextPage;
  emotionCache?: EmotionCache;
}
