"use client";
import * as Ably from "ably";
import { AblyProvider, ChannelProvider } from "ably/react";
import CrewSheetProvider from "@/contexts/crewSheetContext";
import CharacterSheetProvider from "@/contexts/characterSheetContext";
import RollProvider from "@/contexts/rollContext";

const ablyClient = new Ably.Realtime({
  key: process.env.NEXT_PUBLIC_ABLY_API_KEY,
});

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AblyProvider client={ablyClient}>
      <CharacterSheetProvider>
        <ChannelProvider channelName="character-sheet">
          <RollProvider>
            <ChannelProvider channelName="rolls">
              <CrewSheetProvider>
                <ChannelProvider channelName="crew-sheet">
                  {children}
                </ChannelProvider>
              </CrewSheetProvider>
            </ChannelProvider>
          </RollProvider>
        </ChannelProvider>
      </CharacterSheetProvider>
    </AblyProvider>
  );
}
