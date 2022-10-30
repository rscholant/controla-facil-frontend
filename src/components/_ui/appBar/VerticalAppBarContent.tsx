import { Settings } from '@core/context';
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Theme,
  useMediaQuery
} from '@mui/material';
import React from 'react';
import { Menu, Magnify } from 'mdi-material-ui';
import Image from 'next/image';
import { ModeToggler } from '@components/_ui/toggler';
export type VerticalAppBarContentProps = {
  hidden: boolean;
  settings: Settings;
  toggleNavVisibility: () => void;
  saveSettings: (values: Settings) => void;
};
export const VerticalAppBarContent: React.FC<VerticalAppBarContentProps> =
  props => {
    const { hidden, settings, saveSettings, toggleNavVisibility } = props;
    const hiddenSm = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down('sm')
    );

    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box
          className="actions-left"
          sx={{ mr: 2, display: 'flex', alignItems: 'center' }}
        >
          {hidden ? (
            <IconButton
              color="inherit"
              onClick={toggleNavVisibility}
              sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
            >
              <Menu />
            </IconButton>
          ) : null}
          <TextField
            size="small"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Magnify fontSize="small" />
                </InputAdornment>
              )
            }}
          />
        </Box>
        <Box
          className="actions-right"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <ModeToggler settings={settings} saveSettings={saveSettings} />
        </Box>
      </Box>
    );
  };
