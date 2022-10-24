import { SignInLayout } from '@components/Layout';
import { Box, Stack } from '@mui/material';
import { translateErrorYup } from '@shared/services/yup-validation.service';
import LoadingButton from '@ui/button/LoadingButton';
import { TextField } from '@ui/form';
import { GridItemTwo, GridItemXs6 } from '@ui/grid';
import { TitleH2, TitleH3 } from '@ui/text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import * as yup from 'yup';

export type ILoginFormData = {
  email: string;
  password: string;
};

export const loginFormValidationSchema: yup.SchemaOf<ILoginFormData> = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Email invalido.')
      .required('É necessário informar o email.'),
    password: yup.string().required('É necessário informar a senha.')
  });

export const LoginForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { push } = useRouter();
  const submitData = async (data: ILoginFormData) => {
    loginFormValidationSchema
      .validate(data, { abortEarly: false })
      .then(validatedData => {
        signIn('credentials', {
          redirect: false,
          email: validatedData.email,
          password: validatedData.password,
          callbackUrl: `${window.location.origin}`
        })
          .then(res => {
            if (res?.ok) {
              push('/dashboard');
            }
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch((errorData: yup.ValidationError) => {
        const errors = translateErrorYup(errorData);
        formRef.current?.setErrors(errors);
      });
  };
  return (
    <SignInLayout>
      <GridItemXs6>
        <TitleH2
          sx={{
            textAlign: 'center',
            color: 'primary.main',
            mb: '0.5rem'
          }}
        >
          Entrar!
        </TitleH2>
        <TitleH3
          sx={{
            textAlign: 'center',
            pl: { xs: '1rem', sm: '1rem', md: '0rem' },
            pr: { xs: '1rem', sm: '1rem', md: '0rem' },
            width: '100%'
          }}
        >
          Olá! Identifique-se para acessar o Controla fácil.
        </TitleH3>

        <Box sx={{ width: '100%', p: '1rem' }}>
          <Form ref={formRef} onSubmit={submitData}>
            <Stack
              spacing={2}
              sx={{
                alignItems: 'center'
              }}
            >
              <TextField name="email" label="E-mail" type="email" />
              <TextField name="password" label="Senha" type="password" />
              <LoadingButton text="Entrar" type="submit" />
            </Stack>
          </Form>
        </Box>
      </GridItemXs6>
      <GridItemXs6
        sx={{
          width: '100%',
          height: '100%',
          display: {
            xs: 'none',
            md: 'grid'
          }
        }}
      >
        <Image src="/auth.svg" width="550px" height="550px" />
      </GridItemXs6>
    </SignInLayout>
  );
};
