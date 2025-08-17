import { TypographyP } from "@/components/ui/typography";

export default function Unstoppable() {
  return (
    <>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Into the Fray
      </span>
      <TypographyP>
        Carrying the building-sized objects the{" "}
        <span className="font-cyber">&quot;Manhandler&quot;</span> was designed
        for requires an immense amount of power and stability in the base of the
        sleeve. With practice, <span className="font-cyber">Facility</span> can{" "}
        <b>push themself</b> and continue advancing forward despite any
        resistance or obstacle in their way. With sufficient effort,{" "}
        <span className="font-cyber">Facility&apos;s</span> could topple the
        buildings their chrome was designed to construct.
      </TypographyP>
    </>
  );
}
