import React from 'react';
import { ThemeOptions } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material';
import { createContext, ReactNode, useContext, useState } from 'react';
import { amber, grey, blueGrey } from '@mui/material/colors';
import { theme } from '@styles/index';

type ThemeContextData = {
  switchTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextData);

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: grey,
    divider: grey[900],
    background: {
      default: '#dadada',
      paper: '#666666'
    },
    text: {
      primary: '#003C3A',
      secondary: '#292929'
    }
  }
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: blueGrey,
    divider: amber[700],
    background: {
      default: '#dadada',
      paper: '#666666'
    },
    text: {
      primary: '#fff',
      secondary: grey[500]
    }
  }
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [changed, setChanged] = useState(false);
  const [themeOptions, setThemeOptions] = useState<any>(theme);

  const switchTheme = () => {
    changed
      ? setThemeOptions(lightThemeOptions)
      : setThemeOptions(darkThemeOptions);
    setChanged(!changed);
  };

  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <ThemeContext.Provider value={{ switchTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
