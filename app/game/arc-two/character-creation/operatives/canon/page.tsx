import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1 } from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Game", href: "/game" },
          { name: "Arc Two", href: "/game/arc-two" },
          {
            name: "Character Creation",
            href: "/game/arc-two/character-creation",
          },
          {
            name: "Operatives",
            href: "/game/arc-two/character-creation/operatives",
          },
          { name: "Canon", href: "#" },
        ]}
      />
      <TypographyH1>Canon</TypographyH1>
    </>
  );
}
