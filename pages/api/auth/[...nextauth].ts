import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log(user);
      return true;
    },
  },
};

export default NextAuth(authOptions);
