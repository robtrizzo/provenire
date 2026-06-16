import { TypographyH2 } from "@/components/ui/typography";
import { ExpertEntry, useExperts } from "@/contexts/arc3CrewSheetContext";
import AddExpertDialog from "../dialogs/add-expert-dialog";
import { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Edit, Trash } from "lucide-react";

export default function ExpertsSection() {
  const { experts, removeExpert } = useExperts();
  const [editingExpert, setEditingExpert] = useState<ExpertEntry | null>(null);

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Experts
      </TypographyH2>
      <div className="p-2 flex flex-col gap-2">
        {experts.map((e) => (
          <ContextMenu key={e.id}>
            <ContextMenuTrigger asChild>
              <span className="hover:bg-accent rounded-md px-2 py-0.5">
                {e.name}:{" "}
                <i className="text-muted-foreground">{e.traits.join(", ")}</i>
              </span>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem onClick={() => setEditingExpert(e)}>
                <Edit /> Edit
              </ContextMenuItem>
              <ContextMenuItem
                className="bg-destructive"
                onClick={() => removeExpert(e.id)}
              >
                <Trash className="text-destructive-foreground" /> Remove
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        ))}
      </div>
      <AddExpertDialog />
      {editingExpert && (
        <AddExpertDialog
          expert={editingExpert}
          open={true}
          onOpenChange={(open) => {
            if (!open) setEditingExpert(null);
          }}
        />
      )}
    </>
  );
}
