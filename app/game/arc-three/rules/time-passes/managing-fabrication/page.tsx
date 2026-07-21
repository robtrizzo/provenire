import Clock from "@/components/clock";
import {
  CritBorderGradient,
  D6,
  InlineSymbol,
} from "@/components/dice/dice-borders";
import {
  Theta,
  ThetaDouble,
  ThetaTriple,
  Threat,
} from "@/components/dice/dice-symbols";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Managing Fabrication</TypographyH1>
      <TypographyP>
        Each <b>Councilor</b> is responsible for a distinct aspect of
        Fabrication's daily operations. That being said, they don't have the
        ability to focus their attention on any one faction in this regard. They
        must work with multiple factions to advance their agendas and improve
        the entirety of the sector.
      </TypographyP>

      <TypographyH2>Resources</TypographyH2>

      <TypographyP>
        Some members of the crew manage resources across the entire sector. They
        are responsible for choosing how it is distributed and overseeing the
        logistics. Fabrication-wide resources are represented as a delta from{" "}
        <b>-2</b> to <b>+2</b>.
      </TypographyP>
      <TypographyBlockquote>
        <b>-2</b> = Severe Defecit; <b>-1</b> = Defecit; <b>0</b> = Balanced;{" "}
        <b>+1</b> = Surplus; <b>+2</b> = Grand Surplus
      </TypographyBlockquote>
      <TypographyP>
        Whenever <b>time passes</b>, the <b>Narrator</b> will inform councilors
        of their managed resource's delta.
      </TypographyP>
      <TypographyP>
        <b>Councilors</b> have access to Fabrication-wide <b>food</b> and{" "}
        <b>materials</b> to accomplish their projects. When they do, they make a{" "}
        <b>fortune roll</b> with dice equal to the delta <b>+2</b>. On a{" "}
        <div className="inline-block mx-1">
          <D6>
            <Threat />
          </D6>
        </div>
        , the delta decreases by <b>1</b>.
      </TypographyP>
      <TypographyH3>Distribution</TypographyH3>
      <TypographyP>
        Resources may be distributed as follows, though each method requires a
        different degree of staff:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>Let someone else sort it out:</b> Not your problem.{" "}
          <b>+1 manpower; +2 spite</b>.
        </li>
        <li>
          <b>
            First come first serve (
            <span className="text-muted-foreground">1 manpower</span>):
          </b>{" "}
          The workers sort it out amongst themselves. <b>+1 intel</b>.
        </li>
        <li>
          <b>
            Faction-based (
            <span className="text-muted-foreground">2 manpower</span>):
          </b>{" "}
          Every faction gets an equal share. <b>+2 loyalty</b>.
        </li>
        <li>
          <b>
            Those in need (
            <span className="text-muted-foreground">3 manpower</span>):
          </b>{" "}
          Factions below <b>2</b> take <b>+1</b>; factions above <b>2</b> take{" "}
          <b>-1</b>. <b>+1 goodwill</b> from factions in need.
        </li>
        <li>
          <b>Prioritize the loyal</b> (
          <span className="text-muted-foreground">3 manpower</span>): Loyal
          factions take <b>+1</b>; disloyal factions take <b>-1</b>.{" "}
          <b>+1 rep</b> from loyal factions.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Manpower and Loyalty</TypographyH3>
      <TypographyP>
        Unlike faction leaders who command the workers within their
        neighborhood, <b>Councilors</b> must conscript bodies from the factions
        of the sector. Each loyal faction contributes <b>manpower</b> equal to
        their tier. Factions with <b>0 food</b> or <b>0 materials</b> will not
        contribute.
      </TypographyP>
      <TypographyP>
        What makes a faction loyal? Each <b>Councilor</b> builds up a set of{" "}
        <b>loyalty clocks</b>{" "}
        <div className="inline-block">
          <Clock max={6} current={0} clickable={false} width={20} height={20} />
        </div>
        . Compare your <b>loyalty clocks</b> to a faction's{" "}
        <b>loyalty threshold</b> to determine if they are loyal.
      </TypographyP>
      <TypographyP>
        A faction's <b>loyalty threshold</b> is equal to their tier + attitude.
        So for example, <i>Southside</i> is tier 1 and Sympathetic, so their{" "}
        <b>loyalty threshold</b> is <b>2</b>. <i>Dominion</i> is tier 2 and
        Backwards, so their <b>loyalty threshold</b> is <b>6</b>.
      </TypographyP>
      <TypographyBlockquote>
        Advanced = <b>0</b>; Sympathetic = <b>1</b>; Unconcious = <b>2</b>.
        Reformist = <b>3</b>. Backwards = <b>4</b>
      </TypographyBlockquote>
      <TypographyH4>Increasing Loyalty</TypographyH4>
      <TypographyP>
        Loyalty changes depending on the workers' disposition and how well you
        project your power into the many factions. Theta's actions are
        controversial; some will approve your membership of the rebel faction
        where others will despise it. You will need to overcome this with
        diligent work and <b>rep</b>.
      </TypographyP>
      <TypographyP>
        You may spend <b>1 rep</b> at any time to gain <b>+1 loyalty</b>. When{" "}
        <b>time passes</b>, ask the following:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          Are you a member of Theta? <b>-1 loyalty</b> per{" "}
          <b>escalation level</b>. <b>-1 loyalty</b> for each mission since{" "}
          <b>time passed</b> last.
        </li>
        <li>
          Have you materially improved conditions for workers? <b>+1 loyalty</b>
        </li>
        <li>
          Did your proposal in the council pass? <b>+1 loyalty</b>
        </li>
        <li>
          Did you assist a faction accomplish its goals? <b>+1 loyalty</b>
        </li>
        <li>
          (Naaza) Add <b>loyalty</b> equal to the delta of <b>materials</b>
        </li>
        <li>
          (Merit) Did the council proceed peacefully? <b>+1 loyalty</b> No?{" "}
          <b>-1 loyalty</b>.
        </li>
        <li>
          (Drusa) Did Fabrication meet its delivery deadline? <b>+3 loyalty</b>{" "}
          No? <b>-3 loyalty</b>.
        </li>
      </TypographyUnorderedList>
      <TypographyH2>Projects</TypographyH2>
      <TypographyP>
        Each <b>Councilor</b> has a unique set of projects which affect
        Fabrication at large. Projects may require resources,{" "}
        <b>project clocks</b>, and/or staff.
      </TypographyP>
      <TypographyH3>Cipher's Projects</TypographyH3>
      <Separator className="mt-4" />
      <TypographyH4>Deliver the Shipment</TypographyH4>
      <TypographyP>
        Fabrication's readiness to deliver the Master's shipments is represented
        by a <b>delivery clock</b>{" "}
        <div className="inline-block">
          <Clock max={6} current={0} clickable={false} width={20} height={20} />
        </div>
        . Whenever <b>time passes</b>, build up a <b>fortune roll</b> with the
        following questions:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          Did the workers diligently do their duty? <b>+2d</b>
        </li>
        <li>
          Do you tap into Fabrication's <b>material</b> supply? <b>+1d</b> per
          time.
        </li>
        <li>
          Does the cipher personally see to the shipment's progress? <b>+2d</b>
        </li>
        <li>
          Is there a defecit of <b>food</b>? <b>-1d</b>
        </li>
        <li>
          Is there an active conflict in Fab Floor? <b>-2d</b>
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        <InlineSymbol>
          <Theta />
        </InlineSymbol>
        : <b>+2</b>;{" "}
        <InlineSymbol>
          <ThetaDouble />
        </InlineSymbol>
        : <b>+4</b>;{" "}
        <div className="inline-block align-bottom py-0.5">
          <div className="flex gap-0.5">
            <D6 size={32}>
              <CritBorderGradient />
              <ThetaDouble />
            </D6>
            <D6 size={32}>
              <CritBorderGradient />
              <Threat />
            </D6>
            <D6 size={32}>
              <CritBorderGradient />
              <ThetaDouble />
            </D6>
          </div>
        </div>
        : <b>+6</b>. On a{" "}
        <InlineSymbol>
          <Threat />
        </InlineSymbol>
        , <b>resist</b> to prevent widespread workplace accidents (
        <b>+3 spite</b>).
      </TypographyP>
      <Separator className="mt-4" />
      <TypographyH4>Master the Machines</TypographyH4>
      <span className="text-muted-foreground">
        <b>
          <u>Cost:</u>
        </b>{" "}
        unique to project;{" "}
        <b>
          <u>Staff:</u>
        </b>{" "}
        unique to project;
      </span>
      <TypographyP>
        <b>Ascertain shipment's design</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <Clock
              max={3}
              current={0}
              clickable={false}
              width={20}
              height={20}
            />
          </div>
          , 1 Fabrication <b>material</b>
        </span>
        ): get one step closer to learning what this wretched factory produces.{" "}
        <b>+2 ticks</b> on the <b>delivery clock</b>.
      </TypographyP>
      <TypographyP>
        <b>Operate gateway</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <Clock
              max={5}
              current={0}
              clickable={false}
              width={20}
              height={20}
            />
          </div>
          , 1 Fabrication <b>material</b>
        </span>
        ): learn how to open and close a single portal to Fabrication (vault
        door, elevator to the Master's office, etc).
      </TypographyP>
      <TypographyP>
        <b>Interpret Ritiger's Whispers</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <div className="flex gap-0 5">
              <Clock
                max={4}
                current={0}
                clickable={false}
                width={20}
                height={20}
              />
              <Clock
                max={4}
                current={0}
                clickable={false}
                width={20}
                height={20}
              />
              <Clock
                max={4}
                current={0}
                clickable={false}
                width={20}
                height={20}
              />
            </div>
          </div>
          , <b>1</b> Fabrication <b>material</b>, <b>2 intel</b>
        </span>
        ): the symbols must mean something. There must be a purpose to this
        madness.
      </TypographyP>
      <TypographyP>
        <b>Reconfigure the machines</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <Clock
              max={6}
              current={0}
              clickable={false}
              width={20}
              height={20}
            />
          </div>
          , 2 Fabrication <b>material</b>
        </span>
        ): the machines are adaptable and can be made to work for you. You may
        spend <b>2 manpower</b> and <b>4 blood</b> to produce <b>materials</b>{" "}
        of your own. <b>+1 materials delta</b>. You may pursue this project a
        second time to increase efficiency and reduce the cost to{" "}
        <b>1 manpower</b> and <b>2 blood</b>.
      </TypographyP>
      <TypographyP>
        <b>Understand the Drone</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <div className="flex gap-0 5">
              <Clock
                max={4}
                current={0}
                clickable={false}
                width={20}
                height={20}
              />
              <Clock
                max={4}
                current={0}
                clickable={false}
                width={20}
                height={20}
              />
            </div>
          </div>
          , captured Wall Person
        </span>
        ): with this knowledge, you could protect yourselves like they do. Or
        maybe even use it to your own devices.
      </TypographyP>
      <Separator className="mt-4" />
      <TypographyH3>Pact's Projects</TypographyH3>
      <Separator className="mt-4" />
      <TypographyH4>Diplomacy</TypographyH4>
      <TypographyP>
        <b>Host peace talks</b> (
        <span className="text-muted-foreground">
          <b>1 goodwill</b> per tier of the aggressor
        </span>
        ): negotiate a temporary armistice which could give you enough time for
        a more lasting peace. If it lasts, <b>+1 rep</b> per tier of the
        aggressor.
      </TypographyP>
      <TypographyP>
        <b>Facilitate negotiations</b> (
        <span className="text-muted-foreground">
          <b>1 goodwill</b> per tier of larger faction
        </span>
        ): unless anything catastrophic goes wrong, the two factions find common
        ground and enter an alliance
      </TypographyP>
      <Separator className="mt-4" />
      <TypographyH4>Community</TypographyH4>
      <TypographyBlockquote>
        These upgrades are in addition to the existing Community upgrades the
        crew has unlocked
      </TypographyBlockquote>
      <TypographyP>
        <b>Meeting chamber</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <Clock
              max={3}
              current={0}
              clickable={false}
              width={20}
              height={20}
            />
          </div>
          , <b>1</b> Fabrication <b>material</b>, <b>1 staff</b>
        </span>
        ): while staffed the <b>Pact's</b> and the crew's <b>max goodwill</b>{" "}
        increases to <b>4</b>.
      </TypographyP>
      <TypographyP>
        <b>Giving back</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <Clock
              max={4}
              current={0}
              clickable={false}
              width={20}
              height={20}
            />
          </div>
          , <b>1</b> Fabrication <b>food</b>
        </span>
        ): members of the crew can exchange <b>2 goodwill</b> for{" "}
        <b>1 manpower</b>
      </TypographyP>
      <TypographyP>
        <b>United front</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <Clock
              max={4}
              current={0}
              clickable={false}
              width={20}
              height={20}
            />
          </div>
          , <b>3 heat</b>
        </span>
        ): crew gains <b>+1 max stress</b>
      </TypographyP>
      <TypographyP>
        <b>Outreach</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <Clock
              max={3}
              current={0}
              clickable={false}
              width={20}
              height={20}
            />
          </div>
          , <b>1 goodwill</b> per faction tier, <b>1 manpower</b> to staff
        </span>
        ): while staffed, that faction's attitude is one step more favorable
      </TypographyP>
      <TypographyP>
        <b>Festival</b> (
        <span className="text-muted-foreground">
          <b>3</b> Fabrication <b>food</b>, <b>+9 heat</b>
        </span>
        ): spirits soar. The crew gains max <b>goodwill</b> and everyone may
        clear their <b>stress</b> and a <b>condition</b>.
      </TypographyP>
      <Separator className="mt-4" />
      <TypographyH3>Wright's Projects</TypographyH3>
      <Separator className="mt-4" />
      <TypographyH4>Scrapyard</TypographyH4>
      <TypographyP>
        <b>Sorting</b> (
        <span className="text-muted-foreground">
          <b>2 staff</b>
        </span>
        ): each <b>Councilor</b> may use <b>1</b> Fabrication <b>material</b>{" "}
        without needing to roll
      </TypographyP>
      <TypographyP>
        <b>Smelting</b> (
        <span className="text-muted-foreground">
          <b>2 staff</b>
        </span>
        ): <b>+1 materials delta</b>
      </TypographyP>
      <Separator className="mt-4" />
      <TypographyH4>Garment Factory</TypographyH4>
      <TypographyP>
        <b>Boots and gloves</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <Clock
              max={4}
              current={0}
              clickable={false}
              width={20}
              height={20}
            />
          </div>
          , <b>1 staff</b>, <b>1</b> Fabrication <b>material</b>
        </span>
        ): workers can move through the factory easier than ever before. Faction
        populations will shift.
      </TypographyP>
      <TypographyP>
        <b>Blankets</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <Clock
              max={3}
              current={0}
              clickable={false}
              width={20}
              height={20}
            />
          </div>
          , <b>1 staff</b>, <b>1</b> Fabrication <b>material</b>
        </span>
        ): workers will stay warm through the factory's cold season
      </TypographyP>
      <TypographyP>
        <b>Uniforms</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <Clock
              max={4}
              current={0}
              clickable={false}
              width={20}
              height={20}
            />
          </div>
          , <b>1 staff</b>, <b>1</b> Fabrication <b>material</b>, equips{" "}
          <b>1</b> gang
        </span>
        ): victories while in sharp uniforms grant <b>+1 rep</b>
      </TypographyP>
      <TypographyP>
        <b>Safety equipment</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <Clock
              max={6}
              current={0}
              clickable={false}
              width={20}
              height={20}
            />
          </div>
          , <b>1 staff</b>, <b>2</b> Fabrication <b>material</b>
        </span>
        ): suspension harnesses, helmets, aprons - equipment that saves
        countless lives. All factions grant <b>+1 manpower</b> to their leaders
        when <b>time passes</b>
      </TypographyP>
      <Separator className="mt-4" />
      <TypographyH4>Smithy</TypographyH4>
      <TypographyP>
        <b>Tools</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <Clock
              max={5}
              current={0}
              clickable={false}
              width={20}
              height={20}
            />
          </div>
          , <b>1 staff</b>, <b>2</b> Fabrication <b>material</b>
        </span>
        ): work made substantially less grueling. For the first time it becomes
        possible to reduce shift times.
      </TypographyP>
      <TypographyP>
        <b>Weaponry</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <Clock
              max={3}
              current={0}
              clickable={false}
              width={20}
              height={20}
            />
          </div>
          , <b>1 staff</b>, <b>1</b> Fabrication <b>material</b>, equips{" "}
          <b>1</b> gang
        </span>
        ): crude weapons, but better than nothing. More sophisticated loadouts
        may require larger clocks.
      </TypographyP>
      <TypographyP>
        <b>Armor</b> (
        <span className="text-muted-foreground">
          <div className="inline-block">
            <Clock
              max={4}
              current={0}
              clickable={false}
              width={20}
              height={20}
            />
          </div>
          , <b>2 staff</b>, <b>2</b> Fabrication <b>material</b>, equips{" "}
          <b>1</b> gang
        </span>
        ): incredibly labor intensive and costly in materials, but grants quite
        the advantage in a scrap.
      </TypographyP>
      <Separator className="mt-4" />
      <div className="mt-8" />
    </>
  );
}
