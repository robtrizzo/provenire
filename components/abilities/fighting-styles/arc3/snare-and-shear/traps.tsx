import { TypographyP } from "@/components/ui/typography";
export default function Traps() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> By any Means
      </span>
      <TypographyP>
        Most prey in the swamplands are too fast or durable to be killed
        outright, so laying traps is a fundamental skill for Kilder hunters.
      </TypographyP>
      <TypographyP>
        You may spend <b>1 stress</b> once per mission to spring a trap
        you&apos;ve prepared. Traps meant for particularly large or strong
        quarry require <b>1 material</b> as well. When you spring it, choose if
        the trap is <i>snaring</i>, <i>blinding</i>, or <i>strangulating</i>.
      </TypographyP>
    </>
  );
}
