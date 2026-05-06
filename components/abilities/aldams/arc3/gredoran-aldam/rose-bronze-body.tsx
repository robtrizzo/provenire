import { TypographyP } from "@/components/ui/typography";
export default function RoseBronzeBody() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> <i>Takota&apos;s Remembrance</i>,{" "}
        <i>Bonze Bones</i>, <i>Brass Coils</i>, <i>Nickel Vessel</i>,{" "}
        <i>Mercurial Skull</i>
      </span>
      <TypographyP>
        Mastery of all three points of the triangle tempers your body into
        something greater than the sum of its parts: a divine vessel of immense
        potential. You may spend <b className="text-red-500">2 Blood</b> to
        activate <i>Bronze Bones</i>, <i>Brass Coils</i>, and{" "}
        <i>Mercurial Skull</i> together.
      </TypographyP>
      <TypographyP>
        Your body becomes heavy and tougher than metal while maintaining the
        swiftness and strength you can normally muster. You can sustain this
        state for 1 minute before you must spend{" "}
        <b className="text-red-500">1 Blood</b> to extend it by another 1
        minute.
      </TypographyP>
    </>
  );
}
