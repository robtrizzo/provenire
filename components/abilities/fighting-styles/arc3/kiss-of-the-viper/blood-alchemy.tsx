import { TypographyP } from "@/components/ui/typography";
export default function BloodAlchemy() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Viper Strike
      </span>
      <TypographyP>
        The body is an organic catalyst, or so the Ulgatians say. The Steel Trap
        isn&apos;t exactly an alchemy lab, so Engel learned to mix reagents in
        his own blood.
      </TypographyP>
      <TypographyP>
        You are immune to your own toxins. You may inject yourself with the
        compounds; mark a <b>permentent level 1 harm: searing blood</b>. The
        toxin becomes your choice of <i>paralytic</i> or <i>neurotoxin</i>.
      </TypographyP>
      <TypographyP>
        You may retrieve the toxin when you take another <b>harm</b> or by
        spending <b className="text-red-500">1 Blood</b>. When you do, clear{" "}
        <b>searing blood</b>.
      </TypographyP>
    </>
  );
}
