import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import {
  TypographyH1,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import Link from "next/link";
import { redirect } from "next/navigation";
import { arcOneSurvey } from "@/lib/surveys";
import Survey from "@/components/survey/survey";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }

  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Arc One Player Survey</TypographyH1>
      <TypographyP>
        Hey there gamers! Once again I have to thank you for a fantastic 36
        sessions of games. Given the average session time, that&apos;s probably
        around <b>140</b> hours of gaming! Anyway, this isn&apos;t about stats.
        This is about you!
      </TypographyP>
      <TypographyP>
        Our experiences (me the GM and you the player) are vastly different. And
        I can&apos;t understand lots of things from your perspective, so I want
        to hear from you!
      </TypographyP>
      <TypographyP>
        This is a very thorough survey and it will be broken down into sections.
        This is absolutely <i>NOT</i> required, but if you feel like helping me
        make the game better for you, thanks!
      </TypographyP>
      <TypographyP>
        When it comes to the game-system, keep in mind that your feedback will
        be applied in Arc 3. Arc 2 has already been heavily in the works and
        it&apos;s too late to make big changes. But if the opportunity arises,
        of course I&apos;ll adapt it to suit your preferences!
      </TypographyP>
      <TypographyP>
        Also worth keeping in mind that these are <i>NOT</i> anonymous - for the
        sake of only one survey response per player.
      </TypographyP>
      <Separator className="my-4" />
      <TypographyH4>Quick links</TypographyH4>
      <div className="flex flex-col gap-1 ml-4">
        <Link href="#overall">
          <u className="text-red-500">Overall</u>
        </Link>
        <Link href="#scheduling">
          <u className="text-red-500">Scheduling</u>
        </Link>
        <Link href="#narrative">
          <u className="text-red-500">Narrative</u>
        </Link>
        <Link href="#character-options">
          <u className="text-red-500">Character Options</u>
        </Link>
        <Link href="#mechanics">
          <u className="text-red-500">Mechanics</u>
        </Link>
        <Link href="#structure">
          <u className="text-red-500">Structure</u>
        </Link>
        <Link href="#character-sheet">
          <u className="text-red-500">Character Sheet</u>
        </Link>
        <Link href="#website">
          <u className="text-red-500">Website</u>
        </Link>
      </div>
      <Separator className="my-4" />
      <Survey survey={arcOneSurvey} endpoint="arc-one" />
    </>
  );
}
