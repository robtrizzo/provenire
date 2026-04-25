"use client";

import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useState } from "react";
import ResourcesDialog from "../dialogs/resources-dialog";

export default function ResourceOptions() {
  const [resourcesDialogOpen, setResourcesDialogOpen] = useState(false);

  return (
    <>
      <Button
        size="icon"
        variant="outline"
        onClick={() => setResourcesDialogOpen(true)}
      >
        <BookOpen />
      </Button>
      <ResourcesDialog
        open={resourcesDialogOpen}
        onOpenChange={setResourcesDialogOpen}
      />
    </>
  );
}
