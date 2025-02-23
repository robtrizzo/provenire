import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import {
  TypographyH1,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
import Breadcrumbs from '@/components/ui/breadcrumbs';

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Playtests', href: '#' },
          { name: 'Playtest Two', href: '#' },
        ]}
      />
      <TypographyH1>Playtest Two</TypographyH1>
      <TypographyP>
        The playtest will involve character creation and two full cycles of{' '}
        <span className="italic">prelude</span> -{'>'}{' '}
        <span className="italic">mission</span> -{'>'}{' '}
        <span className="italic">churn</span>. You&apos;ll be playing a
        character that you won&apos;t be playing in the main game. But the
        events of this playtest <i>will</i> be canonical to the story of the
        main game. So please experiment and push the boundaries of the game, but
        remember that your choices will linger.
      </TypographyP>
      <Separator className="my-5" />
      <TypographyH3>Primer</TypographyH3>
      <TypographyP>
        Last week you heard Finnegan went missing near cold storage. Of course
        he did; kids go missing all the time. You&apos;d know better than most
        how it happens.
      </TypographyP>
      <TypographyP>
        <i>Why did you think that? How do you know better than most? </i>A
        single drop sends ripples through your recollection. Your mind buries it
        again, aided by a comfortable <i>drone</i>. Memories are just pains and
        indignities from yesterday. Easier to leave them behind.
      </TypographyP>
      <TypographyP>
        Time has blended into a murky cycle of struggle and sleep. It makes no
        difference when - or how long, just that one precedes the other. As long
        as you can put food on the table, life goes on.
      </TypographyP>
      <TypographyP>
        You work your back breaking labor, grab your gruel bowl, and head to the
        food line. It&apos;s chaos. The <strong>Forge Pyrens</strong> struck
        again. Worse than ever. Families are weeping over three dead. The food
        this community sacrificed so much for, is gone.
      </TypographyP>
      <TypographyP>
        Enforcers are pointing fingers. Workers with bowls in hand stare at the
        empty barrel. No one knows what to do. But you do.
      </TypographyP>
      <Separator className="my-5" />
      <TypographyH3>Character Creation</TypographyH3>
      <TypographyP>
        We will be going through a limited version of character creation for
        this playtest. You&apos;re playing as a group of hardened workers with a
        chip on their shoulder.
      </TypographyP>
      <TypographyP>
        First, answer the following questions for your character. You can record
        them on the character sheet if you like.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <TypographyP className="italic">What&apos;s your look?</TypographyP>
        </li>
        <li>
          <TypographyP className="italic">What&apos;s your dream?</TypographyP>
        </li>
        <li>
          <TypographyP className="italic">What&apos;s your hurt?</TypographyP>
        </li>
        <li>
          <span className="italic">
            What could stop you from carrying out an extreme act of violence?
          </span>
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        Next, pick a{' '}
        <span className="underline text-sky-500">
          <Link href="/game/heritages">heritage</Link>
        </span>{' '}
        and answer its question.
      </TypographyP>
      <TypographyP>
        Next, pick a{' '}
        <span className="underline text-red-500">
          <Link href="/game/backgrounds">background</Link>
        </span>
        {', '}
        but don&apos;t worry about answering its questions. We&apos;ll be doing
        that with the characters we play in the main game.
      </TypographyP>
      <TypographyP>
        Pick an{' '}
        <span className="underline text-amber-500">
          <Link href="/game/archetypes">archetype</Link>
        </span>{' '}
        but similar to your background&apos;s questions - don&apos;t answer your
        archetype questions either.
      </TypographyP>
      <TypographyP>
        To wrap up, name your <strong>bonds</strong> and assign 8 points to your
        actions. <span className="text-red-500">Red dots</span> cost 1 point.
        Upgrading to a <span className="text-blue-500">blue dot</span> cost 1
        point.
      </TypographyP>
      <Separator className="my-5" />
      <TypographyH3>Feedback</TypographyH3>
      <TypographyP>
        Once session is over, don&apos;t feel the need to stick around any
        longer, but that&apos;s when I&apos;ll be seeking your feedback. If you
        do stay, thank you! I appreciate it.
      </TypographyP>
      <TypographyP>
        My primary goal for playtest two is to evaluate <strong>combat</strong>.
      </TypographyP>
      <TypographyUnorderedList>
        <li>Do the comat rules enhance it?</li>
        <li>Can I explain them clearly?</li>
        <li>Do you feel able to make meaningful choices in combat?</li>
        <li>Do you feel like you can use a variety of actions in combat?</li>
      </TypographyUnorderedList>
      <TypographyP>
        Next, I want feedback on the{' '}
        <span className="text-sky-500">heritage</span>,{' '}
        <span className="text-red-500">background</span>, and{' '}
        <span className="text-amber-500">archetype</span> options. Specifically:
      </TypographyP>
      <TypographyUnorderedList>
        <li>Are they compelling?</li>
        <li>Are there too many or not enough?</li>
        <li>Do any seem obviously under or overpowered?</li>
      </TypographyUnorderedList>
      <TypographyP>
        Lastly, I want to get a gague on setting and tone.
      </TypographyP>
      <TypographyUnorderedList>
        <li>Is it compelling?</li>
        <li>
          Can I convey a dark setting while maintaining an optimistic overtone?
        </li>
        <li>
          Are there any parts which the players are wholly uninterested in or
          want to be expanded?
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        These goals aren&apos;t gospel and I&apos;m primarily focused on running
        a fun session for everyone. But if you could keep these questions in
        mind as we play and give me feedback at the end, I&apos;d appreciate
        that very much!
      </TypographyP>
    </>
  );
}
