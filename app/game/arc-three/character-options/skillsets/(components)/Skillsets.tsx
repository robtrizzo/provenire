import ClockCost from "@/components/clock-cost";
import { Separator } from "@/components/ui/separator";
import {
  TypographyBlockquote,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import skillsets from "@/public/arc3/skillsets.json";
import { SkillsetV3 } from "@/types/game";
import { Fragment } from "react/jsx-runtime";
import Ability from "@/components/abilities/ability";

export default function Skillsets() {
  return (
    <div className="flex flex-col gap-8">
      {skillsets.map((s, idx) => (
        <Skillset key={idx} skillset={s} />
      ))}
    </div>
  );
}

function Skillset({ skillset }: { skillset: SkillsetV3 }) {
  return (
    <div>
      <TypographyH2 className="border-b-0 pb-0">{skillset.name}</TypographyH2>
      <span className="text-muted-foreground text-md">
        {skillset.shortDescription}
      </span>
      <Separator />
      <div className="grid grid-cols-8 gap-6 pr-6">
        <div className="col-span-8 md:col-span-5">
          {skillset.abilities.map((ability, idx) => (
            <Fragment key={idx}>
              <TypographyH3 className="flex items-end gap-2">
                {ability.name} <ClockCost num={ability.cost ?? 2} ticks={5} />
              </TypographyH3>
              <Ability
                category="skillsets"
                arc="arc3"
                type={skillset.name.toLocaleLowerCase()}
                ability={ability}
              />
            </Fragment>
          ))}
        </div>
        <div className="col-span-8 md:col-span-3 mt-6 flex flex-col gap-4">
          <TypographyP className="text-lg text-muted-foreground italic">
            {skillset.description}
          </TypographyP>
          {skillset.questions.map((q, idx) => (
            <TypographyBlockquote key={idx} className="text-lg">
              {q}
            </TypographyBlockquote>
          ))}
        </div>
      </div>
    </div>
  );
}
