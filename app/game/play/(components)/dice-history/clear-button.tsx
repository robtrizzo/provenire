"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyH4 } from "@/components/ui/typography";
import { toast } from "@/hooks/use-toast";
import { Close } from "@radix-ui/react-popover";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Bomb, X } from "lucide-react";
import { useState } from "react";
import { useSession } from "next-auth/react";

export function DiceClear() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const session = useSession()

  const { mutateAsync: clearHistory } = useMutation({
    mutationFn: async () => {
      const userid = session?.data?.user?.id
      if (!userid) {
        return []
      }
      const response = await fetch(`/api/roll/${userid}`, {
        method: "DELETE",
      });
      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch the rolls query
      queryClient.invalidateQueries({ queryKey: ["rolls"] });
      toast({
        title: "Success",
        description: "Dice history cleared",
      });
      setOpen(false);
    },
    onError: (error) => {
      console.error("Failed to clear roll history", error);
      toast({
        title: "Error",
        description: "Failed to clear roll history",
        variant: "destructive",
      });
    },
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="destructive" className="text-sm">
          <Bomb />
          Clear
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-secondary">
        <div className="flex flex-col gap-2">
          <TypographyH4 className="text-md">Clear Dice History</TypographyH4>
          <span className="font-serif text-sm text-red-600 font-bold mt-0">
            This will delete your entire dice history!
          </span>
          <Button
            variant="outline"
            className="text-sm"
            onClick={() => clearHistory()}
          >
            <Bomb />
            yeah, clear it
          </Button>
          <Close asChild>
            <Button variant="destructive" className="text-sm">
              <X />
              Cancel
            </Button>
          </Close>
        </div>
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
      </PopoverContent>
    </Popover>
  );
}
