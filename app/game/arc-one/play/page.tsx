"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Charsheet from "./(components)/character-sheet/character-sheet";
import DramatisPersonae from "./(components)/dramatis-personae";
import CrewSheet from "./(components)/crew-sheet/crew-sheet";
import DiceSheet from "@/app/game/arc-one/play/(components)/dice-history/sheet";

export default function Page() {
  const [tab, setTab] = useState("crew");

  useEffect(() => {
    if (window === undefined) return;
    // read the hash and set the tab
    const hash = window.location.hash;
    if (
      hash &&
      ["crew", "character", "dramatis-personae"].includes(hash.substring(1))
    ) {
      setTab(hash.substring(1));
    }
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <Breadcrumbs crumbs={[{ name: "Play", href: "#" }]} />
        <div className="flex gap-2 mt-5">
          <DiceSheet />
        </div>
      </div>
      <Tabs defaultValue="crew" value={tab} className="w-full my-3 mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger
            value="character"
            onClick={() => {
              setTab("character");
              // save the tab to the hash
              window.location.hash = "character";
            }}
          >
            Character
          </TabsTrigger>
          <TabsTrigger
            value="crew"
            onClick={() => {
              setTab("crew");
              // save the tab to the hash
              window.location.hash = "crew";
            }}
          >
            Crew
          </TabsTrigger>
          <TabsTrigger
            value="dramatis-personae"
            onClick={() => {
              setTab("dramatis-personae");
              // save the tab to the hash
              window.location.hash = "dramatis-personae";
            }}
          >
            Dramatis Personae
          </TabsTrigger>
        </TabsList>
        <TabsContent value="character" className="w-full">
          <Charsheet />
        </TabsContent>
        <TabsContent value="crew" className="w-full">
          <CrewSheet />
        </TabsContent>
        <TabsContent value="dramatis-personae" className="w-full">
          <DramatisPersonae />
        </TabsContent>
      </Tabs>
    </>
  );
}
