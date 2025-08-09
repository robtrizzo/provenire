"use client";

import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { TypographyH2 } from "@/components/ui/typography";
import CharacterSheet from "./(components)/character-sheet";

const tabs = [
  { name: "Character", value: "character" },
  { name: "Dramatis Personae", value: "dramatis-personae" },
];

export default function Page() {
  const [tab, setTab] = useState("character");

  useEffect(() => {
    if (window === undefined) return;
    // read the hash and set the tab
    const hash = window.location.hash;
    if (hash && tabs.map((tab) => tab.value).includes(hash.substring(1))) {
      setTab(hash.substring(1));
    }
  }, []);

  return (
    <>
      <Breadcrumbs />
      <Tabs defaultValue="crew" value={tab} className="w-full my-3 mx-auto">
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
