import Breadcrumbs from "@/components/ui/breadcrumbs";
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
      <TypographyH1>Prelude</TypographyH1>
      <TypographyH2>Free Play</TypographyH2>
      <TypographyH2>Sitrep</TypographyH2>
      <TypographyH2>Mission Prep</TypographyH2>
      <TypographyH3>Gather Information</TypographyH3>
      <TypographyP>
        research - reveal dimensions/options for engagement, lore, snoop
      </TypographyP>
      <TypographyH3>Go Under the Knife</TypographyH3>
      <TypographyP>heal, genmods, cyberware</TypographyP>
      <TypographyH3>Project</TypographyH3>
      <TypographyP>anything not encompassed by these others</TypographyP>
      <TypographyH3>Psyche Extraction</TypographyH3>
      <TypographyP>
        mind becomes plastic. swap codexes or sleeves, comfort
      </TypographyP>
      <TypographyH3>Train</TypographyH3>
      <TypographyP>spend xp clocks</TypographyP>
      <TypographyH3>Work</TypographyH3>
      <TypographyP>extra work for Cytech, get some money</TypographyP>
      <TypographyH2>Engagement Roll</TypographyH2>
      <TypographyH3>Approach</TypographyH3>
      <TypographyP>lorem ipsum</TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>Cautious</b>
        </li>
        <li>
          <b>Flashy</b>
        </li>
      </TypographyUnorderedList>
    </>
  );
}
