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
          { name: "Dunstan", href: "#" },
        ]}
      />
      <TypographyH1>Dunstan the Deceiver</TypographyH1>
      <div className="w-full max-w-[600px] relative aspect-square my-8">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/era3/crucible/flower.png`}
          alt="Dunstan"
          fill
          className="object-contain"
        />
      </div>
      <TypographyH3>Summary</TypographyH3>
      <TypographyP>
        A peaceful soul disinterested in duty or strife - instead fostering a
        love for art and growing things. A heartbreaking betrayal forces him to
        pursue familial ambitions. After years of conditioning, he demonstrates
        to all that he cannot be made into someone he is not.
      </TypographyP>
      <TypographyH3>Setting</TypographyH3>
      <TypographyP>
        Argos, post the cataclysm{" "}
        <span className="text-muted-foreground">(OSG)</span> and pre
        Fenrir&apos;s rise.
      </TypographyP>
      <TypographyH3>Psyche</TypographyH3>
      <TypographyP>
        A distaste for work, struggle, or responsibility. You will need to work
        very hard to convince or coerce this legend into aiding you. But, when
        it comes to artistic and peaceful pursuits, you will find a willing and
        talented friend.
      </TypographyP>
      <TypographyH3>Abilities</TypographyH3>
      <TypographyP>
        Donum Dolus, gardening, fleeting knowledge of Helix.
      </TypographyP>
    </>
  );
}
