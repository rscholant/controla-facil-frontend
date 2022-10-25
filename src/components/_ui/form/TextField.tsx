import React, { ReactNode, useEffect, useState } from 'react';
import {
  TextFieldProps as FieldProps,
  TextField as Field
} from '@mui/material';
import { useField } from '@unform/core';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ShowPasswordIcon } from '@ui/icons';

export type TextFieldProps = FieldProps & {
  name: string;
  label: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

export const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  type,
  startAdornment,
  endAdornment,
  ...rest
}) => {
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const [value, setValue] = useState(defaultValue || '');

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => (type === 'number' ? parseInt(value, 10) : value),
      setValue: (_, newValue) => setValue(newValue)
    });
  }, [registerField, fieldName, value]);

  return (
    <Field
      variant="outlined"
      color="primary"
      type={showPassword ? 'text' : type}
      fullWidth
      {...rest}
      name={name}
      label={label}
      error={!!error}
      helperText={error}
      defaultValue={defaultValue}
      value={value}
      InputProps={{
        startAdornment,
        endAdornment:
          type === 'password' ? (
            <ShowPasswordIcon
              setShowPassword={setShowPassword}
              showPassword={showPassword}
            />
          ) : (
            endAdornment
          )
      }}
      onChange={e => {
        setValue(e.target.value);
        rest.onChange?.(e);
      }}
      onKeyDown={e => {
        error && clearError();
        rest.onKeyDown?.(e);
      }}
    />
  );
};
