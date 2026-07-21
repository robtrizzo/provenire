import Clock from "@/components/clock";
import { D6, InlineSymbol } from "@/components/dice/dice-borders";
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
  TypographyOrderedList,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Managing a Faction</TypographyH1>

      <TypographyH2>Tier</TypographyH2>
      <TypographyP>
        Your faction's tier doesn't represent the raw number of people in it or
        the resources they have access to. Tier represents how effective a
        faction is at leveraging its assets towards its ends. In many ways, this
        comes down to the faction leader's personal power and loyal core of
        supporters.
      </TypographyP>
      <TypographyH3>Taking Over</TypographyH3>
      <TypographyP>
        For crew members who are taking over an <i>Advanced</i>,{" "}
        <i>Sympathetic</i>, or <i>Unconcious</i> faction, your tier begins at
        the faction's tier. You begin with access to all of your faction's
        assets, alliances, and enemies. Except in rare circumstances, you're
        pushing someone else out of their leadership role. Tell us what that
        looks like.
      </TypographyP>
      <TypographyP>
        For crew members taking over a <i>Reformist</i> or <i>Backwards</i>{" "}
        faction, it isn't so clear cut. You are a mutinous subfaction working to
        subvert the current leaders. You begin at two tiers below the faction
        (minimum 0). You don't have any of the alliances or enemies of your
        faction. You may choose one of your faction's assets to begin having
        access to. Whenever you increase your tier, gain access to another
        faction asset. When your tier matches your faction's tier, you've
        accumulated enough power to attempt a coup. We'll play out the showdown.
      </TypographyP>
      <TypographyH3>Increasing Tier</TypographyH3>
      <TypographyP>
        To increase your faction's tier, it costs a number of{" "}
        <b>power clocks</b>{" "}
        <div className="inline-block">
          <Clock max={6} current={0} clickable={false} width={20} height={20} />
        </div>{" "}
        equal to the faction's current tier plus <b>1</b>. You may tick your
        faction's <b>power clock</b> at any time by spending <b>1 rep</b>.
        Whenever <b>time passes</b>, your <b>power clocks</b> get modified by
        the following:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          Your faction's <b>food stockpile</b> minus <b>2</b>
        </li>
        <li>
          Your faction's <b>materials stockpile</b> minus <b>1</b>
        </li>
        <li>
          <i>Does your faction have {">="}10% shifters?</i> Your faction's{" "}
          <b>blood stockpile</b> minus <b>1</b>
        </li>
        <li>Your faction's allies minus your faction's enemies.</li>
        <li>
          <i>Was one of your gangs victorious in combat?</i> <b>+2</b>.{" "}
          <i>Was one of your gangs wiped out?</i> <b>-2</b>.
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        If your <b>power clocks</b> fall below empty, your faction falls a tier.
        Gain a number of <b>power clocks</b> equal to your new tier.
      </TypographyP>

      <TypographyH2>Resources</TypographyH2>
      <TypographyP>
        Each faction represents resources on a scale from <b>0 to 4</b>. Without
        specifically constructed storehouses, a faction's maximum stockpile is{" "}
        <b>2</b>.
      </TypographyP>
      <TypographyBlockquote>
        <b>0</b> = None; <b>1</b> = Scarce; <b>2</b> = Adequate; <b>3</b> =
        Surplus; <b>4</b> = Stockpile
      </TypographyBlockquote>
      <TypographyP>
        Each resource has special rules for what happens at different stockpile
        values when{" "}
        <Link href="/game/arc-three/rules/time-passes">
          <b className="text-red-500 underline">time passes</b>
        </Link>{" "}
        .
      </TypographyP>
      <TypographyP>
        Some members of the crew lead a faction or they're responsible for their
        resources. They may use their faction's resources at their discretion.
      </TypographyP>
      <TypographyP>
        Whenever a faction's resource is used for a project, to accomplish a
        goal, or to be traded to another faction, make a <b>fortune roll</b>{" "}
        with dice equal to that resource's value. On a{" "}
        <div className="inline-block mx-1">
          <D6>
            <Threat />
          </D6>
        </div>
        , the value drops by <b>1</b>.
      </TypographyP>
      <TypographyP>
        Many of the factors that dictate your faction's wealth of resources are
        largely out of your control. Many will still hold you personally
        accountable for this though. Something that <i>is</i> within your
        control is how these resources are distributed. First, each crew member
        in the faction receives resources equal to the faction's stockpile
        values.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>Even:</b> Everyone gets an equal share.
        </li>
        <li>
          <b>Those in need:</b> Everyone is in need, but you can ease the
          suffering for the worst-off among you. <b>+2 goodwill</b>.
        </li>
        <li>
          <b>The able-bodied:</b> Workers and fighters get priority.{" "}
          <b>+2 manpower</b>.
        </li>
        <li>
          <b>The loyal inner circle:</b> Rewarding dedication can attract more
          loyal followers. <b>+2 rep</b>. Fill your <b>food</b>,{" "}
          <b>materials</b>, <b>blood</b>, and <b>water</b> to their max. Your
          faction's stores for each resource fall by <b>1</b>.
        </li>
        <li>
          <b>For the cause</b>: Fill Theta's storehouses' and members'{" "}
          <b>food</b>, <b>materials</b>, <b>blood</b>, and <b>water</b> to their
          max. Your faction's stores for each resource fall by <b>3</b>.{" "}
          <b>+3 spite</b>.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Manpower</TypographyH3>
      <TypographyP>
        <b>Manpower</b> is a resource which represents the number of workers
        which will follow your direct orders. <b>Manpower</b> is used to 'staff'
        ongoing projects or gangs.
      </TypographyP>
      <TypographyP>
        For example, a <i>spy network</i> ongoing project may have a{" "}
        <b>manpower</b> cost of <b>2</b>. You may also have two gangs, each of
        which can have up to <b>3 manpower</b> assigned to them. These are costs
        which must be paid whenever <b>time passes</b>. If they aren't paid,
        they are paused until they are once again paid.
      </TypographyP>
      <TypographyP>
        Your faction grants you <b>manpower</b> equal to its tier. If you take
        the time to be personally involved in a project or embedded in a gang,
        reduce the <b>manpower</b> cost by <b>1</b>.
      </TypographyP>

      <TypographyH2>Alliances</TypographyH2>
      <TypographyP>
        The default state of relationships in the Steel Trap is conflict.
        Anything else requires diligent effort. Initiating an alliance requires
        a meeting and initial bargain. If you can reach terms, you are allies.
      </TypographyP>
      <TypographyP>
        Maintaining alliances means meeting frequently to grow the relationship
        and cement ties. Otherwise, the many unfortunate happenings of the Steel
        Trap will estrange you. Whenever <b>time passes</b>, each of your
        alliances requires an upkeep of <b>goodwill</b> according to their
        attitude. Reduce this cost by <b>1</b> for each mutual enemy.
      </TypographyP>
      <TypographyBlockquote>
        Advanced = <b>0</b>; Sympathetic = <b>1</b>; Unconcious = <b>2</b>;
        Reformist = <b>3</b>; Backwards = <b>4</b>
      </TypographyBlockquote>

      <TypographyH2>Projects</TypographyH2>
      <TypographyP>
        Everyone who runs a faction has access to a few projects they can work
        when <b>time passes</b>. Projects may require resources,{" "}
        <b>project clocks</b>, and/or staff. Each <b>Role</b> amongst the crew
        will have access to additional unique projects.
      </TypographyP>
      <Separator className="mt-4" />
      <TypographyH3>Develop the Neighborhood</TypographyH3>
      <TypographyP>
        Fabrication is in a perpetual state of disaster and decay. It's rare for
        a machine to stay safe or a structure to remain standing for more than a
        few years. Time to see if you can break the trend.
      </TypographyP>
      <TypographyH4>Living Spaces</TypographyH4>
      <span className="text-muted-foreground">
        <b>
          <u>Improve:</u>
        </b>{" "}
        <div className="inline-block">
          <Clock max={3} current={0} clickable={false} width={20} height={20} />
        </div>
        , 2 materials, must be completed in order
      </span>
      <TypographyP>
        <b>Rudimentary Housing</b>: most everyone has a roof over their heads
      </TypographyP>
      <TypographyP>
        <b>Doors</b>: less about security, more about some privacy
      </TypographyP>
      <TypographyP>
        <b>Beds</b>: finally, a place to rest these aching bones.{" "}
        <b>+1 manpower</b>
      </TypographyP>
      <TypographyH4>Facilities</TypographyH4>
      <span className="text-muted-foreground">
        <b>
          <u>Cost:</u>
        </b>{" "}
        3 materials;{" "}
        <b>
          <u>Staff</u>: 1 manpower
        </b>
      </span>
      <TypographyP>
        <b>Storehouses</b> (may be taken twice): increase max faction stockpiles
        by <b>1</b>. An attractive target for your enemies.
      </TypographyP>
      <TypographyP>
        <b>Workshops</b>: your craftspeople have a space to work. Might be able
        to make your own equipment rather than paying Hitchen's prices.
      </TypographyP>
      <TypographyP>
        <b>Infirmary</b>: mediciners will never run out of people to help
      </TypographyP>
      <TypographyH4>Defenses</TypographyH4>
      <span className="text-muted-foreground">
        <b>
          <u>Cost:</u>
        </b>{" "}
        <div className="inline-block">
          <Clock max={5} current={0} clickable={false} width={20} height={20} />
        </div>
        , 3 materials;{" "}
        <b>
          <u>Staff</u>: 1 manpower
        </b>
      </span>
      <TypographyP>
        <b>Walls:</b> invaluable, though worthless without a gang to man them.
      </TypographyP>
      <TypographyP>
        <b>Stronghold:</b> a small structure with walls sturdy enough to
        withstand shifters. For a time.
      </TypographyP>
      <Separator className="mt-4" />
      <TypographyH3>Train a Gang</TypographyH3>
      <span className="text-muted-foreground">
        <b>
          <u>Cost:</u>
        </b>{" "}
        2 rep;{" "}
        <b>
          <u>Staff:</u>
        </b>{" "}
        1-3 manpower;{" "}
        <b>
          <u>Improve:</u>
        </b>{" "}
        <div className="inline-block">
          <Clock max={3} current={0} clickable={false} width={20} height={20} />
        </div>
        , 2 rep
      </span>
      <TypographyP>
        Gangs are groups of loyal workers willing to do violence on behalf of
        their faction or leader. Without them, your faction is defenseless in
        the event of a raid or direct assault.
      </TypographyP>
      <TypographyP>
        The more <b>manpower</b> dedicated to staffing a gang, the more
        effective the gang is. Similarly, spending a faction <b>material</b> or{" "}
        <b>blood</b> increases the gang's effectiveness for a cycle.
      </TypographyP>
      <TypographyP>
        When you establish a new gang, pick two{" "}
        <Link href="/game/arc-three/appendix/traits">
          <b className="text-red-500">
            <u>negative traits</u>
          </b>
        </Link>
        . Each time you improve the gang you may remove a negative trait or
        assign a positive trait.
      </TypographyP>
      <Separator className="mt-4" />
      <TypographyH3>Trade Resources</TypographyH3>
      <TypographyP>
        If only it was as simple as: you have something they want; they have
        something you want. Betrayals, roaming beasts, and treacherous pathways
        in the factory make trade an arduous task. Because of this, trade is
        only possible within the same neighborhood. Make an <b>action roll</b>.
      </TypographyP>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 border rounded-md border-border p-2">
        <div className="col-span-1">
          <TypographyP>
            <InlineSymbol>
              <Theta />
            </InlineSymbol>{" "}
            : choose one
          </TypographyP>
          <TypographyP>
            <InlineSymbol>
              <ThetaDouble />
            </InlineSymbol>{" "}
            : choose two
          </TypographyP>
          <TypographyP>
            <InlineSymbol>
              <ThetaTriple />
            </InlineSymbol>{" "}
            : choose three
          </TypographyP>
        </div>
        <div className="col-span-1">
          <TypographyUnorderedList>
            <li>the runners don't skim off the top</li>
            <li>the runners make the delivery on time</li>
            <li>this route is safe for next time</li>
          </TypographyUnorderedList>
          <TypographyP>
            On a{" "}
            <InlineSymbol>
              <Threat />
            </InlineSymbol>
            , the runners are attacked and one of your gangs must protect them
          </TypographyP>
        </div>
      </div>
      <Separator className="mt-4" />
      <TypographyH3>Auger's Projects</TypographyH3>
      <TypographyH4>Train a Gang</TypographyH4>
      <TypographyP>
        When the <b>Auger</b> trains a gang, they have the option to add the{" "}
        <b>Veterans</b> trait.
      </TypographyP>
      <TypographyBlockquote>
        <b>Veterans</b>: whenever the gang survives a scrap, tick its{" "}
        <b>improvement clock</b> by the gang's remaining wounds
      </TypographyBlockquote>
      <Separator className="mt-4" />
      <TypographyH4>Raid</TypographyH4>
      <TypographyP>
        A lightning strike on storehouses between shifts. An ambush on a trade
        convoy. Direct extortion of a faction's workers. You get your resources
        any way you need to. When you prepare for a raid, pick a gang and build
        up a <b>fortune roll</b> with the following questions:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          Is your gang particularly stealthy or organized? <b>+1d</b>
        </li>
        <li>
          Is a member of the crew embedded in the gang? <b>+1d</b>
        </li>
        <li>
          <b>+1d</b> per tier higher your faction is than theirs.
        </li>
        <li>
          Are they expecting you? <b>-1d</b>
        </li>
        <li>
          Does the target have special defenses? <b>-1d</b>
        </li>
        <li>
          Do you know of a weak spot in their defenses? <b>+1d</b>
        </li>
      </TypographyUnorderedList>
      <div className="grid grid-cols-1 sm:grid-cols-2 border rounded-md border-border p-2">
        <div className="col-span-1">
          <TypographyP>
            <InlineSymbol>
              <Theta />
            </InlineSymbol>{" "}
            : choose one
          </TypographyP>
          <TypographyP>
            <InlineSymbol>
              <ThetaDouble />
            </InlineSymbol>{" "}
            : choose two
          </TypographyP>
        </div>
        <div className="col-span-1">
          <TypographyUnorderedList>
            <li>
              steal <b>1 blood</b>, <b>food</b>, or <b>material</b> stockpile
            </li>
            <li>
              the target doesn't know it was your faction (otherwise, take{" "}
              <b>2 rep</b>)
            </li>
            <li>the target increases their security</li>
          </TypographyUnorderedList>
          <TypographyP>
            On a{" "}
            <InlineSymbol>
              <Threat />
            </InlineSymbol>
            , there was a scrap and your gang takes wounds equal to the number
            of{" "}
            <InlineSymbol>
              <Threat />
            </InlineSymbol>
            .
          </TypographyP>
        </div>
      </div>
      <Separator className="mt-4" />
      <TypographyH4>Assault</TypographyH4>
      <TypographyP>
        Raids and skirmishes can build an advantage, but sometimes you have to
        take the fight to where your foe is strongest.
      </TypographyP>
      <TypographyOrderedList>
        <li>
          <b>Scout their fortifications</b> (
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
            , <b>1 intel</b>, <b>1 manpower</b>
          </span>
          )
        </li>
        <li>
          <b>Probe their defenses</b> (
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
            , <b>1 manpower</b>
          </span>
          )
        </li>
        <li>
          <b>Gather equipment</b> (
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
            , <b>2 materials</b>
          </span>
          )
        </li>
        <li>
          <b>Muster your forces</b> (
          <span className="text-muted-foreground">
            <b>1 rep</b> per tier of the target
          </span>
          )
        </li>
      </TypographyOrderedList>
      <TypographyP>
        You may launch your assault without completing any of the setup
        projects. Each one you complete eliminates a <b>gang combat roll</b> you
        would have to make. If your gang(s) get wiped out at any point during
        the assault, your forces are shattered and the attack is over. If your
        attack succeeds, gain <b>rep</b> and <b>heat</b> equal to twice their
        tier, then choose one:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          Their defenses are devastated. They drop by <b>1</b> tier.
        </li>
        <li>
          You loot the treasury (pick <b>3</b> from their <b>blood</b>,{" "}
          <b>food</b>, and <b>materials)</b>
        </li>
        <li>
          You give the crew a chance to attack their leaders without the backup
          of their gangs.
        </li>
      </TypographyUnorderedList>
      <Separator className="mt-4" />
      <TypographyH3>Lock's Projects</TypographyH3>
      <Separator className="mt-4" />
      <TypographyH3>Seeker's Projects</TypographyH3>
      <Separator className="mt-4" />
      <TypographyH3>Vault's Projects</TypographyH3>
      <Separator className="mt-4" />
      <div className="mb-8" />
    </>
  );
}
