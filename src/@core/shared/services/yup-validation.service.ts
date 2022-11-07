import * as yup from 'yup';

export const translateErrorYup = (error: any): { [key: string]: string } => {
  const validationErrors: { [key: string]: string } = {};
  if (error instanceof yup.ValidationError) {
    error.inner.forEach(err => {
      if (!err.path) return;
      validationErrors[err.path] = err.message;
    });
  }
  return validationErrors;
};
