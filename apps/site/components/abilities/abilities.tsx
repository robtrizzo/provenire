"use client";
/* eslint-disable react/display-name */
import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { TypographyP } from "@/components/ui/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Ability } from "@/types/game";
import components from "@/components/abilities/mapping";
import { cn } from "@/lib/utils";

const Abilities = ({
  abilities,
  characterAbilities,
  setCharacterAbilities,
  setChanges,
  variant = "unlocked",
  className,
}: {
  abilities: Ability[];
  characterAbilities?: string[];
  setCharacterAbilities?: (abilities: string[]) => void;
  setChanges?: (changed: boolean) => void;
  variant?: "unlocked" | "advancement" | "wiki";
  className?: string;
}) => {
  const [dynamicComponents, setDynamicComponents] = useState<{
    [key: string]: React.FC | null;
  }>({});

  useEffect(() => {
    const loadComponents = async () => {
      const loadedComponents: { [key: string]: React.FC | null } = {};
      for (const ability of abilities) {
        const loadComponent =
          components[ability.slug as keyof typeof components];
        if (loadComponent) {
          const mod = await loadComponent();
          loadedComponents[ability.slug] = (
            mod as { default: React.FC }
          ).default;
        } else {
          loadedComponents[ability.slug] = null;
        }
      }
      setDynamicComponents(loadedComponents);
    };

    loadComponents();
  }, [abilities]);

  const renderAbility = () => {
    return (ability: Ability, i: number) => {
      const DynamicComponent = dynamicComponents[ability.slug];
      if (
        variant === "unlocked" &&
        !characterAbilities?.includes(ability.name)
      ) {
        return null;
      }
      return (
        <div className="flex gap-2" key={`${ability.slug}-${i}`}>
          {variant === "advancement" && (
            <Checkbox
              checked={
                characterAbilities && ability.keystone
                  ? true
                  : characterAbilities?.includes(ability.name)
              }
              disabled={ability.keystone}
              onCheckedChange={(checked) => {
                if (setCharacterAbilities === undefined) return;
                if (characterAbilities === undefined) return;
                if (setChanges === undefined) return;
                if (checked) {
                  setCharacterAbilities([...characterAbilities, ability.name]);
                } else {
                  setCharacterAbilities(
                    characterAbilities.filter((a) => a !== ability.name)
                  );
                }
                setChanges(true);
              }}
              onClick={(e) => e.stopPropagation()}
              className="mt-6"
            />
          )}
          <AccordionItem value={ability.name} key={i} className="w-full">
            <AccordionTrigger>
              {variant === "advancement" ? (
                <TypographyP className="ml-4">{ability.name}</TypographyP>
              ) : (
                <TypographyP
                  className={cn(ability.keystone && "text-amber-500")}
                >
                  {ability.name}
                </TypographyP>
              )}
            </AccordionTrigger>
            <AccordionContent>
              {DynamicComponent ? (
                <DynamicComponent />
              ) : (
                <TypographyP>
                  There was an error importing this ability
                </TypographyP>
              )}
            </AccordionContent>
          </AccordionItem>
        </div>
      );
    };
  };

  return (
    <Accordion type="multiple" className={cn("w-full", className)}>
      {abilities?.map(renderAbility())}
    </Accordion>
  );
};

export default Abilities;
