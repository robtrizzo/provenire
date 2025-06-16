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
          { name: "Engel", href: "#" },
        ]}
      />
      <TypographyH1>The Fall of Ulgate, as told by Engel Otto</TypographyH1>
      <div className="w-full max-w-[600px] relative aspect-square my-8">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/era3/crucible/chain.png`}
          alt="Engel"
          fill
          className="object-contain"
        />
      </div>
      <TypographyH3>Summary</TypographyH3>
      <TypographyP>
        A boy with humble beginnings discovers his generational talent with the
        sword. Arrogance overtakes him with a meteoric rise of reputation. A
        humbling moment changes his heart, shaping him into a dedicated mentor.
        When Rath finally comes for his city, his sword skills spare his life,
        though he spent the rest of his days a slave in the Steel Trap.
      </TypographyP>
      <TypographyH3>Setting</TypographyH3>
      <TypographyP>
        Ulgatia, post the cataclysm{" "}
        <span className="text-muted-foreground">(OSG)</span> and pre
        Fenrir&apos;s rise.
      </TypographyP>
      <TypographyH3>Psyche</TypographyH3>
      <TypographyP>
        A wise, learned mentor. Someone who wishes to help the next generation
        eschew their arrogance and achieve to their highest potential. A deep
        melancholy, and a deeper hatred for the Rathi.
      </TypographyP>
      <TypographyH3>Abilities</TypographyH3>
      <TypographyP>
        Swordmaster, military tactics, and leadership. Knowledge of Ulgatia and
        the early Steel Trap.
      </TypographyP>
    </>
  );
}
