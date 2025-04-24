import {
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import Link from "next/link";
import Abilities from "@/app/game/play/(components)/character-sheet/components/abilities";
import DowntimeActionsAccordion from "@/components/downtime-actions-accordion";
import Crit from "@/components/subsistence/crit/subsistenceCrit";
import Consequences from "@/components/subsistence/consequences/subsistenceConsequences";
import Clock from "@/components/clock";
import { useCharacterSheet } from "@/contexts/characterSheetContext";
import XPSection from "./xp-section";
import StressSection from "./stress-section";
import HarmSection from "./harm-section";
import aldams from "@/public/aldams.json";

export default function ChurnSection() {
  const {
    selectedArchetype,
    selectedSkillset,
    selectedBackground,
    selectedFightingStyle,
    selectedDonum,
    starvation,
    subsist,
    setStarvation,
    setSubsist,
    setChanges,
  } = useCharacterSheet();

  // for now, the only one available
  const gredoranAldam = aldams.find((a) => a.name === "Gredoran Aldam");

  return (
    <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-6 focus-visible:outline-hidden">
      <div className="my-6">
        <TypographyH2 className="mt-4">Downtime</TypographyH2>
        <div className="ml-2">
          <DowntimeActionsAccordion />
        </div>
        <TypographyH2 className="mt-8">Abilities</TypographyH2>
        {selectedSkillset && (
          <div>
            <TypographyH3 className="text-sm text-indigo-500 mt-4">
              {selectedSkillset?.name}&apos;s Abilities
            </TypographyH3>
            <div className="ml-2">
              <Abilities
                abilities={selectedSkillset?.abilities?.mission}
                variant="advancement"
              />
              <Abilities
                abilities={selectedSkillset?.abilities?.downtime}
                variant="advancement"
              />
            </div>
          </div>
        )}
        {selectedArchetype && (
          <div className="mt-4">
            <TypographyH3 className="text-sm text-amber-500 mt-4">
              {selectedArchetype?.name}&apos;s Abilities
            </TypographyH3>
            <div className="ml-2">
              <Abilities
                abilities={selectedArchetype?.abilities?.mission}
                variant="advancement"
              />
              <Abilities
                abilities={selectedArchetype?.abilities?.downtime}
                variant="advancement"
              />
            </div>
          </div>
        )}
        {selectedFightingStyle && (
          <div className="mt-4">
            <TypographyH3 className="text-sm text-emerald-500 mt-4">
              {selectedFightingStyle?.name}&apos;s Abilities
            </TypographyH3>
            <div className="ml-2">
              <Abilities
                abilities={selectedFightingStyle?.abilities}
                variant="advancement"
              />
            </div>
          </div>
        )}
        <div className="mt-4">
          <TypographyH3 className="text-sm text-red-500 mt-4">
            Gredoran Aldam&apos;s Abilities
          </TypographyH3>
          <div className="ml-2">
            <Abilities
              abilities={gredoranAldam!.abilities}
              variant="advancement"
            />
          </div>
        </div>
        {selectedDonum && (
          <div className="mt-4">
            <TypographyH3 className="text-sm text-fuchsia-500 mt-4">
              {selectedDonum.name}&apos;s Abilities
            </TypographyH3>
            <div className="ml-2">
              <Abilities
                abilities={selectedDonum!.abilities}
                variant="advancement"
              />
            </div>
          </div>
        )}
      </div>
      <div className="my-4 flex flex-col">
        <div className="mt-1">
          <XPSection />
        </div>
        <StressSection />
        <HarmSection />
        <TypographyH2 className="mt-8 flex items-end justify-between">
          Subsistence{" "}
          <div className="flex gap-4">
            <div className="border-[1px] border-border rounded-md p-1 flex items-center gap-2 select-none basis-[120px]">
              <div className="shrink-9">
                <Clock
                  key={`subsist-${new Date().getTime()}`}
                  max={8}
                  current={subsist}
                  height={35}
                  width={35}
                  setVal={(n) => {
                    setSubsist(n);
                    setChanges(true);
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground text-center text-balance shrink">
                {selectedBackground?.subsistenceClock}
              </span>
            </div>
            <div className="border-[1px] border-border rounded-md p-1 flex items-center gap-2 select-none basis-[120px]">
              <div className="shrink-0">
                <Clock
                  key={`starvation-${new Date().getTime()}`}
                  max={6}
                  current={starvation}
                  height={35}
                  width={35}
                  setVal={(n) => {
                    setStarvation(n);
                    setChanges(true);
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground text-center text-balance shrink">
                starvation
              </span>
            </div>
          </div>
        </TypographyH2>
        <TypographyH3 className="text-sm text-muted-foreground mt-4">
          Frida&apos;s Hunt
        </TypographyH3>
        <TypographyP>Choose one:</TypographyP>
        <TypographyUnorderedList>
          <li>
            labor: <b>+2 heat</b> or <b>raise the stakes</b>
          </li>
          <li>
            help the crew: permanent <b>level 1 harm: &quot;hungry&quot;</b> and{" "}
            <b>+1d</b> in the <b>agendas phase</b>
          </li>
        </TypographyUnorderedList>
        <TypographyH3 className="text-sm text-muted-foreground mt-4">
          Critical Benefit (
          <span className="text-red-500">{selectedBackground?.name}</span>)
        </TypographyH3>
        <Crit background={selectedBackground?.name || ""} />
        <TypographyH3 className="text-sm text-muted-foreground mt-4">
          Failure Consequences (
          <span className="text-red-500">{selectedBackground?.name}</span>)
        </TypographyH3>
        <TypographyP>Choose one:</TypographyP>
        <Consequences background={selectedBackground?.name || ""} />
        <TypographyH2 className="mt-8">Agendas</TypographyH2>
        {selectedSkillset && (
          <TypographyP>
            {selectedSkillset.agendas} (
            <span className="text-sm text-indigo-500">
              <Link href={`/game/skillsets#${selectedSkillset.name}`}>
                {selectedSkillset.name}&apos;s Agenda
              </Link>
            </span>
            )
          </TypographyP>
        )}
      </div>
    </div>
  );
}
