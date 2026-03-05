import { TypographyP } from "@/components/ui/typography";
export default function Battleborn() {
  return (
    <TypographyP>
      You may expend your <b className="text-yellow-500">special armor</b> to{" "}
      <i>negate</i> a <b>harm</b> from an attack in combat or to gain{" "}
      <code>
        <b className="text-emerald-500">+1 push</b>
      </code>{" "}
      during a fight.
    </TypographyP>
  );
}
