"use client";
import * as Ably from "ably";
import { AblyProvider, ChannelProvider } from "ably/react";
import CrewSheetProvider from "@/contexts/crewSheetContext";
import CharacterSheetProvider from "@/contexts/characterSheetContext";
import RollProvider from "@/contexts/rollContext";

const ablyClient = new Ably.Realtime({
  clientId: "ably-updates",
  key: process.env.NEXT_PUBLIC_ABLY_API_KEY,
});

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AblyProvider client={ablyClient}>
      <ChannelProvider channelName="character-sheet">
        <CharacterSheetProvider>
          <ChannelProvider channelName="rolls">
            <RollProvider>
              <ChannelProvider channelName="crew-sheet">
                <CrewSheetProvider>{children}</CrewSheetProvider>
              </ChannelProvider>
            </RollProvider>
          </ChannelProvider>
        </CharacterSheetProvider>
      </ChannelProvider>
    </AblyProvider>
  );
}
