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
    { name: "Metallurgy", level: [1] },
    { name: "Pretense", level: [1] },
    { name: "Sabotage", level: [1] },
    { name: "Study", level: [1] },
    { name: "Survival (Mesa)", level: [1] },
    { name: "Tinker", level: [1] },
  ],
  "skill",
);

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
        <div>
          <TypographyH1 className="font-old">Issa</TypographyH1>
          <span className="text-muted-foreground">Gredora, Era One</span>
          <TypographyP>
            An unwilling inheritor of the power to forge war machines. A man at
            odds with his family and society for his beliefs. Beliefs which
            ultimately lead to his violent death, as well as the death of his
            caravan at the hands of Rathi hounds.
          </TypographyP>
          <TypographyH3>Psyche</TypographyH3>
          <TypographyP>
            Conviction in art and industry above weapons and war. Deeply
            conflicted and tortured by the choices he made at behest of his
            beliefs. An ego at war with itself: seeking answers, seeking
            resolution.
          </TypographyP>
        </div>
        <RemembrancePortrait width={200} height={200} img="wolves" />
      </div>
      <div className="mt-4 grid grid-cols-8 gap-2">
        <div className="col-span-5">
          <TypographyH2 className="font-old">Histories</TypographyH2>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">Ancient Gredora</TypographyH3>
            <ClockCost num={3} ticks={5} />
          </div>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">Fornax Masterworks</TypographyH3>
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
        <TypographyH3 className="mt-0">Gredoran Aldams</TypographyH3>
        <ClockCost num={4} ticks={5} />
      </div>
      <span className="text-red-500 text-sm font-old">Aldam</span>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Donum Fornax</TypographyH3>
        <ClockCost num={5} ticks={5} />
      </div>
      <span className="text-fuchsia-500 text-sm font-old">
        Gift of the Forge
      </span>
    </>
  );
}
