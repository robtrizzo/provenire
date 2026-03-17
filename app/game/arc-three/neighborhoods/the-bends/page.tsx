import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import { Dot } from "lucide-react";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>The Bends</TypographyH1>
      <TypographyP>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, vitae
        quia sequi architecto vel nulla. Aspernatur earum suscipit qui vel,
        dolorem aperiam asperiores quaerat? Quae at eaque dolores labore itaque.
      </TypographyP>
      <TypographyH2>Factions</TypographyH2>
      <div className="my-4 flex flex-col gap-2">
        <Card>
          <CardHeader>
            <TypographyH3>Southside Council</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier I</b>, <i>Sympathetic</i>
            </span>
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
          <CardHeader>
            <TypographyH3>Dominion</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier II</b>, <i>Backwards</i>
            </span>
          </CardHeader>
          <CardContent>
            <TypographyP>
              The dregs of Audo&apos;s Gorgers, conquered by Hrodulfr and beaten
              down by the <b>Delivery</b> riots. A strict Rathi hierarchy
              teeming with thickblooded and thinblooded shifters starving for
              their alpha&apos;s approval.
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
      </div>
    </>
  );
}
