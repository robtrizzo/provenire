import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  TypographyBlockquote,
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
      <TypographyH1>Fab Floor</TypographyH1>
      <TypographyP>
        Houses stacked on each other between the machines. Always a risky
        proposition because of the factory's fickleness. This is where the work
        gets done. Where hands get stained with oil and blood.
      </TypographyP>
      <TypographyH2>Factions</TypographyH2>
      <div className="my-4 flex flex-col gap-2">
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Minamo&apos;s Brood</TypographyH3>
              <span className="text-muted-foreground">
                <b>Tier I</b>, <i>Advanced</i>
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
                <b>Materials:</b> <b>1</b> = <i>Scarce</i>
              </span>
              <span className="text-muted-foreground">
                <b>Water:</b> <b>0</b> = <i>None</i>
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <TypographyP>
              A Dire Wife matriarch and her devoted extended family. They fight
              for what&apos;s right; not what&apos;s easy or likely to help them
              survive.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> a sprawling house with sturdy walls and
                surprisingly comfortable furnishings
              </li>
              <li>
                <b>Population:</b> ~20.{" "}
                <i>100% worker, 45% thinblooded shifter</i>
              </li>
              <li>
                <b>NPCs:</b> <b>Minamo</b>{" "}
                <i>(matriarch, ruthless, decisive, loving)</i>, <b>Ebrimud</b>{" "}
                <i>(naive, generous, spry)</i>, <b>Phelchen</b>{" "}
                <i>(cynical, protective, Minamo&apos;s second)</i>
              </li>
              <li>
                <b>Notable Assets:</b> unshakeable trust in each other,
                defensible home
              </li>
              <li>
                <b>Allies:</b> Theta
              </li>
              <li>
                <b>Enemies:</b> Scarbacks, Dominion
              </li>
              <li>
                <b className="mr-1">Situation:</b> ever since Nidan&apos;s
                funeral, the family has sworn death to the enforcers or die
                trying.
              </li>
              <li>
                <b>Faction Clocks:</b> brazen attack on enforcers [4]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Scarbacks</TypographyH3>
              <span className="text-muted-foreground">
                <b>Tier III</b>, <i>Reformist</i>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="text-muted-foreground">
                <b>Blood:</b> <b>1</b> = <i>Scarce</i>
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
              They patrol the Floor&apos;s streets. Everyone works: most get
              fed. That's the way of things. No one slacks off on their watch.
              No one makes trouble for Fab. Or else. Their leader Enzo thinks of
              himself as a peacemaker in Fabrication. He's as likely to order
              his thugs to protect a worker as he is to order them to hand them
              over to the overseers.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b className="mr-1">Turf:</b> Fabrication&apos;s production
                floor, its machines, and all of the surrounding neighborhoods
              </li>
              <li>
                <b>Population:</b> ~8000.{" "}
                <i>
                  90% worker, 21% thinblooded shifter, 3% thickblooded shifter,
                  1% Narscillian, 10% enforcer
                </i>
              </li>
              <li>
                <b>NPCs:</b> <b>Enzo</b>{" "}
                <i>(leader, compromising, Duara&apos;s puppet)</i>, <b>Duara</b>{" "}
                <i>(calculating, paranoid, cruel)</i>, <b>Veria</b>{" "}
                <i>(irritable, honest)</i>, <b>Oza Kriche</b>{" "}
                <i>(naysayer, spiteful, subordinate)</i>, <b>Inga</b>{" "}
                <i>(survivor, sold to Duara for food)</i>
              </li>
              <li>
                <b>Notable Assets:</b> massive workforce, established leadership
                and logistics structure, fortifications around Stairwell
              </li>
              <li>
                <b>Allies:</b> Dominion, Shrikes, Industry Alley
              </li>
              <li>
                <b className="mr-1">Enemies:</b> Youngers, Minamo&apos;s Brood
              </li>
              <li>
                <b className="mr-1">Situation:</b> Delivery Day has put everyone
                at risk. This could be the last food Fabrication ever gets if
                order isn&apos;t restored and production resumes.
              </li>
              <li>
                <b>Faction Clocks:</b> anti-rebellion propaganda [2], negotiate
                for more allies [3], return-to-work crackdown [5]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Sootstain</TypographyH3>
              <span className="text-muted-foreground">
                <b>Tier I</b>, <i>Unconcious</i>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="text-muted-foreground">
                <b>Blood:</b> <b>0</b> = <i>None</i>
              </span>
              <span className="text-muted-foreground">
                <b>Food:</b> <b>3</b> = <i>Surplus</i>
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
              Hideaways, outcasts, and workers trying to stay out of the
              emerging conflicts. Loosely run by the seniormost Stokers.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> Crammed hallways, shafts, and conduits surrounding
                the Furnaces
              </li>
              <li>
                <b>Population:</b> ~500.{" "}
                <i>
                  98% worker, 16% thinblooded shifter, 3% Heian, 2% enforcer
                </i>
              </li>
              <li>
                <b>NPCs:</b> <b>Wilgefort</b>{" "}
                <i>(mouthpiece, calm, non-confrontational)</i>, <b>Seb</b>{" "}
                <i>(distant, steady)</i>, <b>Gideon</b>{" "}
                <i>(rebellious, brave... too brave)</i>, <b>Gisa</b>{" "}
                <i>(kind, discrete, curious)</i>
              </li>
              <li>
                <b className="mr-1">Notable Assets:</b> overseers are afraid of
                the furnace&apos;s flames, passages too tight for large beasts
              </li>
              <li>
                <b>Allies:</b> None
              </li>
              <li>
                <b>Enemies:</b> None
              </li>
              <li>
                <b className="mr-1">Situation:</b> Violence and uncertainty has
                drawn dozens more to Sootstain in just the past few weeks. If
                this keeps up, it won&apos;t be the quiet and private place it
                once was.
              </li>
              <li>
                <b>Faction Clocks:</b> stoke the furnaces [1], increase tier [4]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Shadowfang Justicars</TypographyH3>
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
            <TypographyBlockquote>
              &quot;Wolves like us are the oppressed class. The thinbloods hate
              our strength, so they cowardly drove us out. But we&apos;ll be
              back. We are shadow. We are justice.&quot;
            </TypographyBlockquote>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> dens hidden in the dark corners of Fab Floor
              </li>
              <li>
                <b>Population:</b> ~60.{" "}
                <i>
                  6% worker, 79% thinblooded shifter, 15% thickblooded shifter
                </i>
              </li>
              <li>
                <b>NPCs:</b> <b>Ferin</b> <i>(addled, obsessed, rabid)</i>,{" "}
                <b>Tan</b> <i>(spiteful, ashamed, alone)</i>
              </li>
              <li>
                <b>Notable Assets:</b> hidden lairs, no attachments, number of
                capable shifters
              </li>
              <li>
                <b>Allies:</b> None
              </li>
              <li>
                <b>Enemies:</b> All thinbloods deserve subjugation
              </li>
              <li>
                <b>Situation:</b> It started slowly, but Delivery Day was the
                final proof that the thinbloods have taken power. The heroes who
                restore the natural order will surely be lauded in rewards
              </li>
              <li>
                <b>Faction Clocks:</b> senseless violence [2], act against Theta
                [4], sabotage machines [6]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>The Wall People</TypographyH3>
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
              Enigmatic temptors and meddlers in Fabrication&apos;s events.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> the impossible spaces between the walls
              </li>
              <li>
                <b>Population:</b> ???
              </li>
              <li>
                <b>NPCs:</b> ???
              </li>
              <li>
                <b>Notable Assets:</b> powerful alchemy, control over the drone?
              </li>
              <li>
                <b>Allies:</b> Youngers
              </li>
              <li>
                <b>Enemies:</b> None
              </li>
              <li>
                <b className="mr-1">Situation:</b> Root&apos;s soldiers implied
                that this place is run by people from the future. Could that be
                why the <b>Wall People</b> can do the impossible?
              </li>
              <li>
                <b>Faction Clocks:</b> ??? [3], ??? [7]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
