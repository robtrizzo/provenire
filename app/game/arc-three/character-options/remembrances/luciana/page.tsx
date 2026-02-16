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
    { name: "Disconnect", level: [2] },
    { name: "Hide", level: [1, 1] },
    { name: "Loyalty", level: [3] },
    { name: "Study", level: [3, 1] },
    { name: "Survival (Mountains)", level: [2] },
    { name: "Survival (Plains)", level: [2] },
  ],
  "skill",
);

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
        <div>
          <TypographyH1 className="font-old">Luciana</TypographyH1>
          <span className="text-muted-foreground">
            Yama, during the cataclysm (OSG)
          </span>
          <TypographyP>
            A Heian girl with the unexpected power to animate the dead. Cast out
            from her home she subsists and ventures to the Hidden City in hope
            for a better life. Her search nearly kills her, but she's saved by
            women who can animate the dead: just like her.
          </TypographyP>
          <TypographyP>
            She enjoys a brief span of tutilage and sisterhood before Order's
            armies march into Yama to conquer. Luciana and twelve sisters hold a
            narrow pass against thousands. She suffers grievous injury and loses
            everyone she loves, but she lives. And if only her strife ended
            there...
          </TypographyP>
          <TypographyH3>Psyche</TypographyH3>
          <TypographyP>
            Antisocial and lonely. Reluctant to use her power in fear of
            rejection. Deeply hurt by the life she's lead.
          </TypographyP>
        </div>
        <RemembrancePortrait width={200} height={200} img="gate" />
      </div>
      <div className="mt-4 grid grid-cols-8 gap-2">
        <div className="col-span-5">
          <TypographyH2 className="font-old">Histories</TypographyH2>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">Heia, Era Two</TypographyH3>
            <ClockCost num={3} ticks={5} />
          </div>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">Yama, Era Two</TypographyH3>
            <ClockCost num={3} ticks={5} />
          </div>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">The War of Madness</TypographyH3>
            <ClockCost num={3} ticks={5} />
          </div>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">
              The Cataclysm<sup className="text-red-500">*</sup>
            </TypographyH3>
            <ClockCost num={10} ticks={5} />
          </div>
          <span className="text-muted-foreground">
            <sup className="text-red-500">*</sup> suppressed, even by Luciana
          </span>
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
        <TypographyH3 className="mt-0">Ghost of the Grasses</TypographyH3>
        <ClockCost num={4} ticks={5} />
      </div>
      <span className="text-red-500 text-sm font-old">Aldam</span>
      <TypographyP>
        Heian scholars insist that the ancient Torans were the first to discover
        using blood for power. Of course, Gredoran and Kilder scholars dispute
        this and history becomes murky. Regardless of what the scrolls say,
        Luciana learned the Toran Aldams in fits and bursts out of necessity.
        They focus on bodily precision and flow.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Donum Ossis</TypographyH3>
        <ClockCost num={5} ticks={5} />
      </div>
      <span className="text-fuchsia-500 text-sm font-old">
        The Gift of Bones
      </span>
      <TypographyP>
        An enigmatic, stigmatized power. For some, it means they can shape and
        move bones. For others, Luciana included, it means breathing motion back
        into stilled bones. Being a member of the Sisterhood means studying the
        broader implications of this power. Some sisters make grand claims, but
        by Luciana&apos;s estimation, no one understands this strange{" "}
        <b>Donum</b>.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Scars</TypographyH3>
        <ClockCost num={2} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        When forming a new <b>bond</b> or upgrading a <b>bond</b>, mark the{" "}
        <b>Afraid</b> condition. During <b>downtime</b>, if you spend an
        activity alongside a <b>bond</b>, <b>clear a condition</b>.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">
          Archive at the Edge of the World
        </TypographyH3>
        <ClockCost num={2} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        The Sisters have always had a flair for the dramatic. The Archive is
        named after how the ancient Torans thought Tuschmor Peak was the literal
        edge of the world. Now it houses perhaps the largest collection of
        histories in the world.
      </TypographyP>
      <TypographyP>
        You can take this ability multiple times. Each time you do, you may pick
        a pre-cataclysm post-Era-One history and learn an abbreviated version of
        it.
      </TypographyP>
    </>
  );
}
