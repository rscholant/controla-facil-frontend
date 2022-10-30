import React from 'react';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';

export type ShowPasswordIconProps = {
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
};

export const ShowPasswordIcon: React.FC<ShowPasswordIconProps> = ({
  showPassword,
  setShowPassword
}) => {
  return showPassword ? (
    <VisibilityOffOutlined
      sx={{ cursor: 'pointer', color: 'primary.100' }}
      onClick={() => setShowPassword(!showPassword)}
    />
  ) : (
    <VisibilityOutlined
      sx={{ cursor: 'pointer', color: 'primary.100' }}
      onClick={() => setShowPassword(!showPassword)}
    />
  );
};
