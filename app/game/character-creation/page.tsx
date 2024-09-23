import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
import archetypes from '@/public/archetypes.json';

export default async function Page() {
  return (
    <>
      <TypographyH1>Character Creation</TypographyH1>
      <TypographyP>
        <strong>Kingwulf</strong> and his kingdom of Fenrir won long ago.{' '}
        <span className="italic">Won what?</span> Won the war for everything.
        Fenrir is all that is left. Other nations, histories, cultures -
        consumed by the beast. But they haven't taken everything. Muttered over
        tin can fires, whispered between siblings when they&apos;re supposed to
        be going to bed, glimpsed in fleeting dreams are the stories of the
        past. Memories of ways of life long lost. There are many heritages to
        choose from in <span className="italic">Provenire</span>:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <strong>Argosi</strong>: Charity, gratitude, purity
        </li>
        <li>
          <strong>Bwarhein</strong>: Vengeance, rage, bestiality
        </li>
        <li>
          <strong>Cumerian</strong>: Fearlessness and fearsomeness
        </li>
        <li>
          <strong>Fenrir</strong>: Serve Kingwulf, dominate all others
        </li>
        <li>
          <strong>Gredoran</strong>: Beauty, art, and sacrifice
        </li>
        <li>
          <strong>Heian</strong>: Honor, agility, Draconis
        </li>
        <li>
          <strong>Kilder</strong>: Discipline, resilience, philosophy
        </li>
        <li>
          <strong>Kiposi</strong>: Agriculture, sport, liberty
        </li>
        <li>
          <strong>Narscillian</strong>: Music, duty, community
        </li>
        <li>
          <strong>Yaman</strong>: Pacifism, reverence, order
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        <strong className="text-sky-500">Heritages</strong> are the stories and
        memories of your ancestors' ancestors. They give your character precious
        traditions to preserve. If you choose Fenrir though, you instead are
        taught to embrace the cultural norms of the Steel Trap and to think
        yourself better than the others who are in a slightly lower social
        caste.
      </TypographyP>
      <TypographyP>
        Heritages <span className="italic">do not</span> impart a mandatory
        look, outlook, or mechanical benefit. Fenrir workers might inherit
        physical bestial traits (but they are always{' '}
        <span className="italic">thinbloods</span>).
      </TypographyP>
      <Separator />
      <TypographyP>
        But to our characters, <strong>Kingwulf</strong> and the outside world
        are a faraway thought. They live in the Steel Trap: a weapons factory
        somewhere within the wildnerness of Fenrir. Why even wonder about
        something so outside of their concern? Day in and day out, they work.
        Their toil is rewarded by scraps, and never enough to fill
        everyone&apos;s bellies. But don&apos;t speak out. Don&apos;t question
        the status quo. The overseers are watching, and they don&apos;t take
        kindly to troublemakers. There are many tasks workers are forced to do
        in the Steel Trap. Some of them are:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <strong>Archivist</strong>: Read manuals and catalog inventory
        </li>
        <li>
          <strong>Enforcer</strong>: Keep the fear and enforce the rules
        </li>
        <li>
          <strong>Machinist</strong>: Living replacement for broken parts
        </li>
        <li>
          <strong>Operator</strong>: Pull levers and crank wheels
        </li>
        <li>
          <strong>Runner</strong>: Carry messages and transport crates
        </li>
        <li>
          <strong>Scrapper</strong>: Sort broken parts and salvage scrap
        </li>
        <li>
          <strong>Stoker</strong>: Shovel tar and stoke the fires
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        <strong className="text-red-500">Backgrounds</strong> grant two unique
        mission actions, two profile questions, two professional bonds, and a
        subsistence activity.
      </TypographyP>
      <Separator />
      <TypographyP>
        Over the course of <span className="italic">Provenire&apos;s</span>{' '}
        story, we follow a group of upstart troublemakers as they become a crew
        of competent revolutionaries. They do this by taking illegal jobs from
        clients, planning their own devious missions, making alliances,
        destroying their enemies, and trying to stay one step ahead of the
        overseers. Some of the ways they go about this are:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <strong>Chisel</strong>: a crafty sabotuer and wright
        </li>
        <li>
          <strong>Flywheel</strong>: a daring scoundrel and acrobat
        </li>
        <li>
          <strong>Fume</strong>: a manipulative and intimidating schemer
        </li>
        <li>
          <strong>Grease</strong>: a canny and resourceful blusterer
        </li>
        <li>
          <strong>Hammer</strong>: a strong and fearless brawler
        </li>
        <li>
          <strong>Nail</strong>: an audacious and inspiring ringleader
        </li>
        <li>
          <strong>Spark</strong>: a quick-witted and charming protector
        </li>
        <li>
          <strong>Vapor</strong>: an elusive infiltrator and thief
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        <strong className="text-indigo-500">Skillsets</strong> grant two unique
        mission actions, three mission abilities, two profile questions, an
        agenda, and a downtime ability.
      </TypographyP>
      <Separator />
      <TypographyP>
        But who are these characters when they aren&apos;t working and
        aren&apos;t fighting back? What kind of friends, family members,
        coworkers, and lovers are they? How do they care for the people around
        them? Some of their personality types are:
      </TypographyP>
      <TypographyUnorderedList>
        {archetypes.map((archetype) => (
          <li key={archetype.name}>
            <strong>{archetype.name}</strong>: {archetype.shortDescription}
          </li>
        ))}
      </TypographyUnorderedList>
      <TypographyP>
        <strong className="text-amber-700">Archetypes</strong> grant a unique
        mission action, two mission abilities, five profile questions, and two
        downtime abilities.
      </TypographyP>
      <TypographyH2>Filling in the blanks</TypographyH2>
      <TypographyP>
        Once you&apos;ve made your selections from the options above, there are
        a few things left to do before you&apos;re ready to play. First, fill
        out all of your profile questions. These are open-ended intentionally;
        you can be creative with your answers and even create fiction to support
        them. Keep in mind that the <strong>Narrator</strong> will review your
        answers to help you stay within the bounds of the fiction.
      </TypographyP>
      <TypographyP>
        Next, name your familial and personal bonds. These NPCs along with the
        professional bonds you get from your background replace your{' '}
        <strong>universal actions</strong> during <strong>the churn</strong>.
        You can think of them as your &quot;stats&quot; outside of the mission.
      </TypographyP>
      <TypographyP>
        Next, assign 8 points to your <strong>actions</strong>.{' '}
        <span className="text-red-500">Red dots</span> cost 1 point and{' '}
        <span className="text-blue-500">blue dots</span> cost 2 points. Be
        aware, your <strong>bonds</strong> also count for this, so if you
        neglect them, you&apos;ll be weaker during <strong>the churn.</strong>
      </TypographyP>
      <TypographyP>
        Finally, name your character, give them an alias, and finish the common
        questions in your character profile. Then you&apos;re ready to play!
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/game/the-churn">
          <Button variant="outline">
            <ChevronLeft /> The Churn
          </Button>
        </Link>
        <Link href="/game/backgrounds">
          <Button variant="outline">
            Backgrounds <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
