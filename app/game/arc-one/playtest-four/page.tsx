import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  TypographyH1,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import Breadcrumbs from "@/components/ui/breadcrumbs";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Playtest Four</TypographyH1>
      <TypographyP>
        The playtest will involve character creation and one full cycle of{" "}
        <span className="italic">prelude</span> -{">"}{" "}
        <span className="italic">mission</span> -{">"}{" "}
        <span className="italic">churn</span>. You&apos;ll be playing a
        character that you won&apos;t be playing in the main game. But the
        events of this playtest <i>will</i> be canonical to the story of the
        main game. So please experiment and push the boundaries of the game, but
        remember that your choices will linger.
      </TypographyP>
      <Separator className="my-5" />
      <TypographyH3>Primer</TypographyH3>
      <TypographyP>
        An enforcer named Wenna was found murdered in the Welds. A grisly scene
        - her torso is basically pudding and her eyes are scorched from their
        sockets. What a way to go. The other enforcers are too busy pointing
        fingers at each other to get their shit together. So once agian, chief
        enforcer Strag has reluctantly deputized you...
      </TypographyP>
      <TypographyP>
        Luckily, you&apos;ve already solved the case. You killed Wenna. When
        poor Lita couldn&apos;t pay Wenna&apos;s extortion racket, Wenna forced
        her to trade her baby child. And when Wenna got bored of pretending to
        be a parent, she gave the child away to some enforcer in Fabrication.
        Bitch had it coming.
      </TypographyP>
      <TypographyP>
        And yet in the wake of justice... the evidence is overwhelming. You
        didn&apos;t plan this out well. It shows. You&apos;ve got less than 24
        hours to frame someone. The walls are closing in.
      </TypographyP>
      <Separator className="my-5" />
      <TypographyH3>Character Creation</TypographyH3>
      <TypographyP>
        We will be going through a limited version of character creation for
        this playtest. You&apos;re a group of workers who are some of the few
        brave enough to work closely with the enforcers in exchange for food and
        favors. But sometimes, the crimes you investigate are your own. So far
        it&apos;s worked out okay. This time is different.
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
          <TypographyP className="italic">
            What&apos;s the damning piece of evidence you <b>have</b> to get rid
            of?
          </TypographyP>
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        Next, pick a{" "}
        <span className="underline text-indigo-500">
          <Link href="/game/arc-one/skillsets">skillset</Link>
        </span>
        , select a{" "}
        <span className="text-indigo-700 dark:text-indigo-300 font-semibold">
          special ability
        </span>
        , and answer its questions.
      </TypographyP>
      <TypographyP>
        Next, pick a{" "}
        <span className="underline text-red-500">
          <Link href="/game/arc-one/archetypes">background</Link>
        </span>
        , but don&apos;t worry about answering its questions. We&apos;ll be
        doing that with the characters we play in the main game.
      </TypographyP>
      <TypographyP>
        Next, pick a{" "}
        <span className="underline text-amber-500">
          <Link href="/game/arc-one/archetypes">archetype</Link>
        </span>
        , but don&apos;t answer its questions either.
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
        My primary goal for playtest two is to evaluate the{" "}
        <strong>churn</strong>.
      </TypographyP>
      <TypographyUnorderedList>
        <li>Can I explain the rules clearly?</li>
        <li>Is it fun?</li>
        <li>Is there space for role play?</li>
        <li>
          Do you feel able to make meaningful choices in the{" "}
          <strong>churn</strong>?
        </li>
        <li>Is there any obvious number balancing you&apos;d like to see?</li>
      </TypographyUnorderedList>
      <TypographyP>
        Next, I want feedback on the{" "}
        <span className="text-indigo-500">skillset</span>,{" "}
        <span className="text-red-500">background</span> and{" "}
        <span className="text-amber-500">archetype</span> options. Specifically:
      </TypographyP>
      <TypographyUnorderedList>
        <li>Are they compelling?</li>
        <li>
          Do the special ability options seem roughly equal in desirability?
        </li>
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
