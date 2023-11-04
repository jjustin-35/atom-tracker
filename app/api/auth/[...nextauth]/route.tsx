import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import prisma from '@/lib/prisma';
import { compareHashPassword } from '@/helpers/password';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Signin',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        const user = await prisma.user.findUnique({
          where: { email },
        });

        const isPasswordCorrect = await compareHashPassword(
          password,
          user?.password || '',
        );

        if (!isPasswordCorrect) {
          console.log('Password is incorrect');
          return null;
        }

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (account.provider !== 'credentials') {
        try {
          const { email, name } = profile;
          const { image: avatar } = user;
          const existUser = await prisma.user.findUnique({ where: { email } });
          if (existUser) return true;

          await prisma.user.create({
            data: {
              email,
              name,
              password: '',
              avatar,
            },
          });

          return true;
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
