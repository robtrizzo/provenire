"use client";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import RemembrancePortrait from "../(components)/remembrance-portrait";
import ClockCost from "@/components/clock-cost";
import Action from "../../../play/(components)/action";
import { ActionV3 } from "@/types/arc3";
import { getActions } from "@/lib/actions";

const actions: ActionV3[] = getActions(
  [
    { name: "Metallurgy", level: [3, 2] },
    { name: "Pretense", level: [2] },
    { name: "Sabotage", level: [2, 2] },
    { name: "Study", level: [1, 1] },
    { name: "Survival (Mesa)", level: [1] },
    { name: "Tinker", level: [2] },
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
      <TypographyP>
        Mystics preach the importance of a balanced divine triangle, but this
        was never Issa&apos;s strong suit. He spent near every waking hour
        channeling <b>Mercurial Skull</b>. The brashness that the blood brings
        out of others never seemed to touch Issa. And so he pushed the technique
        to new heights.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Donum Fornax</TypographyH3>
        <ClockCost num={5} ticks={5} />
      </div>
      <span className="text-fuchsia-500 text-sm font-old">
        Gift of the Forge
      </span>
      <TypographyP>
        Of all the worldly gifts, <b>Donum Fornax</b> is second only to{" "}
        <b>Donum Duellum</b> in rarity and power. It is a power which is shaped
        by its wielder; a tool which can be used to build upon itself. The only
        limit is the ingenuity and longevity of the smith.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Art or War</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        Issa&apos;s mind is at war with itself. In his heart of hearts he
        believes that weapons of war are not the answer to the world&apos;s
        problems. The world seems determined to prove otherwise.
      </TypographyP>
      <TypographyP>
        Issa has a six-piece <b>Dissonance clock</b> which starts with{" "}
        <b>three ticks</b>. If the clock ever becomes full, Issa&apos;s
        worldview is shattered and he gives in to the necessity of weaponry.
      </TypographyP>
      <TypographyP>
        You gain a post-mission question:{" "}
        <i>
          Were weapons (or would they have been) the answer to people&apos;s
          problems?
        </i>{" "}
        If yes, tick the <b>Dissonance clock</b>. Otherwise, clear a tick.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">[Art/War]-Works</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        <b>Art</b>
      </TypographyP>
      <TypographyP>
        As a <b>downtime activity</b>, you may spend <b>2 Materials</b> and
        create a beautiful piece of art for someone. If you do,{" "}
        <b>clear a condition</b> and clear a tick from the{" "}
        <b>Dissonance clock</b> (if unlocked).
      </TypographyP>
      <TypographyP>
        <b>War</b>
      </TypographyP>
      <TypographyP>
        As a <b>downtime activity</b>, you may spend <b>2 Materials</b> and
        create a creatively effective weapon for someone. It can have a trait
        selected from <i>flashy, sadistic,</i> or <i>symbolic</i>.
      </TypographyP>
    </>
  );
}
