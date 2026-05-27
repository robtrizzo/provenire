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
      <TypographyH1>Stairwell</TypographyH1>
      <TypographyP>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, vitae
        quia sequi architecto vel nulla. Aspernatur earum suscipit qui vel,
        dolorem aperiam asperiores quaerat? Quae at eaque dolores labore itaque.
      </TypographyP>
      <TypographyH2>Factions</TypographyH2>
      <div className="my-4 flex flex-col gap-2">
        <Card>
          <CardHeader>
            <TypographyH3>The Youngers</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier I</b>, <i>Reformist</i>
            </span>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TypographyH3>Wolfden</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier I</b>, <i>Backwards</i>
            </span>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TypographyH3>Pipeways</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier I</b>, <i>Unconcious</i>
            </span>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TypographyH3>Industry Alley</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier I</b>, <i>Reformist</i>
            </span>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TypographyH3>Pits</TypographyH3>
            <span className="text-muted-foreground">
              <b>Tier II</b>, <i>Unconcious</i>
            </span>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </>
  );
}
