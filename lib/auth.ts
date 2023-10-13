import { NextAuthOptions } from "next-auth";
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
    providers: [
        DiscordProvider({
            clientId: getDiscordCredentials().clientId,
            clientSecret: getDiscordCredentials().clientSecret,
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            console.log(user);
            return true;
        },
    },
}