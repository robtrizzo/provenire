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
          { name: "Issa", href: "#" },
        ]}
      />
      <TypographyH1>
        Another Victory by Baldomar and his Five Wives for the Glory of Kingwulf
      </TypographyH1>
      <div className="w-full max-w-[600px] relative aspect-square my-8">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/era3/crucible/wolves.png`}
          alt="Issa"
          fill
          className="object-contain"
        />
      </div>
      <TypographyH3>Summary</TypographyH3>
      <TypographyP>
        An unwilling inheritor of the power to forge war machines. A man at odds
        with his family and society for his beliefs. Beliefs which ultimately
        lead to his violent death, as well as the death of his caravan at the
        hands of Rathi hounds.
      </TypographyP>
      <TypographyH3>Setting</TypographyH3>
      <TypographyP>Era One, Gredora.</TypographyP>
      <TypographyH3>Psyche</TypographyH3>
      <TypographyP>
        Conviction in art and industry above weapons and war. Deeply conflicted
        and tortured by the choices he made at behest of his beliefs. An ego at
        war with itself: seeking answers, seeking resolution.
      </TypographyP>
      <TypographyH3>Abilities</TypographyH3>
      <TypographyP>
        Donum Fornax, forging, art. Knowledge of ancient Gredora.
      </TypographyP>
    </>
  );
}
