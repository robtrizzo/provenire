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
    { name: "Authority", level: [2] },
    { name: "Candor", level: [1, 1] },
    { name: "Consort", level: [3] },
    { name: "Coordinate", level: [3] },
    { name: "Loyalty", level: [2, 1] },
    { name: "Manipulate", level: [2, 2] },
  ],
  "skill",
);

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
        <div>
          <TypographyH1 className="font-old">Takota</TypographyH1>
          <span className="text-muted-foreground">Gredora, Era One.</span>
          <TypographyP>
            An adopted son of a Gredoran Duke, ever prideful, even patriotic,
            ever ready to prove himself. A lifetime of ambition and burned
            bridges culminates in a choice between country and family. A choice
            which the Gredoran Son rejects, instead sacrificing himself for a
            chance to save it all - for a chance at redemption.
          </TypographyP>
          <TypographyH3>Psyche</TypographyH3>
          <TypographyP>
            Driven. Capable. Arrogant. Shaken that the world may not be black
            and white. Unsure of who he wants to be, but he must become great.
          </TypographyP>
        </div>
        <RemembrancePortrait width={200} height={200} img="volcano" />
      </div>
      <div className="mt-4 grid grid-cols-8 gap-2">
        <div className="col-span-5">
          <TypographyH2 className="font-old">Histories</TypographyH2>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">Gredora (Era One)</TypographyH3>
            <ClockCost num={3} ticks={5} />
          </div>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">
              Ghodbane&apos;s Campaign
            </TypographyH3>
            <ClockCost num={6} ticks={5} />
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
      <TypographyP>
        A dedicated student, Takota mastered the fundamentals of all three
        points of his divine triangle from an early age. It&apos;s easy for some
        to scoff at tradition, but faithfully maintaining a balance between the
        three points unlocks a higher potential in all aspects.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Phalanx</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        Shield-spear formations require intense training and fundamental trust
        in your flankmates. When coordinated precisely, Gredoran phalanxes have
        ground much larger forces to dust.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Ambition</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        Name an <i>ambition to greatness</i> for yourself. When in direct
        pursuit of your ambition, you may seek <b>the devil&apos;s bargain</b>{" "}
        in addition to <b>pushing yourself</b>.
      </TypographyP>
      <TypographyP>
        You gain an <b>xp trigger:</b> <i>Did you receive personal glory?</i>
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Cutthroat Politics</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        Some run away from politics. Some lack the necessary constitution to
        sieze what they want. Takota never balked when an opportunity presented
        itself.
      </TypographyP>
      <TypographyP>
        When you want to force someone to do what you want, you may burn a
        mutual <b>bond</b>. You receive <b>xp clocks</b> to compensate. Tell us
        how your long-running manipulation or betrayal gets you what you want.
      </TypographyP>
    </>
  );
}
