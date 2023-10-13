import Donum from '@/components/Donum';
import Defiance from '@/components/Defiance';
import Next from '@/components/Next';
import Previous from '@/components/Previous';
import Ingenuity from '@/components/Ingenuity';
import Heart from '@/components/Heart';
import Machina from '@/components/Machina';
import Savagery from '@/components/Savagery';
import Blood from '@/components/Blood';
import Hunger from '@/components/Hunger';
import Link from 'next/link';

export default function BasicRules() {
  return (
    <>
      <h1>Basic Rules</h1>
      <p>
        <Donum>Provenire's</Donum> basic system is based heavily on{' '}
        <strong>Masks</strong>. If you're familiar with <strong>Masks</strong>{' '}
        or other <strong>Powered by the Apocalypse</strong> systems, feel free
        to skim past this section.
      </p>
      <h2>How to Play</h2>
      <p>
        In <Donum>Provenire</Donum>, the Game Master (or GM, Referee, Narrator)
        rarely rolls any dice, if ever. Throughout play, the GM will call for a
        player to make a roll. When you roll, roll 2d6 and add your relevant
        stat to the result. If the result is 10 or higher, you succeed. If the
        result is 6 or lower, you fail and +1<strong>xp</strong>. If the result
        is 7-9, you succeed, but at a cost.
      </p>
      <p>
        There are also times throughout play when a player may prompt a roll
        with a <strong>Basic Move</strong> or <strong>Playbook Move</strong>,
        but more on those later.
      </p>
      <h2>Stats</h2>
      <p>
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
        beyond the range of -2 to 3. Your character's starting stats will be
        determined by their <strong>playbook</strong>.
      </p>
      <p>
        <Defiance /> represents your punk rebelliousness, your ability to
        withstand the pressures of society, and your ability to resist
        authority.
      </p>
      <p>
        <Heart /> represents your ability to emotionally connect with others as
        well as your capacity to put others before yourself.
      </p>
      <p>
        <Ingenuity /> represents your craftiness with material things and
        situations as well as your experience tinkering within the Mechanical
        Matrix.
      </p>
      <p>
        <Machina /> represents your ability and willingness to manipulate
        others, as well as your ability to read and understand peoples'
        motivations.
      </p>
      <p>
        <Savagery /> represents your ability to fight and your willingness to
        hurt others.
      </p>
      <h2>Resources</h2>
      <p>
        Each character has two resources that represent important factors in
        their body and state of mind: <Blood /> and <Hunger />. Each resource
        can range from a score of 0 to 3. Resources will change throughout the
        normal course of play. Each character begins with 1 <Blood /> and 1{' '}
        <Hunger />.
      </p>
      <p>
        <Blood /> represents your character's reserve of animal (or human) blood
        that they have consumed. <Blood /> can be exhausted by unskilled users
        to heal superficial wounds, have bursts of strength, or think rapidly
        for a few moments. Moves that allow <Blood /> to be used will specify
        this.
      </p>
      <p>
        <Hunger /> represents how long it has been since your character has had
        a proper meal. <Hunger /> can't be spent like blood can, as it becomes
        higher, your character come closer to starvation. More details on{' '}
        <Hunger /> can be found in the{' '}
        <Link href="/game/downtime">Downtime</Link> rules.
      </p>
      <h2>Terms</h2>
      <p>
        Here is a collection of terms you'll encounter throughout the rules and
        play.
      </p>
      <p>
        A <strong>move</strong> is triggered by a player action or narrative
        situation and requires a roll to resolve.
      </p>
      <p>
        A <strong>Basic Move</strong> is a move accessible to all characters.
      </p>
      <p>
        A <strong>playbook move</strong> is a move accessible only to characters
        of a specific <strong>playbook</strong>.
      </p>
      <p>
        A <strong>playbook</strong> is a character archetype which has a set of
        starting stats and <strong>playbook moves</strong>.
      </p>
      <p>
        <strong>Advancement</strong> is when you get to choose a way to improve
        your character by spending <strong>experience points (or xp)</strong>
      </p>
      <p>
        <strong>xp</strong> is a unit of progress towards your character's next{' '}
        <strong>advancement</strong>
      </p>
      <p>
        <strong>Shifting</strong> a stat means to increase one stat by 1 (up to
        a maximum of 3) and decrease another (to a minimum of -2).
      </p>
      <p>
        <strong>Forward</strong> is a bonus to the next roll that matches the
        situation described by the ability that gave the{' '}
        <strong>forward</strong>
      </p>
      <p>
        <strong>Hold</strong> is a resource that can be spent to trigger a
        specific effect.
      </p>
      <p>
        <strong>Ongoing</strong> is a bonus to all rolls that matches the
        situation described by the ability that gave the{' '}
        <strong>ongoing</strong>
      </p>
      <p>
        A <strong>condition</strong> is a status effect that negatively affects
        your character's ability to act. Each <strong>condition</strong> has a
        specific stat it affects.
      </p>
      <p>
        <strong>Marking a condition</strong> is when you gain a new{' '}
        <strong>condition</strong>. If all <strong>conditions</strong> are
        marked, your character is <strong>taken out of the action</strong>.
      </p>
      <p>
        <strong>Clearing a condition</strong> is when you remove a{' '}
        <strong>condition</strong> from your character.
      </p>
      <p>
        Being <strong>taken out of the action</strong> means your character is
        incapacitated, runs away, or is otherwise unable to act: your choice.
      </p>
      <div className="flex flex-row mt-8">
        <Previous href="/game/introduction" text="Introduction" />
        <Next href="/game/basic_moves" text="Basic Moves" />
      </div>
    </>
  );
}
