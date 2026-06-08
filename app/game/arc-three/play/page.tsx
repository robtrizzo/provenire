"use client";

import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TypographyH2 } from "@/components/ui/typography";
import { useState } from "react";
import CharacterSheet from "./(components)/character-sheet";
import DiceSheet from "@/components/character-sheet/dice-history/dice-sheet";
import { useRoll } from "@/contexts/arc3RollContext";
import DramatisPersonae from "./(components)/dramatis-personae";

const tabs = [
  { name: "Character", value: "character" },
  { name: "Dramatis Personae", value: "dramatis-personae" },
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
        <TabsList className="grid w-full grid-cols-2">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              onClick={() => {
                setTab(tab.value);
                // save the tab to the hash
                window.location.hash = tab.value;
              }}
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
      </Tabs>
    </>
  );
}
