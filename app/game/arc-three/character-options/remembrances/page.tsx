import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1, TypographyP } from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Remembrances</TypographyH1>
      <TypographyP>
        These options will determine the manner of integration with the memories
        your character experienced in the <i>Crucibles</i>.
      </TypographyP>
    </>
  );
}
