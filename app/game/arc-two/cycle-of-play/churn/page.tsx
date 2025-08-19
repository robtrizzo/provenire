import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>The Churn</TypographyH1>
      <TypographyP>
        During missions, characters are in the thick of it, fighting against the
        system and the overseers. But what about the time in between? The Churn
        is the daily struggle. The grind. The routine of life in{" "}
        <b className="font-cyber">Feasting</b>. During this time, the characters
        can&apos;t murder their way out of all their promblems. They have to
        rely on the people around them.
      </TypographyP>
      <TypographyP>
        At this time, the converation is shifted to an even balance between
        player and <b>Narrator</b> will still call for particular actions and/or
        rolls during the Churn&apos;s phases.
      </TypographyP>
      <TypographyH2>Aftermath</TypographyH2>
      <TypographyH3>Heat</TypographyH3>
      <TypographyP>
        It&apos;s kind of impossible to do anything unseen in{" "}
        <b className="font-cyber">Feasting</b>. Most people have handheld
        cameras or cyberware that records what they see. Cyberware and network
        cookies stream metadata about their users to the corps at all times. It
        just depends on who&apos;s looking. After a <b>mission</b>, the crew
        takes <b>heat</b> representing their identities being compromised by
        interested parties.
      </TypographyP>
      <TypographyP>
        <i>
          Did you keep <b className="font-cyber">ROOT&apos;s</b> involvement in
          the mission under wraps?
        </i>{" "}
        <b>-2 heat</b>.
      </TypographyP>
      <TypographyP>
        <i>
          Does your crew have anyone with the{" "}
          <b className="text-red-500 font-cyber">Hack</b> action?
        </i>{" "}
        <b>-1 heat</b>.
      </TypographyP>
      <TypographyP>
        Add <b>+2 heat</b> if a corp was the target.
      </TypographyP>
      <TypographyP>
        Add <b>+1 heat</b> if the mission took place in{" "}
        <b className="font-cyber">Feasting</b>.
      </TypographyP>
      <TypographyP>
        Add <b>+1 heat</b> if combat was involved; an additional <b>+1 heat</b>{" "}
        if there were enemy survivors.
      </TypographyP>
      <TypographyP>
        Add <b>+2 heat</b> if anyone in the crew was identified.
      </TypographyP>
      <TypographyP>
        When your crew reaches <b>9 heat</b>, someone&apos;s identity becomes
        compromised, then <b>heat</b> resets to <b>0</b>. Excess <b>heat</b>{" "}
        rolls over.
      </TypographyP>
      <TypographyH3>Rewards</TypographyH3>
      <TypographyH2>Entanglements</TypographyH2>
      <TypographyP>
        Rivals, enemies, or annoying corporate execs will complicate your life.
        The <b>Narrator</b> determines what the <b>Entanglement</b> is, if any,
        in secret. They may choose to introduce the entanglement immediate, or
        they may bide their time for a dramatic moment{" "}
        <i>before the next mission</i>. The <b>entanglement</b> manifests fuly
        before the PCs have a chance to avoid it - it cannot be resisted.
      </TypographyP>
      <TypographyH2>Taking a Breather</TypographyH2>
      <TypographyP>
        Just after the mission, you may choose to take some time for yourself.
        When you take a breather, you seek out comfort, peace, or vice. Whatever
        your character feels they need to reduce the stress of risking their
        lives on missions. If you do, reduce your stress by an amount determined
        by your <span className="font-cyber">¤F</span> wealth level.
        Alternatively, spend <span className="font-cyber">1 ¤F</span> to clear
        your stress bar entirely.
      </TypographyP>
      <TypographyH3>Overindulgence</TypographyH3>
      <TypographyP>
        When you <b>Take a Breather</b> while your stress level was close to
        your max (within 2 ticks), you overindulge or neglect other parts of
        your life that need attention. Make a <b>fortune roll</b> on the{" "}
        <b>overindulgence table</b> equal to your conditions (max 4).
      </TypographyP>
      <Table>
        <TableCaption>Overindulgence</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16 border-r-slate-800 border-r-[1px]">
              roll
            </TableHead>
            <TableHead className="w-16 border-r-slate-800 ">
              consequence
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              1
            </TableCell>
            <TableCell className="w-20">
              Reality comes knocking; one of your <b>rivals</b> interferes in
              the next mission
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              2
            </TableCell>
            <TableCell className="w-20">
              You get lost in your relief; you lose a <b>downtime action</b>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              3
            </TableCell>
            <TableCell className="w-20">
              You shut out the world; <b>strain your bond</b> with someone
              depending on you{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              4
            </TableCell>
            <TableCell className="w-20">
              You indulge lavishly; spend{" "}
              <span className="font-cyber">2 ¤P</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              5
            </TableCell>
            <TableCell className="w-20">
              You brag about your exploits: <strong>+2 heat</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              6
            </TableCell>
            <TableCell className="w-20">
              You forget something important to your loved ones; mark{" "}
              <strong>2 stress</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <TypographyH2>Agendas</TypographyH2>
      <TypographyP>
        The <b>Agendas</b> phase represents your employment at{" "}
        <b className="font-cyber">ROOT</b> between missions. There&apos;s plenty
        more to do than the big operations whcih become <b>missions</b>.{" "}
        <b className="font-cyber">Osgrot</b> or{" "}
        <b className="font-cyber">Felicity</b> choose which agenda the crew
        pursues each cycle. If the crew has a{" "}
        <b className="font-cyber">Watchtower</b> with <b>Contract Escalation</b>
        , they can choose the agenda instead.
      </TypographyP>
      <TypographyP>
        Once the agenda is selected, the <b>Narrator</b> sets a clock for
        completion. Then a player may introduce an obstacle they think would be
        interesting. Once an obstacle is chosen, the group determines how they
        would overcome it (and make a roll if appropriate). The <b>Narrator</b>{" "}
        determines how much progress on the clock this accomplishes. Then this
        cycle repeats until the clock is complete.
      </TypographyP>
      <TypographyBlockquote>
        One time at any point of the agenda, the <b>Narrative Focus</b> may
        raise their hand and be the one to resolve an obstacle.
      </TypographyBlockquote>
      <TypographyH3>
        <b className="font-cyber">ROOT&apos;s</b> Agendas
      </TypographyH3>
      <TypographyH4>Eliminate corporate rival</TypographyH4>
      <TypographyP>
        Pretty cut and dry. Corps are always getting into each other&apos;s
        business. Take this person out of the picture however you see fit.
      </TypographyP>
      <TypographyH4>Big public appearance</TypographyH4>
      <TypographyP>
        Every once in a while there&apos;s a big press conference about a movie
        or game which <b className="font-cyber">Cytech&apos;s</b> motion capture
        footage was used in. The crew are expected to attend (as their mo-cap
        cover identities) and mingle.
      </TypographyP>
      <TypographyH4>Capture terrorist asset</TypographyH4>
      <TypographyP>
        Perhaps a payoff for a previous mission or the setup for a new one.
        These are usually pretty straightforward, not meriting the full process
        of a mission.
      </TypographyP>
      <TypographyH4>Bodyguard VIP</TypographyH4>
      <TypographyP>
        There are a dozen bodyguarding firms in the city, but sometimes a nerdy
        VIP wants to be guarded by &quot;video game characters&quot;.{" "}
        <b className="font-cyber">Osgrot</b> thinks this is fucking stupid but{" "}
        <b className="font-cyber">Felicity</b> won&apos;t pass up free press.
      </TypographyP>
      <TypographyH4>R & R</TypographyH4>
      <TypographyP>
        Sometimes <b className="font-cyber">Winith</b> asserts herself and
        carves out some time for the crew to just relax. Go on a vacation, kick
        your feet up. Clear all of your <b>conditions</b>.
      </TypographyP>
      <TypographyH4>Internal investigation</TypographyH4>
      <TypographyP>
        Look, if you&apos;re the ones put up to this, the company is already in
        dire straights. Corporate espionage is already a serious issue;{" "}
        <b className="font-cyber">ROOT&apos;s</b> enemies range far beyond this
        city though...
      </TypographyP>
    </>
  );
}
