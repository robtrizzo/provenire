import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import OpPortrait from "../(components)/operative-portrait";
import ClockCost from "../(components)/clock-cost";
import { Card } from "@/components/ui/card";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Game", href: "/game" },
          { name: "Arc Two", href: "/game/arc-two" },
          {
            name: "Character Creation",
            href: "/game/arc-two/character-options",
          },
          {
            name: "Operatives",
            href: "/game/arc-two/character-options/operatives",
          },
          { name: "Canon", href: "#" },
        ]}
      />
      <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
        <div>
          <TypographyH1 className="font-cyber">Canon</TypographyH1>
          <span className="font-cyber text-muted-foreground">
            Silent, simmering, sexy type. Explosive power.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Smolder</b> Handle social
            situations with a cool, charming demeanor.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              Buran Experimental Integrated Blast Engine &quot;Overkill,
              Beibe&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Canon</span> is a mainstay of{" "}
            <span className="font-cyber">Root&apos;s</span> fantasy and sci-fi
            productions. Fans love the suave seductive type with overwhelming
            combat power. To that end,{" "}
            <span className="font-cyber">Canon&apos;s</span> job is to talk
            smooth and get that money-shot of their ultimate move.
          </TypographyP>
        </div>
        <OpPortrait
          width={200}
          height={200}
          name="Canon"
          className="rounded-md mx-auto lg:mx-0"
        />
      </div>
      <TypographyP className="text-lg font-bold font-cyber">
        During missions Root may ask you to...
      </TypographyP>
      <TypographyUnorderedList>
        <li>Smooth talk past security</li>
        <li>Lounge at a bar just long enough to rescue the team later</li>
        <li>Turn heads with suave confidence</li>
        <li>
          Hold off your kill-shot until all the camera angles are just right
        </li>
        <li>Start fights with a salvo of cinematic explosions</li>
      </TypographyUnorderedList>
      <TypographyH2 className="font-cyber">
        Experimental Integrated Blast Engine &quot;Overkill, Beibe&quot;
      </TypographyH2>
      <div className="flex gap-3 ml-2 mt-1 font-cyber text-muted-foreground text-sm flex-wrap">
        <span className="text-amber-500">Buran Hovertech</span>
        <span>|</span>
        <span className="text-red-500">Crystech, Metaltech</span>
      </div>
      <TypographyP>
        <span className="font-cyber">Buran Hovertech</span> makes vehicles, not
        weapons. But <span className="font-cyber">Foundation</span> execs have
        been investing into <span className="font-cyber">Buran</span> for a long
        time, pushing to take the company&apos;s proprietary hover engines in a
        different direction. Even after a hostile corporate takeover cementing{" "}
        <span className="font-cyber">Buran Hovercraft</span> as a subsidary of{" "}
        <span className="font-cyber">Foundation</span>, the staff still resisted
        use of their tech as weaponry.
      </TypographyP>
      <TypographyP>
        A series of disappeared scientests and hovercraft accidents later, an
        experimental weaponized version of the hovertech engine lies in{" "}
        <span className="font-cyber">Root&apos;s</span> cyberware repo. To what
        end? Let <b>Raguta</b>, <span className="font-cyber">Root&apos;s</span>{" "}
        corporate contact specialist handle that.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Obliterate</TypographyH3>
        <ClockCost num={0} />
      </div>
      <TypographyP>
        <span className="font-cyber">&quot;Overkill, Beibe&quot;</span> does one
        thing and one thing well: destroy. It has little regard for the safety
        of the wielder or anyone within ten yards of the target. When you deploy
        the canon, it unfolds <span className="font-cyber">Canon&apos;s</span>{" "}
        arm and begins warming up. The warmup procedure can take some time, so{" "}
        <span className="font-cyber">Canon</span> is advised to plan ahead and
        play cool - lest they be caught in an awkward waiting game.
      </TypographyP>
      <TypographyP>
        Firing <span className="font-cyber">&quot;Overkill, Beibe&quot;</span>{" "}
        is some serious business and often comes at tradeoffs{" "}
        <span className="font-cyber">Canon</span> needs to choose from.
      </TypographyP>
      <Card className="px-4 my-4">
        <b className="font-cyber">
          When you fire &quot;Overkill, Beibe&quot;, make a fortune roll.
        </b>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <TypographyP>
            <b>1-3</b>: choose two
            <br />
            <b>4,5</b>: choose one
            <br />
            <b>6</b>: no tradeoff
            <br />
            <i className="text-muted-foreground">
              you may only choose unchosen options
            </i>
          </TypographyP>
          <TypographyUnorderedList>
            <li>Unwanted collateral damage</li>
            <li>Damaging feedback</li>
            <li>Fuel cell depleted</li>
            <li>Needs another warmup cycle</li>
          </TypographyUnorderedList>
        </div>
      </Card>
      <TypographyBlockquote className="font-cyber text-sm">
        Additional fuel cells are <b>3 inventory slots</b>.
      </TypographyBlockquote>

      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Warmup Routine</TypographyH3>
        <ClockCost num={2} />
      </div>
      <TypographyP>
        <span className="font-cyber">&quot;Overkill, Beibe&quot;</span> warmup
        procedure is a series of three phases: <i>ignition</i>, <i>cascade</i>,
        and <i>primed</i>. Each phase takes time; once <i>primed</i>, the weapon
        is ready to fire. Skilled <span className="font-cyber">Canons</span>{" "}
        have learned to use the situation to their advantage and get shots off
        faster.
      </TypographyP>
      <TypographyP>
        During <i>ignition</i>, the motor is just attempting to trigger a
        contained energy cascade. If <span className="font-cyber">Canon</span>{" "}
        manages to catch a source of volitile energy within{" "}
        <span className="font-cyber">&quot;Overkill, Beibe&apos;s&quot;</span>{" "}
        blast chamber, they can jumpstart the process.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Just One More Shot
        </TypographyH3>
        <ClockCost num={3} />
      </div>
      <TypographyP>
        It requires a substantial amount of power to fire
        <span className="font-cyber">&quot;Overkill, Beibe&quot;</span>, but if{" "}
        <span className="font-cyber">Canon</span> misses and wants another go,
        they can cannibalize their sleeve&apos;s latent power at their own risk.
        Mark a <b>level 3 harm</b> to refuel the weapon. Careful not to let it
        draw too much.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Warning Shots</TypographyH3>
        <ClockCost num={3} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Warmup Routine
      </span>
      <TypographyP>
        During <i>cascade</i>, the weapon is building up a critical amount of
        energy so that it can be fired for full effect. There are safety
        measures to prevent early energy release, but some{" "}
        <span className="font-cyber">Canons</span> have learned to fiddle their
        way around this for some extra shots.
      </TypographyP>
      <TypographyP>
        When you bypass{" "}
        <span className="font-cyber">&quot;Overkill, Beibe&apos;s&quot;</span>{" "}
        safety protocols, fire off some much weaker shots (only by comparison).
        Then make an action roll. <b>1-3:</b> fuel cell depleted; <b>4,5:</b>{" "}
        fall back to <i>ignition</i>; <b>6</b>: no consequence.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Annihilate</TypographyH3>
        <ClockCost num={5} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Just One More Shot
      </span>
      <TypographyP>
        Once <span className="font-cyber">Canons</span> get familiar with the
        weapon, many of them notice the same thing: it can accumulate far more
        power than just one fuel cell. <span className="font-cyber">Root</span>{" "}
        would never ask an operative to take a risk like that (okay, maybe{" "}
        <span className="font-cyber">Close</span>). <i>But</i>, if{" "}
        <span className="font-cyber">Canon</span> chooses to do it of their own
        volition you bet <span className="font-cyber">Root</span> has the
        cameras ready.
      </TypographyP>
      <TypographyP>
        If <span className="font-cyber">Canon</span> wants to do this, they need
        to supply a second fuel-cell&apos;s worth of power to the weapon. The
        shot they fire off is an overwhelming blast wave of pure fucking cinema.
        Then <span className="font-cyber">Canon</span> chooses four of the
        consequences of firing{" "}
        <span className="font-cyber">&quot;Overkill, Beibe&quot;</span>.
      </TypographyP>
    </>
  );
}
