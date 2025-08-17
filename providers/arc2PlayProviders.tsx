"use client";
import * as Ably from "ably";
import { AblyProvider, ChannelProvider } from "ably/react";
import CharacterSheetProvider from "@/contexts/arc2CharacterSheetContext";
import RollProvider from "@/contexts/arc2RollContext";

const ablyClient = new Ably.Realtime({
  authUrl: process.env.NEXT_PUBLIC_ABLY_AUTH_URL,
  authMethod: "POST",
  recover: (_, cb) => {
    cb(true);
  },
});

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AblyProvider client={ablyClient}>
      <ChannelProvider channelName="arc2-character-sheet">
        <CharacterSheetProvider>
          <ChannelProvider channelName="arc2-rolls">
            <RollProvider>{children}</RollProvider>
          </ChannelProvider>
        </CharacterSheetProvider>
      </ChannelProvider>
    </AblyProvider>
  );
}
