import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1 } from "@/components/ui/typography";
import aldams from "@/public/arc3/aldams.json";
import Aldam from "../(components)/aldam";

const innerRhythm = aldams.find((a) => a.name === "Inner Rhythm");

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Inner Rhythm</TypographyH1>
      {innerRhythm?.abilities.map((a, idx) => (
        <Aldam aldamSlug="inner-rhythm" ability={a} key={idx} />
      ))}
    </>
  );
}
