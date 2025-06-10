"use client";
import { Separator } from "@/components/ui/separator";
import {
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import loadouts from "@/public/loadouts.json";
import { Item } from "@/types/game";
import { Checkbox } from "@/components/ui/checkbox";
import Abilities from "@/app/game/arc-one/play/(components)/character-sheet/components/abilities";
import ItemsTable from "@/app/game/arc-one/play/(components)/character-sheet/components/items-table";
import RollSection from "../components/roll-section";
import Bonds from "../components/bonds";
import { useCharacterSheet } from "@/contexts/characterSheetContext";
import XPSection from "./xp-section";
import StressSection from "./stress-section";
import HarmSection from "./harm-section";
import ActionsSection from "./actions-section";
import DonumSection from "./donum-section";
import ResourcesSection from "./resources-section";
import aldams from "@/public/aldams.json";

export default function MissionSection() {
  const {
    selectedArchetype,
    selectedSkillset,
    selectedFightingStyle,
    selectedDonum,
    loadout,
    items,
    setLoadout,
    setItems,
    setChanges,
    handleUpdateItemName,
    handleUpdateItemSlots,
  } = useCharacterSheet();

  const gredoranAldams = aldams.find((a) => a.name === "Gredoran Aldam");

  return (
    <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-6 focus-visible:outline-hidden">
      <div className="mt-4">
        <ResourcesSection />
        <ActionsSection />
        <DonumSection />
        <TypographyH2 className="text-md text-muted-foreground mt-4">
          Bonds
        </TypographyH2>
        <Bonds />
      </div>
      <div className="flex flex-col my-6 md:mt-4">
        <XPSection />

        <StressSection />

        <HarmSection />

        <RollSection />

        <div className="mt-6">
          <TypographyH3 className="text-sm text-muted-foreground">
            Loadout
          </TypographyH3>
        </div>
        {loadout && (
          <TypographyP className="text-sm text-muted-foreground">
            {loadout.desc}
          </TypographyP>
        )}
        <Separator className="mt-1 mb-2" />
        <div className="flex align-end justify-between flex-wrap">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={loadout?.name === "Discreet"}
              onCheckedChange={() => {
                setLoadout(loadouts[0]);
                setChanges(true);
              }}
            />{" "}
            Discreet
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={loadout?.name === "Conspicuous"}
              onCheckedChange={() => {
                setLoadout(loadouts[1]);
                setChanges(true);
              }}
            />{" "}
            Conspicuous
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={loadout?.name === "Bulky"}
              onCheckedChange={() => {
                setLoadout(loadouts[2]);
                setChanges(true);
              }}
            />{" "}
            Bulky
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={loadout?.name === "Encumbered"}
              onCheckedChange={() => {
                setLoadout(loadouts[3]);
                setChanges(true);
              }}
            />{" "}
            Encumbered
          </div>
        </div>
        <ItemsTable
          className="mt-4"
          items={items}
          loadout={loadout}
          handleChangeItemName={handleUpdateItemName}
          handleChangeItemSlots={handleUpdateItemSlots}
          handleAddItem={() => {
            if (!items || items.length === 0) {
              setItems([
                {
                  name: "",
                  slots: 1,
                  ticks: 0,
                  clock: 3,
                  uses: undefined,
                  traits: [],
                  description: "",
                },
              ]);
            } else {
              setItems([
                ...items,
                {
                  name: "",
                  slots: 1,
                  ticks: 0,
                  clock: 3,
                  uses: undefined,
                  traits: [],
                  description: "",
                },
              ]);
            }
            setChanges(true);
          }}
          handleAddBasicItem={(item: Item) => {
            if (!items || items.length === 0) {
              setItems([item]);
            } else {
              setItems([...items, item]);
            }
            setChanges(true);
          }}
          handleRemoveItem={(index: number) => {
            setItems(items.filter((_, i) => i !== index));
            setChanges(true);
          }}
        />
        <TypographyH2 className="text-md text-muted-foreground mt-8">
          Abilities
        </TypographyH2>
        {selectedSkillset && (
          <div>
            <TypographyH3 className="text-sm text-indigo-500 mt-4">
              {selectedSkillset?.name}&apos;s Abilities
            </TypographyH3>
            <div className="ml-2">
              <Abilities abilities={selectedSkillset?.abilities?.mission} />
              <Abilities abilities={selectedSkillset?.abilities?.downtime} />
            </div>
          </div>
        )}
        {selectedArchetype && (
          <div className="mt-4">
            <TypographyH3 className="text-sm text-amber-500 mt-4">
              {selectedArchetype?.name}&apos;s Abilities
            </TypographyH3>
            <div className="ml-2">
              <Abilities abilities={selectedArchetype?.abilities?.mission} />
              <Abilities abilities={selectedArchetype?.abilities?.downtime} />
            </div>
          </div>
        )}
        {selectedFightingStyle && (
          <div className="mt-4">
            <TypographyH3 className="text-sm text-emerald-500 mt-4">
              {selectedFightingStyle?.name}&apos;s Abilities
            </TypographyH3>
            <div className="ml-2">
              <Abilities abilities={selectedFightingStyle?.abilities} />
            </div>
          </div>
        )}
        <div className="mt-4">
          <TypographyH3 className="text-sm text-red-500 mt-4">
            Gredoran Aldam&apos;s Abilities
          </TypographyH3>
          <div className="ml-2">
            <Abilities abilities={gredoranAldams!.abilities} />
          </div>
        </div>
        {((selectedDonum && selectedDonum.phase !== "Emergence") ||
          selectedDonum?.type === "curse") && (
          <div className="mt-4">
            <TypographyH3 className="text-sm text-fuchsia-500 mt-4">
              {selectedDonum?.name}&apos;s Abilities
            </TypographyH3>
            <div className="ml-2">
              <Abilities abilities={selectedDonum?.abilities} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
