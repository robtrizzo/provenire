import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Lofts</TypographyH1>
      <TypographyP>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        perspiciatis dignissimos quae, qui, doloribus dolor aut maiores
        provident quod commodi nobis iusto quia dolores nostrum fugiat
        voluptatibus voluptatum voluptate optio.
      </TypographyP>
      <TypographyH2>Factions</TypographyH2>
      <div className="my-4 flex flex-col gap-2">
        <Card>
          <CardHeader>
            <TypographyH3>Theta</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier II</b>, <i>The Crew</i>
            </span>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TypographyH3>Moore&apos;s Gang</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier II</b>, <i>Advanced</i>
            </span>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TypographyH3>Shrikes</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier II</b>, <i>Backwards</i>
            </span>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TypographyH3>Congregation of the Well God</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier I</b>, <i>Unconcious</i>
            </span>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TypographyH3>Raftertown</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier I</b>, <i>Unconcious</i>
            </span>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </>
  );
}
