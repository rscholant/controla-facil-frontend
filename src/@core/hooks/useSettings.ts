import { SettingsContext, SettingsContextValue } from '@core/context';
import { useContext } from 'react';

export const useSettings = (): SettingsContextValue =>
  useContext(SettingsContext);
