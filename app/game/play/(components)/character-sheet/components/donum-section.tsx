import Clock from "@/components/clock";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/characterSheetContext";

export default function DonumSection() {
  const { selectedDonum, donumProgress, setDonumProgress } =
    useCharacterSheet();
  if (!selectedDonum) {
    return null;
  }

  // switch on donum phase

  return (
    <Card className="mt-6">
      <CardHeader>
        <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
          {selectedDonum.name}: Emergence
          <Clock
            width={35}
            height={35}
            max={6}
            current={donumProgress}
            setVal={(n) => setDonumProgress(n)}
          />
        </TypographyH2>
      </CardHeader>
      <CardContent>
        <TypographyP className="not-first:mt-0 text-xs">
          Each time you mark a <b>condition</b> or a <b>level 3 harm</b>, mark
          the <i>Emergence clock</i>. Describe the subtle anomalies your
          character experiences as their <i>Donum</i> shows its first signs.
          When the <i>Emergence clock</i> is complete, your character unlocks
          their <b>Donum Provenire</b>.
        </TypographyP>
        <TypographyP className="text-xs">
          <b>Donum Provenire:</b> {selectedDonum.provenire} Heal any one harm
          and <b>crit</b> on any one roll in the scene. When the moment is over,
          mark a <b>level 3 harm</b>: surge wracked.
        </TypographyP>
      </CardContent>
    </Card>
  );
}
