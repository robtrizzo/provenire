import { TypographyP } from "@/components/ui/typography";
export default function Flash() {
  return (
    <>
      <TypographyP>
        You may spend <b className="text-red-500">1 Blood</b> to ignite all fuel
        sources nearby. This means torches, sconces, forges, but not
        unintentional barrels of tar.
      </TypographyP>
      <TypographyP>
        <i>Embered</i>: you may instead extinguish a substantial flame to
        immediately stoke the flame to <i>Kindling</i>.
      </TypographyP>
      <TypographyP>
        <i>Blazing</i>: you ignite all flammable objects nearby.
      </TypographyP>
    </>
  );
}
