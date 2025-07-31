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
          { name: "Watchtower", href: "#" },
        ]}
      />
      <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
        <div>
          <TypographyH1 className="font-cyber">Watchtower</TypographyH1>
          <span className="text-sm text-muted-foreground font-cyber">
            Steady, protective, rarely ever surprised.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Assess</b> Think before
            acting. Catalog the possible advantages and consequences of a course
            of action.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              Sentry Advanced Surveillance Swarm &quot;Watchdogs&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Watchtower</span> is something of a
            special role in <span className="font-cyber">Root</span>. They
            aren&apos;t expected to engage in combat and capture exciting
            moments; <span className="font-cyber">Watchtower&apos;s</span> job
            is to keep the team appraised of the situation and to be a line of
            communication back to{" "}
            <span className="font-cyber">Root&apos;s</span> misison control.
          </TypographyP>
        </div>
        <OpPortrait
          width={200}
          height={200}
          name="Watchtower"
          className="rounded-md mx-auto lg:mx-0"
        />
      </div>
      <TypographyP className="text-lg font-bold font-cyber">
        During missions Root may ask you to...
      </TypographyP>
      <TypographyUnorderedList>
        <li>Run into a burning building</li>
        <li>Jump in the way of traffic to save a teammate</li>
        <li>Escape ten assassins with your hands tied behind your back</li>
        <li>Diffuse a bomb</li>
        <li>Start a fight when the talking gets too boring</li>
      </TypographyUnorderedList>
      <TypographyH2 className="font-cyber">
        Advanced Surveilance Swarm &quot;Watchdogs&quot;
      </TypographyH2>
      <div className="flex gap-3 ml-2 mt-1 font-cyber text-muted-foreground text-sm flex-wrap">
        <span className="text-amber-500">Sentry</span>
        <span>|</span>
        <span className="text-red-500">Crystech, Electrotech, Nettech</span>
      </div>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Saw it Coming</TypographyH3>
        <ClockCost num={0} />
      </div>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Mission Control, Tell Corporate They Can Shove It.
        </TypographyH3>
        <ClockCost num={0} />
      </div>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Give Me the Fucking Camera
        </TypographyH3>
        <ClockCost num={0} />
      </div>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Attack Dogs</TypographyH3>
        <ClockCost num={0} />
      </div>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          Contract Escalation
        </TypographyH3>
        <ClockCost num={0} />
      </div>
    </>
  );
}
