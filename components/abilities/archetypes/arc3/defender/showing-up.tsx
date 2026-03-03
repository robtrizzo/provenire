import { TypographyP } from "@/components/ui/typography";
export default function ShowingUp() {
  return (
    <>
      <TypographyP>
        <b>-1 stress cost</b> when <b>resisting</b> an ally&apos;s consequences.
      </TypographyP>
      <TypographyP>
        <i className="text-sm text-muted-foreground">
          If this makes the <b>stress</b> cost negative, instead recover that
          much <b>stress</b>.
        </i>
      </TypographyP>
    </>
  );
}
