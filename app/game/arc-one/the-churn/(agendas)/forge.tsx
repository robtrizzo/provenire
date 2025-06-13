import {
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import Link from "next/link";
import items from "@/public/items.json";
import ItemEntry from "@/components/item-entry";

export default function Forge() {
  return (
    <>
      <TypographyH3>Forge the tools of rebellion</TypographyH3>
      <TypographyP>
        During The Churn, the crew is designing, forging, and building new
        equipment for the crew... if only they have the <b>materials</b>. These
        items are equipable by the crew until they become damaged or lost. If
        the crew has no materials, they can only research new designs.
      </TypographyP>
      <TypographyP>
        First, the crew picks a design to research and makes a{" "}
        <Link href="/game/arc-one/actions-and-rolls#project-rolls">
          <b className="underline text-red-500">project roll</b>
        </Link>{" "}
        to pursue it. Once the clock is filled, the design is complete and the
        crew can build it by spending <b>1 material</b>. Instead of researching
        a new design, the crew can start a new project to upgrade an existing
        design. When an upgrade project is completed, the crew can spend{" "}
        <b>1 material</b> to remove a negative trait or add a positive trait to
        the design. A full list of equipment traits is{" "}
        <Link href="/game/arc-one/appendix#equipment-traits">
          <b className="underline text-red-500">here</b>
        </Link>
        .
      </TypographyP>
      <TypographyH4>Starting equipment</TypographyH4>
      <TypographyUnorderedList>
        {items.starting.map((item, index) => (
          <li key={index}>
            <ItemEntry item={item} />
          </li>
        ))}
      </TypographyUnorderedList>
      <TypographyH4 id="schematics">Schematics</TypographyH4>
      <TypographyUnorderedList>
        {items.schematics.map((item, index) => (
          <li key={index}>
            <ItemEntry item={item} />
          </li>
        ))}
      </TypographyUnorderedList>
      <TypographyH4 id="formulae">Formulae</TypographyH4>
      <TypographyP>
        Alchemical formulae are researched similarly to <b>schematics</b>; but
        unlike equipment, alchemical concoctions are consumable. When spending
        <b>1 material</b> to create a batch from a formula, the crew gains a
        <b>3-clock</b> representing doses. Whenever someone in the crew uses a
        dose, mark <b>1 tick</b> on the clock. When the clock is complete, the
        crew is out of doses. A full list of alchemical traits is{" "}
        <Link href="/game/arc-one/appendix#alchemical-traits">
          <b className="underline text-red-500">here</b>
        </Link>
        .
      </TypographyP>
      <TypographyUnorderedList>
        {items.formulae.map((item, index) => (
          <li key={index}>
            <ItemEntry item={item} />
          </li>
        ))}
      </TypographyUnorderedList>
    </>
  );
}
