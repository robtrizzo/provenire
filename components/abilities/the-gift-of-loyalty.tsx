import { TypographyP } from "@/components/ui/typography";
import Link from "next/link";
export default function TheGiftOfLoyalty() {
  return (
    <div>
      <TypographyP>
        <span className="font-bold text-fuchsia-700 underline">
          <Link href="/game/arc-one/setting/strange-forces#kings-spell">
            The King&apos;s Spell
          </Link>
        </span>{" "}
        can never cause you to hurt or sabotage your crew or loved ones.{" "}
        <strong>-2d</strong> to resistance rolls when you are manipulated,
        persuaded, or read by someone you&apos;re close to.
      </TypographyP>
    </div>
  );
}
