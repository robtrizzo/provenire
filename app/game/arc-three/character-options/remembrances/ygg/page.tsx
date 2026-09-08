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
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
            Monsters flock to Ygg's safety.
          </TypographyP>
          <TypographyH3>Psyche</TypographyH3>
          <TypographyP>
            Bestial and primal. Wounded and lonely. Instinctually drives others
            away with fear. Motivated by rage and revenge.
          </TypographyP>
        </div>
        <RemembrancePortrait width={200} height={200} img="noose" />
      </div>
      <TypographyH2 className="font-old">Abilities</TypographyH2>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">
          Donum Portentum{" "}
          <Link href="/game/arc-three/character-options/transformations/donum-portentum">
            <span className="text-sm underline text-red-500 font-bold">
              details <ChevronRight className="inline-block mb-1" size={16} />
            </span>
          </Link>
        </TypographyH3>
      </div>
      <span className="text-orange-500 text-sm font-old">
        Gift of the Monster
      </span>
      <TypographyP>
        The definition of <b>Donum Portentum</b> has changed over the millenia.
        Its edges are more determined by <b>Kingwulf&apos;s</b> arbitrary
        exclusion than any sort of meaningful category to attribute. But if
        there were one, Ygg would fit. His shape is not recognizably animal or
        beast like they are commonly understood. He is a knot of primal flesh
        bent on destruction.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">
          Backsnap{" "}
          <Link href="/game/arc-three/character-options/fighting-styles#Backsnap">
            <span className="text-sm underline text-red-500 font-bold">
              details <ChevronRight className="inline-block mb-1" size={16} />
            </span>
          </Link>
        </TypographyH3>
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        Far before the fighting style was ever coined or practiced, it existed
        in nature. It is the brute strength predators rip their quarry apart
        with. This is the only way Ygg understands combat. Two things smash into
        each other, and he emerges with a full belly.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Lonely</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        Solitude is survival. Others are threats. Especially close ones.
        They&apos;re just clever predators waiting for their chance to pounce.
        Replace the <b>Afraid</b> condition with <b>Lonely</b>. As a{" "}
        <b>downtime activity</b> you may drive others away from you. If you do,
        mark <b>Lonely</b> to clear two other conditions.
      </TypographyP>
      <TypographyBlockquote>
        <b>Lonely:</b> clear by advancing a <b>bond</b>.
      </TypographyBlockquote>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Savage Instinct</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        You may overcome any source of coersion or deception by marking the{" "}
        <b>Angry</b> condition and attacking the source of the effect.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">The Bwarhein</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-sky-500 text-sm font-old">History</span>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Kingwulf&apos;s Jaws</TypographyH3>
        <ClockCost num={2} ticks={5} />
      </div>
      <span className="text-sky-500 text-sm font-old">History</span>
    </>
  );
}
