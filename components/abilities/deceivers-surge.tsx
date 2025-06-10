import { TypographyP } from "@/components/ui/typography";
import Link from "next/link";

export default function DeceiversSurge() {
  return (
    <TypographyP>
      You may{" "}
      <Link href="/game/arc-one/fighting-styles#strain">
        <span className="text-red-500 underline font-bold">strain</span>
      </Link>{" "}
      yourself to gain an opportunity to strike a foe and retreat, even if their
      full focus is on you.
    </TypographyP>
  );
}
