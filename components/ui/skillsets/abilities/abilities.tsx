'use client';
/* eslint-disable react/display-name */
import { useState, useEffect, useMemo } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { TypographyP } from '@/components/ui/typography';
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
        <div className="flex items-center gap-2" key={i}>
          <Checkbox
            checked={characterAbilities?.includes(ability.name)}
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
          />
          <TypographyP className="text-indigo-500">
            <span>{ability.name}</span>:
            <div>
              {DynamicComponent ? (
                <DynamicComponent />
              ) : (
                <TypographyP>
                  There was an error importing this ability
                </TypographyP>
              )}
            </div>
          </TypographyP>
        </div>
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
    <div className={cn('w-full', className)}>
      {abilities?.map(renderAbility)}
    </div>
  );
};

export default Abilities;
