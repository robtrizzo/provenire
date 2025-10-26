import Clock from "@/components/clock";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { TypographyH3 } from "@/components/ui/typography";
import type { ActionV2, Character as Char, CharacterV2 } from "@/types/game";
import Image from "next/image";
import { FC, ReactNode } from "react";
import XPClocks from "../character-sheet/xp-clocks";
import Action from "@/app/game/arc-two/play/(components)/action";

interface CharacterProps {
  character: Char;
  children: ReactNode;
}

type Character = FC<CharacterProps> & {
  XP: FC<CharacterProps>;
  Conditions: FC<CharacterProps>;
  HarmV1: FC<CharacterProps>;
  HarmV2: FC<CharacterProps>;
  StressV1: FC<CharacterProps>;
  StressV2: FC<CharacterProps>;
  Baggage: FC<CharacterProps>;
  ActionsV2: FC<CharacterProps>;
};

const Character = ({ character, children }: CharacterProps) => {
  return (
    <Card className="p-4 min-w-64">
      <CardTitle className="flex items-end justify-between">
        <TypographyH3>{character.name}</TypographyH3>
        {character.portrait && (
          <Image
            src={character.portrait}
            alt={character.name}
            height={50}
            width={50}
          />
        )}
      </CardTitle>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

function XP({ character }: { character: Char }) {
  return (
    <div className="mt-4 flex gap-4">
      <span>Experience</span>
      <XPClocks>
        <XPClocks.Clocks initial={character.xp} setVal={() => {}} />
      </XPClocks>
    </div>
  );
}

function Conditions({ character }: { character: Char }) {
  return (
    <div className="mt-4 flex gap-4 items-start">
      <span>Conditions</span>
      {character.conditions.map((c, i) => (
        <div
          key={character.name + c + i}
          className="py-1 px-2 border-[1px] rounded-md"
        >
          <span className="text-sm">{c}</span>
        </div>
      ))}
    </div>
  );
}

function HarmV1({ character }: { character: Char }) {
  const { healing, harm3, harm2, harm1, armor, sArmor, hArmor, abilities } =
    character;
  return (
    <>
      <div className="mt-4">
        <span>Harms</span>
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <span className="bg-secondary p-2 h-10 w-6 shrink-0">3</span>
            <span className="bg-secondary p-2 h-10 w-6 shrink-0">2</span>
            <span className="bg-secondary p-2 h-10 w-6 shrink-0">1</span>
          </div>
          <div className="flex flex-col items-center w-full">
            <Input className="rounded-none h-10" value={harm3} disabled />
            <div className="flex w-full">
              <Input className="rounded-none h-10" value={harm2[0]} disabled />
              <Input className="rounded-none h-10" value={harm2[1]} disabled />
            </div>
            <div className="flex w-full">
              <Input className="rounded-none h-10" value={harm1[0]} disabled />
              <Input className="rounded-none h-10" value={harm1[1]} disabled />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-16 gap-4 border-[1px] border-border h-[120px]">
            <Clock
              max={abilities.includes("Vigorous") ? 3 : 4}
              current={healing}
              height={35}
              width={35}
            />
            <span className="text-xs text-muted-foreground text-center">
              healing
            </span>
          </div>
        </div>
        <div className="border-[1px] border-border rounded-b-md py-1.5 px-4 select-none flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Checkbox checked={armor} />
            Armor
          </div>
          <div className="flex items-center gap-2">
            <Checkbox checked={hArmor} /> Heavy
          </div>
          <div className="flex items-center gap-2">
            <Checkbox checked={sArmor} /> Special
          </div>
        </div>
      </div>
    </>
  );
}

function HarmV2({ character }: { character: CharacterV2 }) {
  const effectiveHarm = character.harm;

  const harmLevels = Object.keys(effectiveHarm).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <div className="mt-4">
      <span>Harms</span>
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          {harmLevels.map((level) => (
            <span
              key={`level-${level}`}
              className="bg-secondary p-2 h-10 w-6 shrink-0"
            >
              {level}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-center w-full">
          {harmLevels.map((level) => {
            const levelData = effectiveHarm[Number(level)];
            const slots = Array.from(
              { length: levelData.maxSlots },
              (_, i) => i
            );

            return (
              <div key={`slots-${level}`} className="flex w-full">
                {slots.map((slotIndex) => (
                  <Input
                    key={`harm-${level}-${slotIndex}`}
                    className="rounded-none h-10"
                    value={levelData.slots[slotIndex] || ""}
                    disabled
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-[1px] border-border rounded-b-md py-1.5 px-4 select-none flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <Checkbox checked={character.armor} disabled />
          Armor
        </div>
        <div className="flex items-center gap-2">
          <Checkbox checked={character.hArmor} disabled /> Heavy
        </div>
        <div className="flex items-center gap-2">
          <Checkbox checked={character.sArmor} disabled /> Special
        </div>
      </div>
    </div>
  );
}

function StressV1({ character }: { character: Char }) {
  return (
    <div className="mt-4 flex gap-4 items-start">
      <span>Stress</span>
      <div className="flex border-2">
        {Array.from({
          length: Math.min(
            character.stress,
            9 - character.conditions.length * 2
          ),
        }).map((_, i) => (
          <div
            key={character.name + "stress" + i}
            className="h-3 w-3 bg-red-500 border-r-[1px]"
          />
        ))}
        {Array.from({
          length: 9 - character.conditions.length * 2 - character.stress,
        }).map((_, i) => (
          <div key={character.name + "stress" + i} className="h-3 w-3" />
        ))}
        {Array.from({
          length: Math.min(character.stress, character.conditions.length * 2),
        }).map((_, i) => (
          <div
            key={character.name + "stress" + i}
            className="h-3 w-3 bg-gray-500 border-r-[1px]"
          />
        ))}
      </div>
    </div>
  );
}

function StressV2({ character }: { character: CharacterV2 }) {
  const numBaggage = Math.min(
    4,
    character.unlockedBaggage?.reduce(
      (_, ub) =>
        ub.unlocks.reduce((acc, b) => {
          if (!!b.unlocked) return acc + 1;
          return acc;
        }, 0),
      0
    ) ?? 0
  );
  return (
    <div className="mt-4 flex gap-4 items-start">
      <span>Stress</span>
      <div className="flex border-2">
        {Array.from({
          length: Math.min(
            character.stress,
            9 - character.conditions.length * 2
          ),
        }).map((_, i) => (
          <div
            key={character.name + "stress" + i}
            className="h-3 w-3 bg-red-500 border-r-[1px]"
          />
        ))}
        {Array.from({
          length:
            9 - (character.conditions.length + numBaggage) - character.stress,
        }).map((_, i) => (
          <div key={character.name + "stress" + i} className="h-3 w-3" />
        ))}
        {Array.from({
          length: character.conditions.length + numBaggage,
        }).map((_, i) => (
          <div
            key={character.name + "stress" + i}
            className="h-3 w-3 bg-gray-500 border-r-[1px]"
          />
        ))}
      </div>
    </div>
  );
}

function Baggage({ character }: { character: CharacterV2 }) {
  const unlockedBaggage = character.unlockedBaggage || [];
  const unlocks = unlockedBaggage.flatMap((ub) =>
    ub.unlocks.filter((b) => !!b.unlocked)
  );
  const unlockedBaggageEntries = unlockedBaggage.reduce(
    (acc, ulb) =>
      acc + ulb.unlocks.reduce((acc, ul) => (ul.unlocked ? acc + 1 : acc), 0),
    0
  );

  const maxMemory = unlockedBaggageEntries >= 4 ? 2 : 4;
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-4 items-start">
        <span>Memory</span>
        <Clock
          width={35}
          height={35}
          max={maxMemory}
          current={character.memory || 0}
        />
      </div>
      <div className="flex gap-4 items-start">
        <span>Baggage</span>
        {unlocks?.map((u, idx) => (
          <div
            key={u.name + idx}
            className="py-1 px-2 border-[1px] rounded-md text-sm"
          >
            {u.name}
          </div>
        ))}
      </div>
    </div>
  );
}

function ActionsV2({ character }: { character: CharacterV2 }) {
  const { left, right } = character.actions.reduce<{
    left: ActionV2[];
    right: ActionV2[];
  }>(
    (acc, action) => ({
      left: action.position === "left" ? [...acc.left, action] : acc.left,
      right: action.position === "right" ? [...acc.right, action] : acc.right,
    }),
    { left: [], right: [] }
  );
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        {left.map((a, i) => (
          <Action.TooltipWrapper action={a} key={a.name + i}>
            <Action.GridWrapper>
              <Action.HeaderContent.Simple action={a} />
            </Action.GridWrapper>
          </Action.TooltipWrapper>
        ))}
      </div>
      <div className="flex-1">
        {right.map((a, i) => (
          <Action.TooltipWrapper action={a} key={a.name + i}>
            <Action.GridWrapper>
              <Action.HeaderContent.Simple action={a} />
            </Action.GridWrapper>
          </Action.TooltipWrapper>
        ))}
      </div>
    </div>
  );
}

Character.XP = XP;
Character.Conditions = Conditions;
Character.HarmV1 = HarmV1;
Character.HarmV2 = HarmV2;
Character.StressV1 = StressV1;
Character.StressV2 = StressV2;
Character.Baggage = Baggage;
Character.ActionsV2 = ActionsV2;
export default Character;
