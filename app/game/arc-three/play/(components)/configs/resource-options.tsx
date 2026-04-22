"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Ellipsis, Maximize2, Minimize2, Settings2 } from "lucide-react";
import { useState } from "react";
import ResourcesDialog from "../dialogs/resources-dialog";

export default function ResourceOptions({
  isCompact,
  onToggleView,
}: {
  isCompact?: boolean;
  onToggleView?: () => void;
}) {
  const [resourcesDialogOpen, setResourcesDialogOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align="start">
          {onToggleView && (
            <>
              <DropdownMenuItem onSelect={onToggleView}>
                {isCompact ? <Maximize2 /> : <Minimize2 />}
                {isCompact ? "Expanded view" : "Compact view"}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}
          <DropdownMenuItem
            onSelect={() => setTimeout(() => setResourcesDialogOpen(true), 0)}
          >
            <Settings2 /> Configure resources
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ResourcesDialog
        open={resourcesDialogOpen}
        onOpenChange={setResourcesDialogOpen}
      />
    </>
  );
}
