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
      <Breadcrumbs
        crumbs={[
          { name: "Playtests", href: "#" },
          { name: "Playtest Three", href: "#" },
        ]}
      />
      <TypographyH1>Playtest Three</TypographyH1>
      <TypographyP>
        The playtest will involve character creation and two full cycles of{" "}
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
        Liam went missing two days ago. Which feels impossible. His dirty smock,
        goofy jokes, and welcoming smile feel like landmarks in your childhoods.
        He did good by you. He does good by a lot of kids with nowhere else to
        go. Or, he did.
      </TypographyP>
      <TypographyP>
        Apparently one of the kids he was looking after got sent into{" "}
        <i>Russaka</i>: one of the more obstinate machines in Assembly. And when
        the kid got stuck, of course Liam went in after him. That well
        intentioned fool. If he&apos;d let the kid die, he could&apos;ve stuck
        around to keep doing good. Not that he&apos;s for sure dead, but pretty
        much no one comes out of <i>Russ</i> with all of their limbs attached.
      </TypographyP>
      <TypographyP>
        The community is holding a vigil tomorrow. Big enough where the
        Enforcers are going to show up to make sure everyone gets back to work
        in a timely manner. Rumor is <i>Amalina</i> might even show up to keep
        an eye on things. Too good of an opportunity to pass up.{" "}
        <i>Amalina&apos;s</i> stash is the stuff of legends. With loot like
        that, you could be the most powerful worker in Assembly.
      </TypographyP>
      <Separator className="my-5" />
      <TypographyH3>Character Creation</TypographyH3>
      <TypographyP>
        We will be going through a limited version of character creation for
        this playtest. You&apos;re playing as a crew of cold blooded criminals
        out for themselves. They haven&apos;t given a single shred of thought
        towards their heritage or their community.
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
            What could convince you to betray your community?
          </span>
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        Next, pick a{" "}
        <span className="underline text-indigo-500">
          <Link href="/game/arc-one/skillsets">skillset</Link>
        </span>{" "}
        and answer its questions.
      </TypographyP>
      <TypographyP>
        Next, pick a{" "}
        <span className="underline text-red-500">
          <Link href="/game/arc-one/backgrounds">background</Link>
        </span>
        , but don&apos;t worry about answering its questions. We&apos;ll be
        doing that with the characters we play in the main game.
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
        <li>
          Do you feel able to make meaningful choices in the{" "}
          <strong>churn</strong>?
        </li>
        <li>Is there any obvious number balancing you&apos;d like to see?</li>
      </TypographyUnorderedList>
      <TypographyP>
        Next, I want feedback on the{" "}
        <span className="text-indigo-500">skillset</span> and{" "}
        <span className="text-red-500">background</span> options. Specifically:
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
