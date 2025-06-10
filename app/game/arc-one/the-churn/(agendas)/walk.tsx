import {
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import Link from "next/link";

export default function Walk() {
  return (
    <>
      <TypographyH3>
        Walk among the oppressors and learn their secrets
      </TypographyH3>
      <TypographyP>
        During The Churn, the crew is infiltrating the overseers&apos; ranks and
        pursuing special operations. On completion, operations grant a powerufl
        effect or opportunity. First, the crew picks an operation to pursue,
        then makes a{" "}
        <Link href="/game/arc-one/actions-and-rolls#project-rolls">
          <b className="underline text-red-500">project roll</b>
        </Link>{" "}
        . Once the clock is filled, the operation takes place and may choose a
        new operation to pursue.
      </TypographyP>
      <TypographyH4>Operations</TypographyH4>
      <TypographyUnorderedList>
        <li>
          <b>Implicate (9)</b>: Plant evidence implicating someone else for the
          crew&apos;s crimes
        </li>
        <li>
          <b>Scout (4)</b>: Learn the name, contact, or danger of an adjacent
          region
        </li>
        <li>
          <b>Expand Network (5)</b>: Permanent <b>+1d</b> to gather information
          rolls in the chosen region
        </li>
        <li>
          <b>Jailbreak (9)</b>: Gain access to a a character&apos;s prison cell
          and sneak them to freedom
        </li>
        <li>
          <b>Lay Trap (9)</b>: <b>+2d</b> to the next engagement roll that
          involes ambushing or surprising the enemy
        </li>
        <li>
          <b>Dreadful Rumors (7)</b>: Learn a region&apos;s special mission
        </li>
      </TypographyUnorderedList>
    </>
  );
}
