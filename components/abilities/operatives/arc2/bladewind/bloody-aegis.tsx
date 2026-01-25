import { TypographyP } from "@/components/ui/typography";
export default function BloodyAegis() {
  return (
    <>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Transfusion
      </span>
      <TypographyP>
        The blades can attack at range; if used cleverly they can defend as
        well, though <span className="font-cyber">Deathknell&apos;s</span> price
        must be paid in blood. <span className="font-cyber">Bladewind</span> can
        spend <b className="text-rose-500">2 Blades</b> to defend themselves or
        someone they can see, wrapping them in the sheltering bleeding metal.
        This negates an incoming <b>harm</b> entirely, though the blades pierce
        into the beneficiary and extract a <b>level 1 harm: drained</b>.
      </TypographyP>
    </>
  );
}
