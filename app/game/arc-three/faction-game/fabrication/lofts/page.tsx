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
        Thousands of homes arranged on catwalks and platforms above the main
        factory floor. Difficult to tell what was original construction and what
        has been added over the generations. There are warm patches and a level
        of security, but the proximity to the upper beast lanes is worth
        wondering about.
      </TypographyP>
      <TypographyH2>Factions</TypographyH2>
      <div className="my-4 flex flex-col gap-2">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div>
                <TypographyH3>Theta</TypographyH3>
                <span className="text-muted-foreground">
                  <b>Tier II</b>, <i>The Crew</i>
                </span>
              </div>
              <div></div>
            </div>
          </CardHeader>
          <CardContent>
            <TypographyP>
              A small handfull of fledgeling rebels and the community they've
              built around them. No strict hierarchy, though the core team of
              active rebels are given deference by the rest.
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
                <b className="mr-1">Allies:</b> Minamo's Brood
              </li>
              <li>
                <b>Enemies:</b> Dominion, Youngers
              </li>
              <li>
                <b>Situation:</b> The Lair is rebuilt, allies gathered, enemies
                scattered, and the workers of Fabrication are looking to Theta
                for all the answers
              </li>
              <li>
                <b className="mr-1">Faction Clocks:</b> Daring missions [1],
                Shade's Projects [X], Scaffold's Projects [Y]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Shrikes</TypographyH3>
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
              Band of ravenous crow shifters who have remained aloof from the
              conflicts in Fabrication so far. No clear hierarcy other than
              their leader Amalina.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b className="mr-1">Turf:</b> Bell's Chute, an expansive
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
                <b className="mr-1">Enemies:</b> Raftertown
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
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Congregation of the Well God</TypographyH3>
              <span className="text-muted-foreground">
                <b>Tier 0</b>, <i>Unconcious</i>
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
                <b>Materials:</b> <b>0</b> = <i>None</i>
              </span>
              <span className="text-muted-foreground">
                <b>Water:</b> <b>1</b> = <i>Scarce</i>
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <TypographyP>
              Residents across all of Fabrication's neighborhoods who spend
              their hours between shifts in prayer under Sire Cyber's wing.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b className="mr-1">Turf:</b> Well God's Altar and Sire Cyber's
                perch
              </li>
              <li>
                <b>Population:</b> ~100.{" "}
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
                <b className="mr-1">Situation:</b> His first ritual completed,
                Sire Ciber seeks oracular guidance from his god once more.
              </li>
              <li>
                <b>Faction Clocks:</b> sermon [1], proselytize [3], ritual [6]
              </li>
            </TypographyUnorderedList>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <TypographyH3>Raftertown</TypographyH3>
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
              Disorganized residents of the upper north side.
            </TypographyP>
            <TypographyUnorderedList>
              <li>
                <b>Turf:</b> precarious rafters and beams spanned by stacked
                scrap
              </li>
              <li>
                <b>Population:</b> ~1900.{" "}
                <i>
                  95% worker, 20% thinblooded shifter, 17% Cumerian, 5% enforcer
                </i>
              </li>
              <li>
                <b>NPCs:</b> <b>Luys</b>{" "}
                <i>(posing as an enforcer, somehow elected leader, stressed)</i>
                , <b>Elisaweta</b>{" "}
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
                down and stay out of the factory's conflicts.
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
