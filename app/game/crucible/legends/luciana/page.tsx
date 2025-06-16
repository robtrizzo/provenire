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
          { name: "Luciana", href: "#" },
        ]}
      />
      <TypographyH1>The Survivor of Luciana Pass</TypographyH1>
      <div className="w-full max-w-[600px] relative aspect-square my-8">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/era3/crucible/gate.png`}
          alt="Luciana"
          fill
          className="object-contain"
        />
      </div>
      <TypographyH3>Summary</TypographyH3>
      <TypographyP>
        A Heian girl with the unexpected power to animate the dead. Cast out
        from her home she subsists and ventures to the Hidden City in hope for a
        better life. Her search nearly kills her, but she&apos;s saved by women
        who can animate the dead: just like her.
      </TypographyP>
      <TypographyP>
        She enjoys a brief span of tutilage and sisterhood before Order&apos;s
        armies march into Yama to conquer. Luciana and twelve sisters hold a
        narrow pass against thousands. She suffers grievous injury and loses
        everyone she loves, but she lives. And if only her strife ended there...
      </TypographyP>
      <TypographyH3>Setting</TypographyH3>
      <TypographyP>
        Yama, during the cataclysm{" "}
        <span className="text-muted-foreground">(OSG)</span>
      </TypographyP>
      <TypographyH3>Psyche</TypographyH3>
      <TypographyP>
        Antisocial and lonely. Reluctant to use her power in fear of rejection.
        Deeply hurt by the life she&apos;s lead.
      </TypographyP>
      <TypographyH3>Abilities</TypographyH3>
      <TypographyP>
        Donum Ossis. Knowledge of Heia, Yama, and the Cataclysm.
      </TypographyP>
    </>
  );
}
