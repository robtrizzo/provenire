import ClockCost from "@/components/clock-cost";
import { Separator } from "@/components/ui/separator";
import {
  TypographyBlockquote,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import skillsets from "@/public/arc3/skillsets.json";
import universal from "@/public/arc3/universal.json";
import { SkillsetSubclass, SkillsetV3 } from "@/types/game";
import { Fragment } from "react/jsx-runtime";
import Ability from "@/components/abilities/ability";

export default function Skillsets() {
  return (
    <div className="flex flex-col gap-8">
      {skillsets.map((s, idx) => (
        <Skillset key={idx} skillset={s} />
      ))}
      <TypographyH2>Universal</TypographyH2>
      <div>
        {universal.map((a, idx) => (
          <Fragment key={"universal" + idx}>
            <TypographyH3 className="flex items-end gap-2">
              {a.name} <ClockCost num={a.cost ?? 2} ticks={5} />
            </TypographyH3>
            <Ability
              category="skillsets"
              arc="arc3"
              type="universal"
              ability={a}
            />
          </Fragment>
        ))}
      </div>
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
      {skillset.subclasses?.map((s, idx) => (
        <Subclass key={s.name + idx} skillset={skillset.name} subclass={s} />
      ))}
    </div>
  );
}

function Subclass({
  skillset,
  subclass,
}: {
  skillset: string;
  subclass: SkillsetSubclass;
}) {
  return (
    <div className="flex flex-col my-3">
      <div className="flex flex-col items-center mx-auto">
        <div className="flex items-center gap-4">
          <TypographyH3 className="uppercase text-xl">
            {subclass.name}
          </TypographyH3>
          <span className="mt-4 text-sm">(SUBCLASS)</span>
        </div>
        <span className="text-muted-foreground text-md">
          {subclass.shortDescription}
        </span>
      </div>
      <div className="grid grid-cols-8 gap-6 pr-6">
        <div className="col-span-8 md:col-span-5">
          {subclass.abilities.map((ability, idx) => (
            <Fragment key={idx}>
              <TypographyH3 className="flex items-end gap-2">
                {ability.name} <ClockCost num={ability.cost ?? 2} ticks={5} />
              </TypographyH3>
              <Ability
                category="skillsets"
                arc="arc3"
                type={skillset.toLocaleLowerCase()}
                subtype={subclass.name.toLocaleLowerCase()}
                ability={ability}
              />
            </Fragment>
          ))}
        </div>
        <div className="col-span-8 md:col-span-3 mt-6 flex flex-col gap-4">
          <TypographyP className="text-lg text-muted-foreground italic">
            {subclass.description}
          </TypographyP>
        </div>
      </div>
    </div>
  );
}
