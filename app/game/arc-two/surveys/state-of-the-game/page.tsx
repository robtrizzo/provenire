import { auth } from "@/auth";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import Link from "next/link";
import { redirect } from "next/navigation";
import Survey from "@/components/survey/survey";
import { arcTwoSurvey } from "@/lib/surveys";

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }

  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Arc Two State of the Game Survey</TypographyH1>
      <TypographyP>
        Greetings, gamers! We&apos;re not quite done with this arc (maybe two
        thirds of the way through) but I have thoroughly enjoyed it so far.
        Thank you for making it special!
      </TypographyP>
      <TypographyP>
        Just like I did with the last arc, I want to hear from you on a variety
        of topics. I decided to post this now because I think you&apos;ve had
        enough time with the Arc Two systems to have opinions on them. Your
        feedback will help inform the design of both Arc Three (currently in
        production) and Arc Four.
      </TypographyP>
      <TypographyP>
        As before, this survey is <i>NOT</i> required, though incredibly
        appreciated and helpful. Also worth keeping in mind, the responses are{" "}
        <i>NOT</i> anonymous.
      </TypographyP>
      <TypographyH4>Quick links</TypographyH4>
      <div className="flex flex-col gap-1 ml-4 mb-4">
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
      <Survey survey={arcTwoSurvey} endpoint="arc-two" />
    </>
  );
}
