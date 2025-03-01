import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ShieldAlert, Dices, Cog } from "lucide-react";
import { useCharacterSheet } from "@/contexts/characterSheetContext";
import { useRoll } from "@/contexts/rollContext";
import { Switch } from "@/components/ui/switch"

export default function RollSection() {
  const {
    selectedArchetype,
    selectedBackground,
    selectedSkillset,
    selectedFightingStyle,
  } = useCharacterSheet();

  const {
    diceToast,
    bonusDiceRed,
    bonusDiceBlue,
    fortuneDice,
    rollDice,
    isPrivate,
    setBonusDiceRed,
    setBonusDiceBlue,
    setFortuneDice,
    setIsPrivate,
    rollLeft,
    rollRight,
    setRollLeft,
    setRollRight,
    handleRollButton,
  } = useRoll();

  return (
    <Card className="mt-4 p-4 flex flex-col gap-4">
    <div className="flex justify-between items-center">
      <TypographyP className="text-muted-foreground text-xs">
        select two skills to roll or shift+click a skill to roll it
      </TypographyP>
      <div className="flex items-center space-x-2">
        <Label htmlFor="private-rolls">Private</Label>
        <Switch id="private-rolls" checked={isPrivate} onCheckedChange={setIsPrivate}/>
      </div>
    </div>
      <div className="flex gap-4">
        <Select
          value={rollLeft}
          onValueChange={(value) => {
            setRollLeft(value);
          }}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Heart-Defy">Defy</SelectItem>
            <SelectItem value="Heart-Persuade">Persuade</SelectItem>
            <SelectItem value="Instinct-Charge">Charge</SelectItem>
            <SelectItem value="Instinct-Prowl">Prowl</SelectItem>
            <SelectItem value="Machina-Suggest">Suggest</SelectItem>
            <SelectItem value="Machina-Survey">Survey</SelectItem>
            <SelectSeparator />
            <Button
              variant="secondary"
              size="sm"
              className="w-full px-2"
              onClick={(e) => {
                e.stopPropagation();
                setRollLeft("");
              }}
            >
              Clear
            </Button>
          </SelectContent>
        </Select>

        <Select
          value={rollRight}
          onValueChange={(value) => {
            setRollRight(value);
          }}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {selectedBackground?.attributes.Heart.map((a, i) => (
              <SelectItem key={a + i} value={`Heart-${a}`}>
                {a}
              </SelectItem>
            ))}
            {selectedSkillset?.attributes.Heart.map((a, i) => (
              <SelectItem key={a + i} value={`Heart-${a}`}>
                {a}
              </SelectItem>
            ))}
            {selectedArchetype?.attributes.Heart.map((a, i) => (
              <SelectItem key={a + i} value={`Heart-${a}`}>
                {a}
              </SelectItem>
            ))}
            {selectedFightingStyle?.attributes.Heart.map((a, i) => (
              <SelectItem key={a + i} value={`Heart-${a}`}>
                {a}
              </SelectItem>
            ))}
            {selectedBackground?.attributes.Instinct.map((a, i) => (
              <SelectItem key={a + i} value={`Instinct-${a}`}>
                {a}
              </SelectItem>
            ))}
            {selectedSkillset?.attributes.Instinct.map((a, i) => (
              <SelectItem key={a + i} value={`Instinct-${a}`}>
                {a}
              </SelectItem>
            ))}
            {selectedArchetype?.attributes.Instinct.map((a, i) => (
              <SelectItem key={a + i} value={`Instinct-${a}`}>
                {a}
              </SelectItem>
            ))}
            {selectedFightingStyle?.attributes.Instinct.map((a, i) => (
              <SelectItem key={a + i} value={`Instinct-${a}`}>
                {a}
              </SelectItem>
            ))}
            {selectedBackground?.attributes.Machina.map((a, i) => (
              <SelectItem key={a + i} value={`Machina-${a}`}>
                {a}
              </SelectItem>
            ))}
            {selectedSkillset?.attributes.Machina.map((a, i) => (
              <SelectItem key={a + i} value={`Machina-${a}`}>
                {a}
              </SelectItem>
            ))}
            {selectedArchetype?.attributes.Machina.map((a, i) => (
              <SelectItem key={a + i} value={`Machina-${a}`}>
                {a}
              </SelectItem>
            ))}
            {selectedFightingStyle?.attributes.Machina.map((a, i) => (
              <SelectItem key={a + i} value={`Machina-${a}`}>
                {a}
              </SelectItem>
            ))}
            <SelectSeparator />
            <Button
              variant="secondary"
              size="sm"
              className="w-full px-2"
              onClick={(e) => {
                e.stopPropagation();
                setRollRight("");
              }}
            >
              Clear
            </Button>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-4 mx-auto">
        <Button
          variant="destructive"
          onClick={async () => {
            handleRollButton("resist", rollLeft, rollRight);
          }}
        >
          <ShieldAlert /> Resist
        </Button>
        <Button
          onClick={async () => {
            handleRollButton("action", rollLeft, rollRight);
          }}
          className="flex items-center gap-2"
        >
          <Dices /> Action
        </Button>
        <Button
          variant="secondary"
          onClick={async () => {
            handleRollButton("project", rollLeft, rollRight);
          }}
        >
          <Cog /> Project
        </Button>
      </div>
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="bonus-dice" className="text-center">
              Bonus Dice
            </Label>
            <div className="flex gap-2">
              <div className="flex gap-2 items-center">
                <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500" />
                <Input
                  id="bonus-dice"
                  type="number"
                  className="w-20"
                  min={0}
                  value={bonusDiceRed}
                  onChange={(e) => {
                    setBonusDiceRed(parseInt(e.target.value));
                  }}
                />
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500" />
                <Input
                  id="bonus-dice"
                  type="number"
                  className="w-20"
                  min={0}
                  value={bonusDiceBlue}
                  onChange={(e) => {
                    setBonusDiceBlue(parseInt(e.target.value));
                  }}
                />
              </div>
            </div>
          </div>
          <div className="text-muted-foreground text-xs leading-3 mt-2">
            <span>
              You can gain bonus dice through:{" "}
              <ul className="italic mx-2">
                <li>teamwork</li>
                <li>push yourself</li>
                <li>devil&apos;s bargain</li>
                <li>special ability</li>
              </ul>
            </span>
          </div>
        </div>
        <div>
          <Label htmlFor="fortune-dice">Fortune Dice</Label>
          <div className="flex gap-4">
            <Input
              id="fortune-dice"
              type="number"
              className="w-20"
              min={0}
              value={fortuneDice}
              onChange={(e) => {
                setFortuneDice(parseInt(e.target.value));
              }}
            />
            <Button
              onClick={async () => {
                const roll = await rollDice("fortune", 0, fortuneDice);
                diceToast(roll);
                setFortuneDice(0);
              }}
            >
              Fortune Roll
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
