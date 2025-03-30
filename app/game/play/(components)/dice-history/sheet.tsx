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
import { Loader, Menu, RefreshCcw } from "lucide-react";
import { useRoll } from "@/contexts/rollContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ExportMenuItem } from "@/app/game/play/(components)/dice-history/export";
import { debounce, partition } from "@/lib/utils";

export default function DiceSheet() {
  const [open, setOpen] = useState(false);
  const session = useSession();

  const {
    rolls,
    currentDiceFilter,
    handleCurrentDiceFilterChange,
    fetchNextPage,
    refetchRolls,
    hasNextPage,
    rollsArePending,
  } = useRoll();

  const handleUserChange = (value: string) => {
    handleCurrentDiceFilterChange(value);
  };

  const { data: userData, isPending: usersArePending } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("/api/users");
      return response.json();
    },
  });
  const getAllUsers = (): User[] => {
    // If userData is not yet loaded, return an empty array
    if (!userData) return [];

    // Ensure userData is an array before processing
    const users: User[] = Array.isArray(userData) ? userData : [];
    const [ownUser, otherUsers] = partition(users, u => u.id === session?.data?.user?.id)
    return [...ownUser, ...otherUsers.sort((a: User, b: User) => a.name.localeCompare(b.name))];
  };

  const allUsers = getAllUsers();

  const selectOptions = () => [
    { value: "all", label: "Everybody's" },
    ...(allUsers?.map((user) => ({
      value: user.id,
      label: user.id === session?.data?.user?.id ? "Yours" : user.name,
    })) || []),
  ];

  const getPlaceholderText = () => {
    if (currentDiceFilter === "all") {
      return "Everybody's";
    } else if (currentDiceFilter === session?.data?.user?.id) {
      return "Yours";
    } else {
      const curUser = allUsers.find(
        (user: User) => user.id === currentDiceFilter
      );

      return curUser?.name;
    }
  };

  return (
    <Sheet open={ open } onOpenChange={ setOpen }>
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
        { usersArePending ? (
          <div className="flex items-center justify-center h-screen">
            <Loader className="animate-spin"/>
          </div>
        ) : (
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center">
              <Select
                onValueChange={ (value) => {
                  handleUserChange(value);
                } }
              >
                <SelectTrigger
                  className="w-[180px]"
                  aria-label="Filter dice history"
                >
                  <SelectValue placeholder={ getPlaceholderText() }/>
                </SelectTrigger>
                <SelectContent>
                  { selectOptions().map((option) => (
                    <SelectItem key={ option.value } value={ option.value }>
                      { option.label }
                    </SelectItem>
                  )) }
                </SelectContent>
              </Select>
              <Button size="icon" variant="ghost" onClick={ debounce(refetchRolls, 300) }>
                <RefreshCcw className="h-4 w-4"/>
                <span className="sr-only">Refresh</span>
              </Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-[1.2rem] w-[1.2rem]"/>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <ExportMenuItem selectedFilter={ currentDiceFilter }/>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) }

        <div className="overflow-auto">
          { rollsArePending || !currentDiceFilter ? (
            <div className="flex items-center justify-center h-screen">
              <Loader className="animate-spin"/>
            </div>
          ) : (
            <DiceHistory
              rolls={ rolls }
              rollsUntilNearEnd={ 5 }
              onNearEnd={ () => hasNextPage && fetchNextPage() }
            />
          ) }
        </div>
      </SheetContent>
    </Sheet>
  );
}
