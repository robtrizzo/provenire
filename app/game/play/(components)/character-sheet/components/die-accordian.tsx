import { Die } from "@/components/die";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Roll } from "@/types/roll";
import { QueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

export default function DieAccordian({ roll }: { roll: Roll }) {
  const [expandedUserName, setExpandedUserName] = useState<string | null>(null);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  })

  const fetchUserData = async () => {
    const response = await fetch(`/api/users/${roll.userId}`);
    const user = await response.json();
    return user as User;
  };

  const handleAccordionChange = async (value: string) => {
    if (value === "roll-details") {
      const user = await queryClient.fetchQuery({
        queryKey: ["user", roll.userId],
        queryFn: fetchUserData
      });
      if (user) {
        setExpandedUserName(user.name);
      }
    }
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      onValueChange={handleAccordionChange}
    >
      <AccordionItem value="roll-details">
        <AccordionTrigger>Roll Details</AccordionTrigger>
        <AccordionContent>
          {
            <div className="flex flex-col gap-2 border-t pt-2">
              {roll.timestamp && (
                <span className="text-muted-foreground text-xs block">
                  {new Date(roll.timestamp).toLocaleString()}
                </span>
              )}
              <span className="text-muted-foreground text-xs block">
                {`${roll.charName}${expandedUserName ? ` (${expandedUserName})` : ""
                  }`}
              </span>
              <div className="flex flex-wrap gap-2">
                {roll?.redDice?.map((r, i) => (
                  <Die key={i} roll={r} className="h-8 w-8 text-red-800" />
                ))}
                {roll?.blueDice?.map((r, i) => (
                  <Die
                    key={i}
                    roll={r}
                    className={`h-8 w-8 ${roll.type === "fortune" ? "" : "text-blue-800"
                      }`}
                  />
                ))}
              </div>
            </div>
          }
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
