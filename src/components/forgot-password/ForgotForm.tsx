import { SignInLayout } from '@components/Layout';
import { Box, Stack, Typography } from '@mui/material';
import { translateErrorYup } from '@shared/services/yup-validation.service';
import LoadingButton from '@ui/button/LoadingButton';
import { TextField } from '@ui/form';
import { GridItemXs5, GridItemXs7 } from '@ui/grid';
import { TitleH1, TitleH2 } from '@ui/text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import * as yup from 'yup';

export type IForgotFormData = {
  email: string;
};

export const forgotFormValidationData: yup.SchemaOf<IForgotFormData> = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Email invalido.')
      .required('É necessário informar o email.')
  });

export const ForgotForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { push } = useRouter();
  const submitData = async (data: IForgotFormData) => {
    forgotFormValidationData
      .validate(data, { abortEarly: false })
      .then(validatedData => {
        console.warn(validatedData);
      })
      .catch((errorData: yup.ValidationError) => {
        const errors = translateErrorYup(errorData);
        formRef.current?.setErrors(errors);
      });
  };
  return (
    <SignInLayout>
      <GridItemXs7>
        <TitleH1
          sx={{
            textAlign: 'center',
            color: 'primary.main',
            mb: '1rem'
          }}
        >
          📑 Controla fácil
        </TitleH1>
        <TitleH2
          sx={{
            textAlign: 'left',
            color: 'primary.main',
            pl: '1rem'
          }}
        >
          Parece que nos esquecemos de algo, não? 🤭
        </TitleH2>
        <Typography
          sx={{
            textAlign: 'left',
            pl: '1rem',
            width: '100%',
            fontStyle: 'italic',
            fontWeight: '400',

            fontSize: '0.8rem',
            color: 'primary.900'
          }}
        >
          Informe seu email para começarmos o processo de recuperação da sua
          senha!
        </Typography>

        <Box sx={{ width: '100%', p: '1rem' }}>
          <Form ref={formRef} onSubmit={submitData}>
            <Stack
              spacing={2}
              sx={{
                alignItems: 'center'
              }}
            >
              <TextField name="email" label="E-mail" type="email" />
              <LoadingButton text="Entrar" type="submit" />
              <Typography
                sx={{
                  textAlign: 'right',
                  width: '100%',
                  fontWeight: '500',
                  fontSize: '1rem',
                  color: 'primary.100',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  push('/');
                }}
              >
                Lembrou da senha?
              </Typography>
            </Stack>
          </Form>
        </Box>
      </GridItemXs7>
      <GridItemXs5
        sx={{
          width: '100%',
          height: '100%',
          display: {
            xs: 'none',
            lg: 'grid'
          }
        }}
      >
        <Image
          src="/images/pages/forgot-password/forgot.svg"
          width="500px"
          height="500px"
        />
      </GridItemXs5>
    </SignInLayout>
  );
};
