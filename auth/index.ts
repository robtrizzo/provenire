import NextAuth, { NextAuthConfig } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter";
import redis from "@/lib/redis";
import { Role } from "@/lib/auth";

export const BASE_PATH = "/api/auth";

function getDiscordCredentials() {
  const clientId: string = process.env.DISCORD_CLIENT_ID!;
  const clientSecret: string = process.env.DISCORD_CLIENT_SECRET!;
  if (!clientId || clientId.length === 0) {
    throw new Error("Missing Discord client ID");
  }
  if (!clientSecret || clientSecret.length === 0) {
    throw new Error("Missing Discord client secret");
  }
  return { clientId, clientSecret };
}

const authOptions: NextAuthConfig = {
  adapter: UpstashRedisAdapter(redis),
  session: {
    strategy: "jwt",
  },
  providers: [
    DiscordProvider({
      clientId: getDiscordCredentials().clientId,
      clientSecret: getDiscordCredentials().clientSecret,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = (await redis.get(`user:${token.id}`)) as User | null;

      if (!dbUser) {
        token.id = user!.id!;
        await redis.sadd("users", token.id);
        return token;
      }

      if (!dbUser.role) {
        token.role = "user";
        await redis.set(`user:${token.id}`, {
          id: token.id,
          name: token.name,
          email: token.email,
          image: token.picture,
          role: token.role,
        });
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        image: dbUser.image,
        role: dbUser.role!,
      };
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
        session.user.role = token.role as Role;
      }

      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
