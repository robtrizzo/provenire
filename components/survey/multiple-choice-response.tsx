import {
  AggregatedAnswer,
  AggregatedQuestionResponse,
  Option,
} from "@/types/survey";
import { Card, CardContent, CardHeader } from "../ui/card";
import { TypographyP } from "../ui/typography";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default async function MultipleChoiceResponse({
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
