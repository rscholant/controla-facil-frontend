import { SignInLayout } from '@core/components/Layout';
import { Box, Stack, Typography } from '@mui/material';
import { translateErrorYup } from '@shared/services/yup-validation.service';
import LoadingButton from '@core/components/_ui/button/LoadingButton';
import { TextField } from '@core/components/_ui/form';
import { GridItemXs5, GridItemXs7 } from '@core/components/_ui/grid';
import { TitleH1, TitleH2 } from '@core/components/_ui/text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { signIn, getSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
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
  const { push } = useRouter();
  const formRef = useRef<FormHandles>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getSession().then(result => {
      if (result && new Date(result.expires).getTime() > new Date().getTime()) {
        push('/dashboard');
      }
    });
  }, []);
  const submitData = async (data: ILoginFormData) => {
    setIsLoading(true);
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
            setIsLoading(false);
            if (res?.ok) {
              push('/dashboard');
            }
          })
          .catch(err => {
            setIsLoading(false);
            console.log(err);
          });
      })
      .catch((errorData: yup.ValidationError) => {
        setIsLoading(false);
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
          Bem vindo ao Controla fácil! 👋🏻
        </TitleH2>
        <Typography
          sx={{
            textAlign: 'left',
            pl: '1rem',
            width: '100%',
            fontStyle: 'italic',
            fontWeight: '400',

            fontSize: '0.8rem',
            color: 'gray.700'
          }}
        >
          Faça login na sua conta e comece a aventura{' '}
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
              <TextField name="password" label="Senha" type="password" />
              <LoadingButton text="Entrar" type="submit" loading={isLoading} />
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
                  push('/forgot-password');
                }}
              >
                Perdeu sua senha?
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
          src="/images/pages/login/auth.svg"
          width="500px"
          height="500px"
        />
      </GridItemXs5>
    </SignInLayout>
  );
};
