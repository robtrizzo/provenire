import {
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import FactoryMap from "@/components/factory-map";

export default function Explore() {
  return (
    <>
      <TypographyH3>Explore the factory&apos;s heights and depths</TypographyH3>
      <TypographyP>
        During The Churn, the crew are scouting and exploring the inaccessible
        and secret pathways of the Steel Trap. The crew can discover secret
        routes from one area to the next, giving the crew access to new regions
        of the factory.
      </TypographyP>
      <TypographyP>
        Regions that are connected by pathways and passages (marked with a solid
        line) require a project clock of 5 to discover secret pathways between
        them. Regions not connected by conventional pathways require more time,
        marked individually on the map.
      </TypographyP>
      <TypographyP>
        Each region has a unique contact (<b>5-clock</b>), danger (
        <b>3-clock</b>), and special feature (<b>3-clock</b>). Once a region is
        ulocked, the crew can explore it to uncover these details. The crew can
        start project clocks to do so.
      </TypographyP>
      <TypographyH4>Regions</TypographyH4>
      <div className="max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-290px)] overflow-auto">
        <FactoryMap />
      </div>
    </>
  );
}
