import { Die } from "@/components/die";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Roll } from "@/types/roll";
import {  } from "@radix-ui/react-accordion";
import React from "react";

export default function DieAccordian({ roll }: { roll: Roll }) {

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Roll Details</AccordionTrigger>
        <AccordionContent>
        {   
          <div className="flex flex-wrap gap-2 border-t pt-2">
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
          ))
        }
        </div>}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
