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
      <TypographyH1>Lofts</TypographyH1>
      <TypographyP>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        perspiciatis dignissimos quae, qui, doloribus dolor aut maiores
        provident quod commodi nobis iusto quia dolores nostrum fugiat
        voluptatibus voluptatum voluptate optio.
      </TypographyP>
      <TypographyH2>Factions</TypographyH2>
      <div className="my-4 flex flex-col gap-2">
        <Card>
          <CardHeader>
            <TypographyH3>Theta</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier II</b>, <i>The Crew</i>
            </span>
          </CardHeader>
          <CardContent>
            <TypographyP>
              A small handfull of fledgeling rebels and the community
              they&apos;ve built around them. No strict hierarchy, though the
              core team of active rebels are given deference by the rest.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> ramshackle hut with a few expansions in a dark
                corner of the Lofts.
              </li>
              <li>
                <b>Population:</b> ~40.{" "}
                <i>100% worker, 6% thickblooded shifter</i>
              </li>
              <li>
                <b>NPCs:</b> <b>Gnaeus</b> <i>(supportive, proud, blind)</i>,{" "}
                <b>Flynn</b> <i>(quiet, dutiful, eager)</i>, <b>Udigo</b>{" "}
                <i>(dreamer, sullen, frail)</i>, <b>Lanorella</b>{" "}
                <i>(determined, listless, moody)</i>, <b>Teia</b>{" "}
                <i>(angsty, insecure, fierce)</i>, <b>Pachni</b>{" "}
                <i>(courageous, loving, viscous)</i>
              </li>
              <li>
                <b>Notable Assets:</b> trove of weapons and gear, network of
                contacts, Fabrication-wide notoriety
              </li>
              <li>
                <b className="mr-1">Allies:</b> Minamo&apos;s Brood,
                Moore&apos;s Gang
              </li>
              <li>
                <b>Enemies:</b> Dominion, Youngers
              </li>
              <li>
                <b>Situation:</b> The Lair is devastated, allies scattered,
                enemies licking their wounds, and the workers of Fabrication are
                looking to Theta for all the answers
              </li>
              <li>
                <b className="mr-1">Faction Clocks:</b> Daring missions [1],
                Shade&apos;s Projects [X], Scaffold&apos;s Projects [Y]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TypographyH3>Moore&apos;s Gang</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier II</b>, <i>Advanced</i>
            </span>
          </CardHeader>
          <CardContent>
            <TypographyP>
              An elected council of a well fortified community built around the
              Loft&apos;s only remaining ladder to Fab Floor. Protects its
              people at the price of a steep and non-negotiable tax.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> walled and barbed southside of the Lofts.
              </li>
              <li>
                <b>Population:</b> ~800.{" "}
                <i>
                  98% worker, 4% Cumerian, 12% thinblooded shifter, 2% enforcer
                </i>
              </li>
              <li>
                <b>NPCs:</b> <b>Laramie Black</b>{" "}
                <i>(leader, severe, capable, filling big shoes)</i>,{" "}
                <b>Nichros Perydark</b> <i>(leader, soft, mourning)</i>,{" "}
                <b>Yewin</b> <i>(ambitious, kind, afraid)</i>, <b>Aldara</b>{" "}
                <i>(brutal, persuasive)</i>
              </li>
              <li>
                <b>Notable Assets:</b> fortifications, toll on ladder to Fab
                Floor, sizeable stash of food and gear.
              </li>
              <li>
                <b>Allies:</b> Theta
              </li>
              <li>
                <b>Enemies:</b> Shrikes, Dominion, Youngers, Scarbacks
              </li>
              <li>
                <b className="mr-1">Situation:</b> fighting force depleted by
                ongoing conflicts, enemies on all sides tantalized by the
                relative wealth Moore&apos;s holds, internal conflict on
                identity of the faction
              </li>
              <li>
                <b>Faction Clocks:</b> tax residents [2], negotiate with an
                enemy faction [4], begin forced conscriptions [8]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TypographyH3>Shrikes</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier II</b>, <i>Backwards</i>
            </span>
          </CardHeader>
          <CardContent>
            <TypographyP>
              Band of ravenous crow shifters who have remained aloof from the
              conflicts in Fabrication so far. No clear hierarcy other than
              their leader Amalina.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b className="mr-1">Turf:</b> Bell&apos;s Chute, an expansive
                cyllindrical opening in the rafters that extends far past where
                the eye can see.
              </li>
              <li>
                <b>Population:</b> ~100.{" "}
                <i>
                  100% enforcer, 85% thinblooded shifter, 15% thickblooded
                  shifter
                </i>
              </li>
              <li>
                <b>NPCs:</b> <b>Amalina the Crow</b>{" "}
                <i>(leader, sadistic, greedy)</i>
              </li>
              <li>
                <b className="mr-1">Enemies:</b> Moore&apos;s Gang, Raftertown
              </li>
              <li>
                <b className="mr-1">Situation:</b> With the chaos in Fabrication
                and the diminishment of her rivals, Amalina is openly ambitious
                for a greater role in the factory
              </li>
              <li>
                <b className="mr-1">Faction Clocks:</b> scouting [3], raid [5],
                increase tier [10]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TypographyH3>Congregation of the Well God</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier 0</b>, <i>Unconcious</i>
            </span>
          </CardHeader>
          <CardContent>
            <TypographyP>
              Residents across all of Fabrication&apos;s neighborhoods who spend
              their hours between shifts in prayer under Sire Cyber&apos;s wing.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b className="mr-1">Turf:</b> Well God&apos;s Altar and Sire
                Cyber&apos;s perch
              </li>
              <li>
                <b>Population:</b> ~60.{" "}
                <i>97% worker, 12% thinblooded shifter, 3% enforcer</i>
              </li>
              <li>
                <b>NPCs:</b> <b>Sire Cyber</b>{" "}
                <i>(leader, driven to preach, prophetic)</i>, <b>Halonia</b>{" "}
                <i>(zealous, favored, euphoric)</i>
              </li>
              <li>
                <b>Enemies:</b> None
              </li>
              <li>
                <b>Allies:</b> None
              </li>
              <li>
                <b className="mr-1">Situation:</b> The Well God&apos;s messages
                have reached a fevered intensity - a direct call to action in
                the time of Great and Terrible Change.
              </li>
              <li>
                <b>Faction Clocks:</b> sermon [1], proselytize [3], ritual [6]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TypographyH3>Raftertown</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier I</b>, <i>Unconcious</i>
            </span>
          </CardHeader>
          <CardContent>
            <TypographyP>
              Disorganized residents of the upper north side.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> precarious rafters and beams spanned by stacked
                scrap
              </li>
              <li>
                <b>Population:</b> ~1700.{" "}
                <i>
                  94% worker, 22% thinblooded shifter, 14% Cumerian, 6% enforcer
                </i>
              </li>
              <li>
                <b>NPCs:</b> <b>Lashma</b>{" "}
                <i>(enforcer &quot;in-charge,&quot; bullish, formidable)</i>,{" "}
                <b>Luys</b> <i>(posing as an enforcer, stressed)</i>,{" "}
                <b>Elisaweta</b>{" "}
                <i>(Wisdom of the Cumerians, fearless, sees the symbols)</i>,{" "}
                <b>Jeanne</b>{" "}
                <i>(discrete companion, observant, quiet genius)</i>
              </li>
              <li>
                <b>Enemies:</b> Shrikes
              </li>
              <li>
                <b>Allies:</b> None
              </li>
              <li>
                <b className="mr-1">Situation:</b> With no leader or unifying
                cause, Raftertown is mostly made up of folk who keep their heads
                down and don&apos;t want to pay the Moore&apos;s Gang tax.
              </li>
              <li>
                <b>Faction Clocks:</b> Lashma tries to violently grab more power
                [3], Cumerian fear trials [5]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
