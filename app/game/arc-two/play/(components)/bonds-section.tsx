import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import {
  Dices,
  FileHeart,
  HeartOff,
  HeartPlus,
  PanelLeftClose,
  PanelRightClose,
  Plus,
} from "lucide-react";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import { BondV2 } from "@/types/game";
import { ActionScore } from "@/components/action-score";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRoll } from "@/contexts/arc2RollContext";

export default function BondsSection() {
  const { bonds, setBonds, setChanges } = useCharacterSheet();

  const handleAddNewBond = () => {
    const newBond: BondV2 = {
      name: "new bond",
      notes: "",
      score: [1, 0],
      advanced: false,
    };
    setBonds([...bonds, newBond]);
    setChanges(true);
  };

  const handleUpdateBond = (idx: number) => (updatedBond: BondV2) => {
    if (idx < 0 || idx > bonds.length) return;
    const bondsCopy = [...bonds];
    bondsCopy[idx] = updatedBond;
    setBonds(bondsCopy);
    setChanges(true);
  };

  const handleRemoveBond = (idx: number) => () => {
    if (idx < 0 || idx > bonds.length) return;
    const bondsCopy = [...bonds];
    bondsCopy.splice(idx, 1);
    setBonds(bondsCopy);
    setChanges(true);
  };

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Bonds
      </TypographyH2>
      {bonds.map((b, i) => (
        <BondWidget
          key={b.name + i}
          bond={b}
          handleUpdateBond={handleUpdateBond(i)}
          handleRemoveBond={handleRemoveBond(i)}
        />
      ))}
      <Button
        size="sm"
        variant="outline"
        onClick={handleAddNewBond}
        className="mt-1"
      >
        <HeartPlus /> add new bond
      </Button>
    </>
  );
}

function BondWidget({
  bond,
  handleUpdateBond,
  handleRemoveBond,
}: {
  bond: BondV2;
  handleUpdateBond: (updatedBond: BondV2) => void;
  handleRemoveBond: () => void;
}) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const {
    rollLeft,
    rollRight,
    setRollLeft,
    setRollRight,
    bonusDiceBlue,
    bonusDiceRed,
    setBonusDiceBlue,
    setBonusDiceRed,
  } = useRoll();

  const handleToggleBondAdvanced = () => {
    handleUpdateBond({ ...bond, advanced: !bond.advanced });
  };
  const handleEditBondSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const notes = formData.get("notes") as string;

    const updatedBond: BondV2 = {
      ...bond,
      name: name || bond.name,
      notes: notes || bond.notes,
    };

    handleUpdateBond(updatedBond);
    setDialogOpen(false);
  };

  const handleSetBondLeft = () => {
    if (rollRight?.name === bond.name) {
      setRollRight(undefined);
    }
    setRollLeft(bond);
  };

  const handleSetBondRight = () => {
    if (rollLeft?.name === bond.name) {
      setRollLeft(undefined);
    }
    setRollRight(bond);
  };

  const handleBondAddBonusDice = () => {
    setBonusDiceRed(bonusDiceRed + bond.score.filter((s) => s === 1).length);
    setBonusDiceBlue(bonusDiceBlue + bond.score.filter((s) => s === 2).length);
  };

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div
            className="p-2 grid grid-cols-8 gap-2 hover:bg-input/50"
            onClick={() => {
              if (rollLeft === undefined) {
                handleSetBondLeft();
              } else if (rollRight === undefined) {
                handleSetBondRight();
              }
            }}
          >
            <div className="flex items-center gap-4 col-span-6">
              <span className="text-lg shrink-0">{bond.name}</span>
              <span className="text-sm text-muted-foreground truncate">
                {bond.notes}
              </span>
            </div>
            <ActionScore
              score={bond.score}
              onChange={(newScore) => {
                handleUpdateBond({
                  ...bond,
                  score: newScore as [number, number],
                });
              }}
              className="col-span-1"
            />
            <Tooltip>
              <TooltipTrigger asChild>
                <Checkbox
                  checked={bond.advanced}
                  className="col-span-1 mx-auto my-auto"
                  onCheckedChange={handleToggleBondAdvanced}
                />
              </TooltipTrigger>
              <TooltipContent>advance</TooltipContent>
            </Tooltip>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>
            <Dices /> Roll
          </ContextMenuItem>
          <ContextMenuItem onClick={handleSetBondLeft}>
            <PanelLeftClose /> Set Roll Left
          </ContextMenuItem>
          <ContextMenuItem onClick={handleSetBondRight}>
            <PanelRightClose /> Set Roll Right
          </ContextMenuItem>
          <ContextMenuItem onClick={handleBondAddBonusDice}>
            <Plus /> Add as bonus dice
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem
            onClick={() => setTimeout(() => setDialogOpen(true), 100)} // if context menu doesn't close first, it can lead to a frozen state
          >
            <FileHeart /> Edit bond
          </ContextMenuItem>

          <ContextMenuSeparator />
          <ContextMenuItem
            className="bg-destructive text-destructive-foreground"
            onClick={handleRemoveBond}
          >
            <HeartOff /> Remove
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <Dialog open={dialogOpen} onOpenChange={(op) => setDialogOpen(op)}>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleEditBondSubmit}>
            <DialogHeader>
              <DialogTitle>Edit bond</DialogTitle>
              <DialogDescription>
                Make changes to your bond here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" defaultValue={bond.name} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  defaultValue={bond.notes}
                  placeholder="add your notes here..."
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
