import { TypographyP } from "@/components/ui/typography";
export default function BreatheFlame() {
  return (
    <>
      <TypographyP>
        You may spend <b className="text-red-500">1 Blood</b> to bellow the fire
        in your belly off your tongue. Ordinarily flammable objects ignite
        immediately; sturdier substances require maintained effort to melt.
      </TypographyP>
      <TypographyP>
        <i>Blazing</i>: the infernal flame is melting your insides. You may add
        them to the spewed flame in the form of <i>billowing smoke</i> or{" "}
        <i>adhesive tar</i>.
      </TypographyP>
    </>
  );
}
