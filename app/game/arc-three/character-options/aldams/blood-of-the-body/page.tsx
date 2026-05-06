import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import aldams from "@/public/arc3/aldams.json";
import { Ability } from "@/types/game";
import Aldam from "../(components)/aldam";

const bloodOfThebody = aldams.find((a) => a.name === "Blood of the Body");
const abilityMap = new Map<string, Ability>(
  bloodOfThebody?.abilities.map((a) => [a.name, a]),
);

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Blood of the Body</TypographyH1>
      <TypographyP>
        Rooted in ancient Gredoran Aldams and deeply influenced by Donum
        Sangius, the Ulgatian Aldams are uniquely capable of altering the
        properties of blood. Additionally, Ulgatians all contributed to a blood
        tithe; and so out of necessity, learned to use their Aldams efficiently.
      </TypographyP>
      <TypographyH2>Limbs</TypographyH2>
      <TypographyP>
        Blood flows outwardly from the center. As the body&apos;s extremity,
        limbs are the final permeable layer between blood and the outer world.
      </TypographyP>
      <BotbAldam name="Tithe" />
      <BotbAldam name="Halted Blood" />
      <TypographyH2>Heart</TypographyH2>
      <TypographyP>
        The body&apos;s center is an organic catalyst for bloody alchemy.
      </TypographyP>
      <BotbAldam name="Nourishing Blood" />
      <BotbAldam name="Excited Blood" />
      <TypographyH2>Eyes</TypographyH2>
      <TypographyP>
        The tip of the divine triangle cannot change blood, but can massage the
        flow as blood is drawn to the limbs.
      </TypographyP>
      <BotbAldam name="Quiet Blood" />
      <BotbAldam name="Roaring Blood" />
    </>
  );
}

function BotbAldam({ name }: { name: string }) {
  return (
    <Aldam ability={abilityMap.get(name)!} aldamSlug="blood-of-the-body" />
  );
}
