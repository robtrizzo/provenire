import { TypographyP } from "@/components/ui/typography";
export default function DeadMansSwitch() {
  return (
    <>
      <TypographyP>
        You may expend your <b className="text-yellow-500">special armor</b> to{" "}
        <b>resist</b> a consequence from the machines or the factory&apos;s
        strange phenomenon <span className="text-muted-foreground">OR</span> to
        cause a sabotaged machine to fail at the moment of your choosing rather
        than when triggered.
      </TypographyP>
    </>
  );
}
