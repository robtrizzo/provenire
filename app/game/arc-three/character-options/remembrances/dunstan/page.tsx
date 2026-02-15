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
    { name: "Botany", level: [3, 1] },
    { name: "Drama", level: [2] },
    { name: "Mathematics", level: [1] },
    { name: "Obfuscate", level: [2, 1] },
    { name: "Poetry", level: [2] },
    { name: "Stubborn", level: [2, 2] },
  ],
  "skill",
);

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
        <div>
          <TypographyH1 className="font-old">Dunstan Prisca</TypographyH1>
          <span className="text-muted-foreground">
            Argos, post the cataclysm (OSG) and pre Fenrir&apos;s rise.
          </span>
          <TypographyP>
            A peaceful soul disinterested in duty or strife - instead fostering
            a love for art and growing things. A heartbreaking betrayal forces
            him to pursue familial ambitions. After years of conditioning, he
            demonstrates to all that he cannot be made into someone he is not.
          </TypographyP>
          <TypographyH3>Psyche</TypographyH3>
          <TypographyP>
            A distaste for work, struggle, or responsibility. You will need to
            work very hard to convince or coerce this legend into aiding you.
            But, when it comes to artistic and peaceful pursuits, you will find
            a willing and talented friend.
          </TypographyP>
        </div>
        <RemembrancePortrait width={200} height={200} img="flower" />
      </div>
      <div className="mt-4 grid grid-cols-8 gap-2">
        <div className="col-span-5">
          <TypographyH2 className="font-old">Histories</TypographyH2>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">Argos (Post Cataclysm)</TypographyH3>
            <ClockCost num={3} ticks={5} />
          </div>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">Helix</TypographyH3>
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
        <TypographyH3 className="mt-0">Potentia Humanitas</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-red-500 text-sm font-old">Aldam</span>
      <TypographyP>
        The other Argosi great houses jeer and shame Prisca for debasing
        themselves so low to drinking blood. So the House Prisca heads spent
        considerable effort to dress up and civilize the use of barbaric
        techniques. They even named the Aldam{" "}
        <i>&quot;Might of Civilization&quot;</i> to appeal to noble
        sensibilities.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Donum Dolus</TypographyH3>
        <ClockCost num={5} ticks={5} />
      </div>
      <span className="text-fuchsia-500 text-sm font-old">
        The Gift of Deception
      </span>
      <TypographyP>
        <b>Donum Dolus</b> is a unique power in its many aspects. Some
        contribute more than others to House Prisca&apos;s frightening
        reputation. Dunstan isn&apos;t skilled at those dimensions, nor is he
        interested in changing that. Instead, he has honed his skills
        exclusively in <i>glammers</i>.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Mason&apos;s Method</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        A school of combat centered around heavy sledges and hammers. Far too
        much effort for Dunstan; he never participated in lessons, though he was
        forced to watch some.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Dilettante&apos;s Ego</TypographyH3>
        <ClockCost num={2} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        You cannot be made to doubt your sense of identity or what you want.
        Replace the <b>Insecure</b> condition with <b>Disinterested</b>. You
        gain an <b>xp trigger:</b>{" "}
        <i>Did you unapolagetically pursue your desires?</i>
      </TypographyP>
      <TypographyBlockquote>
        <b>Disinterested:</b> clear with <b>1 Food</b> or <b>1 Material</b>, and
        by refusing to do something important asked of you.
      </TypographyBlockquote>
    </>
  );
}
