import { AggregatedQuestionResponse, Question } from "@/types/survey";
import { Card, CardContent, CardHeader } from "../ui/card";
import { TypographyP } from "../ui/typography";
import { Textarea } from "../ui/textarea";

export default function TextQuestion({
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
        <Textarea
          name={`q-${question.id}`}
          placeholder="Type your feedback here."
          defaultValue={(question.answer as string) || ""}
          onChange={handleMarkDirty}
        />
      </CardContent>
    </Card>
  );
}
