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
    { name: "Connect", level: [2, 2] },
    { name: "Galvanize", level: [1, 1] },
    { name: "Initiate", level: [2] },
    { name: "Music (Sing)", level: [3] },
    { name: "Skirmish", level: [2] },
    { name: "Survival (Desert)", level: [2] },
  ],
  "skill"
);

export default function Page() {
  return (
    <>
      {" "}
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
        <div>
          <TypographyH1 className="font-old mb-2">Zephyr</TypographyH1>
          <span className="text-muted-foreground">Narscillia, Era One</span>
          <TypographyP>
            A young girl with power over the wind; and also stalked by tragedy.
            As her power grows, so too do the attacks on her and those near her
            by creatures of the night. A half decade of escalating conflict
            culminates in a final confrontation with the God of Night and Stars
            which altered the very terrain of her home.
          </TypographyP>
          <TypographyH3>Psyche</TypographyH3>
          <TypographyP>
            Adventurous, restless. Willing to love and be loved, even if that
            means the risk of losing them. Eager to use a power which is immense
            and difficult to control.
          </TypographyP>
        </div>
        <RemembrancePortrait width={200} height={200} img="stars" />
      </div>
      <div className="mt-4 grid grid-cols-8 gap-2">
        <div className="col-span-5">
          <TypographyH2 className="font-old">Histories</TypographyH2>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">Narscillia (Era One)</TypographyH3>
            <ClockCost num={3} ticks={5} />
          </div>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">God of Night and Stars</TypographyH3>
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
        <TypographyH3 className="mt-0">Inner Rhythm</TypographyH3>
        <ClockCost num={4} ticks={5} />
      </div>
      <span className="text-red-500 text-sm font-old">Aldam</span>
      <TypographyP>
        The perpetual song isn&apos;t just an act of pragmatism. It&apos;s a way
        of life. It tells the ever-evolving story of a caravan&apos;s hopes and
        dreams and strifes. Narscillian Aldams keep the ears keen to the nuances
        of the rhythm, yes. But they can also open the heart to the raw emotions
        of your fellows&apos; music.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Donum Ventus</TypographyH3>
        <ClockCost num={5} ticks={5} />
      </div>
      <span className="text-fuchsia-500 text-sm font-old">
        The Gift of Wind
      </span>
      <TypographyP>
        A rare power, and never before seen with the strength which Zephyr
        wielded it. Desert wind is a spiteful spirit turned capable and
        especially cruel by gusts and torrents. Taming this force of nature is
        far harder a task than stoking it into a storm.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Blazing Arrow</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        There is an art to following Mother Sun&apos;s warmth. She paints lines
        to quarry, though you must turn your back on her to see them. She warms
        your shelter though she must go before you rest.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Animal Empath</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        As a <b>downtime activity</b> you can spend <b>1 Food</b> and care for
        an animal. If you do, <b>clear a condition</b>.
      </TypographyP>
      <TypographyP>
        You may form <b>bonds</b> with animals. When you do, you form an
        empathic connection with which emotions can be transmitted.
      </TypographyP>
    </>
  );
}
