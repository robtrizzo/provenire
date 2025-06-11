import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TypographyH1, TypographyP } from "@/components/ui/typography";

const wikiData = {
  title: "Excerpts from the Root Wiki",
  elements: [
    {
      title: "Category",
      value: "City",
    },
    {
      title: "Etymology",
      value: "Rathi",
    },
    {
      title: "Nicknames",
      value:
        "The City of Dreams, The City of Beasts, The City of Eternal Night",
    },
    {
      title: "Etymology",
      value: "Rathi",
    },
    {
      title: "Founded",
      value: "Midsummer 21st, 409 P.S.",
    },
    {
      title: "Founded by",
      value: "Thanewulf II",
    },
    {
      title: "Government",
      value: "Executive Mayor",
    },
    {
      title: "Mayor",
      value: "Dalgraf",
    },
    {
      title: "Area",
      value: "162.73 sq mi",
    },
    {
      title: "Population",
      value: "3.84 million (1056 P.S.)",
    },
  ],
};

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Game", href: "/game" },
          { name: "Arc Two", href: "/game/arc-two" },
          { name: "Setting", href: "#" },
          { name: "Feasting", href: "#" },
        ]}
      />
      <TypographyH1 className="font-cyber">Feasting</TypographyH1>
      <span className="font-cyber text-muted-foreground">
        the City of Dreams, the City of Beasts, the City of Eternal Night
      </span>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <TypographyP>test</TypographyP>
        <WikiCard
          title={wikiData.title}
          elements={wikiData.elements.map((el) => ({
            name: el.title,
            value: el.value,
          }))}
        />
      </div>
    </>
  );
}

function WikiCard({
  title,
  elements,
}: {
  title: string;
  elements: { name: string; value: string }[];
}) {
  return (
    <code>
      <Card className="rounded-none">
        <span className="text-xl font-bold text-center">{title}</span>
        <Separator />
        {elements.map((element) => (
          <div key={element.name} className="mx-6 grid grid-cols-2">
            <b>{element.name}</b>
            <span>{element.value}</span>
          </div>
        ))}
      </Card>
    </code>
  );
}
