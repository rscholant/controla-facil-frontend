import React from 'react';
import {
  LoadingButton as Button,
  LoadingButtonProps as ButtonProps
} from '@mui/lab';

export type LoadingButtonProps = ButtonProps & {
  text: string;
};
const LoadingButton: React.FC<LoadingButtonProps> = ({ text, ...rest }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        mt: '4rem',
        mb: 2,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '1rem',
        lineHeight: '1.35rem',
        borderRadius: '0.5rem',
        color: 'white',
        height: '3rem',
        bgcolor: 'primary.main'
      }}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default LoadingButton;
