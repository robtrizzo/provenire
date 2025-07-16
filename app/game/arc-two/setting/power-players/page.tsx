import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TypographyH1, TypographyP } from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Game", href: "/game" },
          { name: "Arc Two", href: "/game/arc-two" },
          { name: "Setting", href: "#" },
          { name: "Power Players", href: "#" },
        ]}
      />
      <TypographyH1 className="font-cyber">Power Players</TypographyH1>
      <TypographyP>
        <b className="font-sans">Kingwulf</b> reigns supreme, of course. But he
        doesn&apos;t live in <span className="font-cyber">Feasting</span>.
        He&apos;s only visited once in the city&apos;s six hundred year history.
        His noble bloodline and administrative emmisaries exert his influence in
        his stead, but the corps are the true powerhouses of the city.
      </TypographyP>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="rounded-none">
          <span className="ml-4 font-cyber text-3xl">OverCorp</span>
          <Separator />
          <div className="grid grid-cols-2 px-4">
            <code>
              <b>Business sectors:</b>
            </code>
            <code>
              Royal oversight, divinity, legal, social engineering, education
            </code>
          </div>
        </Card>
        <Card className="rounded-none">
          <span className="ml-4 font-cyber text-3xl">
            Multi-Media Magnate International
          </span>
          <Separator />
          <div className="grid grid-cols-2 px-4">
            <code>
              <b>Business sectors:</b>
            </code>
            <code>News, entertainment, holo-art, sports, sleeves</code>
            <code>
              <b>Subsidiaries:</b>
            </code>
            <code>Cytech, Strata</code>
          </div>
        </Card>
        <Card className="rounded-none">
          <span className="ml-4 font-cyber text-3xl">Vantro Enterprises</span>
          <Separator />
          <div className="grid grid-cols-2 px-4">
            <code>
              <b>Business sectors:</b>
            </code>
            <code>Genetics, fashion, sleeves</code>
            <code>
              <b>Subsidiaries:</b>
            </code>
            <code>Genlab</code>
          </div>
        </Card>
        <Card className="rounded-none">
          <span className="ml-4 font-cyber text-3xl">Silcana Discoveries</span>
          <Separator />
          <div className="grid grid-cols-2 px-4">
            <code>
              <b>Business sectors:</b>
            </code>
            <code>Psyche extraction, neuro tapping, sleeves</code>
            <code>
              <b>Subsidiaries:</b>
            </code>
            <code>Ambrosia Medical, Zetalab</code>
          </div>
        </Card>
        <Card className="rounded-none">
          <span className="ml-4 font-cyber text-3xl">Foundation</span>
          <Separator />
          <div className="grid grid-cols-2 px-4">
            <code>
              <b>Business sectors:</b>
            </code>
            <code>Construction, robotics, weapons, security</code>
            <code>
              <b>Subsidiaries:</b>
            </code>
            <code>Buran Hovertech</code>
          </div>
        </Card>
        <Card className="rounded-none">
          <span className="ml-4 font-cyber text-3xl">Beasttech</span>
          <Separator />
          <div className="grid grid-cols-2 px-4">
            <code>
              <b>Business sectors:</b>
            </code>
            <code>Sleeves, body mods, nettech, food</code>
          </div>
        </Card>
        <Card className="rounded-none">
          <span className="ml-4 font-cyber text-3xl">Integra</span>
          <Separator />
          <div className="grid grid-cols-2 px-4">
            <code>
              <b>Business sectors:</b>
            </code>
            <code>Pharmacuticals, sleeves, body mods, robotics</code>
          </div>
        </Card>
        <Card className="rounded-none">
          <span className="ml-4 font-cyber text-3xl">Sentry</span>
          <Separator />
          <div className="grid grid-cols-2 px-4">
            <code>
              <b>Business sectors:</b>
            </code>
            <code>Nettech, holobroadcasting, cybersec</code>
            <code>
              <b>Subsidiaries:</b>
            </code>
            <code>Synthra</code>
          </div>
        </Card>
      </div>
      <TypographyP>
        Depending on the neighborhood, the corps aren&apos;s the only power
        players in town. Each region of the city has its own collection of noble
        dynasties, gangs, militias, and criminal syndicates which vie for power
        and often do the bidding of the corps.
      </TypographyP>
    </>
  );
}
