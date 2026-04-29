import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import Ability from "@/components/abilities/ability";
import aldams from "@/public/arc3/aldams.json";
import { Ability as AbilityType } from "@/types/game";
import { slugify } from "@/lib/utils";

const gredoranAldams = aldams.find((a) => a.name === "Gredoran Aldam");
const abilityMap = new Map<string, AbilityType>(
  gredoranAldams?.abilities.map((a) => [a.name, a]),
);

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Gredoran Aldam</TypographyH1>
      <TypographyP>
        In <i>Gredoran Aldam</i>, there are three points of the body&apos;s
        divine triangle: the limbs, the heart, and the eyes. Each point of the
        divine triangle requires a lifetime to master, yet each are essential
        unto one another. The arts are named from the holy <i>Gredoran</i>{" "}
        metals. Adorning onesself with these metals is taught to enhance these
        aspects.
      </TypographyP>
      <TypographyH2>Limbs</TypographyH2>
      <TypographyP>
        Limbs are the tools with which the body creates and destroys.
      </TypographyP>
      <Aldam name="Bronze Bones" />
      <Aldam name="Brass Coils" />
      <TypographyH2>Heart</TypographyH2>
      <TypographyP>Heart is the core, center, the self.</TypographyP>
      <Aldam name="Zinc Pulse" />
      <Aldam name="Nickel Vessel" />
      <TypographyH2>Eyes</TypographyH2>
      <TypographyP>
        Eyes are the mind and the external world brought into the self.
      </TypographyP>
      <Aldam name="Silver Sight" />
      <Aldam name="Mercurial Skull" />
    </>
  );
}

function Aldam({ name }: { name: string }) {
  return (
    <>
      <TypographyH4 id={slugify(name)}>{name}</TypographyH4>
      <Ability
        ability={abilityMap.get(name)!}
        category="aldams"
        arc="arc3"
        type="gredoran-aldam"
      />
    </>
  );
}
