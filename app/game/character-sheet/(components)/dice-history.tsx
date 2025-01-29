import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyH4 } from "@/components/ui/typography";
import { useInfiniteQuery } from "@tanstack/react-query";
import { DieDetails } from "./die-details";
import DieAccordian from "./die-accordian";
import { Roll } from "@/types/roll";

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
    if (rolls.length < 5) return false;
    if (index === rolls.length - 5) {
      return true;
    }
    return false;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">Dice History</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 max-h-96 overflow-y-auto">
        <TypographyH4>Recent Rolls</TypographyH4>
        <div className="space-y-4 mt-4">
          {rolls?.map((roll, index) => (
            <div
              key={shouldBeRef(index) ? "ref" : index}
              className="border rounded-lg p-2"
              ref={shouldBeRef(index) ? observerTarget : null}
            >
              <DieDetails roll={roll} />
              <DieAccordian roll={roll} />
            </div>
          ))}
        </div>
        <div ref={observerTarget}></div>
      </PopoverContent>
    </Popover>
  );
}
