import { TypographyH2 } from "@/components/ui/typography";
import Action from "../action";
import { useCharacterSheet } from "@/contexts/arc3CharacterSheetContext";

export default function BondsSection() {
  const { bonds } = useCharacterSheet();
  return (
    <div className="mt-4">
      <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground">
        Bonds
      </TypographyH2>
      {bonds.map((b, idx) => (
        <Action.Wrapper.Rollable key={idx + b.name} action={b}>
          <Action.HeaderContent.Simple action={b} />
        </Action.Wrapper.Rollable>
      ))}
    </div>
  );
}
