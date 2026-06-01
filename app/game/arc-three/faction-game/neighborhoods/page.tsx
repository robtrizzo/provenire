import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Neighborhoods</TypographyH1>
      <TypographyH2>Lofts</TypographyH2>
      <TypographyP>
        Thousands of homes arranged on catwalks and platforms above the main
        factory floor. Difficult to tell what was original construction and what
        has been added over the generations. There are warm patches and a level
        of security, but the proximity to the upper beast lanes is worth
        wondering about.
      </TypographyP>
      <TypographyP>
        <u>
          <b>Landmarks</b>
        </u>
      </TypographyP>
      <TypographyP>
        <b>Southside.</b> An area more sheltered from the <b>Shrikes</b>, and
        right above the furnace vents, so it&apos;s a bit warmer. Protected by
        metal gates and a consistent patrol.
      </TypographyP>
      <TypographyP>
        <b>Bell&apos;s Chute.</b> An expansive cyllindrical opening in the
        rafters that extends far past where the eye can see. Presumably where
        Amalina and her flock lives.
      </TypographyP>
      <Link href="neighborhoods/lofts">
        <TypographyP>
          <b className="text-red-500">
            <u>Factions</u> <ChevronRight className="inline-block" />
          </b>
        </TypographyP>
      </Link>
      <TypographyH2>The Bends</TypographyH2>
      <TypographyP>
        A neighborhood built on top of a factory beam that got bent to a near
        right angle at some point in the past. Some elders still debate wheter
        it was an overseer or manufacturing defect that caused it. Regardless of
        the truth, it&apos;s now a community landmark.{" "}
        <i>Rub the bend for good luck.</i>.
      </TypographyP>
      <TypographyP>
        <u>
          <b>Landmarks</b>
        </u>
      </TypographyP>
      <TypographyP>
        <b>Kent&apos;s Watering Hole.</b> A social house older than grime and
        set up around a machine that makes miscelanous beverages. If that&apos;s
        what you can call the sludge it pumps out some days.
      </TypographyP>
      <TypographyP>
        <b>Tarpit.</b> A generation back it was a thriving neighborhood full of
        life. Some kind of incident burnt the residents alive and now it&apos;s
        encased in still-smoldering tar.
      </TypographyP>
      <Link href="neighborhoods/the-bends">
        <TypographyP>
          <b className="text-red-500">
            <u>Factions</u> <ChevronRight className="inline-block" />
          </b>
        </TypographyP>
      </Link>
      <TypographyH2>Fab Floor</TypographyH2>
      <TypographyP>
        Houses stacked on each other between the machines. Always a risky
        proposition because of the factory&apos;s fickleness. This is where the
        work gets done. Where hands get stained with oil and blood.
      </TypographyP>
      <TypographyP>
        <u>
          <b>Landmarks</b>
        </u>
      </TypographyP>
      <TypographyP>
        <b>Loading Bay</b>. The destination for everything produced in
        Fabrication. A confusing tangle of shelves, compartments, and vats. On
        delivery days, the workers anxiously crowd the closed blast doors. When
        they open again, all the materials are gone and a palatte of food is in
        its place.
      </TypographyP>
      <TypographyP>
        <b>Tara</b>. An immense machine at the center of Fabrication which is
        also the floor itself for a decent swath of the area. Tara is
        notoriously tempermental and requires offerings to keep her happy.
      </TypographyP>
      <Link href="neighborhoods/fab-floor">
        <TypographyP>
          <b className="text-red-500">
            <u>Factions</u> <ChevronRight className="inline-block" />
          </b>
        </TypographyP>
      </Link>
      <TypographyH2>Stairwell</TypographyH2>
      <TypographyP>
        Seventy two flights of stairs from Fab to the Pits. Every corner you
        turn on the stairs has you passing through someone&apos;s home. Chains,
        ladders, and ramshackle platforms decorate the vertical neighborhood.
        Dozens of side-entrances and labyrinthine pipeways lead from Stairwell
        to all sorts of places.
      </TypographyP>
      <TypographyP>
        <u>
          <b>Landmarks</b>
        </u>
      </TypographyP>
      <TypographyP>
        <b>Sevenway.</b> A seven way intersection of pipeways large enough to
        house the closest thing Fabrication has to a market. If anything has
        gone missing, odds are it ends up here.
      </TypographyP>
      <TypographyP>
        <b>The Pits.</b> A colloseum made of twisted pipes and small viewports
        from all directions. The terrain is uneven with a variety of scorching
        hot and freezing cold pipes creating an interesting battlefield that
        changes a bit every time the machines decide to shift.
      </TypographyP>
      <Link href="neighborhoods/stairwell">
        <TypographyP>
          <b className="text-red-500">
            <u>Factions</u> <ChevronRight className="inline-block" />
          </b>
        </TypographyP>
      </Link>
    </>
  );
}
