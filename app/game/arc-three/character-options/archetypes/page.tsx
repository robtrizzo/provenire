import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import Archetypes from "./(components)/archetypes";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Archetypes</TypographyH1>
      <Archetypes />
    </>
  );
}
