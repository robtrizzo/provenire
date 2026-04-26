import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1 } from "@/components/ui/typography";
import FightingStyles from "./(components)/fightingStyles";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Fighting Styles</TypographyH1>
      <div className="mt-8">
        <FightingStyles />
      </div>
    </>
  );
}
