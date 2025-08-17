import AbilitiesSection from "./abilities-section";
import ActionSection from "./action-section";
import BaggageSection from "./baggage-section";
import BondsSection from "./bonds-section";
import Controls from "./controls";
import HarmSection from "./harm-section";
import LoadoutSection from "./loadout-section";
import Options from "./options";
import ProfileSection from "./profile-section";
import RollSection from "./roll-section";
import StressSection from "./stress-section";
import WealthSection from "./wealth-section";
import XPSection from "./xp-section";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function CharacterSheet() {
  return (
    <>
      <Controls />
      <Options />
      <Tabs defaultValue="mission" className="w-full my-3 mx-auto">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="mission">Mission</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="mission">
          <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-6 focus-visible:outline-hidden">
            <div className="mt-4">
              <XPSection />
              <WealthSection />
              <ActionSection />
              <BondsSection />
              <AbilitiesSection />
            </div>
            <div className="flex flex-col my-6 md:mt-4">
              <StressSection />
              <BaggageSection />
              <HarmSection />
              <RollSection />
              <LoadoutSection />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="profile">
          <ProfileSection />
        </TabsContent>
      </Tabs>
    </>
  );
}
