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
    { name: "Disconnect", level: [1] },
    { name: "Hide", level: [1] },
    { name: "Loyalty", level: [1] },
    { name: "Study", level: [1] },
    { name: "Survival (Mountains)", level: [1] },
    { name: "Survival (Plains)", level: [1] },
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
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Donum Ossis</TypographyH3>
        <ClockCost num={5} ticks={5} />
      </div>
      <span className="text-fuchsia-500 text-sm font-old">
        The Gift of Bones
      </span>
    </>
  );
}
