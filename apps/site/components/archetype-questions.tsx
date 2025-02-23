import archetypes from "@/public/archetypes.json";
import { TypographyP } from "@/components/ui/typography";
export default function ArchetypeQuestions({
  archetype,
}: {
  archetype: string;
}) {
  const archetypeData = archetypes.find((a) => a.name === archetype);
  if (!archetypeData) {
    return null;
  }
  return (
    <div>
      {archetypeData.questions.map((question, i) => (
        <TypographyP className="italic mb-4" key={i}>
          {question}
        </TypographyP>
      ))}
    </div>
  );
}
