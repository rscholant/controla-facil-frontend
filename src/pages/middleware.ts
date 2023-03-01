import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      console.log('aqui');
      if (req.nextUrl.pathname === '/admin') {
        return token?.userRole === 'admin';
      }

      return !!token;
    }
  }
});

export const config = { matcher: ['/admin', '/me'] };