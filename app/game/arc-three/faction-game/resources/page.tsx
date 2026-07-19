import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";

import { D6 } from "@/components/dice/dice-borders";
import { Threat } from "@/components/dice/dice-symbols";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Resources</TypographyH1>

      <TypographyP>
        Each faction represents resources on a scale from <b>0 to 4</b>. Without
        specifically constructed storehouses, a faction's maximum stockpile is{" "}
        <b>2</b>.
      </TypographyP>
      <TypographyBlockquote>
        <b>0</b> = None; <b>1</b> = Scarce; <b>2</b> = Adequate; <b>3</b> =
        Surplus; <b>4</b> = Stockpile
      </TypographyBlockquote>
      <TypographyP>
        Each resource has special rules for what happens at different stockpile
        values when{" "}
        <Link href="/game/arc-three/rules/time-passes">
          <b className="text-red-500 underline">time passes</b>
        </Link>{" "}
        .
      </TypographyP>

      <TypographyH3>Advisors</TypographyH3>
      <TypographyP>
        Some members of the crew lead a faction or they're responsible for their
        resources. They may use their faction's resources at their discretion.
      </TypographyP>
      <TypographyP>
        Whenever a faction's resource is used for a project, to accomplish a
        goal, or to be traded to another faction, make a <b>fortune roll</b>{" "}
        with dice equal to that resource's value. On a{" "}
        <div className="inline-block mx-1">
          <D6>
            <Threat />
          </D6>
        </div>
        , the value drops by <b>1</b>.
      </TypographyP>
      <TypographyP>
        Whenever <b>time passes</b>, advisors may have the ability to adjust how
        resources are distributed; otherwise, each crew member of the faction
        receives resources equal to the faction's stockpile values.
      </TypographyP>

      <TypographyH3>Councilors</TypographyH3>
      <TypographyP>
        Some members of the crew manage resources across the entire sector. They
        are responsible for choosing how it is distributed and overseeing the
        logistics. Fabrication-wide resources are represented as a delta from{" "}
        <b>-2</b> to <b>+2</b>.
      </TypographyP>
      <TypographyBlockquote>
        <b>-2</b> = Severe Defecit; <b>-1</b> = Defecit; <b>0</b> = Balanced;{" "}
        <b>+1</b> = Surplus; <b>+2</b> = Grand Surplus
      </TypographyBlockquote>
      <TypographyP>
        Whenever <b>time passes</b>, the <b>Narrator</b> will inform councilors
        of their managed resource's delta. They may have the ability to adjust
        how it is distributed; otherwise, each faction's resource stockpile
        changes by the delta.
      </TypographyP>
      <TypographyP>
        Councilors may use Fabrication-wide resources to accomplish sweeping
        projects. When they do, they make a <b>fortune roll</b> with dice equal
        to the delta <b>+2</b>. On a{" "}
        <div className="inline-block mx-1">
          <D6>
            <Threat />
          </D6>
        </div>
        , the delta decreases by <b>1</b>.
      </TypographyP>
    </>
  );
}
