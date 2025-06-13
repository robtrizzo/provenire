import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  TypographyH1,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/ui/breadcrumbs";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Playtests", href: "#" },
          { name: "Playtest Five", href: "#" },
        ]}
      />
      <TypographyH1>Playtest Five</TypographyH1>
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
        Loren is dead. It was only a matter of time, everyone in the crew knew
        it. But it hurts all the same. She covered shifts, she shared food, she
        sheltered the young ones from the harshest tasks. But worst of all,
        Loren talked back when things were wrong.
      </TypographyP>
      <TypographyP>
        The enforcers took her to the fight pits two days ago. Made a whole show
        of it. Loren fought back - cracked some ribs and split a lip, all while
        we begged her to stop - we&apos;d break her out if she just stopped
        making it worse. Maybe she would&apos;t be dead if she&apos;d listened.
      </TypographyP>
      <TypographyP>
        It cost all the spare food we had, but we paid to watch. It wasn&apos;t
        a glory match. It was a sham. She was the warm up act: a prop in
        Rediger&apos;s introduction. He unceremoniously tore her to shreds.
      </TypographyP>
      <TypographyP>
        He&apos;s a worker too, how could he? You won&apos;t stand for it.
        Someone has to do something about it. Well, two days have passed and no
        one has. Fine. Maybe Rediger likes fighting starved and half-dead
        opponents, but he&apos;s not the only person in Assembly who knows how
        to fight.
      </TypographyP>
      <Separator className="my-5" />
      <TypographyH3>Character Creation</TypographyH3>
      <TypographyP>
        We will be going through a limited version of character creation for
        this playtest. You&apos;re playing as a tight-knit crew of friends who
        have recently turned to crime to provide for yourselves and uplift your
        community. It&apos;s dangerous. It&apos;s brutal. Loren isn&apos;t the
        first friend you&apos;ve lost.
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
            What inspires you to be brave?
          </TypographyP>
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
        <span className="underline text-amber-500">
          <Link href="/game/arc-one/archetypes">archetype</Link>
        </span>
        and select one of its{" "}
        <span className="font-semibold text-amber-800 dark:text-amber-200">
          special abilities
        </span>
        , but don&apos;t worry about answering its questions. We&apos;ll be
        doing that with the characters we play in the main game.
      </TypographyP>
      <TypographyP>
        To wrap up, name your <strong>bonds</strong> and assign 10 points to
        your actions.
      </TypographyP>
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col items-center">
          <span className="text-sm">1 point</span>
          <div className="flex items-center gap-4 mt-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
            <ArrowRight className="h-4 w-4 text-primary" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm">2 points</span>
          <div className="flex items-center gap-4 mt-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
            <ArrowRight className="h-4 w-4 text-primary" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
          </div>
          <span className="text-muted-foreground">or</span>
          <div className="flex items-center gap-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
            <ArrowRight className="h-4 w-4 text-primary" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
          <span className="text-muted-foreground">or</span>
          <span className="text-sm text-amber-500">archetype ability</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm">3 points</span>
          <div className="flex items-center gap-4 mt-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <ArrowRight className="h-4 w-4 text-primary" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
          </div>
          <span className="text-muted-foreground">or</span>
          <div className="flex items-center gap-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
            <ArrowRight className="h-4 w-4 text-primary" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
          </div>
          <span className="text-muted-foreground">or</span>
          <span className="text-sm text-indigo-500">skillset ability</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm">4 points</span>
          <div className="flex items-center gap-4 mt-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <ArrowRight className="h-4 w-4 text-primary" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
          </div>
        </div>
      </div>
      <Separator className="my-5" />
      <TypographyH3>Feedback</TypographyH3>
      <TypographyP>
        Once session is over, don&apos;t feel the need to stick around any
        longer, but that&apos;s when I&apos;ll be seeking your feedback. If you
        do stay, thank you! I appreciate it.
      </TypographyP>
      <TypographyP>
        My primary goal for playtest two is to evaluate the{" "}
        <strong>prelude</strong>.
      </TypographyP>
      <TypographyUnorderedList>
        <li>Can I explain the rules clearly?</li>
        <li>Is it fun?</li>
        <li>Is there space for role play?</li>
        <li>
          Do you feel able to make meaningful choices in the{" "}
          <strong>prelude</strong>?
        </li>
        <li>Is there any obvious number balancing you&apos;d like to see?</li>
      </TypographyUnorderedList>
      <TypographyP>
        Next, I want feedback on the{" "}
        <span className="text-indigo-500">skillset</span> and{" "}
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
