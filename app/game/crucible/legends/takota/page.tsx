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
          { name: "Takota", href: "#" },
        ]}
      />
      <TypographyH1>Parable of Gredora&apos;s Conflicted Son</TypographyH1>
      <div className="w-full max-w-[600px] relative aspect-square my-8">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/era3/crucible/volcano.png`}
          alt="Takota"
          fill
          className="object-contain"
        />
      </div>
      <TypographyH3>Summary</TypographyH3>
      <TypographyP>
        An adopted son of a Gredoran Duke, ever prideful, even patriotic, ever
        ready to prove himself. A lifetime of ambition and burned bridges
        culminates in a choice between country and family. A choice which the
        Gredoran Son rejects, instead sacrificing himself for a chance to save
        it all - for a chance at redemption.
      </TypographyP>
      <TypographyH3>Setting</TypographyH3>
      <TypographyP>Era One, Gredora.</TypographyP>
      <TypographyH3>Psyche</TypographyH3>
      <TypographyP>
        Driven. Capable. Arrogant. Shaken that the world may not be black and
        white. Unsure of who he wants to be, but he must become great.
      </TypographyP>
      <TypographyH3>Abilities</TypographyH3>
      <TypographyP>
        Military tactics, espionage. Knowledge of ancient Gredora.
      </TypographyP>
    </>
  );
}
