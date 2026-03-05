import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1 } from "@/components/ui/typography";
import Skillsets from "./(components)/Skillsets";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Skillsets</TypographyH1>
      <div className="mt-8">
        <Skillsets />
      </div>
    </>
  );
}
