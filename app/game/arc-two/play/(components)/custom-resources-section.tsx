import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import CustomResource from "@/components/character-sheet/custom-resource";
export default function CustomResources() {
  const {
    selectedOperative,
    customResourceValues,
    handleUpdateCustomResource,
  } = useCharacterSheet();

  return selectedOperative?.customResources?.map((r, i) => (
    <CustomResource
      key={r.id + i}
      resource={r}
      value={customResourceValues.get(r.id)}
      onUpdate={(value) => handleUpdateCustomResource(r.id, value)}
    />
  ));
}
