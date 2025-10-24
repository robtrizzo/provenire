import { FC } from "react";
import Clock from "@/components/clock";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import { Button } from "@/components/ui/button";
import { DonumPhase } from "@/types/game";
import { BuildupCheckboxes } from "@/components/buildup-checkboxes";

type TransformationComponents = {
  Clock: FC;
  Advance: FC;
  Blood: FC;
  MaxBloodControls: FC;
};

function advanceDonum(phase: DonumPhase): DonumPhase {
  switch (phase) {
    case "Emergence":
      return "Nascence";
    case "Nascence":
      return "Versance";
    case "Versance":
      return "Dominance";
    case "Dominance":
      return "Dominance";
    default:
      return "Emergence";
  }
}

function clockMax(phase: DonumPhase): number {
  switch (phase) {
    case "Emergence":
      return 6;
    case "Nascence":
      return 12;
    default:
      return 6;
  }
}

function Advance() {
  const { selectedTransformation, setSelectedTransformation } =
    useCharacterSheet();

  const canAdvance = () => {
    const phase = selectedTransformation?.phase;
    if (!phase) return false;

    if (phase === "Dominance") return false;

    const progressMax = clockMax(phase);
    if (selectedTransformation?.progress < progressMax) return false;

    return true;
  };

  const handleAdvance = () => {
    const phase = selectedTransformation?.phase;
    if (!phase) return;

    if (!canAdvance()) return;

    const nextPhase = advanceDonum(phase);
    setSelectedTransformation((prev) =>
      prev
        ? {
            ...prev,
            phase: nextPhase,
            progress: 0,
          }
        : prev
    );
  };

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={handleAdvance}
      disabled={!canAdvance()}
    >
      advance
    </Button>
  );
}

function TransformationClock() {
  const { selectedTransformation, setSelectedTransformation } =
    useCharacterSheet();

  if (!selectedTransformation) return null;

  const max = clockMax(selectedTransformation?.phase);

  const handleSetProgress = (n: number) => {
    setSelectedTransformation((prev) =>
      prev
        ? {
            ...prev,
            progress: n,
          }
        : prev
    );
  };

  return (
    <>
      <Clock
        width={35}
        height={35}
        max={max}
        current={selectedTransformation?.progress || 0}
        setVal={handleSetProgress}
      />
    </>
  );
}

function Blood() {
  const { blood, maxBlood, setBlood } = useCharacterSheet();

  const handleChangeBlood = (n: number) => setBlood(n);

  return (
    <BuildupCheckboxes
      max={4}
      numDisabled={4 - maxBlood}
      current={blood}
      onChange={handleChangeBlood}
    />
  );
}

function MaxBloodControls() {
  const { blood, maxBlood, setBlood, setMaxBlood } = useCharacterSheet();
  const updateMax = (n: number) => {
    if (n < 0 || n > 4) return;
    setMaxBlood(n);
    if (n < blood) {
      setBlood(n);
    }
  };
  const handleIncrement = () => updateMax(maxBlood + 1);
  const handleDecrement = () => updateMax(maxBlood - 1);

  return (
    <div className="flex items-center">
      <Button
        size="icon"
        variant="ghost"
        onClick={handleDecrement}
        disabled={maxBlood <= 0}
      >
        -
      </Button>
      <span className="text-xs font-cyber">max</span>
      <Button
        size="icon"
        variant="ghost"
        onClick={handleIncrement}
        disabled={maxBlood >= 4}
      >
        +
      </Button>
    </div>
  );
}

const Transformation: TransformationComponents = {
  Advance,
  Blood,
  Clock: TransformationClock,
  MaxBloodControls,
};

export default Transformation;
