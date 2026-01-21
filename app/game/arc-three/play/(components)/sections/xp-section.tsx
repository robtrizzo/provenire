import { TypographyH2 } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/arc3CharacterSheetContext";

export default function XPSection() {
  const { xpSpent } = useCharacterSheet();
  return (
    <div className="mt-4">
      <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground">
        XP Clocks Spent: <code className="text-xl text-primary">{xpSpent}</code>
      </TypographyH2>
    </div>
  );
}
