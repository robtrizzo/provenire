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
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
        <div>
          <TypographyH1 className="font-old mb-1.5">Engel Otto</TypographyH1>
          <span className="text-muted-foreground">
            Ulgatia, post the cataclysm (OSG) and pre Fenrir&apos;s rise.
          </span>
          <TypographyP>
            A boy with humble beginnings discovers his generational talent with
            the sword. Arrogance overtakes him with a meteoric rise of
            reputation. A humbling moment changes his heart, shaping him into a
            dedicated mentor. When Rath finally comes for his city, his sword
            skills spare his life, though he spent the rest of his days a slave
            in the Steel Trap.
          </TypographyP>
          <TypographyH3>Psyche</TypographyH3>
          <TypographyP>
            A wise, learned mentor. Someone who wishes to help the next
            generation eschew their arrogance and achieve to their highest
            potential. A deep melancholy, and a deeper hatred for the Rathi.
          </TypographyP>
        </div>
        <RemembrancePortrait width={200} height={200} img="chain" />
      </div>
      <TypographyH2 className="font-old">Abilities</TypographyH2>
      <div className="mt-4 flex items-center gap-4">
        <TypographyH3 className="mt-0">
          Blood of the Body{" "}
          <Link href="/game/arc-three/character-options/aldams/blood-of-the-body">
            <span className="text-sm underline text-red-500 font-bold">
              details <ChevronRight className="inline-block mb-1" size={16} />
            </span>
          </Link>
        </TypographyH3>
      </div>
      <span className="text-red-500 text-sm font-old">Aldam</span>
      <TypographyP>
        Rooted in ancient Gredoran Aldams and deeply influenced by{" "}
        <b>Donum Sangius</b>, the Ulgatian Aldams are uniquely capable of
        altering the properties of blood. Additionally, Ulgatians all
        contributed to a blood tithe; and so out of necessity, learned to use
        their Aldams efficiently.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">
          Kiss of the Viper{" "}
          <Link href="/game/arc-three/character-options/fighting-styles#Kiss%20of%20the%20Viper">
            <span className="text-sm underline text-red-500 font-bold">
              details <ChevronRight className="inline-block mb-1" size={16} />
            </span>
          </Link>
        </TypographyH3>
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        Proximity and close alliegances to Bwarhei brough together two disparate
        combat arts into something unique and new. Practitioners are as much
        alchemist as they are warrior, seeking vital regions to deliver deadly
        poisons harvested from the jungle.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">
          Desert Fan{" "}
          <Link href="/game/arc-three/character-options/fighting-styles#Desert%20Fan">
            <span className="text-sm underline text-red-500 font-bold">
              details <ChevronRight className="inline-block mb-1" size={16} />
            </span>
          </Link>
        </TypographyH3>
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        A swordstyle inspired by Narscillian dances popular in Ulgatia. Warriors
        twirl their weapons in a perpetual dance that is fairly immobile but
        found to be effective at holding ground.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">
          Horizon's Edge{" "}
          <Link href="/game/arc-three/character-options/fighting-styles#Horizon's%20Edge">
            <span className="text-sm underline text-red-500 font-bold">
              details <ChevronRight className="inline-block mb-1" size={16} />
            </span>
          </Link>
        </TypographyH3>
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        This fighting style is quintessentially Ulgatian. It relies on heavy use
        of Aldams to end a battle in a single decisive strike.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Ulgatia (Post Cataclysm)</TypographyH3>
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
