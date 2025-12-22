import { AggregatedQuestionResponse, Question } from "@/types/survey";
import { Card, CardContent, CardHeader } from "../ui/card";
import { TypographyP } from "../ui/typography";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export default function MultipleChoiceQuestion({
  question,
  handleMarkDirty,
}: {
  question: Question | AggregatedQuestionResponse;
  handleMarkDirty: () => void;
}) {
  return (
    <Card>
      <CardHeader>
        <TypographyP>{question.title}</TypographyP>
      </CardHeader>
      <CardContent>
        <RadioGroup
          name={`q-${question.id}`}
          defaultValue={(question.answer as string) || ""}
          onChange={handleMarkDirty}
        >
          {question.options?.map((option, index) => (
            <div className="flex items-center gap-3" id="r1" key={index}>
              <RadioGroupItem value={option.value} />
              <Label htmlFor="r1">
                <span className={cn(option.color && option.color)}>
                  {option.text}
                </span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
