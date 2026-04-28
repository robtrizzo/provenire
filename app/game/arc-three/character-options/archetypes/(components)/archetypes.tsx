import { ArchetypeV3 } from "@/types/game";
import archetypes from "@/public/arc3/archetypes.json";
import {
  TypographyBlockquote,
  TypographyH2,
  TypographyH3,
} from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import Ability from "@/components/abilities/ability";
import { Fragment } from "react/jsx-runtime";
import ClockCost from "@/components/clock-cost";
import Link from "next/link";

export default function Archetypes() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col">
        <TypographyH3>Table of Contents</TypographyH3>
        <nav className="flex flex-wrap gap-2">
          {archetypes.map((a, idx) => (
            <Link
              key={idx}
              href={`#${a.name}`}
              className="text-sm px-3 py-1 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {a.name}
            </Link>
          ))}
        </nav>
      </div>
      {archetypes.map((a, idx) => (
        <Archetype key={idx} archetype={a} />
      ))}
    </div>
  );
}

function Archetype({ archetype }: { archetype: ArchetypeV3 }) {
  return (
    <div>
      <TypographyH2 className="border-b-0 pb-0" id={archetype.name}>
        {archetype.name}
      </TypographyH2>
      <span className="text-muted-foreground text-md">
        {archetype.shortDescription}
      </span>
      <Separator />
      <div className="grid grid-cols-8 gap-6 pr-6">
        <div className="col-span-8 md:col-span-5">
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
        <div className="col-span-8 md:col-span-3 mt-6 flex flex-col gap-4">
          {archetype.questions.map((q, idx) => (
            <TypographyBlockquote key={idx} className="text-lg">
              {q}
            </TypographyBlockquote>
          ))}
        </div>
      </div>
    </div>
  );
}
