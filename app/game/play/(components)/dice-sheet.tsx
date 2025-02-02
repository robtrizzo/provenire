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
import { Roll } from "@/types/roll";
import { useInfiniteQuery } from "@tanstack/react-query";
import DiceHistory from "@/components/dice/history";
import { useSession } from "next-auth/react";

export default function DiceSheet() {
    const PAGE_SIZE = 40;
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(() => {
        const savedValue = localStorage.getItem("dicehistory.selectedfilter");
        return savedValue ? savedValue : "all";
    });
    const session = useSession();

    const fetchRollData = async ({ pageParam = 0, queryKey}) => {
        const val = queryKey[1];
        let rolls: Roll[] = [];
        if (val === "own") {
            const userId = session?.data?.user?.id;
            if (!userId) {
                return [];
            }

            const response = await fetch(
                `/api/roll/${userId}?cursor=${pageParam}&page_size=${PAGE_SIZE}`
            );
            rolls = await response.json();
        } else {
            const response = await fetch(
                `/api/roll?cursor=${pageParam}&page_size=${PAGE_SIZE}`
            );
            rolls = await response.json();
        }
        return rolls as Roll[];
    };


    const {
        data: rollPages,
        fetchNextPage,
        hasNextPage,
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

    function getPlaceholderText() {
        if (selectedValue && selectedValue === "own") {
            return "Yours";
        } else {
            return "Everybody's";
        }
    }

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
                <Select onValueChange={(value) => {handleValueChange(value)}}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={getPlaceholderText()} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Everybody's</SelectItem>
                        <SelectItem value="own">Yours</SelectItem>
                    </SelectContent>
                </Select>
                <div className="overflow-auto">
                    <DiceHistory
                        rolls={rolls}
                        rollsUntilNearEnd={5}
                        onNearEnd={() => hasNextPage && fetchNextPage()}
                    />
                </div>
            </SheetContent>
        </Sheet>
    );
}
