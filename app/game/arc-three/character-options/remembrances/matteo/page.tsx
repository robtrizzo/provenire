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
    { name: "Frighten", level: [2] },
    { name: "Music (Flute)", level: [1] },
    { name: "Navigate", level: [2, 1] },
    { name: "Stalk", level: [2] },
    { name: "Stubborn", level: [1, 1] },
    { name: "Survival (Desert)", level: [4, 1] },
  ],
  "skill",
);

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
        <div>
          <TypographyH1 className="font-old">Matteo</TypographyH1>
          <span className="text-muted-foreground">Narscillia, Era One</span>
          <TypographyP>
            A kindhearted soul unfit to live a lonesome life is damned to be a
            Relict by cruel chance. Forbidden from close bonds, he metes out a
            miserable existence doing his duty - until life has other plans. By
            sheer chance, he finds a new family and a love. His duty takes him
            away from her time and time again but they always meet again.
          </TypographyP>
          <TypographyP>
            And then life takes her from him. Brutally. Violently. No, it wasn't
            life that did this. People did this. To his dying day, Matteo made
            it his mission to kill every last person he could.
          </TypographyP>
          <TypographyH3>Psyche</TypographyH3>
          <TypographyP>
            Twisted and blackened soul bent on the nihilistic destruction of
            humanity. Will seek to demonstrate humanity's monstrosity - and to
            create it himself to fulfill his own vision of the world.
          </TypographyP>
        </div>
        <RemembrancePortrait width={200} height={200} img="desert" />
      </div>
      <div className="mt-4 grid grid-cols-8 gap-2">
        <div className="col-span-5">
          <TypographyH2 className="font-old">Histories</TypographyH2>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">Narscillia (Era One)</TypographyH3>
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
        <TypographyH3 className="mt-0">Inner Rhythm</TypographyH3>
        <ClockCost num={4} ticks={5} />
      </div>
      <span className="text-red-500 text-sm font-old">Aldam</span>
      <TypographyP>
        Every Narscillian caravan performs a perpetual song. To outsiders it may
        sound like chaotic nonsense. To a child of the music, they never need to
        see in order to know the goings-ons of their company. Narscillian Aldams
        refine this ability even farther, allowing incredible dexterity on
        instruments and keen senses to detect the faintest syncopations to the
        rhythm.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Shadespear</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        Narscillian hunting and combat is a phenomenon of extremes. Shadespear
        is a specialization of one of those extremities; the ability to fight in
        pitch darkness. Not just by using sound, but by weaponizing uncertainty
        itself in the chaos of battle.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Nihilism</TypographyH3>
        <ClockCost num={2} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        Mark the <b>Hopeless</b> condition. You can never clear <b>Hopeless</b>{" "}
        for any reason. As a <b>downtime activity</b>, you may meditate on your
        hatred. If you do, <b>clear a condition</b>.
      </TypographyP>
      <TypographyP>
        Gain an <b>xp trigger</b>:{" "}
        <i>Did you witness evidence of humanity&apos;s intrinsic evil?</i>
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Mantle of Duty</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        As cruel and unfair as the Mantle is to the one wearing it, it is a
        generationally sacred rite. Matteo may have cast his off, but not before
        he lived with it for decades. Duty before Death.
      </TypographyP>
      <TypographyP>
        Name your community and your duty. Remove all of your <b>bonds</b>. You
        are refunded <b>xp clocks</b> to compensate. While doing your duty to
        your community, <b>resisting</b> and <b>pushing yourself</b> costs{" "}
        <b>1 stress</b> less. If you ever form a bond or neglect your duty, you
        lose this ability.
      </TypographyP>
    </>
  );
}
