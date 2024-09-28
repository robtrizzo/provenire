'use client';
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
import components from '@/components/ui/abilities/mapping';
import { cn } from '@/lib/utils';

const Abilities = ({
  abilities,
  characterAbilities,
  setCharacterAbilities,
  setChanges,
  variant = 'sheet',
  className,
}: {
  abilities: Ability[];
  characterAbilities?: string[];
  setCharacterAbilities?: (abilities: string[]) => void;
  setChanges?: (changed: boolean) => void;
  variant?: 'sheet' | 'wiki';
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
            {variant === 'sheet' && (
              <div className="flex items-center gap-2">
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
            )}
            {variant === 'wiki' && (
              <TypographyP className={cn(ability.keystone && 'text-amber-700')}>
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
      );
    };
  }, [
    dynamicComponents,
    characterAbilities,
    setCharacterAbilities,
    setChanges,
    variant,
  ]);

  return (
    <Accordion type="multiple" className={cn('w-full', className)}>
      {abilities?.map(renderAbility)}
    </Accordion>
  );
};

export default Abilities;
