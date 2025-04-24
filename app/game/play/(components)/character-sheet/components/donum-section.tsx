import Clock from "@/components/clock";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/characterSheetContext";
import { cn } from "@/lib/utils";

export default function DonumSection() {
  const { selectedDonum } = useCharacterSheet();
  if (!selectedDonum) {
    return null;
  }

  if (selectedDonum.type === "curse") {
    return <Curse />;
  }

  switch (selectedDonum.phase) {
    case "Emergence": {
      return <Emergence />;
    }

    case "Nascence": {
      return <Nascence />;
    }

    case "Versance": {
      break;
    }

    case "Dominance": {
      break;
    }

    default: {
      return <Emergence />;
    }
  }
}

function Curse() {
  const { selectedDonum, donumProgress, setDonumProgress, setChanges } =
    useCharacterSheet();

  if (!selectedDonum) {
    return null;
  }
  return (
    <Card className="mt-6">
      <CardHeader>
        <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
          {selectedDonum.name} ({selectedDonum.translation})
          <Clock
            width={35}
            height={35}
            max={7}
            current={donumProgress}
            setVal={(n) => {
              setDonumProgress(n);
              setChanges(true);
            }}
          />
        </TypographyH2>
      </CardHeader>
      <CardContent>
        <TypographyP className="not-first:mt-0 text-xs">
          {selectedDonum.description}
        </TypographyP>
        <TypographyP className="text-xs">
          <b>Donum Provenire:</b> {selectedDonum.provenire} Heal any one harm
          and <b>crit</b> on any one roll in the scene. When the moment is over,
          mark a <b>level 3 harm</b>:{" "}
          {selectedDonum.type === "transformation"
            ? "surge wracked"
            : "body parched"}
          .
        </TypographyP>
      </CardContent>
    </Card>
  );
}

function Emergence() {
  const {
    selectedDonum,
    setSelectedDonum,
    donumProgress,
    setDonumProgress,
    increaseMaxBlood,
    setChanges,
  } = useCharacterSheet();

  if (!selectedDonum) {
    return null;
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
          {selectedDonum.name}: {selectedDonum.phase || "Emergence"}
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              className={cn(donumProgress === 6 ? "visible" : "hidden")}
              disabled={donumProgress < 6}
              onClick={() => {
                setDonumProgress(0);
                setSelectedDonum({ ...selectedDonum, phase: "Nascence" });
                if (selectedDonum.type === "transformation") {
                  increaseMaxBlood();
                }
                setChanges(true);
              }}
            >
              advance
            </Button>
            <Clock
              width={35}
              height={35}
              max={6}
              current={donumProgress}
              setVal={(n) => setDonumProgress(n)}
            />
          </div>
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
          mark a <b>level 3 harm</b>:{" "}
          {selectedDonum.type === "transformation"
            ? "surge wracked"
            : "body parched"}
          .
        </TypographyP>
      </CardContent>
    </Card>
  );
}

function Nascence() {
  const {
    selectedDonum,
    setSelectedDonum,
    donumProgress,
    setDonumProgress,
    setChanges,
  } = useCharacterSheet();

  if (!selectedDonum) {
    return null;
  }

  const isTransformation = selectedDonum.type === "transformation";

  return (
    <Card className="mt-6">
      <CardHeader>
        <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
          {selectedDonum.name}: Nascence
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              className={cn(donumProgress === 12 ? "visible" : "hidden")}
              disabled={donumProgress < 12}
              onClick={() => {
                setDonumProgress(0);
                setSelectedDonum({ ...selectedDonum, phase: "Versance" });
                setChanges(true);
              }}
            >
              advance
            </Button>
            <Clock
              width={35}
              height={35}
              max={12}
              current={donumProgress}
              setVal={(n) => setDonumProgress(n)}
            />
          </div>
        </TypographyH2>
      </CardHeader>
      <CardContent>
        <TypographyP className="not-first:mt-0 text-xs">
          Each time you spend <b>{isTransformation ? "blood" : "water"}</b> to
          use your <i>Donum</i>, mark the <i>Nascence clock</i>. If you
          experience a <i>mishap</i>, mark the <i>Nascence clock</i> again. When
          the <i>Nascence clock</i> is complete, your character unlocks their{" "}
          <b>Donum Metamorphosis</b>.
        </TypographyP>
        <TypographyP className="text-xs">
          <b>Donum Metamorphosis:</b> {selectedDonum.metamorphosis} Heal any one
          harm and <b>crit</b> on any one roll in the scene. Any roll of{" "}
          <b>1-3</b> within the scene causes a disastrous <i>mishap</i>.
        </TypographyP>
      </CardContent>
    </Card>
  );
}
