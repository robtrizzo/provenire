import { TypographyP } from "@/components/ui/typography";
import Link from "next/link";
export default function DeceiversSurge() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Predatory Focus
      </span>
      <TypographyP>
        You may <b>push yourself</b> to gain an opportunity to strike a foe and
        retreat, even if their full focus is on you.
      </TypographyP>
    </>
  );
}
