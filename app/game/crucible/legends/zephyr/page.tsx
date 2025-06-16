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
          { name: "Zephyr", href: "#" },
        ]}
      />
      <TypographyH1>Zephyr: the Wind that Banishes the Night</TypographyH1>
      <div className="w-full max-w-[600px] relative aspect-square my-8">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/era3/crucible/stars.png`}
          alt="Zephyr"
          fill
          className="object-contain"
        />
      </div>
      <TypographyH3>Summary</TypographyH3>
      <TypographyP>
        A young girl with power over the wind; and also stalked by tragedy. As
        her power grows, so too do the attacks on her and those near her by
        creatures of the night. A half decade of escalating conflict culminates
        in a final confrontation with the God of Night and Stars which altered
        the very terrain of her home.
      </TypographyP>
      <TypographyH3>Setting</TypographyH3>
      <TypographyP>Era One, Narscillia</TypographyP>
      <TypographyH3>Psyche</TypographyH3>
      <TypographyP>
        Adventurous, restless. Willing to love and be loved, even if that means
        the risk of losing them. Eager to use a power which is immense and
        difficult to control.
      </TypographyP>
      <TypographyH3>Abilities</TypographyH3>
      <TypographyP>
        Donum Ventus. Knowledge of ancient Narscillia and the God of Night and
        Stars.
      </TypographyP>
    </>
  );
}
