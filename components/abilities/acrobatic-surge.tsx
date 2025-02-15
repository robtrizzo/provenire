import { TypographyP } from "@/components/ui/typography";
import Link from "next/link";

export default function AcrobaticSurge() {
  return (
    <TypographyP>
      You may{" "}
      <Link href="/game/fighting-styles#strain">
        <span className="text-red-500 underline font-bold">strain</span>
      </Link>{" "}
      yourself to perform an incredible feat of repositioning.
    </TypographyP>
  );
}
