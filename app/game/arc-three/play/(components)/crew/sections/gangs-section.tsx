import { TypographyH2 } from "@/components/ui/typography";
import { GangEntry, useGangs } from "@/contexts/arc3CrewSheetContext";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Clock from "@/components/clock";
import { Edit, Trash } from "lucide-react";
import { cn } from "@/lib/utils";
import AddGangDialog from "../dialogs/add-gang-dialog";

export default function GangsSection() {
  const { gangs, removeGang } = useGangs();
  const [editingGang, setEditingGang] = useState<GangEntry | null>(null);

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Gangs
      </TypographyH2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Traits</TableHead>
            <TableHead>Toughness</TableHead>
            <TableHead>Upgrade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gangs.map((gang) => (
            <ContextMenu key={gang.id}>
              <ContextMenuTrigger asChild>
                <TableRow className="text-xs align-top">
                  <TableCell className="whitespace-nowrap font-medium">
                    {gang.name}
                  </TableCell>
                  <TableCell className="w-full">
                    <div className="flex flex-wrap gap-1">
                      {gang.traits.map((trait) => (
                        <Tooltip key={trait.name}>
                          <TooltipTrigger asChild>
                            <span
                              className={cn(
                                "cursor-default rounded border px-1.5 py-0.5 text-[10px] font-medium leading-tight",
                                trait.tag === "positive"
                                  ? "border-green-500/40 text-green-600 dark:text-green-400"
                                  : "border-red-500/40 text-red-600 dark:text-red-400",
                              )}
                            >
                              {trait.name}
                            </span>
                          </TooltipTrigger>
                          {trait.description && (
                            <TooltipContent
                              side="top"
                              className="max-w-50 text-xs"
                            >
                              {trait.description}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Clock
                      clickable={false}
                      max={gang.toughness.max}
                      current={gang.toughness.current}
                      width={24}
                      height={24}
                    />
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Clock
                      clickable={false}
                      max={gang.ticks}
                      current={0}
                      width={24}
                      height={24}
                    />
                  </TableCell>
                </TableRow>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem onClick={() => setEditingGang(gang)}>
                  <Edit /> Edit
                </ContextMenuItem>
                <ContextMenuItem
                  className="bg-destructive"
                  onClick={() => removeGang(gang.id)}
                >
                  <Trash className="text-destructive-foreground" /> Remove
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </TableBody>
      </Table>
      <AddGangDialog />
      {editingGang && (
        <AddGangDialog
          gang={editingGang}
          open={true}
          onOpenChange={(open) => {
            if (!open) setEditingGang(null);
          }}
        />
      )}
    </>
  );
}
