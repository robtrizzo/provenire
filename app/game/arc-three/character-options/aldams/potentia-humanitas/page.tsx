import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1 } from "@/components/ui/typography";
import aldams from "@/public/arc3/aldams.json";
import Aldam from "../(components)/aldam";

const potentiaHumanitas = aldams.find((a) => a.name === "Potentia Humanitas");

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Potentia Humanitas</TypographyH1>
      {potentiaHumanitas?.abilities.map((a, idx) => (
        <Aldam aldamSlug="potentia-humanitas" ability={a} key={idx} />
      ))}
    </>
  );
}
