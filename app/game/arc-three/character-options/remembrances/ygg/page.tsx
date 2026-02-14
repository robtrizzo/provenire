"use client";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
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
    { name: "Brawl", level: [1] },
    { name: "Challenge", level: [1] },
    { name: "Frighten", level: [1] },
    { name: "Initiate", level: [1] },
    { name: "Smash", level: [1] },
    { name: "Survival (Jungle)", level: [1] },
  ],
  "skill",
);

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
        <div>
          <TypographyH1 className="font-old mb-2">Ygg</TypographyH1>
          <span className="text-muted-foreground">Rath, Era One</span>
          <TypographyBlockquote className="text-red-500">
            Content Warning
          </TypographyBlockquote>
          <TypographyP>
            Birthed of a mother hung from a noose after suffering a most awful
            fate. A creature boy more like a calamity roamed the wilderness.
            Misunderstood, feared, and often betrayed, Ygg develops a disdain
            for people - preferring the law of the jungle.
          </TypographyP>
          <TypographyP>
            Rathi warrior after Rathi warrior venture out into Ygg's jungle to
            slay the beast for glory, never to return. Superstition builds.
            Mosters flock to Ygg's safety.
          </TypographyP>
          <TypographyH3>Psyche</TypographyH3>
          <TypographyP>
            Bestial and primal. Wounded and lonely. Instinctually drives others
            away with fear. Motivated by rage and revenge.
          </TypographyP>
        </div>
        <RemembrancePortrait width={200} height={200} img="noose" />
      </div>
      <div className="mt-4 grid grid-cols-8 gap-2">
        <div className="col-span-5">
          <TypographyH2 className="font-old">Histories</TypographyH2>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">The Bwarhein</TypographyH3>
            <ClockCost num={3} ticks={5} />
          </div>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">Kingwulf&apos;s Jaws</TypographyH3>
            <ClockCost num={2} ticks={5} />
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
        <TypographyH3 className="mt-0">Donum Portentum</TypographyH3>
        <ClockCost num={5} ticks={5} />
      </div>
      <span className="text-fuchsia-500 text-sm font-old">
        Gift of the Monster
      </span>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Backsnap</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
    </>
  );
}
