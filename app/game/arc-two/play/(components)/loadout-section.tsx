import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import default_loadouts from "@/public/loadouts.json";
import { ItemV2 } from "@/types/game";
import ItemsTable from "./items-table";
export default function LoadoutSection() {
  const {
    loadout,
    setLoadout,
    setChanges,
    items,
    setItems,
    handleToggleItemSubscription,
  } = useCharacterSheet();

  const loadouts = default_loadouts;

  return (
    <>
      <div className="mt-6">
        <TypographyH3 className="text-sm text-muted-foreground">
          Loadout
        </TypographyH3>
      </div>
      {loadout && (
        <TypographyP className="text-sm text-muted-foreground">
          {loadout.desc}
        </TypographyP>
      )}
      <Separator className="mt-1 mb-2" />
      <div className="flex align-end justify-between flex-wrap">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={loadout?.name === "Discreet"}
            onCheckedChange={() => {
              setLoadout(loadouts[0]);
              setChanges(true);
            }}
          />{" "}
          Discreet
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={loadout?.name === "Conspicuous"}
            onCheckedChange={() => {
              setLoadout(loadouts[1]);
              setChanges(true);
            }}
          />{" "}
          Conspicuous
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={loadout?.name === "Bulky"}
            onCheckedChange={() => {
              setLoadout(loadouts[2]);
              setChanges(true);
            }}
          />{" "}
          Bulky
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={loadout?.name === "Encumbered"}
            onCheckedChange={() => {
              setLoadout(loadouts[3]);
              setChanges(true);
            }}
          />{" "}
          Encumbered
        </div>
      </div>
      <ItemsTable
        className="mt-4"
        items={items}
        loadout={loadout}
        handleToggleItemSubscription={handleToggleItemSubscription}
        handleAddItem={(item: ItemV2) => {
          if (!items || items.length === 0) {
            setItems([item]);
          } else {
            setItems([...items, item]);
          }
          setChanges(true);
        }}
        handleRemoveItem={(index: number) => {
          setItems(items.filter((_, i) => i !== index));
          setChanges(true);
        }}
        handleEditItem={(updatedItem: ItemV2, index: number) => {
          if (index < 0 || index > items.length - 1) {
            console.error(`Cannot edit item: index ${index} out of bounds`);
            return;
          }
          const itemsCopy = JSON.parse(JSON.stringify(items));
          itemsCopy[index] = updatedItem;
          setItems(itemsCopy);
          setChanges(true);
        }}
      />
    </>
  );
}
