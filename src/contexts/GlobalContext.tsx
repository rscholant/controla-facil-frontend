import { ThemeContextProvider } from '@contexts/ThemeContextProvider';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function GlobalContext({ children }: Props) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
