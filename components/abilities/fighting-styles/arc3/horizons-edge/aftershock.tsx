import { TypographyP } from "@/components/ui/typography";
export default function Aftershock() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Snap, weapon with a blood channel
      </span>
      <TypographyP>
        This technique requires a weapon of superior quality and with a special
        modification: a hollow channel for blood to flow through along with
        small vents for that blood.
      </TypographyP>
      <TypographyP>
        Whenever you spend <b className="text-red-500">Blood</b>, you may charge
        your weapon&apos;s blood channel. And when you strike with that weapon
        you may release its charged blood in a devastating secondary explosion.
      </TypographyP>
    </>
  );
}
