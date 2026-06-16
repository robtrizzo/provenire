import { TypographyH2 } from "@/components/ui/typography";
import Action from "../action";
import { useCharacterSheet } from "@/contexts/arc3CharacterSheetContext";

export default function BondsSection() {
  const { bonds } = useCharacterSheet();
  return (
    <div className="@container">
      <TypographyH2 className="text-md mt-4 uppercase text-muted-foreground flex justify-between items-end">
        Bonds
      </TypographyH2>
      <div className="mt-1" />
      <div className="grid grid-cols-1 @md:grid-cols-2 gap-1">
        {bonds.map((b, idx) => (
          <Action.Wrapper.Menu key={idx + b.name} action={b}>
            <Action.Wrapper.Rollable key={idx + b.name} action={b}>
              <Action.HeaderContent.Simple action={b} />
            </Action.Wrapper.Rollable>
          </Action.Wrapper.Menu>
        ))}
      </div>
      <Action.Wrapper.Grid className="p-0">
        <Action.HeaderContent.Unlock type="bond" className="p-2" />
      </Action.Wrapper.Grid>
    </div>
  );
}
