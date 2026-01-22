import { BuildupCheckboxes } from "@/components/buildup-checkboxes";
import Clock from "@/components/clock";
import { Button } from "@/components/ui/button";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import { advanceDonum, clockMax } from "@/lib/donums";
import { FC } from "react";

type DonumComponents = {
  Clock: FC;
  Advance: FC;
  Water: FC;
  MaxWaterControls: FC;
};

function Advance() {
  const { selectedDonum, setSelectedDonum } = useCharacterSheet();

  const canAdvance = () => {
    const phase = selectedDonum?.phase;
    if (!phase) return false;

    if (phase === "Dominance") return false;

    const progressMax = clockMax(phase);
    if (selectedDonum?.progress < progressMax) return false;

    return true;
  };

  const handleAdvance = () => {
    const phase = selectedDonum?.phase;
    if (!phase) return;

    if (!canAdvance()) return;

    const nextPhase = advanceDonum(phase);
    setSelectedDonum((prev) =>
      prev
        ? {
            ...prev,
            phase: nextPhase,
            progress: 0,
          }
        : prev,
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

function DonumClock() {
  const { selectedDonum, setSelectedDonum } = useCharacterSheet();

  if (!selectedDonum) return null;

  const max = clockMax(selectedDonum?.phase);

  const handleSetProgress = (n: number) => {
    setSelectedDonum((prev) =>
      prev
        ? {
            ...prev,
            progress: n,
          }
        : prev,
    );
  };

  return (
    <>
      <Clock
        width={35}
        height={35}
        max={max}
        current={selectedDonum?.progress || 0}
        setVal={handleSetProgress}
      />
    </>
  );
}

function Water() {
  const { water, maxWater, setWater, setChanges } = useCharacterSheet();

  const handleChangeWater = (n: number) => {
    setWater(n);
    setChanges(true);
  };

  return (
    <BuildupCheckboxes
      max={4}
      numDisabled={4 - maxWater}
      current={water}
      onChange={handleChangeWater}
    />
  );
}

function MaxWaterControls() {
  const { water, maxWater, setWater, setMaxWater, setChanges } =
    useCharacterSheet();
  const updateMax = (n: number) => {
    if (n < 0 || n > 4) return;
    setMaxWater(n);
    if (n < water) {
      setWater(n);
    }
    setChanges(true);
  };
  const handleIncrement = () => updateMax(maxWater + 1);
  const handleDecrement = () => updateMax(maxWater - 1);

  return (
    <div className="flex items-center">
      <Button
        size="icon"
        variant="ghost"
        onClick={handleDecrement}
        disabled={maxWater <= 0}
      >
        -
      </Button>
      <span className="text-xs font-cyber">max</span>
      <Button
        size="icon"
        variant="ghost"
        onClick={handleIncrement}
        disabled={maxWater >= 4}
      >
        +
      </Button>
    </div>
  );
}

const Donum: DonumComponents = {
  Advance,
  Water,
  Clock: DonumClock,
  MaxWaterControls,
};

export default Donum;
