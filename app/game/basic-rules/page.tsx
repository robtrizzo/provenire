import Donum from '@/components/stats/donum';
import Defiance from '@/components/stats/defiance';
import Heart from '@/components/stats/heart';
import Ingenuity from '@/components/stats/ingenuity';
import Machina from '@/components/stats/machina';
import Savagery from '@/components/stats/savagery';
import Blood from '@/components/stats/blood';
import Hunger from '@/components/stats/hunger';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from '@/components/ui/typography';

export default function Page() {
  return (
    <>
      <TypographyH1>Basic Rules</TypographyH1>
      <TypographyP>
        <Donum>Provenire&apos;s</Donum> basic system is based heavily on{' '}
        <strong>Masks</strong>. If you&apos;re familiar with{' '}
        <strong>Masks</strong> or other{' '}
        <strong>Powered by the Apocalypse</strong> systems, feel free to skim
        past this section.
      </TypographyP>
      <TypographyH2>How to Play</TypographyH2>
      <TypographyP>
        In <Donum>Provenire</Donum>, the Game Master (or GM, Referee, Narrator)
        rarely rolls any dice, if ever. Throughout play, the GM will call for a
        player to make a roll. When you roll, roll 2d6 and add your relevant
        stat to the result. If the result is 10 or higher, you succeed. If the
        result is 6 or lower, you fail and +1<strong>xp</strong>. If the result
        is 7-9, you succeed, but at a cost.
      </TypographyP>
      <TypographyP>
        There are also times throughout play when a player may prompt a roll
        with a <strong>Basic Move</strong> or <strong>Playbook Move</strong>,
        but more on those later.
      </TypographyP>
      <TypographyH2>Stats</TypographyH2>
      <TypographyP>
        There are five stats in <Donum>Provenire</Donum>{' '}
        <strong>Era Three, Arc One</strong>: <Defiance />
        {', '}
        <Heart />
        {', '}
        <Ingenuity />
        {', '}
        <Machina />
        {', and '}
        <Savagery />. Each stat can range from a score of -2 to 3. Stats may be{' '}
        <strong>shifted</strong> throughout play through{' '}
        <strong>advancement</strong> or from <strong>moves</strong>, but never
        beyond the range of -2 to 3. Your character&apos;s starting stats will
        be determined by their <strong>playbook</strong>.
      </TypographyP>
      <TypographyP>
        <Defiance /> represents your punk rebelliousness, your ability to
        withstand the pressures of society, and your ability to resist
        authority.
      </TypographyP>
      <TypographyP>
        <Heart /> represents your ability to emotionally connect with others as
        well as your capacity to put others before yourself.
      </TypographyP>
      <TypographyP>
        <Ingenuity /> represents your craftiness with material things and
        situations as well as your experience tinkering within the Mechanical
        Matrix.
      </TypographyP>
      <TypographyP>
        <Machina /> represents your ability and willingness to manipulate
        others, as well as your ability to read and understand peoples&apos;
        motivations.
      </TypographyP>
      <TypographyP>
        <Savagery /> represents your ability to fight and your willingness to
        hurt others.
      </TypographyP>
      <TypographyH2>Resources</TypographyH2>
      <TypographyP>
        Each character has two resources that represent important factors in
        their body and state of mind: <Blood /> and <Hunger />. Each resource
        can range from a score of 0 to 3. Resources will change throughout the
        normal course of play. Each character begins with 1 <Blood /> and 1{' '}
        <Hunger />.
      </TypographyP>
      <TypographyP>
        <Blood /> represents your character&apos;s reserve of animal (or human)
        blood that they have consumed. <Blood /> can be exhausted by unskilled
        users to heal superficial wounds, have bursts of strength, or think
        rapidly for a few moments. Moves that allow <Blood /> to be used will
        specify this.
      </TypographyP>
      <TypographyP>
        <Hunger /> represents how long it has been since your character has had
        a proper meal. <Hunger /> can&apos;t be spent like blood can, as it
        becomes higher, your character come closer to starvation. More details
        on <Hunger /> can be found in the{' '}
        <Link href="/game/downtime">Downtime</Link> rules.
      </TypographyP>
      <TypographyH2>Terms</TypographyH2>
      <TypographyP>
        Here is a collection of terms you&apos;ll encounter throughout the rules
        and play.
      </TypographyP>
      <TypographyP>
        A <strong>move</strong> is triggered by a player action or narrative
        situation and requires a roll to resolve.
      </TypographyP>
      <TypographyP>
        A <strong>Basic Move</strong> is a move accessible to all characters.
      </TypographyP>
      <TypographyP>
        A <strong>playbook move</strong> is a move accessible only to characters
        of a specific <strong>playbook</strong>.
      </TypographyP>
      <TypographyP>
        A <strong>playbook</strong> is a character archetype which has a set of
        starting stats and <strong>playbook moves</strong>.
      </TypographyP>
      <TypographyP>
        <strong>Advancement</strong> is when you get to choose a way to improve
        your character by spending <strong>experience points (or xp)</strong>
      </TypographyP>
      <TypographyP>
        <strong>xp</strong> is a unit of progress towards your character&apos;s
        next <strong>advancement</strong>
      </TypographyP>
      <TypographyP>
        <strong>Shifting</strong> a stat means to increase one stat by 1 (up to
        a maximum of 3) and decrease another (to a minimum of -2).
      </TypographyP>
      <TypographyP>
        <strong>Forward</strong> is a bonus to the next roll that matches the
        situation described by the ability that gave the{' '}
        <strong>forward</strong>
      </TypographyP>
      <TypographyP>
        <strong>Hold</strong> is a resource that can be spent to trigger a
        specific effect.
      </TypographyP>
      <TypographyP>
        <strong>Ongoing</strong> is a bonus to all rolls that matches the
        situation described by the ability that gave the{' '}
        <strong>ongoing</strong>
      </TypographyP>
      <TypographyP>
        A <strong>condition</strong> is a status effect that negatively affects
        your character&apos;s ability to act. Each <strong>condition</strong>{' '}
        has a specific stat it affects.
      </TypographyP>
      <TypographyP>
        <strong>Marking a condition</strong> is when you gain a new{' '}
        <strong>condition</strong>. If all <strong>conditions</strong> are
        marked, your character is <strong>taken out of the action</strong>.
      </TypographyP>
      <TypographyP>
        <strong>Clearing a condition</strong> is when you remove a{' '}
        <strong>condition</strong> from your character.
      </TypographyP>
      <TypographyP>
        Being <strong>taken out of the action</strong> means your character is
        incapacitated, runs away, or is otherwise unable to act: your choice.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/game">
          <Button variant="outline">
            <ChevronLeft /> Introduction
          </Button>
        </Link>
        <Link href="/game/basic-moves">
          <Button variant="outline">
            Basic Moves <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
