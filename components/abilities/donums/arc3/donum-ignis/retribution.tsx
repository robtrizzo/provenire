import { TypographyP } from "@/components/ui/typography";
export default function Retribution() {
  return (
    <>
      <TypographyP>
        Rather than <b>resist</b> an incoming <b>harm</b>, you may instead
        choose to be struck. If you do, you may spend{" "}
        <b className="text-red-500">1 Blood</b> for the wound to release a
        powerful gout of flame.
      </TypographyP>
      <TypographyP>
        <i>Blazing</i>: you may choose for the <b>harm</b> to be increased by{" "}
        <b>1 tier</b> to release an immense conflagration. If you do, your flame
        quenches to <i>Kindling</i>.
      </TypographyP>
    </>
  );
}
