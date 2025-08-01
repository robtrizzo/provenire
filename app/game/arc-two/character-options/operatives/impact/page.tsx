import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import OpPortrait from "../(components)/operative-portrait";
import ClockCost from "../(components)/clock-cost";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
        <div>
          <TypographyH1 className="font-cyber">Impact</TypographyH1>
          <span className="text-sm text-muted-foreground font-cyber">
            Arrogant, short-tempered, always ready to fight.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Bravado</b> Maintain
            confidence even in the face of overwhelming odds.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              3MI Environmental Sleeve Adaptor &quot;Underdog&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Impact</span> fits in the niche of
            comedic relief and team mascot. Fans love to see the arrogant
            tryhard blown away, but stand back up ready to brawl again.{" "}
            <span className="font-cyber">Impact&apos;s</span> job is to be the
            one who never gives up, no matter how many times they get knocked
            down.
          </TypographyP>
        </div>
        <OpPortrait
          width={200}
          height={200}
          name="Impact"
          className="rounded-md mx-auto lg:mx-0"
        />
      </div>
      <TypographyP className="text-lg font-bold font-cyber">
        During missions Root may ask you to...
      </TypographyP>
      <TypographyUnorderedList>
        <li>Jump on a grenade to save a teammate</li>
        <li>Punch an oncoming truck</li>
        <li>Stand back up when you&apos;d rather stay down or crawl away</li>
        <li>Wisecrack in the face of death</li>
        <li>Start a fight with the big guy</li>
      </TypographyUnorderedList>
      <TypographyH2 className="font-cyber">
        Environmental Sleeve Adaptor &quot;Underdog&quot;
      </TypographyH2>
      <div className="flex gap-3 ml-2 mt-1 font-cyber text-muted-foreground text-sm flex-wrap">
        <span className="text-amber-500">3MI</span>
        <span>|</span>
        <span className="text-red-500">Gentech, Holotech, Neurotech</span>
      </div>
      <TypographyP>
        Extreme sports are a core part of{" "}
        <span className="font-cyber">3MI&apos;s</span> brand. The corp has
        invested decades into more and more sophisticated chrome to create more
        spectacular, nail biting events. <b>Harys</b>,{" "}
        <span className="font-cyber">Root&apos;s</span> head of research and
        development, has creatively combined and upgraded a few sporting
        cybermods, resulting in what he has coined the{" "}
        <span className="font-cyber">&quot;Underdog&quot;</span>.
      </TypographyP>
      <TypographyP>
        The <span className="font-cyber">&quot;Underdog&quot;</span> is an
        interesting piece of cyberware; it powers up over the course of a
        conflict (or what would have been a sporting match). It reaches full
        potential only after <span className="font-cyber">Impact</span> has
        received a serious beating. That being said, the{" "}
        <span className="font-cyber">&quot;Underdog&quot;</span> is quite
        effective at making sure <span className="font-cyber">Impact</span>{" "}
        survives to that point.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Tough It Out</TypographyH3>
        <ClockCost num={0} />
      </div>
      <TypographyP>
        The <span className="font-cyber">Environmental Sleeve Adaptor</span> was
        adapted from extreme sporting cyberware, which in turn was adapted from
        cyberware for extreme environments.{" "}
        <span className="font-cyber">Impact&apos;s</span> environment is most
        blunt force trauma and explosions. So the{" "}
        <span className="font-cyber">&quot;Underdog&quot;</span> has been tuned
        for exactly that.
      </TypographyP>
      <TypographyP>
        Propretary holofield projectors dampen incoming lethal force, making{" "}
        <span className="font-cyber">Impact</span> much more durable than they
        may appear. <span className="font-cyber">Impact&apos;s</span>{" "}
        <b>harm tracker</b> contains three slots for each of{" "}
        <b>level one, two, and three harms</b>.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Hurt Me Once...</TypographyH3>
        <ClockCost num={2} />
      </div>
      <TypographyP>
        A key part of the{" "}
        <span className="font-cyber">&quot;Underdog&apos;s&quot;</span>{" "}
        underlying tech is its ability to adapt to its environment. This
        doesn&apos;t just mean tweaking things on the ripperdoc table, this
        chrome can make adjustments on the fly.
      </TypographyP>
      <TypographyP>
        When <span className="font-cyber">Impact</span> marks a <b>harm</b>,
        note the source. Consecutive <b>harms</b> from that source are{" "}
        <b>one level lower</b>.{" "}
        <span className="font-cyber">&quot;Underdog&quot;</span> can mitigate up
        to three sources in this way.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Maximum Effort</TypographyH3>
        <ClockCost num={3} />
      </div>
      <TypographyP>
        Once <span className="font-cyber">Impacts</span> have had some
        experience feeling the effects of{" "}
        <span className="font-cyber">&quot;Underdog&apos;s&quot;</span>
        dampening field, they may notice the latent vibration in the cybermod
        thereafter. They aren&apos;t imagining things; that blunted energy has
        to go somewhere. It&apos;ll slowly disperse via the vibrations if left
        alone. Or it could be harnessed by a canny{" "}
        <span className="font-cyber">Impact</span>.
      </TypographyP>
      <TypographyP>
        Once all of <span className="font-cyber">Impact&apos;s</span>{" "}
        <b>level two harms</b> have been filled, the{" "}
        <span className="font-cyber">&quot;Underdog&quot;</span> has stored
        enough energy to enhance the sleeve, allowing powerful movements and
        strikes.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Indominable</TypographyH3>
        <ClockCost num={3} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Hurt Me Once...
      </span>
      <TypographyP>
        The difference between a dead <span className="font-cyber">Impact</span>{" "}
        and one that manages to stick around is how well they make use of the
        dampening field. Doing that effectively takes practice, dangerous
        practice.
      </TypographyP>
      <TypographyP>
        At the moment of damaging impact,{" "}
        <span className="font-cyber">Impact</span> can twist and spin to
        distribute the force across more of the dampening field&apos;s surface
        area. Doing so allows them to split up a <b>harm</b> into multiple
        lesser <b>harms</b> totaling the original.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Unlock Potential
        </TypographyH3>
        <ClockCost num={5} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Maximum Effort
      </span>
      <TypographyP>
        Once the <span className="font-cyber">&quot;Underdog&quot;</span>{" "}
        absorbs a critical amount of energy, it begins dispelling it into the
        air in an attempt to make room for more. This creates a shimmering heat
        effect around <span className="font-cyber">Impact</span>. A visual
        indicator that they are now at their strongest.
      </TypographyP>
      <TypographyP>
        When <span className="font-cyber">Impact&apos;s</span>{" "}
        <b>harm tracker</b> is full, they can harness the stored energy in{" "}
        <span className="font-cyber">&quot;Underdog&quot;</span> to unlock
        superhuman strength and speed for a scene. If they would take another
        hit before doing so,{" "}
        <span className="font-cyber">&quot;Underdog&quot;</span> overloads
        and... well don&apos;t let that happen, okay?
      </TypographyP>
    </>
  );
}
