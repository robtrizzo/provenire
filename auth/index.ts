import NextAuth, { NextAuthConfig } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import {UpstashRedisAdapter} from '@auth/upstash-redis-adapter'
import db from '@/lib/redis'

export const BASE_PATH = '/api/auth';

function getDiscordCredentials() {
  const clientId: string = process.env.DISCORD_CLIENT_ID!;
  const clientSecret: string = process.env.DISCORD_CLIENT_SECRET!;
  if (!clientId || clientId.length === 0) {
    throw new Error('Missing Discord client ID');
  }
  if (!clientSecret || clientSecret.length === 0) {
    throw new Error('Missing Discord client secret');
  }
  return { clientId, clientSecret };
}

const authOptions: NextAuthConfig = {
  adapter: UpstashRedisAdapter(db),
  providers: [
    DiscordProvider({
      clientId: getDiscordCredentials().clientId,
      clientSecret: getDiscordCredentials().clientSecret,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = (await db.get(`user:${token.id}`)) as User | null;

      if (!dbUser) {
        token.id = user!.id!;
        return token;
      }

      token.id = dbUser.id;
      token.name = dbUser.name;
      token.email = dbUser.email;
      token.avatar = dbUser.avatar;
      token.role = dbUser.role!;

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.avatar;
        session.user.role = token.role;
      }

      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
