"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useQueryClient } from "@tanstack/react-query";
import { Roll } from "@/types/roll";
import { useSession } from "next-auth/react";
import { toast } from "@/hooks/use-toast";

export function ExportMenuItem({selectedFilter}: { selectedFilter: string }) {
  const queryClient = useQueryClient();
  const session = useSession()

  const fetchUserData = async () => {
    if (!selectedFilter) {
      return null;
    }
    if (selectedFilter === "all") {
      const response = await fetch("/api/roll/export");
      return await response.json() as Roll[];
    } else {
      const userid = selectedFilter === "own" ? session?.data?.user?.id : selectedFilter;
      const response = await fetch(`/api/roll/${userid}/export`);
      if (!response.ok) {
        throw new Error("Error exporting rolls");
      }
      return await response.json() as Roll[];
    }
  };

  async function handleExport() {
    try {
      const rolls = await queryClient.fetchQuery({
        queryKey: ["user", selectedFilter],
        queryFn: fetchUserData,
      })
      const blob = new Blob([JSON.stringify(rolls)], {type: "text/json"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `rolls-${selectedFilter}.json`;
      a.click();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to export rolls",
        variant: "destructive",
      });
      console.error(error)
    }
  }

  return (
    <DropdownMenuItem onClick={handleExport}>
      Export
    </DropdownMenuItem>
  );
}