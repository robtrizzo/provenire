"use client";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import RemembrancePortrait from "../(components)/remembrance-portrait";
import ClockCost from "@/components/clock-cost";
import Action from "../../../play/(components)/action";
import { ActionV3 } from "@/types/arc3";
import { getActions } from "@/lib/actions";

const actions: ActionV3[] = getActions(
  [
    { name: "Coordinate", level: [2, 1] },
    { name: "Command", level: [3] },
    { name: "Disconnect", level: [2] },
    { name: "Encourage", level: [2, 1] },
    { name: "Rally", level: [1, 1] },
    { name: "Relate", level: [2] },
  ],
  "skill",
);

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
        <div>
          <TypographyH1 className="font-old mb-1.5">Engel Otto</TypographyH1>
          <span className="text-muted-foreground">
            Ulgatia, post the cataclysm (OSG) and pre Fenrir&apos;s rise.
          </span>
          <TypographyP>
            A boy with humble beginnings discovers his generational talent with
            the sword. Arrogance overtakes him with a meteoric rise of
            reputation. A humbling moment changes his heart, shaping him into a
            dedicated mentor. When Rath finally comes for his city, his sword
            skills spare his life, though he spent the rest of his days a slave
            in the Steel Trap.
          </TypographyP>
          <TypographyH3>Psyche</TypographyH3>
          <TypographyP>
            A wise, learned mentor. Someone who wishes to help the next
            generation eschew their arrogance and achieve to their highest
            potential. A deep melancholy, and a deeper hatred for the Rathi.
          </TypographyP>
        </div>
        <RemembrancePortrait width={200} height={200} img="chain" />
      </div>
      <div className="mt-4 grid grid-cols-8 gap-2">
        <div className="col-span-5">
          <TypographyH2 className="font-old">Histories</TypographyH2>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">
              Ulgatia (Post Cataclysm)
            </TypographyH3>
            <ClockCost num={3} ticks={5} />
          </div>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">The Steel Trap</TypographyH3>
            <ClockCost num={3} ticks={5} />
          </div>
        </div>
        <div className="col-span-3">
          <TypographyH2 className="font-old">Skills</TypographyH2>
          <div className="flex flex-col">
            {actions.map((a, idx) => (
              <Action.Wrapper.Tooltip action={a} key={idx + a.name}>
                <div>
                  <Action.Wrapper.Grid>
                    <Action.HeaderContent.Static action={a} />
                  </Action.Wrapper.Grid>
                </div>
              </Action.Wrapper.Tooltip>
            ))}
          </div>
        </div>
      </div>
      <TypographyH2 className="font-old">Abilities</TypographyH2>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Blood of the Body</TypographyH3>
        <ClockCost num={4} ticks={5} />
      </div>
      <span className="text-red-500 text-sm font-old">Aldam</span>
      <TypographyP>
        Rooted in ancient Gredoran Aldams and deeply influenced by{" "}
        <b>Donum Sangius</b>, the Ulgatian Aldams are uniquely capable of
        altering the properties of blood. Additionally, Ulgatians all
        contributed to a blood tithe; and so out of necessity, learned to use
        their Aldams efficiently.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Kiss of the Viper</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        Proximity and close alliegances to Bwarhei brough together two disparate
        combat arts into something unique and new. Practitioners are as much
        alchemist as they are warrior, seeking vital regions to deliver deadly
        poisons harvested from the jungle.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Desert Fan</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        A swordstyle inspired by Narscillian dances popular in Ulgatia. Warriors
        twirl their weapons in a perpetual dance that is fairly immobile but
        found to be effective at holding ground.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Horizon&apos;s Edge</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        This fighting style is quintessentially Ulgatian. It relies on heavy use
        of Aldams to end a battle in a single decisive strike.
      </TypographyP>
    </>
  );
}
