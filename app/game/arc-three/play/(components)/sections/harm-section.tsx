import Clock from "@/components/clock";
import { Checkbox } from "@/components/ui/checkbox";
import { TypographyH2 } from "@/components/ui/typography";
import {
  useArmor,
  useFields,
  useHarms,
} from "@/contexts/arc3CharacterSheetContext";
import { FC } from "react";
import HarmOptions from "../configs/harm-options";
import { Input } from "@/components/ui/input";

type HarmSection = FC & {
  HarmGrid: FC;
  HealingClock: FC;
  ArmorCheckboxes: FC;
};

const HarmSection = () => {
  return (
    <>
      <TypographyH2 className="text-md mb-2 text-muted-foreground flex items-end justify-between">
        Harms <HarmOptions />
      </TypographyH2>
      <div className="flex items-center gap-1">
        <HarmGrid />
        <HealingClock />
      </div>
      <ArmorCheckboxes />
    </>
  );
};

function HarmGrid() {
  const { harms, updateHarm, setMaxSlots, setLevelCount } = useHarms();

  return (
    <div className="w-full flex flex-col gap-1">
      {Object.entries(harms)
        .reverse()
        .map(([level, { slots }]) => (
          <div key={level} className="flex gap-1 items-center">
            <span className="text-sm text-muted-foreground w-4">{level}</span>
            {slots.map((slot, i) => (
              <Input
                key={i}
                value={slot}
                onChange={(e) => updateHarm(Number(level), i, e.target.value)}
                className="border rounded px-2 py-1 text-sm flex-1"
              />
            ))}
          </div>
        ))}
    </div>
  );
}

function HealingClock() {
  const [{ healing, maxHealing }, set] = useFields();

  return (
    <div className="flex flex-col items-center justify-center gap-0.5 p-0.5 h-full">
      <Clock
        max={maxHealing}
        current={healing}
        setVal={(n: number) => {
          set({ healing: n });
        }}
        height={35}
        width={35}
      />
      <span className="text-xs">healing</span>
    </div>
  );
}

function ArmorCheckboxes() {
  const [armor, setArmor] = useArmor();

  return (
    <div className="py-1.5 px-4 select-none flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={armor["light"]}
          onCheckedChange={() => {
            setArmor("light", !armor["light"]);
          }}
        />
        Armor
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          checked={armor["heavy"]}
          onCheckedChange={() => {
            setArmor("heavy", !armor["heavy"]);
          }}
        />{" "}
        Heavy
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          checked={armor["special"]}
          onCheckedChange={() => {
            setArmor("special", !armor["special"]);
          }}
        />{" "}
        Special
      </div>
    </div>
  );
}

HarmSection.HarmGrid = HarmGrid;
HarmSection.HealingClock = HealingClock;
HarmSection.ArmorCheckboxes = ArmorCheckboxes;

export default HarmSection;
