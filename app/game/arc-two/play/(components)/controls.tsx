import SaveCharacter from "@/components/character-sheet/save-character";
import LoadCharacter from "@/components/character-sheet/load-character";
import ClearCharacter from "@/components/character-sheet/clear-character";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";

export default function Controls() {
  const {
    name,
    localUpdatedAt,
    cloudUpdatedAt,
    isFetching,
    isSaving,
    setChanges,
    setCharacterLoaded,
    clearCharacter,
    compatibleVersions,
  } = useCharacterSheet();

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 mt-5 ml-auto">
          <div className="flex flex-col">
            <code className="text-xs text-muted-foreground">
              last <span className="text-amber-800">local</span> save:{" "}
              {localUpdatedAt
                ? new Date(localUpdatedAt).toLocaleString()
                : "N/A"}
            </code>
            <code className="text-xs text-muted-foreground">
              last <span className="text-sky-800">cloud</span> save:{" "}
              {isSaving
                ? "saving..."
                : isFetching
                ? "fetching..."
                : cloudUpdatedAt
                ? new Date(cloudUpdatedAt).toLocaleString()
                : "N/A"}
            </code>
          </div>
          <SaveCharacter initialName={name} lsKey="charsheet-arc2" />
          <LoadCharacter
            onLoad={setCharacterLoaded}
            compatibleVersions={compatibleVersions}
            lsKey="charsheet-arc2"
          />
          <ClearCharacter
            onClear={() => {
              clearCharacter();
              setChanges(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
