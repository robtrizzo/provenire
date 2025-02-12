import { Input } from "@/components/ui/input";
import { TypographyH3 } from "@/components/ui/typography";
import { Checkbox } from "@/components/ui/checkbox";
import Clock from "@/components/clock";
import { useCharacterSheet } from "@/contexts/characterSheetContext";

export default function HarmSection() {
  const {
    healing,
    harm3,
    harm2,
    harm1,
    armor,
    hArmor,
    sArmor,
    abilities,
    setHealing,
    setHarm3,
    setHarm2,
    setHarm1,
    setArmor,
    setHArmor,
    setSArmor,
    setChanges,
    handleDebounceChange,
  } = useCharacterSheet();

  return (
    <>
      <TypographyH3 className="text-sm text-muted-foreground mt-8">
        Harm
      </TypographyH3>
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <span className="bg-secondary p-2 h-10 w-6 shrink-0">3</span>
          <span className="bg-secondary p-2 h-10 w-6 shrink-0">2</span>
          <span className="bg-secondary p-2 h-10 w-6 shrink-0">1</span>
        </div>
        <div className="flex flex-col items-center w-full">
          <Input
            className="rounded-none h-10"
            value={harm3}
            onChange={(e) => {
              setHarm3(e.target.value);
              handleDebounceChange();
            }}
          />
          <div className="flex w-full">
            <Input
              className="rounded-none h-10"
              value={harm2[0]}
              onChange={(e) => {
                setHarm2([e.target.value, harm2[1]]);
                handleDebounceChange();
              }}
            />
            <Input
              className="rounded-none h-10"
              value={harm2[1]}
              onChange={(e) => {
                setHarm2([harm2[0], e.target.value]);
                handleDebounceChange();
              }}
            />
          </div>
          <div className="flex w-full">
            <Input
              className="rounded-none h-10"
              value={harm1[0]}
              disabled={!abilities.includes("Vigorous")}
              onChange={(e) => {
                setHarm1([e.target.value, harm1[1]]);
                handleDebounceChange();
              }}
            />
            <Input
              className="rounded-none h-10"
              value={harm1[1]}
              onChange={(e) => {
                setHarm1([harm1[0], e.target.value]);
                handleDebounceChange();
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-16 gap-4 border-[1px] border-border h-[120px]">
          <Clock
            key={`healing${new Date().getTime()}`}
            max={abilities.includes("Vigorous") ? 3 : 4}
            current={healing}
            height={35}
            width={35}
            setVal={(n) => {
              setHealing(n);
              setChanges(true);
            }}
          />
          <span className="text-xs text-muted-foreground text-center">
            healing
          </span>
        </div>
      </div>
      <div className="border-[1px] border-border rounded-b-md py-1.5 px-4 select-none flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={armor}
            onCheckedChange={() => {
              setArmor(!armor);
              setChanges(true);
            }}
          />
          Armor
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={hArmor}
            onCheckedChange={() => {
              setHArmor(!hArmor);
              setChanges(true);
            }}
          />{" "}
          Heavy
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={sArmor}
            onCheckedChange={() => {
              setSArmor(!sArmor);
              setChanges(true);
            }}
          />{" "}
          Special
        </div>
      </div>
    </>
  );
}
