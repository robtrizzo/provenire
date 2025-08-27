import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import Image from "next/image";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>
        Tale of Unwen, Cunning Wife who Delivers Kingwulf Victory for Dinner
      </TypographyH1>
      <div className="w-full max-w-[600px] relative aspect-square my-8">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/era3/crucible/noose.png`}
          alt="Ygg"
          fill
          className="object-contain"
        />
      </div>
      <TypographyH3>Summary</TypographyH3>
      <TypographyBlockquote className="text-red-500">
        Content warning
      </TypographyBlockquote>
      <TypographyP>
        Birthed of a mother hung from a noose after suffering a most awful fate.
        A creature boy more like a calamity roamed the wilderness.
        Misunderstood, feared, and often betrayed, Ygg develops a disdain for
        people - preferring the law of the jungle.
      </TypographyP>
      <TypographyP>
        Rathi warrior after Rathi warrior venture out into Ygg&apos;s jungle to
        slay the beast for glory, never to return. Superstition builds. Mosters
        flock to Ygg&apos;s safety.
      </TypographyP>
      <TypographyP>
        Kingwulf&apos;s wife, Unwen hatches a plan. Kingwulf invites Ygg to hunt
        and dine as equals. When Ygg goes, he is betrayed once again and sealed
        away deep beneath the earth.
      </TypographyP>
      <TypographyH3>Setting</TypographyH3>
      <TypographyP>Rath, Era One.</TypographyP>
      <TypographyH3>Psyche</TypographyH3>
      <TypographyP>
        Bestial and primal. Wounded and lonely. Instinctually drives others away
        with fear. Motivated by rage and revenge.
      </TypographyP>
      <TypographyH3>Abilities</TypographyH3>
      <TypographyP>Donum Portentum. Has seen and fought Kingwulf.</TypographyP>
    </>
  );
}
