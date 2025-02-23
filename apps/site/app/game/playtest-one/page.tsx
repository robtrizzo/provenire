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
          { name: 'Playtest One', href: '#' },
        ]}
      />
      <TypographyH1>Playtest One</TypographyH1>
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
        Annika&apos;s twelfth nameday was a few days ago. She hosted a party to
        celebrate - the first cheerful gathering in Assembly for what feels like
        years.
      </TypographyP>
      <TypographyP>None of you were invited.</TypographyP>
      <TypographyP>
        You could see the festivities from afar. Her mother found some flower
        petals to decorate with and her father managed to find some scraps of
        meat to add to the stew. There was singing, dancing, and laughter.
      </TypographyP>
      <TypographyP>
        Your small pod of friends has someone with a nameday coming up soon. It
        would be good to do something nice to celebrate. Now more than ever.
        You&apos;ve heard rumors that &apos;something incredible&apos; happens
        in the back of cold storage every few days. Whatever it is,
        &apos;something incredible&apos; sounds nice.
      </TypographyP>
      <Separator className="my-5" />
      <TypographyH3>Character Creation</TypographyH3>
      <TypographyP>
        We will be going through a limited version of character creation for
        this playtest. You&apos;re playing as a couple of preteens after all.
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
          <span className="italic">Why weren&apos;t you invited?</span>{' '}
          (&quot;Annika is a bitch&quot; is a fine answer.)
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
        Next, pick an{' '}
        <span className="underline text-amber-500">
          <Link href="/game/archetypes">archetype</Link>
        </span>{' '}
        but don&apos;t worry about answering its questions. We&apos;ll be doing
        that with the characters we play in the main game.
      </TypographyP>
      <TypographyP>
        To wrap up, name your <strong>bonds</strong> and assign 6 points to your
        actions. <span className="text-red-500">Red dots</span> cost 1 point and{' '}
        <span className="text-blue-500">blue dots</span> cost 2 points.
      </TypographyP>
      <Separator className="my-5" />
      <TypographyH3>Feedback</TypographyH3>
      <TypographyP>
        Once session is over, don&apos;t feel the need to stick around any
        longer, but that&apos;s when I&apos;ll be seeking your feedback. If you
        do stay, thank you! I appreciate it.
      </TypographyP>
      <TypographyP>
        My primary goal for playtest one is to evaluate the core rules.
      </TypographyP>
      <TypographyUnorderedList>
        <li>Do they work?</li>
        <li>Can I explain them clearly?</li>
        <li>Are they fun?</li>
        <li>
          Do they cover the types of situations you want to explore in the game?
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        Next, I want feedback on the{' '}
        <span className="text-sky-500">heritage</span> and{' '}
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
