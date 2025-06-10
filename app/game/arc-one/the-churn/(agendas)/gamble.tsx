import {
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";

export default function Gamble() {
  return (
    <>
      <TypographyH3>Gamble and fight for glory</TypographyH3>
      <TypographyP>
        During The Churn, members of the crew are surviving the pits. They can
        gamble for
        <b>food</b> or <b>materials</b> and they can fight. If they make a
        lasting impression on a champion, they could even be recruited as a
        fighting instructor for the crew.
      </TypographyP>
      <TypographyH4>Gamble</TypographyH4>
      <TypographyP>
        When the crew gambles, they bet <b>1 food</b> or <b>1 material</b>, then
        make a <b>fighter tier roll</b>: <b>1-3:</b> lose the bet, <b>4-5:</b>{" "}
        break even,
        <b>6:</b> +2 food or materials.
      </TypographyP>
      <TypographyH4>Fight</TypographyH4>
      <TypographyP>
        Fighters in the pits are organized roughly into <b>rookies</b>,
        <b>veterans</b>, <b>champions</b>, and <b>beasts</b>. Each crew member
        begins as a<b>rookie</b>. Whoever is tiered lower chooses the
        battlefield (player chooses on tie).
      </TypographyP>
      <TypographyP>
        When they fight, they make an action roll modified by difference in
        tier: <b>1-3:</b> get hurt and lose the fight, <b>4-5:</b> get hurt but
        win the fight and gain rep equal to 1+ tier difference, <b>6:</b> win
        the fight and gain <b>rep</b> equal to 1+ tier difference,{" "}
        <b>Critical:</b> win and make a spectacle of it, gain <b>rep</b> equal
        to 2 + foe tier and get promoted to the next tier.
      </TypographyP>
      <TypographyP>
        The wounds from fights vary depending on the opponent. <b>Rookies</b>,
        <b>veterans</b>, and <b>champions</b> cause <b>harm</b> equal to their
        tier.
        <b>Beasts</b> cause a <b>3-harm</b> and <b>2-harm</b> wound.
      </TypographyP>
      <TypographyH4>Instructors</TypographyH4>
      <TypographyP>
        The crew can spend <b>rep</b> to recruit a <b>champion</b> as a fighting
        instructor for themselves and the crew. Each <b>champion</b> has a
        unique fighting style, unlocking the option to pick the
        instructor&apos;s action or special abilities as advances.
      </TypographyP>
      <TypographyP>
        The Steel Trap has its own culture in a way. Some have developed
        fighting styles suited for it. These people are your oppressors, though
        you can turn their own tactics against them.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>Gelvir (Pipedancing, 3 rep)</b>{" "}
          <i className="text-muted-foreground">
            maneuver through the machinery and use it to your advantage
          </i>
        </li>
        <li>
          <b>Lareiks (Crowdbreaking, 3 rep)</b>{" "}
          <i className="text-muted-foreground">
            maximize damage to groups of surrounding foes
          </i>
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        Generations of fighters have come and gone in the pits. Their styles
        have been shaped by the dominance of beasts and their animalistic
        tactics. Some styles have adopted elements of these tactics into styles
        used by fighters who can&apos;t shapeshift.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>Chlodos (Throatgore, 4 rep)</b>{" "}
          <i className="text-muted-foreground">
            pack tactics, go for the throat
          </i>
        </li>
        <li>
          <b>Hunuil (Bleedout, 5 rep)</b>{" "}
          <i className="text-muted-foreground">
            small, precise strikes in vital regions
          </i>
        </li>
        <li>
          <b>Hermesind (Backsnap, 6 rep)</b>{" "}
          <i className="text-muted-foreground">overwhelming aggression</i>
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        Dozens, maybe hundreds more fighting styles have been lost to time and
        Fenrir&apos;s jaws. Rarely, a fighter has been taught the old ways in
        secret; tasked with nurturing it until the time is right. These styles,
        you won&apos;t find in the pits.
      </TypographyP>
    </>
  );
}
