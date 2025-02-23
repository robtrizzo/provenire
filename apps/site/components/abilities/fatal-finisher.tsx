import { TypographyP } from "@/components/ui/typography";
import Link from "next/link";

export default function FatalFinisher() {
  return (
    <TypographyP>
      You may{" "}
      <Link href="/game/fighting-styles#strain">
        <span className="text-red-500 underline font-bold">strain</span>
      </Link>{" "}
      yourself to make a devastating blow against an overwhelmed, cornered, or
      prone foe.
    </TypographyP>
  );
}
