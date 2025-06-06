import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import { getAllSurveysForArc } from "@/handlers/surveys";
import { getUser } from "@/handlers/users";
import { arcOneSurvey } from "@/lib/surveys";
import { cn } from "@/lib/utils";
import {
  AggregatedAnswer,
  AggregatedQuestionResponse,
  Category,
  Option,
  Survey,
} from "@/types/survey";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    redirect("/game/surveys/arc-one");
  }

  let surveys = await getAllSurveysForArc("arc-one");
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

  function aggregateAnswers(
    category: string,
    questionId: number
  ): AggregatedAnswer[] {
    const answers = surveys
      .flatMap((survey) => {
        const cat = survey.categories.find((c) => c.title === category);
        if (!cat) return [];
        const question = cat.questions.find((q) => q.id === questionId);
        if (!question || !question.answer) return [];
        return {
          user: survey.user || "Unknown User",
          answer: question.answer,
        } as AggregatedAnswer;
      })
      .filter((a) => a.answer); // Filter out empty answers
    return answers;
  }

  // build the aggregated results
  const aggregatedResults = arcOneSurvey;
  for (const category of aggregatedResults.categories) {
    for (const question of category.questions) {
      const answers = aggregateAnswers(category.title, question.id);
      question.answer = answers;
    }
  }

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Surveys", href: "#" },
          { name: "Results", href: "#" },
          { name: "Arc One", href: "#" },
        ]}
      />
      <TypographyH1 className="mb-6">
        Arc One Player Survey Results
      </TypographyH1>
      <SurveyResults survey={aggregatedResults} />
    </>
  );
}

function SurveyResults({ survey }: { survey: Survey }) {
  return (
    <div className="flex flex-col gap-2">
      {survey.categories.map((category, index) => (
        <CategoryResults key={index} category={category} />
      ))}
    </div>
  );
}

function CategoryResults({ category }: { category: Category }) {
  return (
    <>
      <TypographyH2>{category.title}</TypographyH2>
      {category.questions.map((question) => {
        switch (question.type) {
          case "text":
            return (
              <TextQuestion
                key={question.id}
                question={question as AggregatedQuestionResponse}
              />
            );
          case "multiple-choice":
            return (
              <MultipleChoiceQuestion
                key={question.id}
                question={question as AggregatedQuestionResponse}
              />
            );
          default:
            return <div key={question.id}>Unknown question type</div>;
        }
      })}
    </>
  );
}

function TextQuestion({ question }: { question: AggregatedQuestionResponse }) {
  return (
    <Card>
      <CardHeader>
        <TypographyP>{question.title}</TypographyP>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-6">
          {question.answer.map((answer, index) => (
            <li key={index}>
              <strong>{answer.user}:</strong> {answer.answer}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function MultipleChoiceQuestion({
  question,
}: {
  question: AggregatedQuestionResponse;
}) {
  return (
    <Card>
      <CardHeader>
        <TypographyP>{question.title}</TypographyP>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {question.options?.map((option) => (
            <MultipleChoiceOption
              key={option.value}
              option={option}
              answers={question.answer}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function MultipleChoiceOption({
  option,
  answers,
}: {
  option: Option;
  answers: AggregatedAnswer[];
}) {
  const count = answers.filter((a) => a.answer === option.value).length;
  const voters = answers
    .filter((a) => a.answer === option.value)
    .map((a) => a.user);
  return (
    <div className="flex items-center justify-between">
      <span className={cn(option.color && option.color)}>{option.text}</span>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="text-muted-foreground">
            {count}/{answers.length} votes
          </span>
        </TooltipTrigger>
        <TooltipContent>
          {voters.length === 0 ? (
            "No votes"
          ) : (
            <div className="max-h-40 p-2 overflow-y-auto flex flex-col gap-2 border-[1px] border-border rounded-md">
              {voters.map((voter, index) => (
                <div key={index} className="text-sm">
                  {voter}
                </div>
              ))}
            </div>
          )}
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
