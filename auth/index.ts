// import { createUser, getUser } from '@/handlers/users';
import NextAuth, { NextAuthConfig } from 'next-auth';
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
    DiscordProvider({
      clientId: getDiscordCredentials().clientId,
      clientSecret: getDiscordCredentials().clientSecret,
      //   async profile(profile) {
      //     let avatar;
      //     if (profile.avatar) {
      //       const format = profile.avatar.startsWith('a_') ? 'gif' : 'png';
      //       avatar = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
      //     }
      //     const user = await createUser(profile.email, avatar, profile.username);
      //     if (!user) {
      //     }
      //     if ('error' in user) {
      //       console.error('Error creating user', user.error);
      //       return {
      //         id: 'not found',
      //         name: profile.username,
      //         email: profile.email,
      //         image: avatar,
      //         role: 'user',
      //       };
      //     }

      //     // this is available in the signIn callback as user
      //     return {
      //       id: user.id,
      //       name: profile.username,
      //       email: profile.email,
      //       image: avatar,
      //       role: user.role,
      //     };
      //   },
    }),
  ],
  callbacks: {
    // jwt: async ({ token, user }) => {
    //   if (user === undefined || !user.role) {
    //     let dbUser = await getUser(token.email!);
    //     if (!dbUser) {
    //       return { ...token, role: 'user' };
    //     }
    //     if ('role' in dbUser) {
    //       return { ...token, role: dbUser.role, id: dbUser.id };
    //     }
    //   }
    //   return { ...token, role: user.role as string, id: user.id as string };
    // },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role as string,
          id: token.id as string,
        },
      };
    },
  },
  pages: {
    signIn: '/signin',
  },
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
