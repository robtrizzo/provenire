import { auth } from "@/auth";
import SurveyResults from "@/components/survey/survey-results";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1 } from "@/components/ui/typography";
import { getAllSurveysForArc } from "@/handlers/surveys";
import { getUser } from "@/handlers/users";
import { aggregateAnswers, arcTwoSurvey } from "@/lib/surveys";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    redirect("/game/arc-one/surveys/arc-one");
  }

  let surveys = await getAllSurveysForArc("arc-two");
  surveys = await Promise.all(
    surveys.map(async (survey) => {
      const user = await getUser(survey.user!);
      const username = user?.name || "Unknown User";
      return {
        ...survey,
        user: username,
      };
    })
  );

  // build the aggregated results
  const aggregatedResults = arcTwoSurvey;
  for (const category of aggregatedResults.categories) {
    for (const question of category.questions) {
      const answers = aggregateAnswers(surveys, category.title, question.id);
      question.answer = answers;
    }
  }

  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Arc Two State of the Game Survey Results</TypographyH1>
      <SurveyResults results={aggregatedResults} />
    </>
  );
}
