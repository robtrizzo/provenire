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
    const [selectedValue, setSelectedValue] = useState("all");
    const session = useSession();

    const fetchRollData = async ({ pageParam = 0 }) => {
        let rolls: Roll[] = [];
        if (selectedValue === "own") {
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
        queryKey: ["rolls"],
        queryFn: fetchRollData,
        initialPageParam: 0,
        enabled: open,
        getNextPageParam: (lastPage, allPages) => {
            // If we got a full page of results, there might be more
            return lastPage.length === PAGE_SIZE ? allPages.flat().length : undefined;
        },
    });

    const rolls: Roll[] = rollPages?.pages.flat() ?? [];

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="secondary" className="align middle;">
                    View Dice History
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Dice History</SheetTitle>
                    <SheetDescription>Viewing everybody's rolls.</SheetDescription>
                </SheetHeader>
                <Select onValueChange={handleValueChange}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Everybody's" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Everybody's</SelectItem>
                        <SelectItem value="own">Yours</SelectItem>
                    </SelectContent>
                </Select>
                <DiceHistory
                    rolls={rolls}
                    rollsUntilNearEnd={5}
                    onNearEnd={() => hasNextPage && fetchNextPage()}
                />
            </SheetContent>
        </Sheet>
    );
}
