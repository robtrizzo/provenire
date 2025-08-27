import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import Image from "next/image";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Velda, who Drank the King&apos;s Flame</TypographyH1>
      <div className="w-full max-w-[600px] relative aspect-square my-8">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/era3/crucible/crow.png`}
          alt="Velda"
          fill
          className="object-contain"
        />
      </div>
      <TypographyH3>Summary</TypographyH3>
      <TypographyP>
        A wolf desperate to save her infant son from the Owl. The foul creature
        sends her on a journey to steal Kingwulf&apos;s flame. Protected by her
        burning love for her son, she consumes the flame and returns to the Owl,
        who returns her son to her. But victory is short lived. Kingwulf
        rampages through the jungle, kills the foul Owl, and seals Velda away in
        the deepest, darkest dungeon in his empire.
      </TypographyP>
      <TypographyH3>Setting</TypographyH3>
      <TypographyP>
        Fenrir, post the cataclysm{" "}
        <span className="text-muted-foreground">(OSG)</span> and pre
        Fenrir&apos;s rise.
      </TypographyP>
      <TypographyH3>Psyche</TypographyH3>
      <TypographyP>
        Heartbreak, loneliness, and a deep capacity for sacrifice. Protective of
        children and hateful of monsters. An ocean of magma threatens to consume
        her if she ever lets go of her love for her son.
      </TypographyP>
      <TypographyH3>Abilities</TypographyH3>
      <TypographyP>
        Donum Rex, Donum Ignis. Knowledge of Fenrir and the early days of the
        Steel Trap.
      </TypographyP>
    </>
  );
}
