import { Button } from "@/components/ui/button";
import { Loader2, Trash2 } from "lucide-react";
import {
  useCharacterSheet,
  useField,
} from "@/contexts/arc3CharacterSheetContext";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { CharacterV3 } from "@/types/game";
import ClockCost from "@/components/clock-cost";
import { formatRelativeTime } from "@/lib/date";

type LoadableCharacter = CharacterV3 & {
  cloudUpdatedAt?: string;
  heritage?: { name: string };
  archetype?: { name: string };
  background?: { name: string };
  skillset?: { name: string };
  xpSpent?: number;
  stress?: number;
  currentConditions?: string[];
  portrait?: string;
};

export default function LoadCharacterDialog({
  open,
  onOpenChange,
}: DialogProps) {
  const { loadCharacter } = useCharacterSheet();
  const [currentId] = useField("id");
  const [selected, setSelected] = useState<string | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters", "arc3"],
    queryFn: async () => {
      const res = await fetch("/api/characters/arc3");
      if (!res.ok) throw new Error("Failed to fetch");
      const { characters } = await res.json();
      return characters as LoadableCharacter[];
    },
    enabled: open,
  });

  const sorted = data
    ? [...data].sort((a, b) => {
        const aTs = a.cloudUpdatedAt ? new Date(a.cloudUpdatedAt).getTime() : 0;
        const bTs = b.cloudUpdatedAt ? new Date(b.cloudUpdatedAt).getTime() : 0;
        return bTs - aTs;
      })
    : [];

  const handleLoad = () => {
    const character = data?.find((c) => c.id === selected);
    if (!character) return;
    loadCharacter(JSON.stringify(character));
    onOpenChange(false);
  };

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/characters/arc3/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["characters", "arc3"] });
      if (selected === deleteId) setSelected(null);
      setDeleteId(null);
    },
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Load Character</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Load a saved character. You will lose unsaved changes.
        </DialogDescription>

        <div className="flex flex-col gap-2 max-h-72 overflow-y-auto pr-1">
          {isLoading &&
            Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-16 w-full rounded-lg" />
            ))}

          {isError && (
            <p className="text-sm text-destructive text-center py-6">
              Failed to load characters.
            </p>
          )}

          {!isLoading && !isError && sorted.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-6">
              No saved characters found.
            </p>
          )}

          {sorted.map((character) => {
            const isActive = character.id === currentId;
            const isSelected = character.id === selected;
            const subtitleParts = [
              { label: character.heritage?.name, className: "text-sky-500" },
              {
                label: character.archetype?.name,
                className: "text-amber-500",
              },
              {
                label: character.background?.name,
                className: "text-red-500",
              },
              {
                label: character.skillset?.name,
                className: "text-violet-500",
              },
            ].filter((p) => p.label);
            const timestamp = character.cloudUpdatedAt
              ? formatRelativeTime(character.cloudUpdatedAt)
              : null;

            return (
              <div
                key={character.id}
                onClick={() => setSelected(character.id)}
                className={cn(
                  "relative flex flex-col overflow-hidden min-h-24 rounded-lg border text-left transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  isSelected &&
                    "border-primary bg-accent text-accent-foreground",
                  isActive && "border-dashed",
                )}
              >
                {character.portrait && (
                  <div
                    className="absolute inset-y-0 right-0 w-28 bg-cover bg-right pointer-events-none opacity-70"
                    style={{
                      backgroundImage: `url(${character.portrait})`,
                      maskImage:
                        "linear-gradient(to right, transparent, black)",
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent, black)",
                    }}
                  />
                )}
                <div className="relative z-10 flex flex-col gap-1 px-4 py-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold truncate">
                      {character.name || "Unnamed Character"}
                    </span>
                    <div className="flex items-center gap-1 shrink-0">
                      {isActive && (
                        <span className="text-xs italic">current</span>
                      )}
                      <Button
                        onClick={(e) => {
                          setTimeout(() => {
                            e.stopPropagation();
                            setDeleteId(character.id);
                          }, 0);
                        }}
                        variant="ghost"
                        disabled={
                          deleteMutation.isPending && deleteId === character.id
                        }
                        className="p-0.5 h-6 rounded hover:text-destructive hover:bg-background"
                      >
                        {deleteMutation.isPending &&
                        deleteId === character.id ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        ) : (
                          <Trash2 className="h-3.5 w-3.5" />
                        )}
                      </Button>
                    </div>
                  </div>
                  {subtitleParts.length > 0 && (
                    <div className="flex gap-1.5 text-xs">
                      {subtitleParts.map((part, i) => (
                        <span key={i} className={part.className}>
                          {part.label}
                          {i < subtitleParts.length - 1 && (
                            <span className="text-muted-foreground ml-1.5">
                              ·
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-3 mt-0.5">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <ClockCost
                        num={character.xpSpent ?? 0}
                        ticks={5}
                        r={20}
                      />
                      <span>XP Clocks Spent</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span>{character.stress ?? 0} stress</span>
                    </div>
                    {(character.currentConditions?.length ?? 0) > 0 && (
                      <span className="text-xs text-muted-foreground">
                        {character.currentConditions!.length} condition
                        {character.currentConditions!.length !== 1 ? "s" : ""}
                      </span>
                    )}
                    {timestamp && (
                      <span className="ml-auto text-xs">saved {timestamp}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button onClick={handleLoad} disabled={!selected}>
            Load
          </Button>
        </DialogFooter>
        <AlertDialog
          open={!!deleteId}
          onOpenChange={(o) => !o && setDeleteId(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete character?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              This will permanently delete this character from the cloud. This
              cannot be undone.
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => deleteId && deleteMutation.mutate(deleteId)}
                disabled={deleteMutation.isPending}
              >
                {deleteMutation.isPending ? "Deleting..." : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DialogContent>
    </Dialog>
  );
}
