import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1 } from "@/components/ui/typography";
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
