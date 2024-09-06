/* eslint-disable react/display-name */
import { useState, useEffect, useMemo } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { TypographyP } from '@/components/ui/typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Ability } from '@/types/game';
import components from '@/components/ui/abilities/mapping'; // Adjust the import path as needed

const Abilities = ({
  abilities,
  characterAbilities,
  setCharacterAbilities,
  setChanges,
}: {
  abilities: Ability[];
  characterAbilities: string[];
  setCharacterAbilities: (abilities: string[]) => void;
  setChanges: (changed: boolean) => void;
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
          loadedComponents[ability.slug] = mod.default;
        } else {
          loadedComponents[ability.slug] = null;
        }
      }
      setDynamicComponents(loadedComponents);
    };

    loadComponents();
  }, [abilities]);

  const renderAbility = useMemo(() => {
    return (ability: Ability, i: number) => {
      const DynamicComponent = dynamicComponents[ability.slug];
      return (
        <AccordionItem value={ability.name} key={i}>
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={
                  ability.keystone
                    ? true
                    : characterAbilities.includes(ability.name)
                }
                disabled={ability.keystone}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setCharacterAbilities([
                      ...characterAbilities,
                      ability.name,
                    ]);
                  } else {
                    setCharacterAbilities(
                      characterAbilities.filter((a) => a !== ability.name)
                    );
                  }
                  setChanges(true);
                }}
                onClick={(e) => e.stopPropagation()}
              />
              <TypographyP>{ability.name}</TypographyP>
            </div>
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
      );
    };
  }, [
    dynamicComponents,
    characterAbilities,
    setCharacterAbilities,
    setChanges,
  ]);

  return (
    <Accordion type="multiple" className="w-full">
      {abilities.map(renderAbility)}
    </Accordion>
  );
};

export default Abilities;
