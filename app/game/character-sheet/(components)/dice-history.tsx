import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyH4 } from "@/components/ui/typography";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Roll } from "@/types/roll";
import { Die } from "@/components/die";

export default function DiceHistory() {
  const PAGE_SIZE = 20;

  const [open, setOpen] = useState(false);

  const fetchRollData = async ({ pageParam = 0 }) => {
    const response = await fetch(
      `/api/roll?cursor=${pageParam}&page_size=${PAGE_SIZE}`
    );
    const rolls = await response.json();
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

  // Intersection Observer setup for infinite scroll
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  const shouldBeRef = (index: number) => {
    console.log(rolls.length, index);
    if (rolls.length < 5) return false;
    if (index === rolls.length - 5) {
        console.log("Setting ref");
        return true;
    }
    return false;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">Dice History</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 max-h-96 overflow-y-auto">
        <TypographyH4>Recent Rolls</TypographyH4>
        <div className="space-y-4 mt-4">
          {rolls?.map((roll, index) => (
            <div key={shouldBeRef(index) ? "ref" : index} className="border rounded-lg p-2" ref={shouldBeRef(index) ? observerTarget : null}>
              <div className="flex gap-1 flex-wrap">
                {roll?.redDice?.map((r, i) => (
                  <Die key={i} roll={r} className="h-8 w-8 text-red-800" />
                ))}
                {roll?.blueDice?.map((r, i) => (
                  <Die
                    key={i}
                    roll={r}
                    className={`h-8 w-8 ${
                      roll.type === "fortune" ? "" : "text-blue-800"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-2 text-sm">
                <span className="font-semibold capitalize">{roll.type}</span>
                {" - "}
                <span className="capitalize">{roll.result}</span>
                {roll.timestamp && (
                  <span className="text-muted-foreground text-xs block">
                    {new Date(roll.timestamp).toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div ref={observerTarget}></div>
      </PopoverContent>
    </Popover>
  );
}
