import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import FactoryMap from "@/components/factory-map";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Image from "next/image";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Setting", href: "/game" },
          { name: "Era 3", href: "/setting" },
          { name: "The Steel Trap", href: "#" },
        ]}
      />
      <div className="z-30 relative">
        <div
          className="absolute top-0 w-full max-w-[1067px] mx-auto mt-20"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/setting_photos/chamber%202-G17ZLCzPwvxiGhNIH3F96eLRcxPF9I.png"
            alt="room"
            layout="fill"
            objectFit="cover"
            className="rounded-xl opacity-50 z-10"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-xl shadow-fuzzy-inset z-20"></div>
        </div>
        <div className="relative z-30 flex flex-col">
          <TypographyH1 className="mt-4">The Steel Trap</TypographyH1>
          <TypographyP>
            A factory full of workers pushed to their breaking point. Unlovingly
            named <span className="italic">The Steel Trap</span>, it produces
            munitions for the <span className="italic">Royal Rathi Army</span>.
            Its workers labor among a dangerous matrix of twisted, screeching
            machinery; breathe in the foulness that leaves them dizzy for days;
            and must withstand the casual abuses from the overseers. Towering
            above the workforce is <strong>The Master</strong>, their fearsome
            foreman who weilds power with fear and violence.
          </TypographyP>
          <TypographyP>
            Punishing and brutal work only punctuated by the sleeping hours.
            Workers wake in cramped quarters never meant to house so many. Some
            are lucky enough to live in the dormitories constructed generations
            ago. Most take shelter in cobbled lean-tos fit between, around, and
            above the hissing machines.
          </TypographyP>
          <TypographyP>
            A trustless, friendless place. Just like how children learn to tune
            out the noise of the machines, they no longer hear the{" "}
            <span className="italic">drone</span>. A perpetual low rumble, like
            the factory itself growling an inaudible warning. One that becomes a
            device of control.{" "}
            <span className="italic">&quot;It is natural&quot;</span> they say,{" "}
            <span className="italic">
              &quot;for your body to know your place and bow. It is in your
              blood to serve.&quot;
            </span>
          </TypographyP>
          <TypographyP>
            But even unquestioning obedience doesn&apos;t mean a full belly.
            Food is scarce. Dolled out meagerly by the overseers, and only to
            their most loyal followers. The rest must beg, scrounge, or fight to
            survive.
          </TypographyP>
          <TypographyP>
            But everyday life goes on. The workers push on. Families, friends,
            communities quietly defy their conditioning, defy their overseers,
            defy the <span className="italic">drone</span> and come together to
            make life more bearable for each other. Quietly, secretly, they
            dream of a better future.
          </TypographyP>
          <TypographyH2 className="mt-4">Lairs of the Steel Trap</TypographyH2>
          <TypographyP className="mb-2">
            Within the factory-prison-fortress there are distinct{" "}
            <span className="italic">&quot;sectors&quot;</span>, though the
            workers call them lairs. Each is isolated from its neighbors,
            secured with vault doors and enforcers to guard them. Sometimes{" "}
            <strong>runners</strong> are sent between, though it is a perilous
            journey into the unknown across the vault doors.
          </TypographyP>
          <FactoryMap />
          <TypographyH3 id="fabrication" className="mt-4">
            Fabrication
          </TypographyH3>
          <TypographyP>
            This is where our protagonists live. The background noise of their
            home is hissing, buzzing, sawing, grinding, clattering. The air is
            acrid with metal dust and tar smoke. Large chambers that may once
            have been open are now crammed full with dilapidated machinery and
            shanty homes. Workers maintain machines that rarely produce the same
            thing twice. Incomprehensible designs added to each next shipment.
            The floor is littered with piles of scrap and debris.
          </TypographyP>
          <TypographyP>
            <strong>The Bends</strong>: a neighborhood built on top of a factory
            beam that got bent to a near right angle at some point in the past.
            Some elders still debate wheter it was an overseer or manufacturing
            defect that caused it. Regardless of the truth, it&apos;s now a
            community landmark.{" "}
            <span className="italic">Rub the bend for good luck.</span>.{" "}
            <strong>Gorger</strong> and his gang of enforcers rule here. Anyone
            out of line goes missing.
          </TypographyP>
          <TypographyP>
            <strong>Stairwell</strong>: Seventy two flights of stairs from Fab
            to the Pits. Every corner you turn on the stairs has you passing
            through someone&apos;s home. Chains, ladders, and ramshackle
            platforms decorate the vertical neighborhood. This is where the{" "}
            <strong>Youngers</strong> stake their claim: bullying and extorting
            the most vulnerable for food and materials.
          </TypographyP>
          <TypographyP>
            <strong>Lofts</strong>: Thousands of homes arranged on catwalks and
            platforms above the main factory floor. Difficult to tell what was
            original construction and what has been added over the generations.
            It&apos;s warm there, but <strong>Amalina</strong> and her{" "}
            <strong>Shrikes</strong> have a habit of dropping from the darkness
            above and terrorizing the community.
          </TypographyP>
          <TypographyP>
            <strong>Fab Floor</strong>: Houses stacked on each other between the
            machines. Always a risky proposition because of the factory&apos;s
            fickleness. This is where the work gets done. Where hands get
            stained with oil and blood. <strong>The Scarbacks</strong> patrol
            these streets. Everyone works: most get fed. That&apos;s the way of
            things. No one slacks off on their watch. No one makes trouble for
            Fab. Or else.
          </TypographyP>
          <Separator className="my-4" />
          <div className="w-full flex justify-between">
            <Link href="/game/setting/culture">
              <Button variant="outline">
                <ChevronLeft /> Culture
              </Button>
            </Link>
            <Link href="/game/setting/strange-forces">
              <Button variant="outline">
                Strange Forces <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
