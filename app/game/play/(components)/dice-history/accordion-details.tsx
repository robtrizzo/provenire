import { Die } from "@/components/die";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { resultsMessage, Roll, ticksFromProject } from "@/types/roll";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function DieAccordian({ roll }: { roll: Roll }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const fetchUserData = async () => {
    if (!roll.userid) {
      return null;
    }
    const response = await fetch(`/api/users/${roll.userid}`);
    const user = await response.json();
    return user.name; // Return just the name since that's all we use
  };

  const { data: expandedUserName } = useQuery({
    queryKey: ["user", roll.userid],
    queryFn: fetchUserData,
    enabled: isExpanded && !!roll.userid, // Only fetch when expanded and userid exists
  });

  const handleAccordionChange = (value: string) => {
    setIsExpanded(value === "roll-details");
  };

  let descNode;
  if (roll.type === "project") {
    const ticks = ticksFromProject(roll);
    descNode = (
      <div className="flex flex-col border-t pt-2 mt-1">
        <span className="text-foreground text-xs mb-1">{resultsMessage(roll)}</span>
        <div className="flex gap-2 text-foreground text-xs">
          <span className="text-center">
            <b>Limited:</b> {ticks[0]}
          </span>
          <span className="text-center">
            <b>Standard:</b> {ticks[1]}
          </span>
          <span className="text-center">
            <b>Great:</b> {ticks[2]}
          </span>
        </div>
      </div>
    );
  } else {
    descNode = (
      <div className="flex border-t pt-2">
        <span className="text-foreground text-xs">{resultsMessage(roll)}</span>
      </div>
    );
  }

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      onValueChange={handleAccordionChange}
    >
      <AccordionItem value="roll-details">
        <AccordionTrigger>Details</AccordionTrigger>
        <AccordionContent>
          {descNode}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex-grow">
              {roll.charName && (
                <span className="text-muted-foreground text-xs block items-center gap-2">
                  {roll.charName}
                  {expandedUserName ?
                    ` (${expandedUserName})` :
                    <Skeleton className="w-[80px] h-[20px] rounded-full" />
                  }
                </span>
              )}
              {roll.timestamp && (
                <span className="text-muted-foreground text-xs block">
                  {new Date(roll.timestamp).toLocaleString()}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {roll?.redDice?.map((r, i) => (
                <Die key={i} roll={r} className="h-8 w-8 text-red-800" />
              ))}
              {roll?.blueDice?.map((r, i) => (
                <Die
                  key={i}
                  roll={r}
                  className={`h-8 w-8 ${roll.type === "fortune" ? "" : "text-blue-800"}`}
                />
              ))}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
