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
      <TypographyH1>Stairwell</TypographyH1>
      <TypographyP>
        Seventy two flights of stairs from Fab to the Pits. Every corner you
        turn on the stairs has you passing through someone's home. Chains,
        ladders, and ramshackle platforms decorate the vertical neighborhood.
        Dozens of side-entrances and labyrinthine pipeways lead from Stairwell
        to all sorts of places.
      </TypographyP>
      <TypographyH2>Factions</TypographyH2>
      <div className="my-4 flex flex-col gap-2">
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>The Youngers</TypographyH3>
              <span className="text-muted-foreground">
                <b>Tier I</b>, <i>Reformist</i>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="text-muted-foreground">
                <b>Blood:</b> ???
              </span>
              <span className="text-muted-foreground">
                <b>Food:</b> ???
              </span>
              <span className="text-muted-foreground">
                <b>Materials:</b> ???
              </span>
              <span className="text-muted-foreground">
                <b>Water:</b> ???
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <TypographyP>
              A bold gang of workers intent on overthrowing the overseers in
              Stairwell and taking the neighborhood for themselves.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> a fortified span of the pipeways with connections
                to Fab Floor
              </li>
              <li>
                <b>Population:</b> ~400.{" "}
                <i>100% worker, 30% thinblooded shifter, 5% Ulgatian</i>
              </li>
              <li>
                <b>NPCs:</b> <b>Cyrus</b> <i>(bitter, ambitious, shaken)</i>,{" "}
                <b>Darius Azad</b> <i>(tormented, twisted, vengeful)</i>
              </li>
              <li>
                <b>Notable Assets:</b> small trove of gifts from the{" "}
                <b>Wall People</b>, capable fighting force, secret entrances
              </li>
              <li>
                <b>Allies:</b> Wall People
              </li>
              <li>
                <b className="mr-1">Enemies:</b> Theta, Wolfden, Scarbacks,
                Southside Council, Moore&apos;s Gang
              </li>
              <li>
                <b>Situation:</b> With Warner dead, the Youngers are leaderless
                and besieged on all sides. Many of their members are considering
                abandoning the cause or even worse. If no one steps up soon, the
                Youngers will be no more.
              </li>
              <li>
                <b>Faction Clocks:</b> inner power struggle [2], gift from the
                Wall People [3], assault an enemy [5]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Wolfden</TypographyH3>
              <span className="text-muted-foreground">
                <b>Tier I</b>, <i>Backwards</i>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="text-muted-foreground">
                <b>Blood:</b> ???
              </span>
              <span className="text-muted-foreground">
                <b>Food:</b> ???
              </span>
              <span className="text-muted-foreground">
                <b>Materials:</b> ???
              </span>
              <span className="text-muted-foreground">
                <b>Water:</b> ???
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <TypographyP>
              A new gang of shifters seeking to dominate Stairwell. Classic
              Rathi patriarchy and power structures.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> the hollow of a large machine adjoined to the
                pipeways
              </li>
              <li>
                <b>Population:</b> ~1300.{" "}
                <i>
                  75% worker, 58% thinblooded shifter, 10% thickblooded shifter,
                  25% enforcer
                </i>
              </li>
              <li>
                <b>NPCs:</b> <b>Yulgar</b> <i>(leader, patient, pragmatic)</i>,{" "}
                <b>Lidora</b> <i>(indulgent, social, vindictive)</i>,{" "}
                <b>Tovam</b> <i>(impatient, upstart, resentful)</i>
              </li>
              <li>
                <b>Notable Assets:</b> large hoard of food, doting servants,
                many loyal shifters
              </li>
              <li>
                <b>Allies:</b> None
              </li>
              <li>
                <b>Enemies:</b> Youngers
              </li>
              <li>
                <b className="mr-1">Situation:</b> The Younger&apos;s
                disorganization was the breathing room Yulgar needed to take his
                small community of bears and turn it into an established
                territory. This is just the beginning, but Yulgar is not pressed
                for time.
              </li>
              <li>
                <b>Faction Clocks:</b> raid for food [4], increase tier [6]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Pipeways</TypographyH3>
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
                <b>Materials:</b> <b>0</b> = <i>None</i>
              </span>
              <span className="text-muted-foreground">
                <b>Water:</b> <b>0</b> = <i>None</i>
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <TypographyP>
              Disorganized community of homes stacked on top of each other
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> Main shaft of Stairwell and many of its connected
                pipeheads
              </li>
              <li>
                <b>Population:</b> ~3600.{" "}
                <i>
                  97% worker, 18% thinblooded shifter, 2% Kiposi, 1% Kilder, 3%
                  enforcer
                </i>
              </li>
              <li>
                <b>NPCs:</b> <b>Cassian</b> <i>(forlorn, uncertain)</i>,{" "}
                <b>Borani</b> <i>(enforcer, frustrated, vocal)</i>,{" "}
                <b>Svintha</b> <i>(enforcer, exhausted, conniving)</i>,{" "}
                <b>Sigsvult</b> <i>(heartbroken, caring, scraping by)</i>
              </li>
              <li>
                <b>Notable Assets:</b> only passage from Fab Floor to the Pits.
              </li>
              <li>
                <b>Allies:</b> None
              </li>
              <li>
                <b>Enemies:</b> None
              </li>
              <li>
                <b>Situation:</b> Under Nail's leadership, the Pipeways have
                stabilized and adopted a new cultural paradigm. Having enough
                food is enough to earn loyalty from most, but the faction's
                shifters quietly abandon Pipeways for more hospitable homes.
              </li>
              <li>
                <b>Faction Clocks:</b> acts of depseration [3], refugees join
                other factions [5]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Industry Alley</TypographyH3>
              <span className="text-muted-foreground">
                <b>Tier I</b>, <i>Reformist</i>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="text-muted-foreground">
                <b>Blood:</b> <b>1</b> = <i>Scarce</i>
              </span>
              <span className="text-muted-foreground">
                <b>Food:</b> <b>4</b> = <i>Stockpile</i>
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
              An affluent corridor of Stairwell led by its successful merchants.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b className="mr-1">Turf:</b> a single pipeway which has become
                incredibly developed by the craftspeople who&apos;ve set up
                their workshops here
              </li>
              <li>
                <b>Population:</b> ~400.{" "}
                <i>
                  67% worker, 15% thinblooded shifter, 2% Gredoran, 33% enforcer
                </i>
              </li>
              <li>
                <b>NPCs:</b> <b>Hitchen</b> <i>(leader, wealthy, smith)</i>,{" "}
                <b>Lorya</b> <i>(enforcer, paid off, discerning)</i>,{" "}
                <b>Ash Aalart</b> <i>(hardworking, perpetual apprentice)</i>
              </li>
              <li>
                <b>Notable Assets:</b> incredible wealth, neutral zone for
                negotiations, numerous workshops
              </li>
              <li>
                <b>Allies:</b> None
              </li>
              <li>
                <b>Enemies:</b> None
              </li>
              <li>
                <b className="mr-1">Situation:</b> Hitchen has made an absolute
                killing, nearly running out of materials because business was so
                good. Theta's leadership in Fab has created a furtive
                environment for commerce. Hitchen is happy as long as this keeps
                up.
              </li>
              <li>
                <b>Faction Clocks:</b> advocate for peace [3], equip the highest
                bidders [5]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Pits</TypographyH3>
              <span className="text-muted-foreground">
                <b>Tier II</b>, <i>Backwards</i>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="text-muted-foreground">
                <b>Blood:</b> ???
              </span>
              <span className="text-muted-foreground">
                <b>Food:</b> ???
              </span>
              <span className="text-muted-foreground">
                <b>Materials:</b> ???
              </span>
              <span className="text-muted-foreground">
                <b>Water:</b> ???
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <TypographyP>
              Enforcer-run bouts, often to the death. Spectators cram into every
              corner of the three dimensional specator arena.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b className="mr-1">Turf:</b> Gladitorial arena, prisons, and
                sparse fighter&apos;s residences
              </li>
              <li>
                <b>Population:</b> ~600.{" "}
                <i>
                  70% worker, 60% thinblooded shifter, 10% thickblooded shifter,
                  30% enforcer
                </i>
              </li>
              <li>
                <b>NPCs:</b> <b>Ridora the Ravenous</b>{" "}
                <i>(leader, callous, selfish)</i>, <b>Hermesind</b>{" "}
                <i>(willing tutor, broken, unpredictable)</i>
              </li>
              <li>
                <b>Notable Assets:</b> secure prisons, one way in and out for
                thinbloods
              </li>
              <li>
                <b>Allies:</b> None
              </li>
              <li>
                <b>Enemies:</b> None
              </li>
              <li>
                <b className="mr-1">Situation:</b> Ridora's humiliation has sent
                him into drawn out benders and isolation. Stronger fighters
                begin posturing to take his place.
              </li>
              <li>
                <b>Faction Clocks:</b> host fights [1], execute captured
                troublemakers [3], ??? [7]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
