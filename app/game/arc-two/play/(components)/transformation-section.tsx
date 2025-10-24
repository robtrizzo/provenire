import { TypographyH2 } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";

export default function TransformationSection() {
  const { selectedTransformation } = useCharacterSheet();
  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Transformation
      </TypographyH2>
      {/* clock */}
      {/* blood */}
    </>
  );
}
