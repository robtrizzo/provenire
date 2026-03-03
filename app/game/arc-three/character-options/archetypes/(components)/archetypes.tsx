import { ArchetypeV3 } from "@/types/game";
import archetypes from "@/public/arc3/archetypes.json";
import {
  TypographyBlockquote,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import Ability from "@/components/abilities/ability";
import { Fragment } from "react/jsx-runtime";
import ClockCost from "@/components/clock-cost";

export default function Archetypes() {
  return (
    <>
      {archetypes.map((a, idx) => (
        <Archetype key={idx} archetype={a} />
      ))}
    </>
  );
}

function Archetype({ archetype }: { archetype: ArchetypeV3 }) {
  return (
    <>
      <TypographyH2 className="border-b-0 pb-0">{archetype.name}</TypographyH2>
      <span className="text-muted-foreground text-md">
        {archetype.shortDescription}
      </span>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-6">
        <div className="col-span-1">
          {archetype.abilities.map((ability, idx) => (
            <Fragment key={idx}>
              <TypographyH3 className="flex items-end gap-2">
                {ability.name} <ClockCost num={ability.cost ?? 2} ticks={5} />
              </TypographyH3>
              <Ability
                category="archetypes"
                arc="arc3"
                type={archetype.name.toLocaleLowerCase()}
                ability={ability}
              />
            </Fragment>
          ))}
        </div>
        <div className="col-span-1 mt-6 flex flex-col gap-4">
          {archetype.questions.map((q, idx) => (
            <TypographyBlockquote key={idx} className="text-lg">
              {q}
            </TypographyBlockquote>
          ))}
        </div>
      </div>
    </>
  );
}
