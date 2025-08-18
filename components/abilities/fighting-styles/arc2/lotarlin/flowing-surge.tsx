import { TypographyP } from "@/components/ui/typography";
import Link from "next/link";
export default function FlowingSurge() {
  return (
    <>
      <TypographyP>
        You may{" "}
        <Link href="/game/arc-two/character-options/fighting-styles#strain">
          <span className="text-red-500 underline font-bold">strain</span>
        </Link>{" "}
        yourself to allow your hands to flow freely: your weapons uninterrupted
        by your body&apos;s maneuverings for a few breaths.
      </TypographyP>
    </>
  );
}
