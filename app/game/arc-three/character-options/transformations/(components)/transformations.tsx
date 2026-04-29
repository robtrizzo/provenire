import Ability from "@/components/abilities/ability";
import ClockCost from "@/components/clock-cost";
import { TypographyH3 } from "@/components/ui/typography";
import { slugify } from "@/lib/utils";
import { Ability as AbilityType, DonumV3 } from "@/types/game";
import { Fragment } from "react/jsx-runtime";
export default async function TransformationAbilities({
  transformation,
}: {
  transformation: DonumV3;
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
            transformation={transformation.name}
            ability={a}
          />
        </Fragment>
      ))}
    </>
  );
}

function TransformationAbility({
  transformation,
  ability,
}: {
  transformation: string;
  ability: AbilityType;
}) {
  return (
    <Ability
      ability={ability}
      category="transformations"
      arc="arc3"
      type={slugify(transformation)}
    />
  );
}
