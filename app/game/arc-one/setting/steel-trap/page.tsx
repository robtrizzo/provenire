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
                landmark. <i>Rub the bend for good luck.</i>.
              </TypographyP>
              <TypographyP>
                <u>
                  <b>Landmarks</b>
                </u>
              </TypographyP>
              <TypographyP>
                <b>Kent&apos;s Watering Hole.</b> A social house older than
                grime and set up around a machine that makes miscelanous
                beverages. If that&apos;s what you can call the sludge it pumps
                out some days.
              </TypographyP>
              <TypographyP>
                <b>Tarpit.</b> A generation back it was a thriving neighborhood
                full of life. Some kind of incident burnt the residents alive
                and now it&apos;s encased in still-smoldering tar.
              </TypographyP>
              <TypographyP>
                <u>
                  <b>Notables</b>
                </u>
              </TypographyP>
              <TypographyP>
                <b>Lio.</b> He never talks to anyone, never works, just sulks at
                Kent&apos;s. Rumor is he&apos;s an ex-overseer banished here for
                some kind of capital offense.
              </TypographyP>
              <TypographyP>
                <u>
                  <b>Factions</b>
                </u>
              </TypographyP>
              <TypographyP>
                <b>Gorger&apos;s Sommoliers.</b> A gang of enforcers led by
                Gorger himself. They rule in this neighborhood. Anyone out of
                line goes missing, but anyone Gorger calls friend goes well fed.
              </TypographyP>
              <TypographyH4>Stairwell</TypographyH4>
              <TypographyP>
                Seventy two flights of stairs from Fab to the Pits. Every corner
                you turn on the stairs has you passing through someone&apos;s
                home. Chains, ladders, and ramshackle platforms decorate the
                vertical neighborhood. Dozens of side-entrances and labyrinthine
                pipeways lead from Stairwell to all sorts of places.
              </TypographyP>
              <TypographyP>
                <u>
                  <b>Landmarks</b>
                </u>
              </TypographyP>
              <TypographyP>
                <b>Sevenway.</b> A seven way intersection of pipeways large
                enough to house the closest thing Fabrication has to a market.
                If anything has gone missing, odds are it ends up here.
              </TypographyP>
              <TypographyP>
                <b>The Proving Chamber.</b> A colloseum made of twisted pipes
                and small viewports from all directions. The terrain is uneven
                with a variety of scorching hot and freezing cold pipes creating
                an interesting battlefield that changes a bit every time the
                machines decide to shift.
              </TypographyP>
              <TypographyP>
                <u>
                  <b>Notables</b>
                </u>
              </TypographyP>
              <TypographyP>
                <b>Hichem.</b> A talented and well sourced smith; one of the
                wealthiest men in all of Fabrication. He puts on a humble
                facade, but his eight wives and high prices tell a different
                story.
              </TypographyP>
              <TypographyP>
                <b>Adwil.</b> An unassuming guy at first glance. But word is
                he&apos;s actually a runner - and a smuggler on top of that. Is
                he double-timing or triple-timing or he in such deep shit that
                he should simply be avoided?
              </TypographyP>
              <TypographyP>
                <u>
                  <b>Factions</b>
                </u>
              </TypographyP>
              <TypographyP>
                <b>The Youngers.</b> They stake their claim to Stairwell. They
                bully and extort the most vulnerable for food and materials.
                Their leader, Warner, is a callous - no - psychopathic bastard.
                He&apos;s ambitious and actively making waves in Fabrication.
              </TypographyP>
              <TypographyH4>Lofts</TypographyH4>
              <TypographyP>
                Thousands of homes arranged on catwalks and platforms above the
                main factory floor. Difficult to tell what was original
                construction and what has been added over the generations. There
                are warm patches and a level of security, but the proximity to
                the upper beast lanes is worth wondering about.
              </TypographyP>
              <TypographyP>
                <u>
                  <b>Landmarks</b>
                </u>
              </TypographyP>
              <TypographyP>
                <b>Southside.</b> An area more sheltered from the <b>Shrikes</b>
                , and right above the furnace vents, so it&apos;s a bit warmer.
                Protected by metal gates and a consistent patrol.
              </TypographyP>
              <TypographyP>
                <b>Bell&apos;s Chute.</b> An expansive cyllindrical opening in
                the rafters that extends far past where the eye can see.
                Presumably where Amalina and her flock lives.
              </TypographyP>
              <TypographyP>
                <u>
                  <b>Notables</b>
                </u>
              </TypographyP>
              <TypographyP>
                <b>Sire Cyber.</b> A priest to the <b>Well God</b>. He often
                stands on the precipice of the Lofts and preaches to the workers
                below. His words have even swayed the enforcers from time to
                time.
              </TypographyP>
              <TypographyP>
                <u>
                  <b>Factions</b>
                </u>
              </TypographyP>
              <TypographyP>
                <b>Moore&apos;s Gang.</b> Also called Moore&apos;s Clan. Or
                family. Whatever. They don&apos;t really have a name and Moore
                likes it that way. It&apos;s just a group of people who live in
                the Southside. Moore has a simple set of rules: pay your dues,
                receive your protection.
              </TypographyP>
              <TypographyP>
                <b>Shrikes.</b> Hardly anyone knows the members by name, but
                they know not to run when they hear the calls. Anyone who does
                gets pounced on and interrogated, or worse. The Shrikes will
                even tear someone&apos;s home to shreds if they spot them
                running inside.
              </TypographyP>
              <TypographyH4>Fab Floor</TypographyH4>
              <TypographyP>
                Houses stacked on each other between the machines. Always a
                risky proposition because of the factory&apos;s fickleness. This
                is where the work gets done. Where hands get stained with oil
                and blood.
              </TypographyP>
              <TypographyP>
                <u>
                  <b>Landmarks</b>
                </u>
              </TypographyP>
              <TypographyP>
                <b>Loading Bay</b>. The destination for everything produced in
                Fabrication. A confusing tangle of shelves, compartments, and
                vats. On delivery days, the workers anxiously crowd the closed
                blast doors. When they open again, all the materials are gone
                and a palatte of food is in its place.
              </TypographyP>
              <TypographyP>
                <b>Tara</b>. An immense machine at the center of Fabrication
                which is also the floor itself for a decent swath of the area.
                Tara is notoriously tempermental and requires offerings to keep
                her happy.
              </TypographyP>
              <TypographyP>
                <u>
                  <b>Notables</b>
                </u>
              </TypographyP>
              <TypographyP>
                <b>Lester Aurus</b>. An operator who has garnered a &quot;tough
                but fair&quot; reputation. More days than not, she&apos;s
                adjudicating personal and familial disputes while she works. For
                a fee, of course.
              </TypographyP>
              <TypographyP>
                <b>Minamo</b>. An elderly woman and most famous dire wife in
                Fabrication. No one has dared try claim her hand in marriage
                since she made quite the example out of her eighth husband.
                She&apos;s an icon of the community and tends to her massive
                family, which is nearly a gang unto itself.
              </TypographyP>
              <TypographyP>
                <u>
                  <b>Factions</b>
                </u>
              </TypographyP>
              <TypographyP>
                <b>The Scarbacks</b> They patrol the Floor&apos;s streets.
                Everyone works: most get fed. That&apos;s the way of things. No
                one slacks off on their watch. No one makes trouble for Fab. Or
                else. Their leader Enzo thinks of himself as a peacemaker in
                Fabrication. He&apos;s as likely to order his thugs to protect a
                worker as he is to order them to hand them over to the
                overseers.
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
            <Link href="/game/arc-one/setting/culture">
              <Button variant="outline">
                <ChevronLeft /> Culture
              </Button>
            </Link>
            <Link href="/game/arc-one/setting/strange-forces">
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
