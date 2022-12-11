import { api } from '@shared/services';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import jwt from 'jsonwebtoken';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Email: exemplo@exemplo.com'
        },
        password: { label: 'Senha', type: 'password' }
      },
      authorize: async (credentials: any) => {
        try {
          const user = await api.post('/auth/login', {
            email: credentials.email.toLowerCase(),
            password: credentials.password
          });

          if (user) {
            const userAccount = { ...user.data.user, image: '' };

            return userAccount;
          } else {
            return null;
          }
        } catch (error: any) {
          const message = error.response.data.message;
          throw new Error(message);
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        (session as any).id = token.id;
      }
      return session;
    }
  },
  session: { strategy: 'jwt', maxAge: 60 * 8 },
  jwt: {
    encode: params => {
      return jwt.sign(params.token as any, params.secret);
    },
    decode: params => {
      return jwt.decode(params.token as any, { json: true });
    },
    secret: process.env['NEXTAUTH_SECRET']
  }
};

export default NextAuth(authOptions);
