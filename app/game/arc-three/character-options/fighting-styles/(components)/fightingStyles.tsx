import ClockCost from "@/components/clock-cost";
import { Separator } from "@/components/ui/separator";
import { TypographyH2, TypographyH3 } from "@/components/ui/typography";
import { FightingStyleV3 } from "@/types/game";
import { Fragment } from "react/jsx-runtime";
import Ability from "@/components/abilities/ability";
import fightingStyles from "@/public/arc3/fighting_styles.json";
import Link from "next/link";

export default function FightingStyles() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col">
        <TypographyH3>Table of Contents</TypographyH3>
        <nav className="flex flex-wrap gap-2">
          {fightingStyles.map((f, idx) => (
            <Link
              key={idx}
              href={`#${f.name}`}
              className="text-sm px-3 py-1 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {f.name}
            </Link>
          ))}
        </nav>
      </div>
      {fightingStyles.map((f, idx) => (
        <FightingStyle key={idx} fightingStyle={f} />
      ))}
    </div>
  );
}

function FightingStyle({ fightingStyle }: { fightingStyle: FightingStyleV3 }) {
  return (
    <div>
      <TypographyH2 className="border-b-0 pb-0" id={fightingStyle.name}>
        {fightingStyle.name}
      </TypographyH2>
      <span className="text-muted-foreground text-md">
        {fightingStyle.shortDescription}
      </span>
      <Separator />
      <>
        {fightingStyle.abilities.map((ability, idx) => (
          <Fragment key={idx}>
            <TypographyH3 className="flex items-end gap-2">
              {ability.name} <ClockCost num={ability.cost ?? 3} ticks={5} />
            </TypographyH3>
            <Ability
              category="fighting-styles"
              arc="arc3"
              type={fightingStyle.name.toLocaleLowerCase()}
              ability={ability}
            />
          </Fragment>
        ))}
      </>
    </div>
  );
}
