import { useCrewSheet } from "@/contexts/arc3CrewSheetContext";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useMinDuration(active: boolean, minMs: number) {
  const [displayed, setDisplayed] = useState(active);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (active) {
      clearTimeout(timerRef.current);
      startRef.current = Date.now();
      setDisplayed(true);
    } else if (startRef.current !== null) {
      const remaining = minMs - (Date.now() - startRef.current);
      timerRef.current = setTimeout(
        () => {
          setDisplayed(false);
          startRef.current = null;
        },
        Math.max(0, remaining),
      );
    }
    return () => clearTimeout(timerRef.current);
  }, [active, minMs]);

  return displayed;
}

export default function StatusIndicator() {
  const { isLoading, isSaving, isConnected, error } = useCrewSheet();
  const showSaving = useMinDuration(isSaving, 1500);

  return (
    <div className="absolute top-1 left-1 h-6 flex items-center gap-2 mb-4 flex-wrap">
      {isConnected ? (
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-green-500/70" />
          <code className="text-xs text-green-500">Connected</code>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-red-500/70" />
          <code className="text-xs text-red-500">Disconnected</code>
        </div>
      )}
      {isLoading && (
        <Badge variant="secondary">
          <Loader2 className="size-3 animate-spin mr-1" />
          Loading
        </Badge>
      )}
      {showSaving && (
        <Badge variant="secondary">
          <Loader2 className="size-3 animate-spin mr-1" />
          Saving
        </Badge>
      )}
      {error && <Badge variant="destructive">{error}</Badge>}
    </div>
  );
}
