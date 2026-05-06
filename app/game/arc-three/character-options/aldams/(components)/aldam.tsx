import { TypographyH4 } from "@/components/ui/typography";
import { Ability as AbilityType } from "@/types/game";
import Ability from "@/components/abilities/ability";
import { slugify } from "@/lib/utils";
import ClockCost from "@/components/clock-cost";

interface AldamProps {
  aldamSlug: string;
  ability: AbilityType;
}
export default function Aldam({ aldamSlug, ability }: AldamProps) {
  return (
    <>
      <TypographyH4
        id={slugify(ability.name)}
        className="flex items-end justify-between"
      >
        {ability.name}
        <ClockCost ticks={5} num={ability.cost ?? 3} />
      </TypographyH4>
      <Ability
        ability={ability}
        category="aldams"
        arc="arc3"
        type={aldamSlug}
      />
    </>
  );
}
