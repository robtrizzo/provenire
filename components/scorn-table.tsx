import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ScornTable() {
  return (
    <Table>
      <TableCaption>scorn table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-16 border-r-slate-800 border-r-[1px]">
            Roll
          </TableHead>
          <TableHead className="w-20">1 Scorn</TableHead>
          <TableHead className="w-20">2 Scorn</TableHead>
          <TableHead className="w-20">3 Scorn</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
            1-3
          </TableCell>
          <TableCell className="w-20">Just a warning</TableCell>
          <TableCell className="w-20">Fed up (locked for 1 mission)</TableCell>
          <TableCell className="w-20">
            Prove you&apos;re sorry (sent to the pits)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
            4,5
          </TableCell>
          <TableCell className="w-20">Ominous message (+1 heat)</TableCell>
          <TableCell className="w-20">Teach a lesson (2-harm)</TableCell>
          <TableCell className="w-20">
            Stolen food (starvation clock +2)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
            6
          </TableCell>
          <TableCell className="w-20">
            Trashed living space (-1 downtime activity)
          </TableCell>
          <TableCell className="w-20">
            Scathing denouncement (disadvantage on entanglements roll)
          </TableCell>
          <TableCell className="w-20">Rat you out (overseer raid)</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
