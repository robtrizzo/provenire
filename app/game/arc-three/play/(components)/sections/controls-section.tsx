import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SaveCharacter from "../save-character";
import { Button } from "@/components/ui/button";
import {
  CloudBackup,
  CloudDownload,
  CloudUpload,
  Ellipsis,
  FileDown,
  FileUp,
  Plus,
} from "lucide-react";
import {
  LOCAL_STORAGE_KEY,
  useCharacterSheet,
  useFields,
} from "@/contexts/arc3CharacterSheetContext";
import { useState } from "react";
import LoadCharacterDialog from "../dialogs/load-character-dialog";
import NewCharacterDialog from "../dialogs/new-character-dialog";
import SaveAsCharacterDialog from "../dialogs/save-character-dialog";
import ImportCharacterDialog from "../dialogs/import-character.dialog";
import { saveCharacterToDevice } from "@/lib/utils";

export default function Controls() {
  const [newDialogOpen, setNewDialogOpen] = useState(false);
  const [saveAsDialogOpen, setSaveAsDialogOpen] = useState(false);
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [loadDialogOpen, setLoadDialogOpen] = useState(false);

  const [{ id, name }] = useFields();

  const {
    localUpdatedAt,
    cloudUpdatedAt,
    saved,
    isSaving,
    save,
    newCharacter,
  } = useCharacterSheet();

  const hasUnsavedChanges =
    localUpdatedAt && (!cloudUpdatedAt || localUpdatedAt > cloudUpdatedAt);

  return (
    <div className="flex gap-1">
      <SaveCharacter />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align="start">
          <DropdownMenuItem onSelect={save}>
            <CloudUpload />
            Save
            {hasUnsavedChanges && !saved && !isSaving && (
              <span className="h-2 w-2 mb-1 rounded-full bg-orange-400" />
            )}
            <code className="text-xs ml-auto text-muted-foreground">
              [{id}]
            </code>
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setTimeout(() => setSaveAsDialogOpen(true), 0)}
          >
            <CloudBackup />
            Save As
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setTimeout(() => setLoadDialogOpen(true), 0)}
          >
            <CloudDownload />
            Load
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => saveCharacterToDevice(LOCAL_STORAGE_KEY, name)}
          >
            <FileDown />
            Export
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setTimeout(() => setImportDialogOpen(true), 0)}
          >
            <FileUp />
            Import
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {/* setTimeout(..., 0) pushes the state update to after the
          current event cycle, giving Radix time to clean up the dropdown's
          scroll lock before the dialog's takes over. */}
          <DropdownMenuItem
            onSelect={() =>
              hasUnsavedChanges
                ? setTimeout(() => setNewDialogOpen(true), 0)
                : newCharacter()
            }
          >
            <Plus />
            New
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <NewCharacterDialog
        open={newDialogOpen}
        onOpenChange={setNewDialogOpen}
      />
      <SaveAsCharacterDialog
        open={saveAsDialogOpen}
        onOpenChange={setSaveAsDialogOpen}
      />
      <ImportCharacterDialog
        open={importDialogOpen}
        onOpenChange={setImportDialogOpen}
      />
      <LoadCharacterDialog
        open={loadDialogOpen}
        onOpenChange={setLoadDialogOpen}
      />
    </div>
  );
}
