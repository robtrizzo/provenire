import Ability from "@/components/abilities/ability";
import ClockCost from "@/components/clock-cost";
import { TypographyH2, TypographyH3 } from "@/components/ui/typography";
import { slugify } from "@/lib/utils";
import {
  Ability as AbilityType,
  TransformationSubclass,
  TransformationV3,
} from "@/types/game";
import { Fragment } from "react/jsx-runtime";

export default async function TransformationAbilities({
  transformation,
  parentName,
}: {
  transformation: TransformationV3 | TransformationSubclass;
  parentName?: string;
}) {
  return (
    <>
      {transformation.abilities.map((a, idx) => (
        <Fragment key={a.name + idx}>
          <TypographyH3
            id={slugify(a.name)}
            className="flex items-end justify-between"
          >
            {a.name} <ClockCost num={a.cost ?? 3} ticks={5} />
          </TypographyH3>
          <TransformationAbility
            transformation={parentName ?? transformation.name}
            subtype={parentName ? transformation.name : undefined}
            ability={a}
          />
        </Fragment>
      ))}
      {"subclasses" in transformation &&
        transformation.subclasses?.map((s, idx) => (
          <div key={idx}>
            <TypographyH2>{s.name}</TypographyH2>
            <TransformationAbilities
              transformation={s}
              parentName={transformation.name} // ← pass parent here
            />
          </div>
        ))}
    </>
  );
}

function TransformationAbility({
  transformation,
  ability,
  subtype,
}: {
  transformation: string;
  ability: AbilityType;
  subtype?: string;
}) {
  return (
    <Ability
      ability={ability}
      category="transformations"
      arc="arc3"
      type={slugify(transformation)}
      subtype={subtype ? slugify(subtype) : undefined}
    />
  );
}
