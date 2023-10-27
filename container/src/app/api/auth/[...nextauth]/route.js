import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { apiAuth } from 'src/services/axiosAuthConfig';

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { data } = await apiAuth.post(
            '/auth/login',
            JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          if (!data) {
            return null;
          }

          const jwt = data?.accessToken;
          const expiresIn = data?.expiresIn;

          return {
            jwt,
            expires: expiresIn,
          };
        } catch (e) {
          throw new Error('Authentication Error');
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          jwt: user.jwt,
          expires: user.expires,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.jwt = token.jwt;
        session.expires = token.expires;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
