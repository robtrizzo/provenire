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
      <Breadcrumbs
        crumbs={[
          { name: "Game", href: "/game" },
          { name: "Crucible", href: "/crucible" },
          { name: "Legends", href: "#" },
          { name: "Makino", href: "#" },
        ]}
      />
      <TypographyH1>Legend of the Dread Fourteen</TypographyH1>
      <div className="w-full max-w-[600px] relative aspect-square my-8">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/era3/crucible/skeletons.png`}
          alt="Makino"
          fill
          className="object-contain"
        />
      </div>
      <TypographyH3>Summary</TypographyH3>
      <TypographyP>
        A surreptitious vigilante within the Hidden City undergoes profane
        rituals to murder evildoers sheltering within the walls. A particularly
        wretched warlord gets to his loved ones; and the ritual goes awry. For
        fourteen days, the assassin and his two closest friends are trapped in a
        cycle of heartbreak and vengeance. During their reign of terror they
        exact torturous vengeance on wrongdoers. On the fourteenth day, they see
        themselves for what they are and ask the moon to take them somwehere
        else.
      </TypographyP>
      <TypographyH3>Setting</TypographyH3>
      <TypographyP>Era Two, the Hidden City.</TypographyP>
      <TypographyH3>Psyche</TypographyH3>
      <TypographyP>
        Fueled by rage and more than half mad with grief. A deep seeded drive
        rid the world of powerful people and to be reunited with his loves.
      </TypographyP>
      <TypographyH3>Abilities</TypographyH3>
      <TypographyP>
        Donum Cinis. Talented at furtive thieving and murder. Knowledge of the
        Hidden City.
      </TypographyP>
    </>
  );
}
