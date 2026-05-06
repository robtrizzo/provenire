import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import aldams from "@/public/arc3/aldams.json";
import { Ability } from "@/types/game";
import Aldam from "../(components)/aldam";

const gredoranAldams = aldams.find((a) => a.name === "Gredoran Aldam");
const abilityMap = new Map<string, Ability>(
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
      <GAldam name="Bronze Bones" />
      <GAldam name="Brass Coils" />
      <GAldam name="Rose Bronze Body" />
      <TypographyH2>Heart</TypographyH2>
      <TypographyP>Heart is the core, center, the self.</TypographyP>
      <GAldam name="Zinc Pulse" />
      <GAldam name="Nickel Vessel" />
      <GAldam name="Inconel Core" />
      <TypographyH2>Eyes</TypographyH2>
      <TypographyP>
        Eyes are the mind and the external world brought into the self.
      </TypographyP>
      <GAldam name="Silver Sight" />
      <GAldam name="Mercurial Skull" />
      <GAldam name="Mercurial Master" />
      <GAldam name="Arquerite Epiphany" />
    </>
  );
}

function GAldam({ name }: { name: string }) {
  return <Aldam ability={abilityMap.get(name)!} aldamSlug="gredoran-aldam" />;
}
