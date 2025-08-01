import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import OpPortrait from "../(components)/operative-portrait";
import ClockCost from "../(components)/clock-cost";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Game", href: "/game" },
          { name: "Arc Two", href: "/game/arc-two" },
          {
            name: "Character Creation",
            href: "/game/arc-two/character-options",
          },
          {
            name: "Operatives",
            href: "/game/arc-two/character-options/operatives",
          },
          { name: "Keeper", href: "#" },
        ]}
      />
      <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
        <div>
          <TypographyH1 className="font-cyber">Keeper</TypographyH1>
          <span className="text-sm text-muted-foreground font-cyber">
            Serious, focused, always has a plan.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Coordinate</b> Direct
            multiple unique entities to act as one.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              Cytech Simulation Stack &quot;Reality Fracture&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Root</span> casts{" "}
            <span className="font-cyber">Keeper</span> as the &quot;man with a
            plan&quot; type. Often the leader of the team and a foil to some of
            the more strong-willed characters;{" "}
            <span className="font-cyber">Keeper</span> is the one who strides
            into danger, shaping chaos into their order.
          </TypographyP>
        </div>
        <OpPortrait
          width={200}
          height={200}
          name="Keeper"
          className="rounded-md mx-auto lg:mx-0"
        />
      </div>
      <TypographyP className="text-lg font-bold font-cyber">
        During missions Root may ask you to...
      </TypographyP>
      <TypographyUnorderedList>
        <li>Reveal your true plan in the eleventh hour</li>
        <li>Find the perfect follow through to a teammate&apos;s action</li>
        <li>Give an order which sounds insane at face value</li>
        <li>Get mixed up in the thick of combat</li>
        <li>Defer to your teammate&apos;s crazy plan</li>
      </TypographyUnorderedList>
      <TypographyH2 className="font-cyber">
        Simulation Stack &quot;Reality Fracture&quot;
      </TypographyH2>
      <div className="flex gap-3 ml-2 mt-1 font-cyber text-muted-foreground text-sm flex-wrap">
        <span className="text-amber-500">Cytech</span>
        <span>|</span>
        <span className="text-red-500">Neurotech, Tartech</span>
      </div>
      <TypographyP>
        Before they were in the entertainment business,{" "}
        <span className="font-cyber">Cytech</span> made its money in the
        speculative investment market. They were completely, laughably
        unsuccessful at this - they were forced to court other corps for a
        buyout. They were disastrously unsuccessful at this too, until{" "}
        <span className="font-cyber">3MI</span> researchers found a discarded
        piece of chrome in the <span className="font-cyber">Cytech</span>{" "}
        vaults. They had an offer the next day.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">3MI</span> engineers got the prototype
        working. Ironically, it&apos;s the very thing that may have been able to
        save <span className="font-cyber">Cytech</span> from bankrupcy. Now{" "}
        <span className="font-cyber">3MI</span> quants rake in profit for the
        stakeholders. When <b>Osgrot</b>,{" "}
        <span className="font-cyber">Root&apos;s</span> operative handler, heard
        of the device he insisted it be incorporated into one of his soldiers.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Simulate</TypographyH3>
        <ClockCost num={0} />
      </div>
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
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          No Risk, No Reward
        </TypographyH3>
        <ClockCost num={2} />
      </div>
      <TypographyP>
        The simulations which <span className="font-cyber">Keeper</span>{" "}
        experiences are molded by the choices they make while within the sim.{" "}
        <span className="font-cyber">Keeper</span> may choose all of the riskier
        paths to find the best outcome, even at a worse chance of success. When
        they do, <b>simulation dice</b> may be spent to trade <b>position</b>{" "}
        for <b>effect</b> on <b>action rolls</b> for as long as that teammate is
        carrying out <span className="font-cyber">Keeper&apos;s</span> plan.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Teamwork</TypographyH3>
        <ClockCost num={2} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        <div className="inline-block">
          <div className="flex items-center gap-2">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
        </div>{" "}
        bond or better with every teammate
      </span>
      <TypographyP>
        <span className="font-cyber">Keeper</span> can spend the simulation
        searching for the best way to leverage everyone&apos;s strengths. Rather
        than search for the highest percentage good outcome, they trust the team
        to see the plan through. When <span className="font-cyber">Keeper</span>{" "}
        does this, they only grant no <b>simulation die</b>, but the next three
        times a teammate <b>assists</b> or <b>pushes themself</b>, it costs no{" "}
        <b>stress</b>.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Neural Overclock
        </TypographyH3>
        <ClockCost num={3} />
      </div>
      <TypographyP>
        Clever <span className="font-cyber">Keepers</span> will put together
        that they experience an incredible amount of time within the simulations
        compared to what takes place on the outside. They can learn to use this
        to their advantage, taking that time to think rather than play out the
        simulations for predictions.
      </TypographyP>
      <TypographyP>
        During this time, <span className="font-cyber">Keeper</span> can spend{" "}
        <b>xp clocks</b> to advance actions. Then they may make a mental{" "}
        <b>action roll</b> with <b className="text-blue-500">+2d</b>.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Reality Fracture
        </TypographyH3>
        <ClockCost num={6} />
      </div>
      <TypographyP>
        Sometimes you feel resistance when pulling out of a simulation, a form
        of inertia which would suggest it&apos;s somewhere you could stay. Or
        even return. When catastrophe strikes the team,{" "}
        <span className="font-cyber">Keeper</span> may mark a <b>condition</b>.
        If they do, they find themselves back in time: just before the worst
        happened.
      </TypographyP>
      <div className="my-2">
        <i className="text-muted foreground">HOW?</i>
      </div>
      <TypographyP>Then something else strange happens.</TypographyP>
    </>
  );
}
