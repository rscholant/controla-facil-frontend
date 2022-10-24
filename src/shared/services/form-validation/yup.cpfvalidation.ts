import * as yup from 'yup';
import { cpfValidation } from '@shared/utils';
import { type AnyObject } from 'yup/lib/types';

export const yupCpfValidation = {
  test(value: any, ctx: yup.TestContext<AnyObject>) {
    try {
      if (value.length < 11)
      return ctx.createError({
        message: 'O campo deve conter exatos 11 números.'
      });
      
      const isValid = cpfValidation(value as string);
      if (!isValid)
        return ctx.createError({
          message: 'CPF inválido. Por favor conferir os números digitados.'
        });

    return true;
    }catch(err) {
      throw new TypeError("It's not string.");
    }
  }
};
