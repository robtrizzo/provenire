import { TypographyP } from "@/components/ui/typography";
import Link from "next/link";
export default function MiradoSurge() {
  return (
    <>
      <TypographyP>
        You may{" "}
        <Link href="/game/arc-two/character-options/fighting-styles#strain">
          <span className="text-red-500 underline font-bold">strain</span>
        </Link>{" "}
        yourself to deliver a series of rapid consecutive strikes which are
        devastating to an overwhelmed, fatigued, or overconfident foe.
      </TypographyP>
    </>
  );
}
