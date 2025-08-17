import { TypographyP } from "@/components/ui/typography";
export default function Simulate() {
  return (
    <>
      <TypographyP>
        The core functionality of{" "}
        <span className="font-cyber">&quot;Reality Fracture&quot;</span> is to
        rapidly play out possible futures so that{" "}
        <span className="font-cyber">Keeper</span> can make the best call given
        the circumstance. The accuracy of the simulation is a function of
        entropy and raw information fed into it. That&apos;s to say, the better{" "}
        <span className="font-cyber">Keeper</span> understands the situation,
        the better the simulations will be. A bit of a paradox since a
        prediction device is most necessary when information is low and
        uncertainty is high.
      </TypographyP>
      <TypographyP>
        To use it, <span className="font-cyber">Keeper</span>{" "}
        <b>pushes themself</b> and lays out their plan. They grant the team{" "}
        <b>2 simulation dice</b> to the plan&apos;s end. <b>Simulation dice</b>{" "}
        can be spent by anyone to gain <b className="text-blue-500">+2d</b> to a{" "}
        <b>resistance roll</b>.
      </TypographyP>
    </>
  );
}
