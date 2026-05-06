import { TypographyP } from "@/components/ui/typography";
export default function Flutter() {
  return (
    <>
      <TypographyP>
        You push warmth into your joints and the smaller muscles surrounding
        them. Your body feels fluid and effortless to move. Spend{" "}
        <b className="text-red-500">1 Blood</b> to accomplish a feat of
        superhuman nimbleness <span className="text-muted-foreground">OR</span>{" "}
        balance.
      </TypographyP>
      <TypographyP>
        Despite enhanced ability in some regions, the rest of your body
        struggles to keep up. Mark a <b>level 2 harm: twisted</b> unless you
        know <i>Persist</i>.
      </TypographyP>
    </>
  );
}
