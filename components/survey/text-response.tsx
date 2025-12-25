import { AggregatedQuestionResponse } from "@/types/survey";
import { Card, CardContent, CardHeader } from "../ui/card";
import { TypographyP } from "../ui/typography";

export default async function TextResponse({
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
