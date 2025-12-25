import { AggregatedQuestionResponse, Category } from "@/types/survey";
import { TypographyH2 } from "../ui/typography";
import MultipleChoiceResponse from "./multiple-choice-response";
import TextResponse from "./text-response";

export default async function CategoryResults({
  category,
}: {
  category: Category;
}) {
  return (
    <>
      <TypographyH2>{category.title}</TypographyH2>
      {category.questions.map((question) => {
        switch (question.type) {
          case "text":
            return (
              <TextResponse
                key={question.id}
                question={question as AggregatedQuestionResponse}
              />
            );
          case "multiple-choice":
            return (
              <MultipleChoiceResponse
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
