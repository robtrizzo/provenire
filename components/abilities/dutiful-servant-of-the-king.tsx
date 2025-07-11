import {
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import Link from "next/link";
export default function DutifulServantOfTheKing() {
  return (
    <div>
      <TypographyP>
        The Logistician values the King&apos;s order and has worked diligently
        within its confines. For this, they&apos;ve been rewarded with the{" "}
        <span className="font-bold text-fuchsia-700 underline">
          <Link href="/game/arc-one/setting/strange-forces#kings-spell">
            The King&apos;s Spell
          </Link>
          .
        </span>
      </TypographyP>
      <TypographyP>
        This position doesn&apos;t make many friends among the factory workers.
        Now that you&apos;ve embraced rebellion, you find that there are many
        you have to prove yourself to:
      </TypographyP>
      <TypographyUnorderedList>
        <li>Your sibling _ who hates you even though you provide for them</li>
        <li>
          Your shift workers who you&apos;ve kept organized and on-task all
          these years
        </li>
        <li>
          Your best friend _ who you had to report to the overseers or else
          everyone in their family would have been killed
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        Each time you make amends, <strong>mark 1 xp</strong>.
      </TypographyP>
    </div>
  );
}
