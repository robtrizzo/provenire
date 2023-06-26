import { NextAuthOptions } from "next-auth";
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import { db } from "./db";
import DiscordProvider from 'next-auth/providers/discord';

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

export const authOptions: NextAuthOptions = {
    adapter: UpstashRedisAdapter(db),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/login'
    },
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
                token.id = user!.id
                return token;
            }
            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                image: dbUser.image,
            }
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.image
            }
            return session;
        },
        redirect() {
            return "/dashboard"
        }
    },
}