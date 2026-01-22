import { TypographyH2 } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import Donum from "./donum";

export default function DonumSection() {
  const { selectedDonum } = useCharacterSheet();

  if (!selectedDonum) return null;

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Donum
      </TypographyH2>
      <div className="mt-2 flex flex-wrap justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="lowercase font-cyber text-xs">
            {selectedDonum.phase}
          </span>
          <Donum.Clock />
          <Donum.Advance />
        </div>
        <div className="flex items-center gap-2">
          <span className="lowercase font-cyber text-xs">water</span>
          <Donum.Water />
          <Donum.MaxWaterControls />
        </div>
      </div>
    </>
  );
}
