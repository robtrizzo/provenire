import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>The Bends</TypographyH1>
      <TypographyP>
        A neighborhood built on top of a factory beam that got bent to a near
        right angle at some point in the past. Some elders still debate wheter
        it was an overseer or manufacturing defect that caused it. Regardless of
        the truth, it&apos;s now a community landmark. Rub the bend for good
        luck...
      </TypographyP>
      <TypographyH2>Factions</TypographyH2>
      <div className="my-4 flex flex-col gap-2">
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Southside Council</TypographyH3>
              <span className="text-muted-foreground">
                <b>Tier I</b>, <i>Sympathetic</i>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="text-muted-foreground">
                <b>Blood:</b> <b>0</b> = <i>None</i>
              </span>
              <span className="text-muted-foreground">
                <b>Food:</b> <b>2</b> = <i>Adequate</i>
              </span>
              <span className="text-muted-foreground">
                <b>Materials:</b> <b>1</b> = <i>Scarce</i>
              </span>
              <span className="text-muted-foreground">
                <b>Water:</b> <b>0</b> = <i>None</i>
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <TypographyP>
              A collective of workers with an Anidine-inspired hierarchy and a
              distaste for wanton upheaval. They have a small merit-based
              council of their own.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> twisty alleyways between the machines on the south
                side of The Bends
              </li>
              <li>
                <b>Population</b>: ~800.{" "}
                <i>
                  98% worker, 10% Anidinian, 14% thinblooded shifter, 2%
                  enforcer
                </i>
              </li>
              <li>
                <b>NPCs:</b> <b>Taj Amati</b>{" "}
                <i>(leader, middle-aged, shaken, cautious, fair)</i>,{" "}
                <b>Haidi Mysmida</b> <i>(councilor, elder, stern, patient)</i>,{" "}
                <b>Sandi Var</b> <i>(upstart, teenager, observant, reckless)</i>
                , <b>Salonte</b> <i>(enforcer, elder, pragmatic)</i>
              </li>
              <li>
                <b>Notable Assets:</b> structured system of justice,
                labyrinthine shifting alleyways that the locals know well
              </li>
              <li>
                <b>Allies:</b> <i>none</i>
              </li>
              <li>
                <b>Enemies:</b> Dominion, Youngers
              </li>
              <li>
                <b>Situation:</b> Dominion has been extracting ever-escalating
                taxes and liberties from the Southside Council
              </li>
              <li>
                <b>Faction Clocks:</b> small council election [6], celebrate
                Anidinian culture [8]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Dominion</TypographyH3>
              <span className="text-muted-foreground">
                <b>Tier II</b>, <i>Backwards</i>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="text-muted-foreground">
                <b>Blood:</b> <b>2</b> = <i>Adequate</i>
              </span>
              <span className="text-muted-foreground">
                <b>Food:</b> <b>3</b> = <i>Surplus</i>
              </span>
              <span className="text-muted-foreground">
                <b>Materials:</b> <b>3</b> = <i>Surplus</i>
              </span>
              <span className="text-muted-foreground">
                <b>Water:</b> <b>0</b> = <i>None</i>
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <TypographyP>
              The dregs of Audo&apos;s Gorgers, conquered by Hrodulfr and beaten
              down by the <b className="mr-1">Delivery</b> riots. A strict Rathi
              hierarchy teeming with thickblooded and thinblooded shifters
              starving for their alpha&apos;s approval.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> the main thouroughfare of The Bends. Larger
                residences and broader streets than elsewhere in Fabrication.
              </li>
              <li>
                <b>Population</b>: ~2500.{" "}
                <i>
                  82% worker, 6% thickblooded shifter, 18% thinblooded shifter,
                  18% enforcer
                </i>
              </li>
              <li>
                <b>NPCs:</b> <b>Hrodulfr</b>{" "}
                <i>(leader, prideful, cruel, arrogant)</i>, <b>Thraus</b>{" "}
                <i>(thickblooded wolf, cowardly, conniving)</i>, <b>Radegond</b>{" "}
                <i>(thickblooded wolf, stalker, sadistic)</i>, <b>Bruno</b>{" "}
                <i>(worker, adult, placating, smooth-talker)</i>
              </li>
              <li>
                <b>Notable Assets:</b> large fighting force, Hrodulfr&apos;s
                palace, a trove of armor and armaments
              </li>
              <li>
                <b>Allies:</b> <i>none</i>
              </li>
              <li>
                <b>Enemies:</b> Southside Council, Moore&apos;s Gang, Theta
              </li>
              <li>
                <b>Situation:</b> after <b>Delivery</b>, Dominion&apos;s
                fighters are wounded and morale is shaky.
              </li>
              <li>
                <b>Faction Clocks:</b> tax surrounding factions [2], increase
                tier [4], subjugate neighbor [8]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Watering Hole</TypographyH3>
              <span className="text-muted-foreground">
                <b>Tier I</b>, <i>Unconcious</i>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="text-muted-foreground">
                <b>Blood:</b> <b>1</b> = <i>Scarce</i>
              </span>
              <span className="text-muted-foreground">
                <b>Food:</b> <b>2</b> = <i>Adequate</i>
              </span>
              <span className="text-muted-foreground">
                <b>Materials:</b> <b>1</b> = <i>Scarce</i>
              </span>
              <span className="text-muted-foreground">
                <b>Water:</b> <b>0</b> = <i>None</i>
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <TypographyP>
              Formerly the territory of Dominion and enforced by Ulf the Wolf,
              the Watering Hole has quietly slipped away into an ungoverned
              space. The power vacuum has left Watering Hole tense and wondering
              what its destiny will be.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> Kent&apos;s Watering Hole and everything North of
                it in the Bends. Compact homes blending into machinery.
              </li>
              <li>
                <b>Population:</b> ~1000.{" "}
                <i>
                  89% worker, 3% thickblooded shifter, 15% thinblooded shifter,
                  11% enforcer
                </i>
              </li>
              <li>
                <b>NPCs:</b> <b>Kent</b>{" "}
                <i>(figurehead, enterprising, placating)</i>, <b>Lio</b>{" "}
                <i>(broody, secretive, on no-one&apos;s side)</i>, <b>Alma</b>{" "}
                <i>(knowledgeable, kind, Ritiger&apos;s madness)</i>,{" "}
                <b>Ulf the Wolf</b> <i>(disgraced, conniving, ruthless)</i>
              </li>
              <li>
                <b>Notable Assets:</b> Kent&apos;s Watering Hole, direct access
                to Fab Floor, new homes built by Von.
              </li>
              <li>
                <b>Allies:</b> <i>none</i>
              </li>
              <li>
                <b>Enemies:</b> Dominion
              </li>
              <li>
                <b>Situation:</b> after Jonah drove the enforcers out of
                Kent&apos;s, Dominion hasn&apos;t dedicated the men to retaking
                control. Can the Watering Hole come together in time to maintain
                its fragile independence?
              </li>
              <li>
                <b>Faction Clocks:</b> Kent throws a party [2], enforcers return
                [4], a leader emerges [6]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Arbor Street</TypographyH3>
              <span className="text-muted-foreground">
                <b>Tier 0</b>, <i>Sympathetic</i>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="text-muted-foreground">
                <b>Blood:</b> <b>0</b> = <i>None</i>
              </span>
              <span className="text-muted-foreground">
                <b>Food:</b> <b>2</b> = <i>Adequate</i>
              </span>
              <span className="text-muted-foreground">
                <b>Materials:</b> <b>1</b> = <i>Scarce</i>
              </span>
              <span className="text-muted-foreground">
                <b>Water:</b> <b>1</b> = <i>Scarce</i>
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <TypographyP>
              Tucked away deep in the Bend&apos;s maze of streets is a tiny
              community of Argosi workers. They attempt to live as their
              forbears - pacifist, charitable, and in service of art.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> a street painted to mimic a grassy street with a
                blue sky.
              </li>
              <li>
                <b>Population:</b> ~60. <i>100% worker, 100% Argosi</i>
              </li>
              <li>
                <b>NPCs:</b> <b>Lexus Buteo</b>{" "}
                <i>leader, stern, traditional</i>, <b>Marcus Avilius</b>{" "}
                <i>bitter, begrudging, reliable</i>, <b>Celsa Caesoni</b>{" "}
                <i>hopeful, outspoken, master of crafts</i>,{" "}
                <b>Florian Prisca</b> <i>hermit, paranoid, talented fighter</i>
              </li>
              <li>
                <b>Notable Assets:</b> strong social cohesion, trove of high
                quality household crafts, hard to find
              </li>
              <li>
                <b>Allies:</b> <i>none</i>
              </li>
              <li>
                <b>Enemies:</b> Dominion
              </li>
              <li>
                <b>Situation:</b> Dominion&apos;s wolves are hunting for Arbor
                Street&apos;s location. It&apos;s only a matter of time.
              </li>
              <li>
                <b>Faction Clocks</b>: Celebrate Argosi culture [8]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
