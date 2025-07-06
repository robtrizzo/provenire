import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import OpPortrait from "./(components)/operative-portrait";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Game", href: "/game" },
          { name: "Arc Two", href: "/game/arc-two" },
          {
            name: "Character Creation",
            href: "/game/arc-two/character-creation",
          },
          { name: "Operatives", href: "#" },
        ]}
      />
      <TypographyH1 className="font-cyber mb-8">Operatives</TypographyH1>
      <div className="flex flex-col gap-2">
        <Card className="py-0 pr-2">
          <div className="flex gap-2">
            <OpPortrait
              width={200}
              height={200}
              name="Canon"
              className="rounded-l-md"
            />
            <div>
              <TypographyH3 className="font-cyber">Canon</TypographyH3>
              <span className="text-sm text-muted-foreground font-cyber">
                Silent, simmering, sexy type. Explosive power.
              </span>
              <TypographyP>
                <b className="font-cyber text-red-500">Smolder</b> Handle social
                situations with a cool, charming demeanor.
              </TypographyP>
              <TypographyP>
                <b className="font-cyber text-fuchsia-500">
                  Buran Experimental Integrated Blast Engine &quot;Overkill,
                  Beibe&quot;
                </b>
              </TypographyP>
              <TypographyP>
                <span className="font-cyber">Canon</span> is a mainstay of{" "}
                <span className="font-cyber">Root&apos;s</span> fantasy and
                sci-fi productions. Fans love the suave seductive type with
                overwhelming combat power. To that end,{" "}
                <span>Canon&apos;s</span> job is to talk smooth and get that
                money-shot of their ultimate move.
              </TypographyP>
            </div>
          </div>
        </Card>
        <Card className="py-0 pr-2">
          <div className="flex gap-2">
            <OpPortrait
              width={200}
              height={200}
              name="Close"
              className="rounded-l-md"
            />
            <div>
              <TypographyH3 className="font-cyber">Close</TypographyH3>
              <span className="text-sm text-muted-foreground font-cyber">
                Impulsive, reckless, clutch in a pinch.
              </span>
              <TypographyP>
                <b className="font-cyber text-red-500">Instinct</b> Make the
                right call when there&apos;s no time to think.
              </TypographyP>
              <TypographyP>
                <b className="font-cyber text-fuchsia-500">
                  Integra Rapid Sleeve Resequencer &quot;Revivify&quot;
                </b>
              </TypographyP>
              <TypographyP>
                <span className="font-cyber">Close</span> is the obvious choice
                when <span className="font-cyber">Root</span> needs to capture
                some high stakes thrills. Fans crave the scrappy underdog barely
                making it out of one situation to the next.{" "}
                <span>Close&apos;s</span> job is to run towards danger and
                capture those high octane close calls.
              </TypographyP>
            </div>
          </div>
        </Card>
        <Card className="py-0 pr-2">
          <div className="flex gap-2">
            <OpPortrait
              width={200}
              height={200}
              name="Facility"
              className="rounded-l-md"
            />
            <div>
              <TypographyH3 className="font-cyber">Facility</TypographyH3>
              <span className="text-sm text-muted-foreground font-cyber">
                Cocky, calculated, always prepared.
              </span>
              <TypographyP>
                <b className="font-cyber text-red-500">Galvanize</b> Stoke
                positive energy; inspire confidence in yourself and others.
              </TypographyP>
              <TypographyP>
                <b className="font-cyber text-fuchsia-500">
                  Beasttech Megapower Endoskeleton
                </b>
              </TypographyP>
              <TypographyP>
                <span className="font-cyber">Facility</span> is the heart and
                soul of the team. <span className="font-cyber">Root</span>{" "}
                brings them in when they need to capture some moments of levity
                or positivity in the darkness. <span>Facility&apos;s</span> job
                is to use their endless gadgets and heroic speeches to turn the
                tide once the mission&apos;s gone to hell.
              </TypographyP>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
