"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Activity, useEffect, useState } from "react";
import RollSection from "./sections/roll-section";
import ActionSection from "./sections/action-section";
import BondsSection from "./sections/bonds-section";
import XPSection from "./sections/xp-section";

export default function CharacterSheet() {
  const is2xl = useMediaQuery("(min-width: 96rem)");
  const columnsMode = is2xl ? "columns" : "tabs";

  return (
    <>
      <Activity mode={columnsMode === "tabs" ? "visible" : "hidden"}>
        <Tabs defaultValue="mission" className="w-full my-3 mx-auto">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="mission">Mission</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="mission">
            <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-6 focus-visible:outline-hidden">
              <div className="mt-4">
                <XPSection />
                <ActionSection />
                <BondsSection />
              </div>
              <div className="mt-4">
                <RollSection />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="profile">
            <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-6 focus-visible:outline-hidden">
              <div className="mt-4">
                <ProfileContent />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Activity>
      <Activity mode={columnsMode === "tabs" ? "hidden" : "visible"}>
        <div className="my-3 grid grid-cols-3 gap-6 focus-visible:outline-hidden">
          <div className="mt-4">
            <ActionSection />
            <BondsSection />
          </div>
          <div className="mt-4">
            <RollSection />
          </div>
          <div className="mt-4">
            <ProfileContent />
          </div>
        </div>
      </Activity>
    </>
  );
}

function ProfileContent() {
  return <>CONTENT</>;
}
