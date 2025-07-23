import { TypographyP } from "@/components/ui/typography";
import Link from "next/link";
export default function VillainousIntellect() {
  return (
    <div>
      <TypographyP>
        When someone is <i>neuroplastic</i>, you may spend a{" "}
        <b>downtime action</b> to tamper with their mind so that they
        incriminate themselves for your actions. Make a{" "}
        <Link href="/game/arc-two/rules/actions-and-rolls#project-rolls">
          <span className="text-red-500 underline">project roll</span>
        </Link>{" "}
        and reduce <b>Heat</b> by the result.
      </TypographyP>
    </div>
  );
}
