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
import {useState, useEffect, useMemo} from "react";
import { Roll } from "@/types/roll";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import DiceHistory from "@/app/game/play/(components)/dice-history/history";
import { useSession } from "next-auth/react";
import { Loader } from "lucide-react";
import { DiceClear } from "./clear-button";

export default function DiceSheet() {
  const PAGE_SIZE = 40;
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("all");
  const session = useSession();

  useEffect(() => {
    const savedValue = localStorage.getItem("dicehistory.selectedfilter");
    if (savedValue) {
      setSelectedValue(savedValue);
    }
  }, []);

  const fetchRollData = async ({
    pageParam = 0,
    queryKey,
  }: {
    pageParam: number | undefined;
    queryKey: string[];
  }) => {
    const val = queryKey[1];
    const cursor = pageParam?.toString() ?? "0";

    let response;
    if (val === "all") {
      response = await fetch(
        `/api/roll?cursor=${cursor}&page_size=${PAGE_SIZE}`
      );
    } else {
      let userid = val;
      if (val === "own") {
        userid = session?.data?.user?.id ?? "";
        if (!userid) {
          return [];
        }
      }
      response = await fetch(
        `/api/roll/${userid}?cursor=${cursor}&page_size=${PAGE_SIZE}`
      );
    }
    if (!response.ok) {
      console.error(`Failed to fetch roll data. status: ${response.status}`);
      return [];
    }
    return await response.json();
  };

  const {
    data: rollPages,
    fetchNextPage,
    hasNextPage,
    isPending: rollsArePending,
  } = useInfiniteQuery({
    queryKey: ["rolls", selectedValue],
    queryFn: fetchRollData,
    initialPageParam: 0,
    enabled: open,
    getNextPageParam: (lastPage, allPages) => {
      // If we got a full page of results, there might be more
      return lastPage.length === PAGE_SIZE ? allPages.flat().length : undefined;
    },
  });

  const rolls: Roll[] = rollPages?.pages.flat() ?? [];

  function handleValueChange(value: string) {
    setSelectedValue(value);
    localStorage.setItem("dicehistory.selectedfilter", value);
  }

  const { data: userData, isPending: usersArePending } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("/api/users");
      return response.json();
    },
  });
  const filteredUsers = useMemo(() => {
    // If userData is not yet loaded, return an empty array
    if (!userData) return [];

    // Ensure userData is an array before processing
    const users = Array.isArray(userData) ? userData : [];

    return users
        .sort((a: User, b: User) => a.name.localeCompare(b.name))
        .filter((user: User) => user.id !== session?.data?.user?.id);
  }, [userData, session?.data?.user?.id]);

// Update the select options creation to include a null check
  const selectOptions = useMemo(() => [
    { value: "all", label: "Everybody's" },
    { value: "own", label: "Yours" },
    ...(filteredUsers?.map(user => ({
      value: user.id,
      label: user.name
    })) || [])
  ], [filteredUsers]);

  const getPlaceholderText = useMemo(() => {
    if (selectedValue === "own") {
      return "Yours";
    } else if (selectedValue === "all") {
      return "Everybody's";
    } else {
      const curUser = filteredUsers.find((user: User) => user.id === selectedValue);
      return curUser?.name;
    }
  }, [selectedValue, filteredUsers]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="secondary" className="align middle;">
          View Dice History
        </Button>
      </SheetTrigger>
      <SheetContent className="max-h-screen overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Dice History</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {usersArePending ? (
          <div className="flex items-center justify-center h-screen">
            <Loader className="animate-spin" />
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Select
              onValueChange={(value) => {
                handleValueChange(value);
              }}
            >
              <SelectTrigger className="w-[180px]" aria-label="Filter dice history">
                <SelectValue placeholder={getPlaceholderText} />
              </SelectTrigger>
              <SelectContent>
                {selectOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedValue === "own" && <DiceClear />}
          </div>
        )}

        <div className="overflow-auto">
          {rollsArePending || !selectedValue ? (
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
