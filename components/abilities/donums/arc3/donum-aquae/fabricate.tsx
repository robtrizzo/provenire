import { TypographyP } from "@/components/ui/typography";
export default function Fabricate() {
  return (
    <>
      <TypographyP>
        The interior fractal&apos;s cravings can be molded into a self
        sustaining cycle of consumption and creation. At the beginning of{" "}
        <b>Donwtime</b> and whenever <b>Time Passes</b>, you gain{" "}
        <b className="text-blue-500">1 Water</b>. If this would cause you to
        overflow, you take a <b>level 2 harm: ruptures</b>.
      </TypographyP>
      <TypographyP>
        You can speed this process along, though wasting huge amounts of energy
        in the process. Spend <b className="text-blue-500">1 Water</b> to
        immediately create water around the volume of a hand.
      </TypographyP>
    </>
  );
}
