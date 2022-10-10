import React, { useEffect, useState } from 'react';
import {
  TextFieldProps as FieldProps,
  TextField as Field
} from '@mui/material';
import { useField } from '@unform/core';

export type TextFieldProps = FieldProps & {
  name: string;
  label: string;
};

export const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  type,
  ...rest
}) => {
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name);

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
      type={type}
      fullWidth
      {...rest}
      name={name}
      label={label}
      error={!!error}
      helperText={error}
      defaultValue={defaultValue}
      value={value}
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
