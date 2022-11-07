import { Settings } from '@core/context';
import { IconButton, PaletteMode } from '@mui/material';
import React from 'react';
import { WeatherNight, WeatherSunny } from 'mdi-material-ui';

export type ModeTogglerProps = {
  settings: Settings;
  saveSettings: (values: Settings) => void;
};

export const ModeToggler: React.FC<ModeTogglerProps> = props => {
  const { settings, saveSettings } = props;
  const handleModeChange = (mode: PaletteMode) => {
    saveSettings({ ...settings, mode });
  };
  const handleModeToggle = () => {
    if (settings.mode === 'light') {
      handleModeChange('dark');
    } else {
      handleModeChange('light');
    }
  };
  return (
    <IconButton color="inherit" aria-haspopup="true" onClick={handleModeToggle}>
      {settings.mode === 'dark' ? <WeatherSunny /> : <WeatherNight />}
    </IconButton>
  );
};
