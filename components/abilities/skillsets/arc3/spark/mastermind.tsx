import { TypographyP } from "@/components/ui/typography";
export default function Mastermind() {
  return (
    <TypographyP>
      You may expend your <b className="text-yellow-500">special armor</b> to{" "}
      <i>negate</i> a <b>harm</b> an ally would suffer{" "}
      <span className="text-muted-foreground">OR</span> gain{" "}
      <code>
        <b className="text-emerald-500">+1 push</b>
      </code>{" "}
      on a <b>gather information</b> roll.
    </TypographyP>
  );
}
