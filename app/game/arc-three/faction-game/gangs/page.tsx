import Clock from "@/components/clock";
import { InlineSymbol } from "@/components/dice/dice-borders";
import { Threat } from "@/components/dice/dice-symbols";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Gangs</TypographyH1>
      <TypographyP>
        Gangs are groups of loyal workers willing to do violence on behalf of
        their faction or leader. They're necessary for factions to defend
        themselves or to exert pressure on the factory outside the faction's
        home turf. The crew can make use of gangs during <b>missions</b>,{" "}
        <b>downtime</b>, and when <b>time passes</b>. Gangs continue to exist
        and work to accomplish their goals even when not directly commanded.
      </TypographyP>
      <TypographyH2>Training a Gang</TypographyH2>
      <TypographyP>
        A new gang can be established by spending <b>2 rep</b> and picking two{" "}
        <Link href="/game/arc-three/appendix/traits">
          <b className="text-red-500">
            <u>negative traits</u>
          </b>
        </Link>
        . Gangs can be improved via a project{" "}
        <div className="inline-block">
          <Clock clickable={false} max={3} current={0} height={20} width={20} />
        </div>{" "}
        and spending an additional <b>2 rep</b>.
      </TypographyP>
      <TypographyH2>Gang Combat</TypographyH2>
      <TypographyP>
        A gang's strength in combat is determined by a variety of factors. The
        most impactful will typically be the amount of <b>manpower</b> allocated
        to the gang. Gangs typically have a max <b>manpower</b> of <b>3</b>.
      </TypographyP>
      <TypographyP>
        The health and morale of a gang is represented by its <b>toughness</b>.
        Most gangs have <b>1 toughness</b>; each <b>manpower</b> allocated
        increases this by <b>1</b>. Equipment, <b>fighting styles</b>, and{" "}
        <b>Aldams</b> may increase a gang's toughness as well. When a gang's
        toughness reaches <b>0</b>, they are wiped out or in full retreat.
      </TypographyP>
      <TypographyP>
        When a gang commanded by one of the crew gets into a scrap with another
        gang, build up a <b>fortune roll</b>.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>+1d</b> per <b>manpower</b> allocated.
        </li>
        <li>
          Does one of the gang's traits make them particularly suited to this
          conflict? <b>+1d</b>
        </li>
        <li>
          Does this gang have adequate equipment? <b>+1d</b>
        </li>
        <li>
          Is this gang trained in a <b>fighting style?</b> <b>+1d</b>.{" "}
          <b>
            <code className="text-emerald-500">+1 push</code>
          </b>{" "}
          if it's an applicable formation from <b>Shapes of War</b>
        </li>
        <li>
          Is this gang trained in an <b>Aldam</b>? Pay <b>1 blood</b> for{" "}
          <b>
            <code className="text-red-500">+1 aldam</code>
          </b>
        </li>
        <li>
          Is this gang fighting beasts? <b>-2d</b>
        </li>
        <li>
          <b>-1d</b> per <b>manpower</b> allocated to the enemy gang.
        </li>
        <li>
          What's the difference in the factions' tiers? Add or remove dice
          accordingly.
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        The outcome of rolling a success depends on the context of the
        narrative. On a{" "}
        <InlineSymbol>
          <Threat />
        </InlineSymbol>
        , the gang takes wounds equal to the number of{" "}
        <InlineSymbol>
          <Threat />
        </InlineSymbol>
        . If a member of the crew is embedded in the gang, they may{" "}
        <b>resist</b> to reduce the number of wounds by <b>2</b>.
      </TypographyP>
    </>
  );
}
