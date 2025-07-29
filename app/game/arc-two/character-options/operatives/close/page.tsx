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
          { name: "Close", href: "#" },
        ]}
      />
      <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
        <div>
          <TypographyH1 className="font-cyber">Close</TypographyH1>
          <span className="font-cyber text-muted-foreground">
            Impulsive, reckless, clutch in a pinch
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Instinct</b> Make the right
            call when there&apos;s no time to think.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              Integra Rapid Sleeve Resequencer &quot;Revivify&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Close</span> is the obvious choice when{" "}
            <span className="font-cyber">Root</span> needs to capture some high
            stakes thrills. Fans crave the scrappy underdog barely making it out
            of one situation to the next.{" "}
            <span className="font-cyber">Close&apos;s</span> job is to run
            towards danger and capture those high octane close calls.
          </TypographyP>
        </div>
        <OpPortrait
          width={200}
          height={200}
          name={"Close"}
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
        Rapid Sleeve Resequencer &quot;Revivify&quot;
      </TypographyH2>
      <div className="flex gap-3 ml-2 mt-1 font-cyber text-muted-foreground text-sm flex-wrap">
        <span className="text-amber-500">Integra</span>
        <span>|</span>
        <span className="text-red-500">Gentech, Tartech</span>
      </div>
      <TypographyP>
        Some of <span className="font-cyber">Feasting&apos;s</span> wealthiest
        aristocracy created a foundation named the{" "}
        <span className="font-cyber">Infinity Paradox</span>: a trust fund
        designed to pay out to scientists whose breakthroughs march one step
        closer to immortality. The{" "}
        <span className="font-cyber">&quot;Revivify&quot;</span> is based on the
        findings of one such scientists, <b>Waller Karan</b>. She finally
        cracked the solution to the <b>Donum Vitae</b> of legends old. Of
        course, all of this is top secret{" "}
        <span className="font-cyber">Integra</span> proprietary tech, but{" "}
        <span className="font-cyber">Root&apos;s</span> head of acquisitions:{" "}
        <b>Dunwell</b>, has connections that landed a prototype in the{" "}
        <span className="font-cyber">Root</span> ripperdoc office.
      </TypographyP>

      <TypographyP>
        You might be wondering if this works with mechsleeves.{" "}
        <span className="font-cyber">Root&apos;s</span> head of research and
        development: <b>Harys</b>, managed to innovate on the design and use the
        same pathways to reconstruct metal parts. Sadly he can&apos;t be
        submitted for an <span className="font-cyber">Infinity Paradox</span>{" "}
        payout since this was based on ilicit tech...
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">
          &quot;Revivify&quot;
        </TypographyH3>
        <ClockCost num={0} />
      </div>
      <TypographyP>
        The <span className="font-cyber">&quot;Revivify&quot;</span> works off
        of a simple neuro-mechanism. Think <i>&quot;survive&quot;</i> and form a
        strong mental image of your sleeve knitting back together. This kicks
        off the resequencer and the tech takes care of the rest, mark{" "}
        <b>2 stress</b> and heal any one <b>harm</b> your sleeve has suffered.
      </TypographyP>
      <TypographyP>
        The <span className="font-cyber">&quot;Revivify&quot;</span> is powered
        by fuel cells which are inserted into the base of the sleeve&apos;s
        spinal column. Each repair consumes a fuel rod. Additional fuel rods are{" "}
        <b>1 inventory slot</b> apiece.
      </TypographyP>
    </>
  );
}
