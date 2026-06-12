import { useCrewSheet } from "@/contexts/arc3CrewSheetContext";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

export default function StatusIndicator() {
  const { isLoading, isSaving, error } = useCrewSheet();
  if (!isLoading && !isSaving && !error) return null;
  return (
    <div className="absolute top-1 left-1 flex items-center gap-2 mb-4 flex-wrap">
      {isLoading && (
        <Badge variant="secondary">
          <Loader2 className="size-3 animate-spin mr-1" />
          Loading
        </Badge>
      )}
      {isSaving && (
        <Badge variant="secondary">
          <Loader2 className="size-3 animate-spin mr-1" />
          Saving
        </Badge>
      )}
      {error && <Badge variant="destructive">{error}</Badge>}
    </div>
  );
}
