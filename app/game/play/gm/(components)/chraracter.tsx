import Clock from "@/components/clock";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { TypographyH3 } from "@/components/ui/typography";
import type { Character } from "@/types/game";
import Image from "next/image";

export default function Character({ character }: { character: Character }) {
  return (
    <Card className="p-4 min-w-64 mx-auto">
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
      <CardContent>
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
          </div>
        </div>
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
        <div className="mt-4">
          <span>Harms</span>
          <Harm character={character} />
        </div>
      </CardContent>
    </Card>
  );
}

function Harm({ character }: { character: Character }) {
  const { healing, harm3, harm2, harm1, armor, sArmor, hArmor, abilities } =
    character;
  return (
    <>
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
    </>
  );
}
