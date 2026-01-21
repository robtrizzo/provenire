"use client";

import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TypographyH2 } from "@/components/ui/typography";
import { useState } from "react";
import CharacterSheet from "./(components)/character-sheet";

const tabs = [
  { name: "Character", value: "character" },
  { name: "Dramatis Personae", value: "dramatis-personae" },
];

export default function Page() {
  const [tab, setTab] = useState("character");
  return (
    <>
      <div className="flex justify-between">
        <Breadcrumbs />
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
          <TypographyH2>Dramatis Personae</TypographyH2>
        </TabsContent>
      </Tabs>
    </>
  );
}
