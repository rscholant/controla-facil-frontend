import { onlyDigits } from '@shared/services/utils/only-digits';
import { cpf as cpfValidator, cnpj as cnpjValidator } from 'cpf-cnpj-validator';

export const cpfValidation = (cpf: string): boolean => {
  const cpfDigits = onlyDigits(cpf);
  return cpfValidator.isValid(cpfDigits);
};

export const cnpjValidation = (cnpj: string): boolean => {
  const cnpjDigits = onlyDigits(cnpj);
  return cnpjValidator.isValid(cnpjDigits);
};
