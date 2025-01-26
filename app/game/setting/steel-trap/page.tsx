import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
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
            above the workforce is <b>The Master</b>, their fearsome foreman who
            weilds power with fear and violence.
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
            <b>runners</b> are sent between, though it is a perilous journey
            into the unknown across the vault doors.
          </TypographyP>
          <FactoryMap />
          <div className="relative mt-4">
            <div
              className="absolute top-0 w-full max-w-[1067px] mx-auto mt-32"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/setting_photos/chamber%201-Bh7FmSEWW0gkyDRHEGNJJ7mbJMUbC0.png"
                alt="room"
                layout="fill"
                objectFit="cover"
                className="rounded-xl opacity-20 z-10"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-xl shadow-fuzzy-inset z-20"></div>
            </div>
            <div className="relative z-30">
              <TypographyH3 id="fabrication" className="mt-4">
                Fabrication
              </TypographyH3>
              <TypographyP>
                This is where our protagonists live. The background noise of
                their home is hissing, buzzing, sawing, grinding, clattering.
                The air is acrid with metal dust and tar smoke. Large chambers
                that may once have been open are now crammed full with
                dilapidated machinery and shanty homes. Workers maintain
                machines that rarely produce the same thing twice.
                Incomprehensible designs added to each next shipment. The floor
                is littered with piles of scrap and debris.
              </TypographyP>
              <TypographyH4>The Bends</TypographyH4>
              <TypographyP>
                A neighborhood built on top of a factory beam that got bent to a
                near right angle at some point in the past. Some elders still
                debate wheter it was an overseer or manufacturing defect that
                caused it. Regardless of the truth, it&apos;s now a community
                landmark.{" "}
                <span className="italic">Rub the bend for good luck.</span>.{" "}
                <b>Gorger</b> and his gang of enforcers rule here. Anyone out of
                line goes missing.
              </TypographyP>
              <TypographyH4>Stairwell</TypographyH4>
              <TypographyP>
                Seventy two flights of stairs from Fab to the Pits. Every corner
                you turn on the stairs has you passing through someone&apos;s
                home. Chains, ladders, and ramshackle platforms decorate the
                vertical neighborhood. This is where the <b>Youngers</b> stake
                their claim: bullying and extorting the most vulnerable for food
                and materials.
              </TypographyP>
              <TypographyH4>Lofts</TypographyH4>
              <TypographyP>
                Thousands of homes arranged on catwalks and platforms above the
                main factory floor. Difficult to tell what was original
                construction and what has been added over the generations.
                It&apos;s warm there, but <b>Amalina</b> and her <b>Shrikes</b>{" "}
                have a habit of dropping from the darkness above and terrorizing
                the community.
              </TypographyP>
              <TypographyH4>Fab Floor</TypographyH4>
              <TypographyP>
                Houses stacked on each other between the machines. Always a
                risky proposition because of the factory&apos;s fickleness. This
                is where the work gets done. Where hands get stained with oil
                and blood. <b>The Scarbacks</b> patrol these streets. Everyone
                works: most get fed. That&apos;s the way of things. No one
                slacks off on their watch. No one makes trouble for Fab. Or
                else.
              </TypographyP>
              <TypographyH2>Weather</TypographyH2>
              <TypographyP>
                The enigmatic factory is so massive and so old that it has
                weather patterns of its own. Some resembles the weather of the
                outside world, to those who know of it. Some is alien and
                foreign and unnatural, though to the factory&apos;s lifelong
                residents, this is just how it is.
              </TypographyP>
              <TypographyH3>Seasons</TypographyH3>
              <TypographyP>
                There is a cold season and a hot season in Fabrication. Each
                lasts some hundred days, according to <b>archivists</b> and the
                overseers; no one keeps track of time except for them. In the
                hot season, work is sweaty and the residences are stuffy and
                humid. In the cold season, many are forced to use shirts and
                smocks for foot-wrappings lest the frigid metal floor turn feet
                solid. In the cold season, the furnaces become packed with folk
                desperate for even a few minutes of warmth. <b>Stokers</b>{" "}
                become the unspoken leaders of the community at this time - a
                point of tension between them and the <b>enforcers</b>.
              </TypographyP>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute bottom-0 w-full max-w-[1067px] mx-auto mb-20"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/setting_photos/nightmare-bOg9E7qZuDtzbt7VJMzeCBJJno3BSK.png"
                alt="room"
                layout="fill"
                objectFit="cover"
                className="rounded-xl opacity-20 z-10"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-xl shadow-fuzzy-inset z-20"></div>
            </div>
            <div className="relative z-30">
              <TypographyH3>Rain</TypographyH3>
              <TypographyP>
                Many of the machines vent steam, smoke, and other acrid gasses
                while they work. Over time, clouds of the vapors accumulate high
                in the rafters&apos; darkness before drizzling back down on the
                workers below. In cold seasons, sometimes it even snows a
                gray-yellow powder.
              </TypographyP>
              <TypographyH3>Constellations</TypographyH3>
              <TypographyP>
                There are times when Fab gently rumbles and shakes. Debris on
                the floor rattles, the scrapyard shifts, and the machines rumble
                and sway. Things slowly come together. A screw fuses into its
                threads; two adjacent machines lock together; liquid forms into
                spheres which can even be held without rupturing.
              </TypographyP>
              <TypographyP>
                A constellation is a special day in Fabrication. The enforcers
                typically sound bells and call everyone to work a shift while
                productivity will be at its highest. Many couples get married in
                constellations, it&apos;s said to bring unity and good fortune
                to the pair. Bestial mothers fret and pray that today won&apos;t
                be the day they birth their litter.
              </TypographyP>
              <TypographyH3>Slumberings</TypographyH3>
              <TypographyP>
                Some days, a fatigue seems to wash over the whole of
                Fabrication. Worker and enforcer alike feels a fuzzy warmth
                beckoning them to bed. Most taskmasters don&apos;t try to fight
                it; they allow a rare holiday from the work and Fabrication
                shuts down until the weather passes.
              </TypographyP>
              <TypographyH3>Dreamstorms</TypographyH3>
              <TypographyP>
                Speculated to be related to <b>slumberings</b>, but much
                different. <b>Operators</b> are tasked with sounding the alarm
                at it&apos;s first signs, though often the storm announces
                itself with it&apos;s characteristic cacophony. As the invisible
                storm moves through the factory, all the workers in its path
                collapse and begin screaming in their sleep.
              </TypographyP>
              <TypographyP>
                Everyone caught in the storm joins each other in a nightmare
                where each individual&apos;s fears are made manifest - and
                deadly. The workers are taught to survive a Dreamstorm&apos;s
                nightmare by harmonizing in thought. For this situation, every
                child is taught a chant to recite together:{" "}
                <i>
                  &quot;By his blood he will shelter us. By his might he will
                  save us.&quot;
                </i>
                .
              </TypographyP>
              <TypographyP>
                Dreamstorms are said to be summoned by music. In the wake of
                one, the enforcers scour Fabrication to find the degenerates
                reckless enough to invite disaster on everyone in the lair.
              </TypographyP>
              <Separator className="my-4" />
            </div>
          </div>
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
