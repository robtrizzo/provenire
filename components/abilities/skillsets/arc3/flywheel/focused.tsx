import { TypographyP } from "@/components/ui/typography";
export default function Focused() {
  return (
    <TypographyP>
      You may expend your <b className="text-yellow-500">special armor</b> to{" "}
      <b>resist</b> a consequence of surprise or environmental hazards{" "}
      <span className="text-muted-foreground">OR</span> to gain{" "}
      <code>
        <b className="text-emerald-500">+1 push</b>
      </code>{" "}
      when outmaneuvering opponents.
    </TypographyP>
  );
}
