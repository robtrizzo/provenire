import { TypographyH2 } from "@/components/ui/typography";
import Transformation from "./transformation";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";

export default function TransformationSection() {
  const { selectedTransformation } = useCharacterSheet();

  if (!selectedTransformation) return null;

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Transformation
      </TypographyH2>
      <div className="mt-2 flex flex-wrap justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="lowercase font-cyber text-xs">
            {selectedTransformation.phase}
          </span>
          <Transformation.Clock />
          <Transformation.Advance />
        </div>
        <div className="flex items-center gap-2">
          <span className="lowercase font-cyber text-xs">blood</span>
          <Transformation.Blood />
          <Transformation.MaxBloodControls />
        </div>
      </div>
    </>
  );
}
