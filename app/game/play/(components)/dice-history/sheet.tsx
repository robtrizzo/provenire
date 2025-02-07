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
import { useState, useMemo } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import DiceHistory from "@/app/game/play/(components)/dice-history/history";
import { useSession } from "next-auth/react";
import { Loader } from "lucide-react";
import { DiceClear } from "./clear-button";
import { useRoll } from "@/contexts/rollContext";
import { useEffect } from "react";

export default function DiceSheet() {
  const PAGE_SIZE = 40;
  const LOCAL_STORAGE_KEY = "dicehistory.selectedfilter";
  const [open, setOpen] = useState(false);
  const session = useSession();
  const {
    rolls,
    setRolls,
    setCurrentDiceFilter
  } = useRoll();

  const useLocalStorage = (key: string, initialValue: string) => {
    const [value, setValue] = useState(() => {
      if (typeof window === 'undefined') return initialValue;
      const val = localStorage.getItem(key) ?? initialValue;
      setCurrentDiceFilter(val);
      return val;
    });

    const setStoredValue = (newValue: string) => {
      setValue(newValue);
      localStorage.setItem(key, newValue);
      setCurrentDiceFilter(newValue);
    };

    return [value, setStoredValue] as const;
  };
  const [selectedUser, setSelectedUser] = useLocalStorage(
    LOCAL_STORAGE_KEY,
    "all"
  );

  const buildUrl = (val: string, cursor: number) => {
    const baseUrl = '/api/roll';
    const params = new URLSearchParams({
      cursor: cursor.toString(),
      page_size: PAGE_SIZE.toString()
    });

    switch (val) {
      case 'all':
        return `${baseUrl}?${params}`;
      case 'own':
        const userid = session?.data?.user?.id ?? "";
        if (!userid) {
          throw new Error("current user has no id provided");
        }
        return `${baseUrl}/${session?.data?.user?.id}?${params}`;
      default:
        return `${baseUrl}/${val}?${params}`;
    }
  };

  const fetchRollData = async ({
    pageParam = 0,
    queryKey,
  }: {
    pageParam: number | undefined;
    queryKey: string[];
  }) => {
    try {
      const response = await fetch(buildUrl(queryKey[1], pageParam));
      if (!response.ok) {
        console.error(`Failed to fetch roll data. status: ${response.status}`);
        return [];
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching roll data:', error);
      throw error;
    }
  };

  const {
    data: rollPages,
    fetchNextPage,
    hasNextPage,
    isPending: rollsArePending,
  } = useInfiniteQuery({
    queryKey: ["rolls", selectedUser],
    queryFn: fetchRollData,
    initialPageParam: 0,
    enabled: open && session.status === "authenticated",
    getNextPageParam: (lastPage, allPages) => {
      // If we got a full page of results, there might be more
      return lastPage.length === PAGE_SIZE ? allPages.flat().length : undefined;
    },
  });

  useEffect(() => {
    if (rollPages?.pages) {
      // Flatten all pages into a single array of rolls
      const allRolls = rollPages.pages.flat();
      setRolls(allRolls);
    }
  }, [rollPages, setRolls]);

  const handleUserChange = (value: string)=>  {
    setSelectedUser(value);
    localStorage.setItem("dicehistory.selectedfilter", value);
  };

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
    if (selectedUser === "own") {
      return "Yours";
    } else if (selectedUser === "all") {
      return "Everybody's";
    } else {
      const curUser = filteredUsers.find((user: User) => user.id === selectedUser);
      return curUser?.name;
    }
  }, [selectedUser, filteredUsers]);

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
                handleUserChange(value);
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
            {selectedUser === "own" && <DiceClear />}
          </div>
        )}

        <div className="overflow-auto">
          {rollsArePending || !selectedUser ? (
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
