import { InlineSymbol } from "@/components/dice/dice-borders";
import {
  Theta,
  ThetaDouble,
  ThetaTriple,
} from "@/components/dice/dice-symbols";
import {
  TypographyBlockquote,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
export default function DonumIgnis() {
  return (
    <>
      <TypographyP>
        This vile, writhing flame has bored into the center of you and boils you
        from the inside out. Your guts, blood, and tears only flare it further.
        The burning grease of your insides sends inky smoke rolling out of your
        jaws. There&apos;s only one thing that quenches this fire - and
        it&apos;s love. Love is an ecstasy of simmering warmth in the chest.
      </TypographyP>
      <TypographyH3>Kingwulf&apos;s Flame</TypographyH3>
      <TypographyP>
        The infernal flame has three states: <i>Embering</i>, <i>Kindling</i>,
        and <i>Blazing</i>. An <i>Embering</i> flame is the only state which is
        safe for the wielder, though its power cannot be harnessed. A{" "}
        <i>Kindling</i> flame will take its pound of flesh and bless the wielder
        with wrathful fire in return. A <i>Blazing</i> flame is agony. Hate.
        Might.
      </TypographyP>
      <TypographyP>
        Whenever you wish to stoke an <i>Embering</i> flame you will make a{" "}
        <b>fuel roll</b>. It is a <b>donum roll</b>. The dice pool gets modified
        by the following questions:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          Do you hate someone in the scene? Take <b>+2d</b>. Does someone in the
          scene love you? Take, <b>-2d</b>.
        </li>
        <li>
          Are you surrounded by fire? Take <b>+1d</b>. Are you surrounded by
          water? Take <b>-1d</b>.
        </li>
        <li>
          Do you plan to be wild with the flame? Take <b>+1d</b>. Do you plan on
          being measured with the flame? Take <b>-1d</b>.
        </li>
        <li>
          Do you have <b>3</b> or more <b>conditions</b> marked? Take <b>+1d</b>
          . Do you want to take the <i>Devil&apos;s Bargain?</i> Take <b>+1d</b>
          .
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        <InlineSymbol>
          <Theta />
        </InlineSymbol>
        : you use a single ability, then the flame is <i>Embering</i> once
        again;{" "}
        <InlineSymbol>
          <ThetaDouble />
        </InlineSymbol>
        : the flame is <i>Kindling</i>, suffer{" "}
        <b className="text-orange-700">heartburn</b> whenever <b>time passes</b>{" "}
        ;{" "}
        <InlineSymbol>
          <ThetaTriple />
        </InlineSymbol>
        : the flame is <i>Blazing</i>, suffer{" "}
        <b className="text-orange-700">heartburn</b> at the end of every scene.
      </TypographyP>
      <TypographyBlockquote>
        <b className="text-orange-700">Heartburn</b>: mark a{" "}
        <b>level 2 harm: heartburn</b>; you may only <b>resist</b> this with{" "}
        <b>bonds</b>.
      </TypographyBlockquote>
      <TypographyP>
        The infernal flame can be quenched in place of a <b>condition</b> via
        the <b>Comfort</b> action in <b>downtime</b>{" "}
        <i className="text-muted-foreground">OR</i> by reducing a hated foe to
        ash for sake of someone you love.
      </TypographyP>
    </>
  );
}
