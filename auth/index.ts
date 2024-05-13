import NextAuth, { User, NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import DiscordProvider from 'next-auth/providers/discord';

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
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<User | null> {
        const users = [
          {
            id: 'test-user-1',
            userName: 'test1',
            name: 'Test 1',
            password: 'pass',
            email: 'test1@donotreply.com',
          },
          {
            id: 'test-user-2',
            userName: 'test2',
            name: 'Test 2',
            password: 'pass',
            email: 'test2@donotreply.com',
          },
        ];
        const user = users.find(
          (user) =>
            user.userName === credentials.username &&
            user.password === credentials.password
        );
        return user
          ? { id: user.id, name: user.name, email: user.email }
          : null;
      },
    }),
    DiscordProvider({
      clientId: getDiscordCredentials().clientId,
      clientSecret: getDiscordCredentials().clientSecret,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
