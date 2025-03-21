"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DiceHistory from "@/app/game/play/(components)/dice-history/history";
import { useSession } from "next-auth/react";
import { Loader, Menu } from "lucide-react";
import { useRoll } from "@/contexts/rollContext";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { ExportMenuItem } from "@/app/game/play/(components)/dice-history/export";
// import { DiceClear } from "./clear-button";

export default function DiceSheet() {
  const [open, setOpen] = useState(false);
  const session = useSession();

  const {
    rolls,
    currentDiceFilter,
    handleCurrentDiceFilterChange,
    fetchNextPage,
    hasNextPage,
    rollsArePending,
  } = useRoll();

  const handleUserChange = (value: string)=>  {
    handleCurrentDiceFilterChange(value);
  };

  const { data: userData, isPending: usersArePending } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("/api/users");
      return response.json();
    },
  });
  const getFilteredUsers = () : User[] => {
    // If userData is not yet loaded, return an empty array
    if (!userData) return [];

    // Ensure userData is an array before processing
    const users = Array.isArray(userData) ? userData : [];

    return users
      .sort((a: User, b: User) => a.name.localeCompare(b.name))
      .filter((user: User) => user.id !== session?.data?.user?.id);
  };

  const filteredUsers = getFilteredUsers();

  // Update the select options creation to include a null check
  const selectOptions = () => [
    { value: "all", label: "Everybody's" },
    { value: "own", label: "Yours" },
    ...(filteredUsers?.map(user => ({
      value: user.id,
      label: user.name
    })) || [])
  ]

  const getPlaceholderText = () => {
    if (currentDiceFilter === "own") {
      return "Yours";
    } else if (currentDiceFilter === "all") {
      return "Everybody's";
    } else {
      const curUser = filteredUsers.find((user: User) => user.id === currentDiceFilter);
      return curUser?.name;
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="secondary" className="align middle;">
          View Dice History
        </Button>
      </SheetTrigger>
      <SheetContent className="max-h-screen overflow-y-scroll mr-4 md:mr-0">
        <SheetHeader>
          <SheetTitle>Dice History</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {usersArePending ? (
          <div className="flex items-center justify-center h-screen">
            <Loader className="animate-spin" />
          </div>
        ) : (
          <div className="flex items-center justify-between space-x-4">
            <Select
              onValueChange={(value) => {
                handleUserChange(value);
              }}
            >
              <SelectTrigger className="w-[180px]" aria-label="Filter dice history">
                <SelectValue placeholder={getPlaceholderText()} />
              </SelectTrigger>
              <SelectContent>
                {selectOptions().map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <ExportMenuItem selectedFilter={currentDiceFilter} />
              </DropdownMenuContent>
            </DropdownMenu>
            {/*{currentDiceFilter === "own" && <DiceClear />}*/}
          </div>
        )}

        <div className="overflow-auto">
          {rollsArePending || !currentDiceFilter ? (
            <div className="flex items-center justify-center h-screen">
              <Loader className="animate-spin" />
            </div>
          ) : (
            <DiceHistory
              rolls={rolls}
              rollsUntilNearEnd={5}
              onNearEnd={() => hasNextPage && fetchNextPage()}
            />
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
