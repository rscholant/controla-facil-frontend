import * as yup from 'yup';
import { type AnyObject } from 'yup/lib/types';

export const yupCardOptionalValidation = {
  test(value: any, ctx: yup.TestContext<AnyObject>) {
    try {
      if (value.length > 0 && value.length < 16)
        return ctx.createError({
          message: 'O número de cartão deve conter exatamente 16 dígitos. Ou limpe o campo para consultar todos.'
        });

      return true;
    }catch(err) {
      throw new TypeError("It's not string.");
    }
  }
};
