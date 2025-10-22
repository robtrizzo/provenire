import { TypographyH2 } from "@/components/ui/typography";
import XPClocks from "@/components/character-sheet/xp-clocks";
import XPInfo from "./xp-info";
import { useCharacterSheet } from "@/contexts/characterSheetContext";
export default function XPSection() {
  const { xpRef, setChanges } = useCharacterSheet();
  const handleSetXP = (n: number) => {
    xpRef.current = n;
    setChanges(true);
  };
  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Experience <XPInfo />
      </TypographyH2>
      <XPClocks key={`xpclocks-${new Date().getTime()}`}>
        <XPClocks.Clocks initial={xpRef.current} setVal={handleSetXP} />
        <XPClocks.Controls initial={xpRef.current} setVal={handleSetXP} />
      </XPClocks>
    </>
  );
}
