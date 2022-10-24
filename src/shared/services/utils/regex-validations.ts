export const validateCnpjCpf =
  /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/;

export const ValidatePhone =
  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;

export const validatePassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

export const lowerCase = /^(?=.*[a-z])/;

export const upperCase = /^(?=.*[A-Z])/;

export const sixCharacters = /^(?=.{6,})/;

export const specialCharacter = /^(?=.*[!@#$%^&*])/;

export const oneNumber = /^(?=.{6,20}$)\D*\d/;

export const phoneNumber = /\([1-9]\d\)\s9?\d{4}-\d{4}/;
