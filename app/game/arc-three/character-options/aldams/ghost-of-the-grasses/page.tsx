import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1 } from "@/components/ui/typography";
import aldams from "@/public/arc3/aldams.json";
import Aldam from "../(components)/aldam";

const ghostOfTheGrasses = aldams.find((a) => a.name === "Ghost of the Grasses");

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Ghost of the Grasses</TypographyH1>
      {ghostOfTheGrasses?.abilities.map((a, idx) => (
        <Aldam aldamSlug="ghost-of-the-grasses" ability={a} key={idx} />
      ))}
    </>
  );
}
