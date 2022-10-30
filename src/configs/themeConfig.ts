// ** MUI Imports
import { PaletteMode } from '@mui/material';

// ** Types
import { ContentWidth } from 'src/@core/layouts/types';

type ThemeConfig = {
  mode: PaletteMode;
  templateName: string;
  routingLoader: boolean;
  disableRipple: boolean;
  navigationSize: number;
  menuTextTruncate: boolean;
  contentWidth: ContentWidth;
  responsiveFontSizes: boolean;
};

const themeConfig: ThemeConfig = {
  templateName: 'Controla fácil',
  mode: 'light',
  contentWidth: 'boxed',

  routingLoader: true,

  menuTextTruncate: true,
  navigationSize: 260,

  responsiveFontSizes: true,
  disableRipple: false
};

export default themeConfig;
