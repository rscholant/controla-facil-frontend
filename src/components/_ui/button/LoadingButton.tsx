import React from 'react';
import {
  LoadingButton as Button,
  LoadingButtonProps as ButtonProps
} from '@mui/lab';

type LoadingButtonProps = ButtonProps & {
  text: string;
};
const LoadingButton: React.FC<LoadingButtonProps> = ({ text, ...rest }) => {
  return (
    <Button
      variant="contained"
      sx={{
        mt: '4rem',
        mb: 2,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '1rem',
        lineHeight: '1.35rem',
        width: '20.5rem',
        borderRadius: '1rem',
        color: 'white',
        height: '3rem',
        bgcolor: 'primary.100'
      }}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default LoadingButton;
