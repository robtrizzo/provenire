import { Category, Survey } from "@/types/survey";
import CategoryResults from "./category-results";

export default async function SurveyResults({ results }: { results: Survey }) {
  return (
    <div className="flex flex-col gap-2">
      {results.categories.map((category: Category, index: number) => (
        <CategoryResults key={index} category={category} />
      ))}
    </div>
  );
}
