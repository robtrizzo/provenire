import { TypographyH1, TypographyP } from "@/components/ui/typography";

export default async function Page() {
  return (
    <div className="p-6">
      <TypographyH1>Crucible</TypographyH1>
      <TypographyP>
        <b>Crucible</b> is a narrative-only game played by a <b>Narrator</b> and{" "}
        <b>Writer</b>. The goal is for the <b>Writer</b> to create a story that
        is engaging and satisfying for them. The <b>Narrator</b> is there to
        provide details about the setting as well as to prompt the <b>Writer</b>{" "}
        to make difficult situations for the characters in their story.
      </TypographyP>
      <TypographyP className="text-muted-foreground">
        The game will work like this:
      </TypographyP>
      <TypographyP>
        The <b>Writer</b> chooses an era and region of the <i>Provenire</i>{" "}
        setting that they find interesting. This could be any of Era 1, 2, or in
        the space between <i>OSG: Dark Scion</i> and Era 3.
      </TypographyP>
      <TypographyP>
        Once they have done this, the <b>Writer</b> starts with the concept of a
        character from this place, in this time period whose story lived on to
        become a permanent fixture in culture and legend. This could be centered
        on a piece of lore or history, or not - it&apos;s up to the{" "}
        <b>Writer</b>. It could be an epic romance, tragedy, vengeance, or
        triumph. Whatever it is, keep in mind that it has been remembered and
        retold for generations.
      </TypographyP>
      <TypographyP className="text-muted-foreground">
        If you&apos;re having a hard time deciding, here are some potential
        prompts.
      </TypographyP>
      <TypographyP>
        <b>Era 2, Anidine:</b> The monarch of Anidine who lost the two-pronged
        rebellion of Cumeria and Gredora.
      </TypographyP>
      <TypographyP>
        <b>Era 1, Cumeria:</b> The person who made peaceful first contact with
        griffons.
      </TypographyP>
      <TypographyP>
        <b>Era 1 or 2, Narscillia:</b> A <i>relict</i> caught between their duty
        and their love.
      </TypographyP>
      <TypographyP>
        <b>Era 1, Rath:</b> An infant thrown to the wolves; years later they
        return leader of the pack.
      </TypographyP>
      <TypographyP>
        <b>Era 2: Yama</b> Someone driven to madness seeking vengeance on
        someone now hiding in the <i>Hidden City</i>.
      </TypographyP>
      <TypographyP>
        <b>Era 1: Arboria</b> A child left stranded in Helix after the Arborians
        forced out all foreigners.
      </TypographyP>
      <TypographyP>
        Once the <b>Writer</b> and <b>Narrator</b> agree on a concept, the{" "}
        <b>Narrator</b> will begin asking the <b>Writer</b> questions. Sometimes
        it will be a simple question to get the ball rolling. Sometimes it will
        be a difficult choice or an ultimatum the <b>Narrator</b> introduces to{" "}
        keep things interesting for the <b>Writer</b>.
      </TypographyP>
      <TypographyP>
        The first question will always be:{" "}
        <i>Is this overarching story light or dark?</i>.
      </TypographyP>
      <TypographyP className="text-muted-foreground">
        And then we play to find out what happens.
      </TypographyP>
    </div>
  );
}
