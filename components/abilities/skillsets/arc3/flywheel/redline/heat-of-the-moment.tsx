import { TypographyP } from "@/components/ui/typography";
export default function HeatOfTheMoment() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> take a risk that puts the crew in a{" "}
        <b>desperate position</b>
      </span>
      <TypographyP>
        You may plunge the crew into a <b>desperate position</b> to gain{" "}
        <b>increased effect</b> on an action. If your action succeeds without
        consequence, you may clear the <b>Afraid</b> condition.
      </TypographyP>
    </>
  );
}
