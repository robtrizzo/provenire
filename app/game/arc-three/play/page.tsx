"use client";

import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import CharacterSheet from "./(components)/character-sheet";
import DiceSheet from "@/components/character-sheet/dice-history/dice-sheet";
import { useRoll } from "@/contexts/arc3RollContext";
import DramatisPersonae from "./(components)/dramatis-personae";
import CrewSheet from "./(components)/crew/crew-sheet";

const tabs = [
  { name: "Character", value: "character" },
  { name: "Dramatis Personae", value: "dramatis-personae" },
  { name: "Crew", value: "crew" },
];

export default function Page() {
  const [tab, setTab] = useState("character");
  const {
    rolls,
    currentDiceFilter,
    handleCurrentDiceFilterChange,
    fetchNextPage,
    refetchRolls,
    hasNextPage,
    rollsArePending,
  } = useRoll();

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
      <div className="flex items-end justify-between">
        <Breadcrumbs />
        <div className="2xl:hidden">
          <DiceSheet
            rolls={rolls}
            currentDiceFilter={currentDiceFilter}
            handleCurrentDiceFilterChange={handleCurrentDiceFilterChange}
            fetchNextPage={fetchNextPage}
            refetchRolls={refetchRolls}
            hasNextPage={hasNextPage}
            rollsArePending={rollsArePending}
          />
        </div>
      </div>
      <Tabs
        defaultValue="character"
        value={tab}
        className="w-full my-3 mx-auto"
      >
        <TabsList className="w-full justify-between">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              onClick={() => {
                setTab(tab.value);
                // save the tab to the hash
                window.location.hash = tab.value;
              }}
              className="flex-1"
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="character" className="w-full">
          <CharacterSheet />
        </TabsContent>
        <TabsContent value="dramatis-personae" className="w-full">
          <DramatisPersonae />
        </TabsContent>
        <TabsContent value="crew" className="w-full">
          <CrewSheet />
        </TabsContent>
      </Tabs>
    </>
  );
}
