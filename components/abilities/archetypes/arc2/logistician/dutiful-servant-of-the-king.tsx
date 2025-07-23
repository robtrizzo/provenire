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
          <Link href="/game/arc-two/equipment/cyberware#kings-seal">
            The King&apos;s Seal
          </Link>
          .
        </span>
      </TypographyP>
      <TypographyP>
        This position doesn&apos;t make for many close relationships. It&apos;s
        alienated some of your friends and family:
      </TypographyP>
      <TypographyUnorderedList>
        <li>Your sibling _ who hates you even though you provide for them</li>
        <li>
          Your coworkers who you&apos;ve kept organized and on-task all these
          years
        </li>
        <li>
          Your best friend _ who you had to report to the overcorp or else
          everyone in their family would have been interrogated
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        Each time you make amends, <strong>mark 6 xp</strong>.
      </TypographyP>
    </div>
  );
}
