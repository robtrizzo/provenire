import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import Blood from "@/components/ui/blood";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Image from "next/image";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="z-30 relative">
        <div
          className="absolute top-0 w-full max-w-[1067px] mx-auto"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/flag-eTMWBOcjL16fuexA4YFn25cUTIIOmg"
            alt="room"
            layout="fill"
            objectFit="cover"
            className="rounded-xl opacity-30 z-10"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-xl shadow-fuzzy-inset z-20"></div>
        </div>
        <div className="relative z-30 flex flex-col">
          <TypographyH1>
            <span className="italic">Provenire</span>, Era 3
          </TypographyH1>
          <TypographyH2 className="mt-4">Rath</TypographyH2>
          <TypographyP>
            The world of bygone ages, its lands, peoples, history: it&apos;s all
            gone. Cycle after cycle, slowly devoured by the ever-ravenous{" "}
            <strong>Rathi Empire</strong> and its God King. Rath is mighty. Rath
            is eternal. Rath is all that is left, save for a desperate few who
            struggle for survival in the world&apos;s fringes...{" "}
            <span className="italic">
              or so they say within the King&apos;s reaches
            </span>
            .
          </TypographyP>
          <TypographyH2 id="kingwulf" className="mt-4">
            Kingwulf
          </TypographyH2>
          <TypographyP>
            Immortal God King of the <strong>Rathi Empire</strong>. They{" "}
            <span className="italic">say</span> he has been King since the day
            the world came to be. They <span className="italic">say</span> he
            gifted the sun, the wind, the soil, fire and most importantly{" "}
            <Blood /> to all. The <span className="italic">say</span> he takes
            the form of a massive wolf, the like of which causes the earth to
            tremble and his bloodline to fall in worship. They{" "}
            <span className="italic">say</span> that it is by his eternal love
            that the world strives on day after day. They{" "}
            <span className="italic">say</span> that one day, he will bless the
            world one final time when he devours it.
          </TypographyP>
          <TypographyH2 id="liberty-city" className="mt-4">
            Liberty City
          </TypographyH2>
          <TypographyP>
            Our story begins in <strong>Vizgod</strong>, a territory of the{" "}
            <strong>Rathi Empire</strong> characterized by a forest of massive
            pines stretching a mile high or more. Oversized and deadly predators
            roam these wildlands. In <strong>Vizgod</strong> are a few cities,
            but our story takes place in <strong>Liberty City</strong>.
            It&apos;s a sprawling industrial affair. Some compare it to a prison
            more than a city, since fleeing into the{" "}
            <strong>Titan Pines</strong> is almost certain death.{" "}
            <span className="italic">
              But our protagonists know nothing of Vizgod or its hostile
              environment. They only know the dark chambers of their home.
            </span>
          </TypographyP>
          <TypographyP>
            Within <strong>Liberty City</strong> there are those{" "}
            <span className="italic">with</span> and those{" "}
            <span className="italic">without</span>. Half shanty town half
            factory district, <strong>The Kennels</strong> are one such place
            for the ones <span className="italic">without</span>. Thick smoke
            chokes the streets, King&apos;s Guards prowl and devour anyone out
            of line, and the overseers maintain their vice grip on the food
            supply.
          </TypographyP>
          <TypographyP>
            The source of smoke in the streets, the reason for punitive overseer
            patrols, the dark splotch in <strong>The Kennel&apos;s</strong>{" "}
            skyline is the <strong>Steel Trap</strong>. A munitions factory for
            the <strong>Royal Rathi Army</strong>. A truly miserable and
            hopeless place. This is where our protagonists come in. They are the
            unluckiest of the unlucky wretches in this wretched town, in a
            wretched city, in a wretched forest, in a wretched empire.{" "}
            <span className="italic">
              But our protagonists know nothing of the slick city streets or its
              shanty towns. They only know screeching pipes and roaring
              furnaces.
            </span>
          </TypographyP>
          <Separator className="my-4" />
          <div className="w-full flex justify-between">
            <Link href="/game">
              <Button variant="outline">
                <ChevronLeft /> Introduction
              </Button>
            </Link>
            <Link href="/game/arc-one/setting/culture">
              <Button variant="outline">
                Culture <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
