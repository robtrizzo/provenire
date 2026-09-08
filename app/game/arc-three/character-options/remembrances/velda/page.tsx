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
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const actions: ActionV3[] = getActions(
  [
    { name: "Berate", level: [1, 1] },
    { name: "Challenge", level: [3] },
    { name: "Comfort", level: [2, 1] },
    { name: "Frighten", level: [2] },
    { name: "Prowl", level: [2] },
    { name: "Survival (Jungle)", level: [2, 2] },
  ],
  "skill",
);

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
        <div>
          <TypographyH1 className="font-old">Velda</TypographyH1>
          <span className="text-muted-foreground">Fenrir, post-Cataclysm</span>
          <TypographyP>
            A wolf desperate to save her infant son from the Owl. The foul
            creature sends her on a journey to steal Kingwulf's flame. Protected
            by her burning love for her son, she consumes the flame and returns
            to the Owl, who returns her son to her. But victory is short lived.
            Kingwulf rampages through the jungle, kills the foul Owl, and seals
            Velda away in the deepest, darkest dungeon in his empire.
          </TypographyP>
          <TypographyH3>Psyche</TypographyH3>
          <TypographyP>
            Heartbreak, loneliness, and a deep capacity for sacrifice.
            Protective of children and hateful of monsters. An ocean of magma
            threatens to consume her if she ever lets go of her love for her
            son.
          </TypographyP>
        </div>
        <RemembrancePortrait width={200} height={200} img="crow" />
      </div>
      <TypographyH2 className="font-old">Abilities</TypographyH2>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">
          Donum Rex{" "}
          <Link href="/game/arc-three/character-options/transformations/donum-rex">
            <span className="text-sm underline text-red-500 font-bold">
              details <ChevronRight className="inline-block mb-1" size={16} />
            </span>
          </Link>
        </TypographyH3>
      </div>
      <span className="text-orange-500 text-sm font-old">Gift of the King</span>
      <TypographyP>
        Not only a wolf, but a child of <b>Kingwulf</b> himself. Velda never met
        her father before nearly dying to his rampage, but the power of his
        blood runs through her veins.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">
          Donum Ignis{" "}
          <Link href="/game/arc-three/character-options/donums/donum-ignis">
            <span className="text-sm underline text-red-500 font-bold">
              details <ChevronRight className="inline-block mb-1" size={16} />
            </span>
          </Link>
        </TypographyH3>
      </div>
      <span className="text-fuchsia-500 text-sm font-old">
        The Gift of Fire
      </span>
      <TypographyP>
        Consuming <b>Kingwulf&apos;s</b> flame endowed Velda with an incredible
        power, though one which threatens to consume her. Love is her bastion
        against the sweltering fire. And now that she has passed the flame on to
        you, love must be your shield too.
      </TypographyP>
      <TypographyP>
        Whenever <b>time passes</b> and whenever you run out of{" "}
        <b className="text-red-500">blood</b>, you take a{" "}
        <b>level 2 harm: heartburn</b>. You may only <b>resist</b> this with{" "}
        <b>bonds</b>.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">
          Throatgore{" "}
          <Link href="/game/arc-three/character-options/fighting-styles#Throatgore">
            <span className="text-sm underline text-red-500 font-bold">
              details <ChevronRight className="inline-block mb-1" size={16} />
            </span>
          </Link>
        </TypographyH3>
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        Any self-respecting mother teaches her pups to hunt in the pack. And
        Velda comes from a long line of powerful mothers. They also taught her
        that there&apos;s more to <b>Throatgore</b> than the hunt.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Ferocious Protector</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        When protecting children, you may <b>push yourself</b> for free and no
        amount of <b>harms</b> can take you out of the fight.
      </TypographyP>
      <TypographyP>
        You gain an <b>xp trigger:</b>{" "}
        <i>Did you save children from monsters?</i>
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Fenrir (Post Cataclysm)</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-sky-500 text-sm font-old">History</span>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">
          Kingwulf&apos;s Court (Post Cataclysm)
        </TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-sky-500 text-sm font-old">History</span>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">The Steel Trap</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-sky-500 text-sm font-old">History</span>
    </>
  );
}
