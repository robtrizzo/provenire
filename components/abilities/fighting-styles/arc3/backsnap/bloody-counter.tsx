import { TypographyP } from "@/components/ui/typography";
export default function BloodyCounter() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Reckless Mindset
      </span>
      <TypographyP>
        If you allow a foe&apos;s strike to hit you, you gain a guaranteed
        strike on them in return.
      </TypographyP>
    </>
  );
}
