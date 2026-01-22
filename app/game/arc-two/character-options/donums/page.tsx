import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1, TypographyH4 } from "@/components/ui/typography";
import ConditionalLink from "@/components/ui/conditional-link";
export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Donums</TypographyH1>
      <ConditionalLink
        perm="donum-aquae"
        href="/game/arc-two/character-options/donums/donum-aquae"
      >
        <TypographyH4>Donum Aquae</TypographyH4>
      </ConditionalLink>
    </>
  );
}
