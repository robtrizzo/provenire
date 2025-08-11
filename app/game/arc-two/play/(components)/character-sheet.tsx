import Controls from "./controls";
import HarmSection from "./harm-section";
import LoadoutSection from "./loadout-section";
import Options from "./options";
import StressSection from "./stress-section";
import WealthSection from "./wealth-section";
import XPSection from "./xp-section";

export default function CharacterSheet() {
  return (
    <>
      <Controls />
      <Options />
      <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-6 focus-visible:outline-hidden">
        <div className="mt-4">
          <WealthSection />
        </div>
        <div className="flex flex-col my-6 md:mt-4">
          <XPSection />
          <StressSection />
          <HarmSection />
          <LoadoutSection />
        </div>
      </div>
    </>
  );
}
