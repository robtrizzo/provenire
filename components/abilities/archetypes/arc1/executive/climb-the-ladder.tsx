import { TypographyP } from "@/components/ui/typography";
import Link from "next/link";
export default function ClimbTheLadder() {
  return (
    <div>
      <TypographyP>
        During downtime, the Executive may make a{" "}
        <span className="text-red-700 font-bold underline">
          <Link href="/game/arc-one/actions-and-rolls#project-rolls">
            project roll
          </Link>
        </span>{" "}
        to climb the ladder of a community or organization that the crew is
        familiar with. Each completed project represents gaining higher
        positions. A controlled faction generates <strong>1 goodwill</strong>{" "}
        every downtime. Consequences of failure may include exploiting close
        friends and family or owing difficult favors.
      </TypographyP>
    </div>
  );
}
