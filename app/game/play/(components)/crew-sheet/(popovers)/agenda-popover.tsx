"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Close } from "@radix-ui/react-popover";

export default function AgendaPopover({
  children,
}: {
  children: React.ReactNode;
}) {
  const [actionReferencePopopverOpen, setActionReferencePopopverOpen] =
    useState(false);

  return (
    <Popover
      open={actionReferencePopopverOpen}
      onOpenChange={setActionReferencePopopverOpen}
    >
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="p-1 text-blue-600 hover:text-blue-600 h-10 w-10"
        >
          <BookOpen style={{ height: "24px", width: "24px" }} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[600px] max-w-screen h-[500px] overflow-auto relative">
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
        {children}
      </PopoverContent>
    </Popover>
  );
}
