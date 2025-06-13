import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import ExpandableImage from "@/components/ui/expandable-image";
import { Separator } from "@/components/ui/separator";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";

const wikiData = {
  title: "Excerpts from the Root Wiki",
  img: "/era3/arc2/map.png",
  elements: [
    {
      title: "Name",
      value: "Feasting",
    },
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
        <div>
          <TypographyBlockquote>
            Kingwulf is great, even if just for this: this city, this monument
            to humanity and empire. - Mayor Dalgraf
          </TypographyBlockquote>
          <TypographyP>
            Feasting is a vast city of sprawling industry, tightly packed
            residential districts, and corporate plazas scraping the starry
            heavens.
          </TypographyP>
          <TypographyP>
            The city streets thrum with the sounds of foot traffic and
            hovercraft soaring overhead. Corporate signs and holographic
            advertisements illuminate the perpetual night, casting a neon glow
            over the bustling metropolis.
          </TypographyP>
          <TypographyP>
            That foot traffic comes in all shapes and sizes. Beasts, bipeds, and
            all manner of body modifications create a tapestry of self
            expression.
          </TypographyP>
          <TypographyP>
            Other common sights in the streets are crime scenes, news media
            chasing down celebrities for interviews, and corpo suits shepherded
            through the crowd by their security teams.
          </TypographyP>
          <TypographyH2 className="font-cyber">Royal Star Plaza</TypographyH2>
          <span className="font-cyber text-muted-foreground text-xs">
            aka Starline or Central
          </span>
          <TypographyP>
            Corporate headquarters for a fistful of the city&apos;s most
            powerful orgs. Skyscrapers surrounded by luxury shopping centers,
            fine dining, and every which indulgence in opulence the executives
            and royalty could want. At its center is a memorial:{" "}
            <i>Spirit of the City</i>.
          </TypographyP>
          <TypographyH2 className="font-cyber">Summit Plaza</TypographyH2>
          <span className="font-cyber text-muted-foreground text-xs">
            aka Cloud9 or S-P
          </span>
          <TypographyP>
            Residences for the city&apos;s most powerful. Meticulously cleaned
            streets are patrolled by heavily armed beasts and vigilant
            hovercraft.
          </TypographyP>
          <TypographyH2 className="font-cyber">Redzone</TypographyH2>
          <span className="font-cyber text-muted-foreground text-xs">
            aka Red-bone-zone or Fucktown
          </span>
          <TypographyP>
            Enforcement free zone: it&apos;s the law of the jungle. Criminal
            syndicates and dynastic families rule these streets. Sometimes
            they&apos;re contested by punk rock gangs and neighborhood militias.
          </TypographyP>
          <TypographyP>
            Street vendors, chop shops, smut-huts, and bustling nightclubs.
            Living conditions are poor, but Redzone is the heartbeat of culture
            in Feasting.
          </TypographyP>
          <TypographyH2 className="font-cyber">Big Grid</TypographyH2>
          <span className="font-cyber text-muted-foreground text-xs">
            aka B-Griddy or Tube Town
          </span>
          <TypographyP>
            A massive industrial sprawl. Megafactories, warehouses, and rusty
            public transit. During shift transitions the streets are alive with
            workers commuting to and from their labors. During shifts, the
            streets are quiet and dark. A thousand tucked away alleys and
            corners the law would never think to look.
          </TypographyP>
          <TypographyH2 className="font-cyber">Darling</TypographyH2>
          <span className="font-cyber text-muted-foreground text-xs">
            aka the Clank or 1244
          </span>
          <TypographyP>
            Heavy scents of incense and a stark quiet compared to the rest of
            the city. Gone are the heavily modified sleeves, replaced by people
            and beasts in furs. Or sometimes wearing nothing at all. Many of the
            residents of Darling reject technology. Their lives are short, sick,
            and steeped in ritual.
          </TypographyP>
        </div>
        <WikiCard data={wikiData} />
      </div>
    </>
  );
}

function WikiCard({
  data,
}: {
  data: {
    title: string;
    img: string;
    elements: { title: string; value: string }[];
  };
}) {
  return (
    <code>
      <Card className="rounded-none max-w-[450px] ml-auto">
        <span className="text-xl font-bold text-center">{data.title}</span>
        <Separator />
        <div className="flex items-center justify-center">
          <ExpandableImage
            src={`${process.env.NEXT_PUBLIC_S3_BUCKET}${data.img}`}
            width={250}
            height={250}
            fullHeight={400}
            fullWidth={400}
            alt="wiki-image"
          />
        </div>
        <Separator />
        {data.elements.map((element, idx) => (
          <div key={element.title + idx} className="mx-6 grid grid-cols-2">
            <b>{element.title}</b>
            <span>{element.value}</span>
          </div>
        ))}
      </Card>
    </code>
  );
}
