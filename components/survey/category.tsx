import type { Category } from "@/types/survey";
import { TypographyH2 } from "../ui/typography";
import TextQuestion from "./text-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

export default function Category({
  category,
  handleMarkDirty,
}: {
  category: Category;
  handleMarkDirty: () => void;
}) {
  return (
    <>
      <TypographyH2 id={category.title.toLowerCase().replace(/\s+/g, "-")}>
        {category.title}
      </TypographyH2>
      {category.questions.map((question) => {
        switch (question.type) {
          case "text":
            return (
              <TextQuestion
                key={question.id}
                question={question}
                handleMarkDirty={handleMarkDirty}
              />
            );
          case "multiple-choice":
            return (
              <MultipleChoiceQuestion
                key={question.id}
                question={question}
                handleMarkDirty={handleMarkDirty}
              />
            );
          default:
            return <div key={question.id}>Unknown question type</div>;
        }
      })}
    </>
  );
}
