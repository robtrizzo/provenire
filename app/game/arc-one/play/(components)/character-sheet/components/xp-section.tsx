import { TypographyH2 } from "@/components/ui/typography";
import XPClocks from "@/components/character-sheet/xp-clocks";
import XPInfo from "./xp-info";
import { useCharacterSheet } from "@/contexts/characterSheetContext";
export default function XPSection() {
  const { xpRef, setChanges } = useCharacterSheet();
  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Experience <XPInfo />
      </TypographyH2>
      <XPClocks
        initial={xpRef.current}
        setVal={(n) => {
          xpRef.current = n;
          setChanges(true);
        }}
        key={`xpclocks-${new Date().getTime()}`}
      />
    </>
  );
}
