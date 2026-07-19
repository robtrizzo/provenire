import Clock from "@/components/clock";
import { D6 } from "@/components/dice/dice-borders";
import { Threat } from "@/components/dice/dice-symbols";
import Breadcrumbs from "@/components/ui/breadcrumbs";
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
    </>
  );
}
