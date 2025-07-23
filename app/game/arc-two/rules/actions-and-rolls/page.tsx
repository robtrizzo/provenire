import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Actions and Rolls</TypographyH1>
      <TypographyH2 id="project-rolls">Project Rolls</TypographyH2>
      <TypographyP>
        During the <b>Prelude</b> and <b>Churn</b>, there are many types of
        projects which the characters can undertake. Those projects are
        represented by a <b>clock</b> set by the rules or the <b>Narrator</b>.
        Before rolling for a project, the player decides the approach they want
        to take to pursue it. The <b>Narrator</b> then sets the effect and the
        player rolls. The effect and roll together determines how much progress
        is made on the clock. Consequences of failure depend on the posistion as
        normal.
      </TypographyP>
      <Table>
        <TableCaption>project roll results</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16 border-r-slate-800 border-r-[1px]">
              Roll
            </TableHead>
            <TableHead className="w-20">Limited Effect</TableHead>
            <TableHead className="w-20">Standard Effect</TableHead>
            <TableHead className="w-20">Great Effect</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              1-3
            </TableCell>
            <TableCell className="w-20">0</TableCell>
            <TableCell className="w-20">1</TableCell>
            <TableCell className="w-20">1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              4,5
            </TableCell>
            <TableCell className="w-20">1</TableCell>
            <TableCell className="w-20">2</TableCell>
            <TableCell className="w-20">3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              6
            </TableCell>
            <TableCell className="w-20">2</TableCell>
            <TableCell className="w-20">3</TableCell>
            <TableCell className="w-20">5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              Critical
            </TableCell>
            <TableCell className="w-20">3</TableCell>
            <TableCell className="w-20">5</TableCell>
            <TableCell className="w-20">7</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
