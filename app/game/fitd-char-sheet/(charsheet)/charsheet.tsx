'use client';
import { useState, useEffect, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { Separator } from '@/components/ui/separator';
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from '@/components/ui/typography';
import heritages from '@/public/heritages.json';
import backgrounds from '@/public/backgrounds.json';
import archetypes from '@/public/archetypes.json';
import skillsets from '@/public/skillsets.json';
import universal_actions from '@/public/universal_actions.json';
import {
  type Archetype,
  type Skillset,
  type Background,
  type Heritage,
  type Action,
  type Bond,
  CharacterAttributes,
  Bonds,
} from '@/types/game';
import { Button } from '@/components/ui/button';
import { BuildupCheckboxes } from '@/components/ui/buildup-checkboxes';
import { ActionScore } from '@/components/ui/action-score';
import { useToast } from '@/components/ui/use-toast';
import { Die } from '@/components/ui/die';
import { cn, debounce } from '@/lib/utils';
import { VenetianMask, Flame, Activity, Dices } from 'lucide-react';
import ActionDescription from '@/components/ui/action-description';
import { Card } from '@/components/ui/card';
import Clock from '@/components/ui/clock';
import { Condition } from '@/components/ui/condition';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import Abilities from '@/components/ui/abilities/abilities';
import DowntimeActionsAccordion from '@/components/ui/downtime-actions-accordion';
import Crit from '@/components/ui/subsistence/crit/subsistenceCrit';
import Consequences from '@/components/ui/subsistence/consequences/subsistenceConsequences';

export function Charsheet() {
  const [selectedArchetype, setSelectedArchetype] = useState<Archetype>();
  const [selectedSkillset, setSelectedSkillset] = useState<Skillset>();
  const [selectedBackground, setSelectedBackground] = useState<Background>();
  const [selectedHeritage, setSelectedHeritage] = useState<Heritage>();

  const [heritageSelectKey, setHeritageSelectKey] = useState(+new Date());
  const [archetypeSelectKey, setArchetypeSelectKey] = useState(+new Date());
  const [backgroundSelectKey, setBackgroundSelectKey] = useState(+new Date());
  const [skillsetSelectKey, setSkillsetSelectKey] = useState(+new Date());

  const [skillsetXp, setSkillsetXp] = useState(0);
  const [heartXp, setHeartXp] = useState(0);
  const [instinctXp, setInstinctXp] = useState(0);
  const [machinaXp, setMachinaXp] = useState(0);

  const [attributes, setAttributes] = useState<CharacterAttributes>({
    Heart: { Defy: [0, 0], Persuade: [0, 0] },
    Instinct: { Charge: [0, 0], Prowl: [0, 0] },
    Machina: { Suggest: [0, 0], Survey: [0, 0] },
  });

  const [bonds, setBonds] = useState<Bonds>({
    Personal: [
      { name: '', score: [0, 0] },
      { name: '', score: [0, 0] },
    ],
    Familial: [
      { name: '', score: [0, 0] },
      { name: '', score: [0, 0] },
    ],
    Professional: [
      {
        name: selectedBackground?.professionalBonds?.[0]?.name || '',
        score: [0, 0],
      },
      {
        name: selectedBackground?.professionalBonds?.[0]?.name || '',
        score: [0, 0],
      },
    ],
  });

  const [stress, setStress] = useState(0);
  const [conditions, setConditions] = useState<string[]>([]);
  const [conditionRecovery, setConditionRecovery] = useState<number>(0);

  const [healing, setHealing] = useState<number>(0);
  const [harm3, setHarm3] = useState<string>('');
  const [harm2, setHarm2] = useState<string[]>(['', '']);
  const [harm1, setHarm1] = useState<string[]>(['tired', '']);

  const [armor, setArmor] = useState<boolean>(false);
  const [hArmor, setHArmor] = useState<boolean>(false);
  const [sArmor, setSArmor] = useState<boolean>(false);

  const [starvation, setStarvation] = useState<number>(0);
  const [subsist, setSubsist] = useState<number>(0);

  const [abilities, setAbilities] = useState<string[]>([]);

  const { toast } = useToast();

  const [changes, setChanges] = useState(false);

  const [rollLeft, setRollLeft] = useState<string>('');
  const [rollRight, setRollRight] = useState<string>('');
  const [bonusDice, setBonusDice] = useState<number>(0);
  const [fortuneDice, setFortuneDice] = useState<number>(0);

  useEffect(() => {
    if (window === undefined) return;
    const data = localStorage.getItem('charsheet');
    if (data) {
      const parsed = JSON.parse(data);
      setSelectedArchetype(parsed.selectedArchetype);
      setSelectedSkillset(parsed.selectedSkillset);
      setSelectedBackground(parsed.selectedBackground);
      setSelectedHeritage(parsed.selectedHeritage);
      setSkillsetXp(parsed.skillsetXp || 0);
      setHeartXp(parsed.heartXp || 0);
      setInstinctXp(parsed.instinctXp || 0);
      setMachinaXp(parsed.machinaXp || 0);
      if (parsed.attributes) {
        setAttributes(parsed.attributes);
      }
      if (parsed.conditions) {
        setConditions(parsed.conditions);
      }
      setStress(parsed.stress || 0);
      setConditionRecovery(parsed.conditionRecovery || 0);
      setHealing(parsed.healing || 0);
      setHarm3(parsed.harm3 || '');
      setHarm2(parsed.harm2 || ['', '']);
      setHarm1(parsed.harm1 || ['tired', '']);
      setArmor(parsed.armor || false);
      setHArmor(parsed.hArmor || false);
      setSArmor(parsed.sArmor || false);
      setAbilities(parsed.abilities || []);
      if (parsed.bonds) {
        setBonds(parsed.bonds);
      }
      setStarvation(parsed.starvation || 0);
      setSubsist(parsed.subsist || 0);
    }
  }, []);

  // every 0.1 seconds, check if there are changes and save them to local storage and the server
  useEffect(() => {
    const interval = setInterval(() => {
      if (changes) {
        // save to local storage
        const data = {
          selectedArchetype,
          selectedSkillset,
          selectedBackground,
          selectedHeritage,
          skillsetXp,
          heartXp,
          instinctXp,
          machinaXp,
          attributes,
          stress,
          conditions,
          conditionRecovery,
          healing,
          harm3,
          harm2,
          harm1,
          armor,
          hArmor,
          sArmor,
          abilities,
          bonds,
          starvation,
          subsist,
        };
        localStorage.setItem('charsheet', JSON.stringify(data));
        // TODO save to server
        setChanges(false);
      }
    }, 100);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changes]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDebounceChange = useCallback(
    debounce(() => {
      setChanges(true);
    }, 300),
    []
  );

  function handleUpdateActionScore(
    attribute: 'Heart' | 'Instinct' | 'Machina',
    action: string,
    score: number[]
  ) {
    setAttributes({
      ...attributes,
      [attribute]: { ...attributes[attribute], [action]: score },
    });
    setChanges(true);
  }

  function rollAction(
    attribute: 'Heart' | 'Instinct' | 'Machina',
    action: string
  ) {
    const score = attributes[attribute][action];
    const [a, b] = score || [0, 0];

    rollCombo(action, '', [a, b]);
  }

  function rollBond(bond: Bond) {
    rollCombo(bond.name, '', bond.score);
  }

  function rollCombo(action1: string, action2: string, dice: number[]) {
    for (let i = 0; i < bonusDice; i++) {
      dice.push(2);
    }
    if (dice.reduce((acc, s) => acc + s, 0) === 0) {
      // roll 2d6 and take the lowest
      let r1 = Math.floor(Math.random() * 6) + 1;
      let r2 = Math.floor(Math.random() * 6) + 1;
      const result = Math.min(r1, r2);
      let resultText = '';
      switch (result) {
        case 1:
        case 2:
        case 3:
          resultText = 'Miss. Suffer the consequences.';
          break;
        case 4:
        case 5:
          resultText =
            'Partial hit. Succeed, but suffer the consequences and take reduced effect.';
          break;
        case 6:
          resultText = 'Hit! Succeed, but take reduced effect.';
          break;
        default:
          resultText = 'Unknown result';
          break;
      }
      toast({
        variant: 'grid',
        // @ts-ignore
        title: (
          <div className="flex gap-1">
            <span className="mt-1">
              Rolled {action1} + {action2}
            </span>
            <Die roll={r1} className="h-5 w-5" />
            <Die roll={r2} className="h-5 w-5" />
          </div>
        ),
        description: (
          <div className="flex gap-4">
            <Die roll={result} className="h-5 w-5" />
            <span className="mt-1">{resultText}</span>
          </div>
        ),
      });
      return;
    }
    let red = dice.reduce((acc, s) => (s === 1 ? acc + 1 : acc), 0);
    let blue = dice.reduce((acc, s) => (s === 2 ? acc + 1 : acc), 0);
    let redRolls = [];
    let blueRolls = [];
    for (let i = 0; i < red; i++) {
      redRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    for (let i = 0; i < blue; i++) {
      blueRolls.push(Math.floor(Math.random() * 6) + 1);
    }

    let result: number;
    let resultText = '';
    let highestRed = Math.max(...redRolls);
    let highestBlue = Math.max(...blueRolls);
    const blueHigher = highestBlue >= highestRed;

    // detect if there are 2 or more 6s
    let crit = false;
    const redSixes = redRolls.filter((r) => r === 6).length;
    const blueSixes = blueRolls.filter((r) => r === 6).length;
    if (redSixes + blueSixes >= 2) {
      crit = true;
      result = 6;
      resultText = 'Critical! Succeed with improved effect.';
    } else {
      result = Math.max(highestBlue, highestRed);

      switch (result) {
        case 1:
        case 2:
        case 3:
          resultText = 'Miss. Suffer the consequences.';
          break;
        case 4:
        case 5:
          resultText = `Partial hit. Suceed, but suffer the consequences${
            blueHigher ? '' : ' and take reduced effect'
          }.`;
          break;
        case 6:
          resultText = `Hit! Succeed${
            blueHigher ? '' : ', but take reduced effect'
          }.`;
          break;
        default:
          resultText = 'Unknown result';
          break;
      }
    }

    toast({
      variant: 'grid',
      // @ts-ignore
      title: (
        <div className="flex items-start gap-1">
          <span className="mt-1">
            Rolled {action1}
            {action2 ? ` + ${action2}` : ''}
          </span>
          {redRolls.map((r, i) => (
            <Die key={i} roll={r} className="h-5 w-5 text-red-500" />
          ))}
          {blueRolls.map((r, i) => (
            <Die key={i} roll={r} className="h-5 w-5 text-blue-500" />
          ))}
        </div>
      ),
      description: (
        <div className="flex gap-4">
          {crit ? (
            [
              redRolls
                .filter((r) => r === 6)
                .map((r, i) => (
                  <Die key={i} roll={r} className="h-5 w-5 text-red-500" />
                )),
              blueRolls
                .filter((r) => r === 6)
                .map((r, i) => (
                  <Die key={i} roll={r} className="h-5 w-5 text-blue-500" />
                )),
            ]
          ) : (
            <Die
              roll={result}
              className={cn(
                'h-5 w-5',
                blueHigher ? 'text-blue-500' : 'text-red-500'
              )}
            />
          )}
          <span className="mt-1">{resultText}</span>
        </div>
      ),
    });
  }

  function rollComboMission(
    attribute1: 'Heart' | 'Instinct' | 'Machina',
    action1: string,
    attribute2: 'Heart' | 'Instinct' | 'Machina',
    action2: string
  ) {
    const score1 = attributes?.[attribute1]?.[action1] || [0, 0];
    const score2 = attributes?.[attribute2]?.[action2] || [0, 0];
    rollCombo(action1, action2, [...score1, ...score2]);
  }

  function rollComboChurn(
    bond: Bond,
    attribute: 'Heart' | 'Instinct' | 'Machina',
    action: string
  ) {
    const score1 = bond.score || [0, 0];
    const score2 = attributes[attribute][action] || [0, 0];
    rollCombo(bond.name, action, [...score1, ...score2]);
  }

  // helper function to get the explicit keys for each attribute
  const attributeExplicitKeys = {
    Heart: ['Defy', 'Persuade'],
    Instinct: ['Charge', 'Prowl'],
    Machina: ['Suggest', 'Survey'],
  };

  function rollAttribute(
    attribute: 'Heart' | 'Instinct' | 'Machina',
    variant: string = 'mission'
  ) {
    const attr = attributes[attribute];
    let scores: number[][] = [];
    const bkeys = selectedBackground?.attributes?.[attribute] ?? [];
    const tkeys = selectedSkillset?.attributes?.[attribute] ?? [];
    const akeys = selectedArchetype?.attributes?.[attribute] ?? [];
    if (variant === 'mission') {
      const ekeys = attributeExplicitKeys[attribute];
      const keys = [...ekeys, ...bkeys, ...tkeys, ...akeys];
      scores = keys.map((k) => attr[k]).filter((s) => s);
    } else if (variant === 'churn') {
      const keys = [...bkeys, ...tkeys, ...akeys];
      const filteredScores = keys.map((k) => attr[k]).filter((s) => s);
      let bondScores: number[][] = [];
      if (attribute === 'Heart') {
        bondScores = bonds.Personal.map((b) => b.score).filter((s) => s);
      } else if (attribute === 'Instinct') {
        bondScores = bonds.Familial.map((b) => b.score).filter((s) => s);
      } else if (attribute === 'Machina') {
        bondScores = bonds.Professional.map((b) => b.score).filter((s) => s);
      }
      scores = [...filteredScores, ...bondScores];
    } else {
      console.error('Unknown variant', variant);
      return;
    }
    const score = scores.reduce((acc, s) => {
      const [a, b] = s;
      if (a > 0 || b > 0) {
        return acc + 1;
      }
      return acc;
    }, 0);
    if (score === 0) {
      let r1 = Math.floor(Math.random() * 6) + 1;
      let r2 = Math.floor(Math.random() * 6) + 1;
      const roll = Math.min(r1, r2);
      toast({
        variant: 'grid',
        // @ts-ignore
        title: (
          <div className="flex gap-1">
            <span className="mt-1">Rolled {attribute}</span>
            <Die roll={r1} className="h-5 w-5" />
            <Die roll={r2} className="h-5 w-5" />
          </div>
        ),
        description: (
          <div className="flex gap-4">
            <Die roll={roll} className="h-5 w-5" />
            <span className="mt-1">Take {6 - roll} stress.</span>
          </div>
        ),
      });
      return;
    }
    let rolls = [];
    for (let i = 0; i < score; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    const roll = Math.max(...rolls);
    toast({
      variant: 'grid',
      // @ts-ignore
      title: (
        <div className="flex gap-1">
          <span className="mt-1">Rolled {attribute}</span>
          {rolls.map((r, i) => (
            <Die key={i} roll={r} className="h-5 w-5 text-red-500" />
          ))}
        </div>
      ),
      description: (
        <div className="flex gap-4">
          <Die roll={roll} className="h-5 w-5 text-red-500" />
          <span className="mt-1">Take {6 - roll} stress.</span>
        </div>
      ),
    });
  }

  return (
    <div>
      <div className="flex gap-1 w-full">
        <div className="flex-grow">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name" />
        </div>
        <div>
          <Label htmlFor="alias">Alias</Label>
          <Input id="alias" placeholder="Alias" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 w-full my-1">
        <div>
          <Select
            key={heritageSelectKey}
            value={selectedHeritage?.name}
            onValueChange={(value) => {
              for (const heritage of heritages) {
                if (heritage.name && heritage.name === value) {
                  setSelectedHeritage(heritage);
                  setChanges(true);
                }
              }
            }}
          >
            <SelectTrigger className="font-bold text-sky-500">
              <SelectValue placeholder="Select a heritage" />
            </SelectTrigger>
            <SelectContent>
              {heritages.map((heritage) => (
                <SelectItem
                  key={heritage.name}
                  value={heritage.name}
                  className="text-lg"
                >
                  {heritage.name}
                </SelectItem>
              ))}
              <SelectSeparator />
              <Button
                variant="secondary"
                size="sm"
                className="w-full px-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedHeritage(undefined);
                  setChanges(true);
                  setHeritageSelectKey(+new Date());
                }}
              >
                Clear
              </Button>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            key={backgroundSelectKey}
            value={selectedBackground?.name}
            onValueChange={(value) => {
              const foundBackground = backgrounds.find(
                (b) => b.name === value
              ) as Background | undefined;
              if (foundBackground) {
                setSelectedBackground(foundBackground);
                setBonds({
                  ...bonds,
                  Professional: [
                    {
                      name: foundBackground.professionalBonds[0].name,
                      score: bonds.Professional[0].score,
                    },
                    {
                      name: foundBackground.professionalBonds[1].name,
                      score: bonds.Professional[1].score,
                    },
                  ],
                });
                setChanges(true);
              }
            }}
          >
            <SelectTrigger className="font-bold text-red-500">
              <SelectValue placeholder="Select a background" />
            </SelectTrigger>
            <SelectContent>
              {backgrounds.map((background) => (
                <SelectItem key={background.name} value={background.name}>
                  {background.name}
                  <span className="text-muted-foreground ml-4">
                    {background.shortDescription}
                  </span>
                </SelectItem>
              ))}
              <SelectSeparator />
              <Button
                variant="secondary"
                size="sm"
                className="w-full px-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedBackground(undefined);
                  setChanges(true);
                  setBackgroundSelectKey(+new Date());
                }}
              >
                Clear
              </Button>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 w-full my-1">
        <div>
          <Select
            key={skillsetSelectKey}
            value={selectedSkillset?.name}
            onValueChange={(value) => {
              const foundSkillset = skillsets.find((t) => t.name === value) as
                | Skillset
                | undefined;
              if (foundSkillset) {
                setSelectedSkillset(foundSkillset);
                setChanges(true);
              }
            }}
          >
            <SelectTrigger className="font-bold text-indigo-500">
              <SelectValue placeholder="Select a skillset" />
            </SelectTrigger>
            <SelectContent>
              {skillsets.map((skillset) => (
                <SelectItem key={skillset.name} value={skillset.name}>
                  {skillset.name}
                  <span className="text-muted-foreground ml-4">
                    {skillset.shortDescription}
                  </span>
                </SelectItem>
              ))}
              <SelectSeparator />
              <Button
                variant="secondary"
                size="sm"
                className="w-full px-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSkillset(undefined);
                  setChanges(true);
                  setSkillsetSelectKey(+new Date());
                }}
              >
                Clear
              </Button>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            key={archetypeSelectKey}
            value={selectedArchetype?.name}
            onValueChange={(value) => {
              const foundArchetype = archetypes.find(
                (a) => a.name === value
              ) as Archetype | undefined;
              if (foundArchetype) {
                setSelectedArchetype(foundArchetype);
                setChanges(true);
              }
            }}
          >
            <SelectTrigger className="font-bold text-amber-700">
              <SelectValue placeholder="Select an archetype" />
            </SelectTrigger>
            <SelectContent>
              {archetypes.map((archetype) => (
                <SelectItem key={archetype.name} value={archetype.name}>
                  {archetype.name}
                  <span className="text-muted-foreground ml-4">
                    {archetype.shortDescription}
                  </span>
                </SelectItem>
              ))}
              <SelectSeparator />
              <Button
                variant="secondary"
                size="sm"
                className="w-full px-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedArchetype(undefined);
                  setChanges(true);
                  setArchetypeSelectKey(+new Date());
                }}
              >
                Clear
              </Button>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Tabs defaultValue="mission" className="w-full my-3 mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger
            value="mission"
            onClick={() => {
              setRollLeft('');
              setRollRight('');
            }}
          >
            Mission
          </TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger
            value="churn"
            onClick={() => {
              setRollLeft('');
              setRollRight('');
            }}
          >
            The Churn
          </TabsTrigger>
        </TabsList>
        <TabsContent value="mission" className="w-full">
          <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-6 focus-visible:outline-none">
            <div className="mt-4">
              <TypographyH3 className="mt-4 text-sm text-muted-foreground">
                Universal Actions
              </TypographyH3>
              <div className="ml-2">
                {universal_actions.map((action, i) => (
                  <ActionDescription key={i} action={action as Action} />
                ))}
              </div>
              {selectedBackground && (
                <div className="mt-4">
                  <TypographyH2 className="text-red-500">
                    {selectedBackground?.name}
                    <span className="text-muted-foreground text-lg ml-8">
                      {selectedBackground?.shortDescription}
                    </span>
                  </TypographyH2>
                  <div className="mt-4">
                    <TypographyH3 className="text-sm text-muted-foreground">
                      Actions
                    </TypographyH3>
                    <div className="ml-2">
                      {selectedBackground?.actions?.map((action, i) => (
                        <ActionDescription key={i} action={action} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {selectedSkillset && (
                <div className="mt-4">
                  <TypographyH2 className="text-indigo-500">
                    {selectedSkillset?.name}
                    <span className="text-muted-foreground text-lg ml-8">
                      {selectedSkillset?.shortDescription}
                    </span>
                  </TypographyH2>
                  <div className="mt-4">
                    <TypographyH3 className="text-sm text-muted-foreground">
                      Actions
                    </TypographyH3>
                    <div className="ml-2">
                      {selectedSkillset?.actions?.map((action, i) => (
                        <ActionDescription key={i} action={action} />
                      ))}
                    </div>
                    <TypographyH3 className="text-sm text-muted-foreground mt-4">
                      Abilities
                    </TypographyH3>
                    <div className="ml-2">
                      <Abilities
                        abilities={selectedSkillset?.abilities?.mission}
                        characterAbilities={abilities}
                        setCharacterAbilities={setAbilities}
                        setChanges={setChanges}
                      />
                    </div>
                  </div>
                </div>
              )}
              {selectedArchetype && (
                <div className="mt-4">
                  <Link href={`/game/archetypes#${selectedArchetype?.name}`}>
                    <TypographyH2 className="text-amber-700">
                      {selectedArchetype?.name}
                      <span className="text-muted-foreground text-lg ml-8">
                        {selectedArchetype?.shortDescription}
                      </span>
                    </TypographyH2>
                  </Link>
                  <div className="mt-4">
                    <TypographyH3 className="text-sm text-muted-foreground">
                      Actions
                    </TypographyH3>
                    <div className="ml-2">
                      {selectedArchetype?.actions?.map((action, i) => (
                        <ActionDescription key={i} action={action} />
                      ))}
                    </div>
                    <TypographyH3 className="text-sm text-muted-foreground mt-4">
                      Abilities
                    </TypographyH3>
                    <div className="ml-2">
                      <Abilities
                        abilities={selectedArchetype?.abilities?.mission}
                        characterAbilities={abilities}
                        setCharacterAbilities={setAbilities}
                        setChanges={setChanges}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex my-6 md:mt-3">
              <div>
                <div className="grid grid-cols-2 border-b-[1px]">
                  <div
                    className="hover:cursor-pointer group border-r-[1px] mt-8"
                    onClick={() => {
                      rollAttribute('Heart');
                    }}
                  >
                    <TypographyH3 className="group-hover:underline">
                      Heart <Flame className="inline mb-2" />
                    </TypographyH3>
                  </div>
                  <BuildupCheckboxes
                    key={`heartXp${new Date().getTime()}`}
                    max={6}
                    current={heartXp}
                    onChange={(n) => {
                      setHeartXp(n);
                      setChanges(true);
                    }}
                    className="items-center mt-auto mb-2"
                  />
                </div>
                <div className="grid grid-cols-4 mx-2">
                  <div className="flex flex-col">
                    <div
                      className="h-10 flex items-center hover:cursor-pointer group"
                      onClick={(e) => {
                        if (e.shiftKey) {
                          rollAction('Heart', 'Defy');
                        } else {
                          setRollLeft('Heart-Defy');
                        }
                      }}
                    >
                      <TypographyH4 className="group-hover:underline">
                        Defy
                      </TypographyH4>
                    </div>
                    <Separator />
                    <div
                      className="h-10 flex items-center hover:cursor-pointer group"
                      onClick={(e) => {
                        if (e.shiftKey) {
                          rollAction('Heart', 'Persuade');
                        } else {
                          setRollLeft('Heart-Persuade');
                        }
                      }}
                    >
                      <TypographyH4 className="group-hover:underline">
                        Persuade
                      </TypographyH4>
                    </div>
                  </div>
                  <div className="flex flex-col  border-r-[1px]">
                    <ActionScore
                      key={`defy${new Date().getTime()}`}
                      score={attributes.Heart.Defy}
                      onChange={(s) => {
                        handleUpdateActionScore('Heart', 'Defy', s);
                      }}
                      className="h-10 justify-end mr-2"
                    />
                    <Separator />
                    <ActionScore
                      key={`persuade${new Date().getTime()}`}
                      score={attributes.Heart.Persuade}
                      onChange={(s) => {
                        handleUpdateActionScore('Heart', 'Persuade', s);
                      }}
                      className="h-10 justify-end mr-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Heart.map((a, i) => (
                      <>
                        <div
                          key={`ah-${i}`}
                          className="h-10 hover:cursor-pointer group"
                          onClick={(e) => {
                            if (e.shiftKey) {
                              rollAction('Heart', a);
                            } else {
                              setRollRight(`Heart-${a}`);
                            }
                          }}
                        >
                          <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                            {a}
                          </TypographyH4>
                        </div>
                        <Separator />
                      </>
                    ))}
                    {selectedSkillset?.attributes.Heart.map((a, i) => (
                      <>
                        <div
                          key={`ah-${i}`}
                          className="h-10 hover:cursor-pointer group"
                          onClick={(e) => {
                            if (e.shiftKey) {
                              rollAction('Heart', a);
                            } else {
                              setRollRight(`Heart-${a}`);
                            }
                          }}
                        >
                          <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                            {a}
                          </TypographyH4>
                        </div>
                        <Separator />
                      </>
                    ))}
                    {selectedArchetype?.attributes.Heart.map((a, i) => (
                      <div
                        key={`ah-${i}`}
                        className="h-10 hover:cursor-pointer group"
                        onClick={(e) => {
                          if (e.shiftKey) {
                            rollAction('Heart', a);
                          } else {
                            setRollRight(`Heart-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                          {a}
                        </TypographyH4>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Heart.map((k) => (
                      <>
                        <ActionScore
                          key={`bh-${k}`}
                          score={attributes.Heart[k]}
                          onChange={(s) => {
                            handleUpdateActionScore('Heart', k, s);
                          }}
                          className="h-10 justify-end"
                        />
                        <Separator />
                      </>
                    ))}
                    {selectedSkillset?.attributes.Heart.map((k) => (
                      <>
                        <ActionScore
                          key={`th-${k}`}
                          score={attributes.Heart[k]}
                          onChange={(s) => {
                            handleUpdateActionScore('Heart', k, s);
                          }}
                          className="h-10 justify-end"
                        />
                        <Separator />
                      </>
                    ))}
                    {selectedArchetype?.attributes.Heart.map((k) => (
                      <ActionScore
                        key={`arh-${k}`}
                        score={attributes.Heart[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Heart', k, s);
                        }}
                        className="h-10 justify-end"
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b-[1px]">
                  <div
                    className="hover:cursor-pointer group border-r-[1px] pt-8"
                    onClick={() => {
                      rollAttribute('Instinct');
                    }}
                  >
                    <TypographyH3 className="group-hover:underline">
                      Instinct <Activity className="inline mb-2" />
                    </TypographyH3>
                  </div>
                  <BuildupCheckboxes
                    key={`instinctXp${new Date().getTime()}`}
                    max={6}
                    current={instinctXp}
                    onChange={(n) => {
                      setInstinctXp(n);
                      setChanges(true);
                    }}
                    className="items-center mt-auto mb-2"
                  />
                </div>
                <div className="grid grid-cols-4 mx-2">
                  <div className="flex flex-col">
                    <div
                      className="h-10 flex items-center hover:cursor-pointer group"
                      onClick={(e) => {
                        if (e.shiftKey) {
                          rollAction('Instinct', 'Charge');
                        } else {
                          setRollLeft('Instinct-Charge');
                        }
                      }}
                    >
                      <TypographyH4 className="group-hover:underline">
                        Charge
                      </TypographyH4>
                    </div>
                    <Separator />
                    <div
                      className="h-10 flex items-center hover:cursor-pointer group"
                      onClick={(e) => {
                        if (e.shiftKey) {
                          rollAction('Instinct', 'Prowl');
                        } else {
                          setRollLeft('Instinct-Prowl');
                        }
                      }}
                    >
                      <TypographyH4 className="group-hover:underline">
                        Prowl
                      </TypographyH4>
                    </div>
                  </div>
                  <div className="flex flex-col border-r-[1px]">
                    <ActionScore
                      key={`charge${new Date().getTime()}`}
                      score={attributes.Instinct.Charge}
                      onChange={(s) => {
                        handleUpdateActionScore('Instinct', 'Charge', s);
                      }}
                      className="h-10 justify-end mr-2"
                    />
                    <Separator />
                    <ActionScore
                      key={`prowl${new Date().getTime()}`}
                      score={attributes.Instinct.Prowl}
                      onChange={(s) => {
                        handleUpdateActionScore('Instinct', 'Prowl', s);
                      }}
                      className="h-10 justify-end mr-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Instinct.map((a, i) => (
                      <>
                        <div
                          key={`ai-${i}`}
                          className="h-10 hover:cursor-pointer group"
                          onClick={(e) => {
                            if (e.shiftKey) {
                              rollAction('Instinct', a);
                            } else {
                              setRollRight(`Instinct-${a}`);
                            }
                          }}
                        >
                          <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                            {a}
                          </TypographyH4>
                        </div>
                        <Separator />
                      </>
                    ))}
                    {selectedSkillset?.attributes.Instinct.map((a, i) => (
                      <>
                        <div
                          key={`ai-${i}`}
                          className="h-10 hover:cursor-pointer group"
                          onClick={(e) => {
                            if (e.shiftKey) {
                              rollAction('Instinct', a);
                            } else {
                              setRollRight(`Instinct-${a}`);
                            }
                          }}
                        >
                          <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                            {a}
                          </TypographyH4>
                        </div>
                        <Separator />
                      </>
                    ))}
                    {selectedArchetype?.attributes.Instinct.map((a, i) => (
                      <div
                        key={`ai-${i}`}
                        className="h-10 hover:cursor-pointer group"
                        onClick={(e) => {
                          if (e.shiftKey) {
                            rollAction('Instinct', a);
                          } else {
                            setRollRight(`Instinct-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                          {a}
                        </TypographyH4>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Instinct.map((k) => (
                      <>
                        <ActionScore
                          key={`bi-${k}`}
                          score={attributes.Instinct[k]}
                          onChange={(s) => {
                            handleUpdateActionScore('Instinct', k, s);
                          }}
                          className="h-10 justify-end"
                        />
                        <Separator />
                      </>
                    ))}
                    {selectedSkillset?.attributes.Instinct.map((k) => (
                      <>
                        <ActionScore
                          key={`ti-${k}`}
                          score={attributes.Instinct[k]}
                          onChange={(s) => {
                            handleUpdateActionScore('Instinct', k, s);
                          }}
                          className="h-10 justify-end"
                        />
                        <Separator />
                      </>
                    ))}
                    {selectedArchetype?.attributes.Instinct.map((k) => (
                      <ActionScore
                        key={`ari-${k}`}
                        score={attributes.Instinct[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Instinct', k, s);
                        }}
                        className="h-10 justify-end"
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b-[1px]">
                  <div
                    className="hover:cursor-pointer group border-r-[1px] pt-8"
                    onClick={() => {
                      rollAttribute('Machina');
                    }}
                  >
                    <TypographyH3 className="group-hover:underline">
                      Machina <VenetianMask className="inline mb-1" />
                    </TypographyH3>
                  </div>
                  <BuildupCheckboxes
                    key={`machinaXp${new Date().getTime()}`}
                    max={6}
                    current={machinaXp}
                    onChange={(n) => {
                      setMachinaXp(n);
                      setChanges(true);
                    }}
                    className="items-center mt-auto mb-2"
                  />
                </div>
                <div className="grid grid-cols-4 mx-2">
                  <div className="flex flex-col">
                    <div
                      className="h-10 flex items-center hover:cursor-pointer group"
                      onClick={(e) => {
                        if (e.shiftKey) {
                          rollAction('Machina', 'Suggest');
                        } else {
                          setRollLeft('Machina-Suggest');
                        }
                      }}
                    >
                      <TypographyH4 className="group-hover:underline">
                        Suggest
                      </TypographyH4>
                    </div>
                    <Separator />
                    <div
                      className="h-10 flex items-center hover:cursor-pointer group"
                      onClick={(e) => {
                        if (e.shiftKey) {
                          rollAction('Machina', 'Survey');
                        } else {
                          setRollLeft('Machina-Survey');
                        }
                      }}
                    >
                      <TypographyH4 className="group-hover:underline">
                        Survey
                      </TypographyH4>
                    </div>
                  </div>
                  <div className="flex flex-col border-r-[1px]">
                    <ActionScore
                      key={`suggest${new Date().getTime()}`}
                      score={attributes.Machina.Suggest}
                      onChange={(s) => {
                        handleUpdateActionScore('Machina', 'Suggest', s);
                      }}
                      className="h-10 justify-end mr-2"
                    />
                    <Separator />
                    <ActionScore
                      key={`survey${new Date().getTime()}`}
                      score={attributes.Machina.Survey}
                      onChange={(s) => {
                        handleUpdateActionScore('Machina', 'Survey', s);
                      }}
                      className="h-10 justify-end mr-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Machina.map((a, i) => (
                      <>
                        <div
                          key={`am-${i}`}
                          className="h-10 hover:cursor-pointer group"
                          onClick={(e) => {
                            if (e.shiftKey) {
                              rollAction('Machina', a);
                            } else {
                              setRollRight(`Machina-${a}`);
                            }
                          }}
                        >
                          <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                            {a}
                          </TypographyH4>
                        </div>
                        <Separator />
                      </>
                    ))}
                    {selectedSkillset?.attributes.Machina.map((a, i) => (
                      <>
                        <div
                          key={`am-${i}`}
                          className="h-10 hover:cursor-pointer group"
                          onClick={(e) => {
                            if (e.shiftKey) {
                              rollAction('Machina', a);
                            } else {
                              setRollRight(`Machina-${a}`);
                            }
                          }}
                        >
                          <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                            {a}
                          </TypographyH4>
                        </div>
                        <Separator />
                      </>
                    ))}
                    {selectedArchetype?.attributes.Machina.map((a, i) => (
                      <div
                        key={`am-${i}`}
                        className="h-10 hover:cursor-pointer group"
                        onClick={(e) => {
                          if (e.shiftKey) {
                            rollAction('Machina', a);
                          } else {
                            setRollRight(`Machina-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                          {a}
                        </TypographyH4>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Machina.map((k) => (
                      <>
                        <ActionScore
                          key={`bm-${k}`}
                          score={attributes.Machina[k]}
                          onChange={(s) => {
                            handleUpdateActionScore('Machina', k, s);
                          }}
                          className="h-10 justify-end"
                        />
                        <Separator />
                      </>
                    ))}
                    {selectedSkillset?.attributes.Machina.map((k) => (
                      <>
                        <ActionScore
                          key={`tm-${k}`}
                          score={attributes.Machina[k]}
                          onChange={(s) => {
                            handleUpdateActionScore('Machina', k, s);
                          }}
                          className="h-10 justify-end"
                        />
                        <Separator />
                      </>
                    ))}
                    {selectedArchetype?.attributes.Machina.map((k) => (
                      <ActionScore
                        key={`arm-${k}`}
                        score={attributes.Machina[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Machina', k, s);
                        }}
                        className="h-10 justify-end"
                      />
                    ))}
                  </div>
                </div>
                <Card className="mt-4 p-4 flex flex-col gap-4">
                  <TypographyP className="text-muted-foreground text-xs">
                    select two skills to roll or shift+click a skill to roll it
                  </TypographyP>
                  <div className="flex gap-4">
                    <Select
                      value={rollLeft}
                      onValueChange={(value) => {
                        setRollLeft(value);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Heart-Defy">Defy</SelectItem>
                        <SelectItem value="Heart-Persuade">Persuade</SelectItem>
                        <SelectItem value="Instinct-Charge">Charge</SelectItem>
                        <SelectItem value="Instinct-Prowl">Prowl</SelectItem>
                        <SelectItem value="Machina-Suggest">Suggest</SelectItem>
                        <SelectItem value="Machina-Survey">Survey</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      onClick={() => {
                        if (!rollLeft && !rollRight) return;
                        if (!rollLeft) {
                          const [attribute, action] = rollRight.split('-') as [
                            'Heart' | 'Instinct' | 'Machina',
                            string
                          ];
                          rollAction(attribute, action);
                        } else if (!rollRight) {
                          const [attribute, action] = rollLeft.split('-') as [
                            'Heart' | 'Instinct' | 'Machina',
                            string
                          ];
                          rollAction(attribute, action);
                        }
                        const [attributeLeft, actionLeft] = rollLeft.split(
                          '-'
                        ) as ['Heart' | 'Instinct' | 'Machina', string];
                        const [attributeRight, actionRight] = rollRight.split(
                          '-'
                        ) as ['Heart' | 'Instinct' | 'Machina', string];
                        rollComboMission(
                          attributeLeft,
                          actionLeft,
                          attributeRight,
                          actionRight
                        );
                        setRollLeft('');
                        setRollRight('');
                        setBonusDice(0);
                      }}
                      className="flex items-center gap-2"
                    >
                      <Dices /> Roll
                    </Button>
                    <Select
                      value={rollRight}
                      onValueChange={(value) => {
                        setRollRight(value);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedBackground?.attributes.Heart.map((a, i) => (
                          <SelectItem key={i} value={`Heart-${a}`}>
                            {a}
                          </SelectItem>
                        ))}
                        {selectedSkillset?.attributes.Heart.map((a, i) => (
                          <SelectItem key={i} value={`Heart-${a}`}>
                            {a}
                          </SelectItem>
                        ))}
                        {selectedArchetype?.attributes.Heart.map((a, i) => (
                          <SelectItem key={i} value={`Heart-${a}`}>
                            {a}
                          </SelectItem>
                        ))}
                        {selectedBackground?.attributes.Instinct.map((a, i) => (
                          <SelectItem key={i} value={`Instinct-${a}`}>
                            {a}
                          </SelectItem>
                        ))}
                        {selectedSkillset?.attributes.Instinct.map((a, i) => (
                          <SelectItem key={i} value={`Instinct-${a}`}>
                            {a}
                          </SelectItem>
                        ))}
                        {selectedArchetype?.attributes.Instinct.map((a, i) => (
                          <SelectItem key={i} value={`Instinct-${a}`}>
                            {a}
                          </SelectItem>
                        ))}
                        {selectedBackground?.attributes.Machina.map((a, i) => (
                          <SelectItem key={i} value={`Machina-${a}`}>
                            {a}
                          </SelectItem>
                        ))}
                        {selectedSkillset?.attributes.Machina.map((a, i) => (
                          <SelectItem key={i} value={`Machina-${a}`}>
                            {a}
                          </SelectItem>
                        ))}
                        {selectedArchetype?.attributes.Machina.map((a, i) => (
                          <SelectItem key={i} value={`Machina-${a}`}>
                            {a}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="controlled">Controlled</SelectItem>
                        <SelectItem value="risky">Risky</SelectItem>
                        <SelectItem value="desperate">Desperate</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Effect" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="great">Great</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="limited">Limited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-4 justify-between flex-wrap">
                    <div className="flex gap-4">
                      <div>
                        <Label htmlFor="bonus-dice">Bonus Dice</Label>
                        <Input
                          id="bonus-dice"
                          type="number"
                          className="w-20"
                          min={0}
                          value={bonusDice}
                          onChange={(e) => {
                            setBonusDice(parseInt(e.target.value));
                          }}
                        />
                      </div>
                      <div className="text-muted-foreground text-xs leading-3 mt-2">
                        <span>
                          You can gain bonus dice through:{' '}
                          <ul className="italic mx-2">
                            <li>teamwork</li>
                            <li>push yourself</li>
                            <li>devil&apos;s bargain</li>
                            <li>special ability</li>
                          </ul>
                        </span>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="fortune-dice">Fortune Dice</Label>
                      <div className="flex gap-4">
                        <Input
                          id="fortune-dice"
                          type="number"
                          className="w-20"
                          min={0}
                          value={fortuneDice}
                          onChange={(e) => {
                            setFortuneDice(parseInt(e.target.value));
                          }}
                        />
                        <Button
                          onClick={() => {
                            let dice = [];
                            for (let i = 0; i < fortuneDice; i++) {
                              dice.push(2);
                            }
                            rollCombo('Fortune', '', dice);
                            setFortuneDice(0);
                          }}
                        >
                          Fortune Roll
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
                <div className="flex justify-between gap-4 mt-4">
                  <TypographyH3 className="text-sm text-muted-foreground">
                    Experience
                  </TypographyH3>
                  <BuildupCheckboxes
                    key={`xp${new Date().getTime()}`}
                    max={8}
                    current={skillsetXp}
                    onChange={(n) => {
                      setSkillsetXp(n);
                      setChanges(true);
                    }}
                  />
                </div>
                <Separator />
                <div className="flex justify-between gap-4 mt-2">
                  <TypographyH3 className="text-sm text-muted-foreground">
                    Stress
                  </TypographyH3>
                  <BuildupCheckboxes
                    key={`stress${new Date().getTime()}`}
                    max={9}
                    current={stress}
                    onChange={(n) => {
                      setStress(n);
                      setChanges(true);
                    }}
                  />
                </div>
                <div className="flex gap-4 flex-wrap">
                  <div className="flex gap-4 flex-wrap mt-2">
                    <TypographyH4 className="text-sm text-muted-foreground">
                      Conditions
                    </TypographyH4>
                    {['Insecure', 'Afraid', 'Angry', 'Hopeless', 'Guilty'].map(
                      (c) => (
                        <Condition
                          key={`${c}${new Date().getTime()}`}
                          name={c}
                          active={conditions.includes(c)}
                          onClick={() => {
                            if (conditions.includes(c)) {
                              setConditions(
                                conditions.filter((con) => con !== c)
                              );
                            } else {
                              setConditions([...conditions, c]);
                            }
                            setChanges(true);
                          }}
                        />
                      )
                    )}
                    <div className="flex-shrink-0 ml-auto basis-[100px] border-[1px] border-border rounded-md p-1 flex items-center select-none">
                      <Clock
                        key={`conditionRecovery${new Date().getTime()}`}
                        max={8}
                        current={conditionRecovery}
                        size={35}
                        setVal={(n) => {
                          setConditionRecovery(n);
                          setChanges(true);
                        }}
                      />
                      <span className="text-xs text-muted-foreground text-center w-full">
                        recovery
                      </span>
                    </div>
                  </div>
                  <Separator />
                </div>
                <div className="flex items-end mt-4 justify-between">
                  <TypographyH3 className="text-sm text-muted-foreground">
                    Harm
                  </TypographyH3>
                  <div className="flex-shrink-0 border-[1px] max-w-[100px] border-border rounded-t-md p-1 select-none flex items-center ">
                    <Clock
                      key={`healing${new Date().getTime()}`}
                      max={4}
                      current={healing}
                      size={35}
                      setVal={(n) => {
                        setHealing(n);
                        setChanges(true);
                      }}
                    />
                    <span className="text-xs text-muted-foreground text-center w-full">
                      healing
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="bg-secondary p-2 h-10 w-6 shrink-0">3</span>
                  <Input
                    className="rounded-none"
                    value={harm3}
                    onChange={(e) => {
                      setHarm3(e.target.value);
                      handleDebounceChange();
                    }}
                  />
                  <span className="bg-secondary p-1.5 h-10 w-16 text-xs text-center shrink-0">
                    NEED HELP
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="bg-secondary p-2 h-10 w-6 shrink-0">2</span>
                  <Input
                    className="rounded-none"
                    value={harm2[0]}
                    onChange={(e) => {
                      setHarm2([e.target.value, harm2[1]]);
                      handleDebounceChange();
                    }}
                  />
                  <Input
                    className="rounded-none"
                    value={harm2[1]}
                    onChange={(e) => {
                      setHarm2([harm2[0], e.target.value]);
                      handleDebounceChange();
                    }}
                  />
                  <span className="bg-secondary px-1.5 py-3 h-10 w-16 text-xs text-center shrink-0">
                    -1D
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="bg-secondary p-2 h-10 w-6 shrink-0">1</span>
                  <Input
                    className="rounded-none"
                    value={harm1[0]}
                    disabled={true}
                    onChange={(e) => {
                      setHarm1([e.target.value, harm1[1]]);
                      handleDebounceChange();
                    }}
                  />
                  <Input
                    className="rounded-none"
                    value={harm1[1]}
                    onChange={(e) => {
                      setHarm1([harm1[0], e.target.value]);
                      handleDebounceChange();
                    }}
                  />
                  <span className="bg-secondary p-1.5 h-10 w-16 text-xs text-center shrink-0">
                    LESS EFFECT
                  </span>
                </div>
                <div className="border-[1px] border-border rounded-b-md py-1.5 px-4 select-none flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={armor}
                      onCheckedChange={() => {
                        setArmor(!armor);
                        setChanges(true);
                      }}
                    />
                    Armor
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={hArmor}
                      onCheckedChange={() => {
                        setHArmor(!hArmor);
                        setChanges(true);
                      }}
                    />{' '}
                    Heavy
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={sArmor}
                      onCheckedChange={() => {
                        setSArmor(!sArmor);
                        setChanges(true);
                      }}
                    />{' '}
                    Special
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="profile" className="w-full">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="look">Look</Label>
              <Textarea id="look" />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="dream">What&apos;s your dream?</Label>
              <Textarea id="dream" />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="faith">What do you have faith in?</Label>
              <Textarea id="faith" />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="hurt">What&apos;s your hurt?</Label>
              <Textarea id="look" />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="option">
                What has shown you that there&apos;s no other option?
              </Label>
              <Textarea id="option" />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="bloodshed" className="text-red-700">
                Will there be bloodshed?
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nootherway" className="ml-4">
                    There... is no other way.
                  </SelectItem>
                  <SelectItem value="maybenootherway" className="ml-4">
                    I hope not... but there may be no other way.
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Separator className="my-3"></Separator>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
            {selectedHeritage?.remembrance && (
              <div className="w-full gap-1.5 my-2">
                <Label
                  htmlFor="remembrance"
                  className="text-sky-500 box-border"
                >
                  {selectedHeritage?.remembrance}
                </Label>
                <Textarea id="remembrance" />
              </div>
            )}
            {selectedBackground?.questions?.map((q, i) => (
              <div key={`q-${i}`} className="w-full gap-1.5 my-2">
                <Label htmlFor={`q-${i}`} className="text-red-500 box-border">
                  {q}
                </Label>
                <Textarea id={`q-${i}`} />
              </div>
            ))}
            {selectedSkillset?.questions?.map((q, i) => (
              <div key={`q-${i}`} className="w-full gap-1.5 my-2">
                <Label htmlFor={`q-${i}`} className="text-indigo-500 ">
                  {q}
                </Label>
                <Textarea id={`q-${i}`} />
              </div>
            ))}
            {selectedArchetype?.questions.map((q, i) => (
              <div key={`q-${i}`} className="w-full gap-1.5 my-2">
                <Label htmlFor={`q-${i}`} className="text-amber-700 box-border">
                  {q}
                </Label>
                <Textarea id={`q-${i}`} />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="churn" className="w-full">
          <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-6 focus-visible:outline-none">
            <div className="my-3">
              <TypographyH2 className="mt-4">Bonds</TypographyH2>
              <TypographyH3 className="mt-4 text-sm text-muted-foreground">
                Personal
              </TypographyH3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Input
                  value={bonds.Personal[0].name}
                  onChange={(e) => {
                    setBonds({
                      Personal: [
                        {
                          name: e.target.value,
                          score: bonds.Personal[0].score,
                        },
                        {
                          name: bonds.Personal[1].name,
                          score: bonds.Personal[1].score,
                        },
                      ],
                      Familial: bonds.Familial,
                      Professional: bonds.Professional,
                    });
                    setChanges(true);
                  }}
                />
                <Input
                  value={bonds.Personal[1].name}
                  onChange={(e) => {
                    setBonds({
                      Personal: [
                        {
                          name: bonds.Personal[0].name,
                          score: bonds.Personal[0].score,
                        },
                        {
                          name: e.target.value,
                          score: bonds.Personal[1].score,
                        },
                      ],
                      Familial: bonds.Familial,
                      Professional: bonds.Professional,
                    });
                    setChanges(true);
                  }}
                />
              </div>
              <TypographyH3 className="mt-4 text-sm text-muted-foreground">
                Familial
              </TypographyH3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Input
                  value={bonds.Familial[0].name}
                  onChange={(e) => {
                    setBonds({
                      Personal: bonds.Personal,
                      Familial: [
                        {
                          name: e.target.value,
                          score: bonds.Familial[0].score,
                        },
                        {
                          name: bonds.Familial[1].name,
                          score: bonds.Familial[1].score,
                        },
                      ],
                      Professional: bonds.Professional,
                    });
                    setChanges(true);
                  }}
                />
                <Input
                  value={bonds.Familial[1].name}
                  onChange={(e) => {
                    setBonds({
                      Personal: bonds.Personal,
                      Familial: [
                        {
                          name: bonds.Familial[0].name,
                          score: bonds.Familial[0].score,
                        },
                        {
                          name: e.target.value,
                          score: bonds.Familial[1].score,
                        },
                      ],
                      Professional: bonds.Professional,
                    });
                    setChanges(true);
                  }}
                />
              </div>
              <TypographyH3 className="mt-4 text-sm text-muted-foreground">
                Professional
              </TypographyH3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <TypographyP className="m-2">
                  {selectedBackground?.professionalBonds?.[0].name}:{' '}
                  <span className="text-muted-foreground text-xs">
                    {selectedBackground?.professionalBonds?.[0].description}
                  </span>
                </TypographyP>
                <TypographyP className="m-2">
                  {selectedBackground?.professionalBonds?.[1].name}:{' '}
                  <span className="text-muted-foreground text-xs">
                    {selectedBackground?.professionalBonds?.[1].description}
                  </span>
                </TypographyP>
              </div>
              <TypographyH2 className="mt-4 flex items-end justify-between">
                Subsistence{' '}
                <div className="flex gap-4">
                  <div className="w-[120px] border-[1px] border-border rounded-md p-1 flex items-center select-none">
                    <Clock
                      key={`subsist${new Date().getTime()}`}
                      max={8}
                      current={subsist}
                      size={35}
                      setVal={(n) => {
                        setSubsist(n);
                        setChanges(true);
                      }}
                    />
                    <span className="text-xs text-muted-foreground text-center w-full">
                      {selectedBackground?.subsistenceClock}
                    </span>
                  </div>
                  <div className="w-[120px] border-[1px] border-border rounded-md p-1 flex items-center select-none">
                    <Clock
                      key={`starvation${new Date().getTime()}`}
                      max={5}
                      current={starvation}
                      size={35}
                      setVal={(n) => {
                        setStarvation(n);
                        setChanges(true);
                      }}
                    />
                    <span className="text-xs text-muted-foreground text-center w-full">
                      starvation
                    </span>
                  </div>
                </div>
              </TypographyH2>
              <TypographyH3 className="text-sm text-muted-foreground mt-4">
                Critical Benefit (
                <span className="text-red-500">{selectedBackground?.name}</span>
                )
              </TypographyH3>
              <Crit background={selectedBackground?.name || ''} />
              <TypographyH3 className="text-sm text-muted-foreground mt-4">
                Failure Consequences (
                <span className="text-red-500">{selectedBackground?.name}</span>
                )
              </TypographyH3>
              <TypographyP>Choose one:</TypographyP>
              <Consequences background={selectedBackground?.name || ''} />
              <TypographyH2 className="mt-4">Agendas</TypographyH2>
              {selectedSkillset && (
                <TypographyP>
                  {selectedSkillset.agendas} (
                  <span className="text-sm text-indigo-500">
                    <Link href={`/game/skillsets#${selectedSkillset.name}`}>
                      {selectedSkillset.name}&apos;s Agenda
                    </Link>
                  </span>
                  )
                </TypographyP>
              )}
              <TypographyH2 className="mt-4">Downtime</TypographyH2>
              <TypographyH3 className="text-sm text-muted-foreground mt-4">
                Universal Activities
              </TypographyH3>
              <div className="ml-2">
                <DowntimeActionsAccordion />
              </div>
              <TypographyH3 className="text-sm text-muted-foreground mt-4">
                Abilities (
                <span className="text-indigo-500">
                  {selectedSkillset?.name || 'Skillset'}
                </span>
                )
              </TypographyH3>
              <div className="ml-2">
                <Abilities
                  abilities={selectedSkillset?.abilities?.downtime || []}
                  characterAbilities={abilities}
                  setCharacterAbilities={setAbilities}
                  setChanges={setChanges}
                />
              </div>
              <TypographyH3 className="text-sm text-muted-foreground mt-4">
                Abilities (
                <span className="text-amber-700">
                  {selectedArchetype?.name || 'Archetype'}
                </span>
                )
              </TypographyH3>
              <div className="ml-2">
                <Abilities
                  abilities={selectedArchetype?.abilities?.downtime || []}
                  characterAbilities={abilities}
                  setCharacterAbilities={setAbilities}
                  setChanges={setChanges}
                />
              </div>
            </div>
            <div className="my-3 flex flex-col">
              <div className="grid grid-cols-2 border-b-[1px]">
                <div
                  className="hover:cursor-pointer group border-r-[1px] mt-8"
                  onClick={() => {
                    rollAttribute('Heart', 'churn');
                  }}
                >
                  <TypographyH3 className="group-hover:underline">
                    Heart <Flame className="inline mb-2" />
                  </TypographyH3>
                </div>
                <BuildupCheckboxes
                  key={`heartXp${new Date().getTime()}`}
                  max={6}
                  current={heartXp}
                  onChange={(n) => {
                    setHeartXp(n);
                    setChanges(true);
                  }}
                  className="items-center mt-auto mb-2"
                />
              </div>
              <div className="grid grid-cols-4 mx-2">
                <div className="flex flex-col">
                  <div
                    className="h-10 flex items-center hover:cursor-pointer group"
                    onClick={(e) => {
                      if (e.shiftKey) {
                        rollBond(bonds.Personal[0]);
                      } else {
                        setRollLeft(`Personal-${bonds.Personal[0].name}`);
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline">
                      {bonds.Personal[0].name}
                    </TypographyH4>
                  </div>
                  <Separator />
                  <div
                    className="h-10 flex items-center hover:cursor-pointer group"
                    onClick={(e) => {
                      if (e.shiftKey) {
                        rollBond(bonds.Personal[1]);
                      } else {
                        setRollLeft(`Personal-${bonds.Personal[1].name}`);
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline">
                      {bonds.Personal[1].name}
                    </TypographyH4>
                  </div>
                </div>
                <div className="flex flex-col  border-r-[1px]">
                  <ActionScore
                    key={`per0${new Date().getTime()}`}
                    score={bonds.Personal[0].score}
                    onChange={(s) => {
                      setBonds({
                        Personal: [
                          {
                            name: bonds.Personal[0].name,
                            score: s,
                          },
                          {
                            name: bonds.Personal[1].name,
                            score: bonds.Personal[1].score,
                          },
                        ],
                        Familial: bonds.Familial,
                        Professional: bonds.Professional,
                      });
                      setChanges(true);
                    }}
                    className="h-10 justify-end mr-2"
                  />
                  <Separator />
                  <ActionScore
                    key={`per1${new Date().getTime()}`}
                    score={bonds.Personal[1].score}
                    onChange={(s) => {
                      setBonds({
                        Personal: [
                          {
                            name: bonds.Personal[0].name,
                            score: bonds.Personal[0].score,
                          },
                          {
                            name: bonds.Personal[1].name,
                            score: s,
                          },
                        ],
                        Familial: bonds.Familial,
                        Professional: bonds.Professional,
                      });
                      setChanges(true);
                    }}
                    className="h-10 justify-end mr-2"
                  />
                </div>
                <div className="flex flex-col">
                  {selectedBackground?.attributes.Heart.map((a, i) => (
                    <>
                      <div
                        key={`ah-${i}`}
                        className="h-10 hover:cursor-pointer group"
                        onClick={(e) => {
                          if (e.shiftKey) {
                            rollAction('Heart', a);
                          } else {
                            setRollRight(`Heart-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                          {a}
                        </TypographyH4>
                      </div>
                      <Separator />
                    </>
                  ))}
                  {selectedSkillset?.attributes.Heart.map((a, i) => (
                    <>
                      <div
                        key={`ah-${i}`}
                        className="h-10 hover:cursor-pointer group"
                        onClick={(e) => {
                          if (e.shiftKey) {
                            rollAction('Heart', a);
                          } else {
                            setRollRight(`Heart-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                          {a}
                        </TypographyH4>
                      </div>
                      <Separator />
                    </>
                  ))}
                  {selectedArchetype?.attributes.Heart.map((a, i) => (
                    <div
                      key={`ah-${i}`}
                      className="h-10 hover:cursor-pointer group"
                      onClick={(e) => {
                        if (e.shiftKey) {
                          rollAction('Heart', a);
                        } else {
                          setRollRight(`Heart-${a}`);
                        }
                      }}
                    >
                      <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                        {a}
                      </TypographyH4>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  {selectedBackground?.attributes.Heart.map((k) => (
                    <>
                      <ActionScore
                        key={`bh-${k}`}
                        score={attributes.Heart[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Heart', k, s);
                        }}
                        className="h-10 justify-end"
                      />
                      <Separator />
                    </>
                  ))}
                  {selectedSkillset?.attributes.Heart.map((k) => (
                    <>
                      <ActionScore
                        key={`th-${k}`}
                        score={attributes.Heart[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Heart', k, s);
                        }}
                        className="h-10 justify-end"
                      />
                      <Separator />
                    </>
                  ))}
                  {selectedArchetype?.attributes.Heart.map((k) => (
                    <ActionScore
                      key={`arh-${k}`}
                      score={attributes.Heart[k]}
                      onChange={(s) => {
                        handleUpdateActionScore('Heart', k, s);
                      }}
                      className="h-10 justify-end"
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 border-b-[1px]">
                <div
                  className="hover:cursor-pointer group border-r-[1px] pt-8"
                  onClick={() => {
                    rollAttribute('Instinct', 'churn');
                  }}
                >
                  <TypographyH3 className="group-hover:underline">
                    Instinct <Activity className="inline mb-2" />
                  </TypographyH3>
                </div>
                <BuildupCheckboxes
                  key={`instinctXp${new Date().getTime()}`}
                  max={6}
                  current={instinctXp}
                  onChange={(n) => {
                    setInstinctXp(n);
                    setChanges(true);
                  }}
                  className="items-center mt-auto mb-2"
                />
              </div>
              <div className="grid grid-cols-4 mx-2">
                <div className="flex flex-col">
                  <div
                    className="h-10 flex items-center hover:cursor-pointer group"
                    onClick={(e) => {
                      if (e.shiftKey) {
                        rollBond(bonds.Familial[0]);
                      } else {
                        setRollLeft(`Familial-${bonds.Familial[0].name}`);
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline">
                      {bonds.Familial[0].name}
                    </TypographyH4>
                  </div>
                  <Separator />
                  <div
                    className="h-10 flex items-center hover:cursor-pointer group"
                    onClick={(e) => {
                      if (e.shiftKey) {
                        rollBond(bonds.Familial[1]);
                      } else {
                        setRollLeft(`Familial-${bonds.Familial[1].name}`);
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline">
                      {bonds.Familial[1].name}
                    </TypographyH4>
                  </div>
                </div>
                <div className="flex flex-col border-r-[1px]">
                  <ActionScore
                    key={`fam0${new Date().getTime()}`}
                    score={bonds.Familial[0].score}
                    onChange={(s) => {
                      setBonds({
                        Personal: bonds.Personal,
                        Familial: [
                          {
                            name: bonds.Familial[0].name,
                            score: s,
                          },
                          {
                            name: bonds.Familial[1].name,
                            score: bonds.Familial[1].score,
                          },
                        ],
                        Professional: bonds.Professional,
                      });
                    }}
                    className="h-10 justify-end mr-2"
                  />
                  <Separator />
                  <ActionScore
                    key={`fam1${new Date().getTime()}`}
                    score={bonds.Familial[1].score}
                    onChange={(s) => {
                      setBonds({
                        Personal: bonds.Personal,
                        Familial: [
                          {
                            name: bonds.Familial[0].name,
                            score: bonds.Familial[0].score,
                          },
                          {
                            name: bonds.Familial[1].name,
                            score: s,
                          },
                        ],
                        Professional: bonds.Professional,
                      });
                    }}
                    className="h-10 justify-end mr-2"
                  />
                </div>
                <div className="flex flex-col">
                  {selectedBackground?.attributes.Instinct.map((a, i) => (
                    <>
                      <div
                        key={`ai-${i}`}
                        className="h-10 hover:cursor-pointer group"
                        onClick={(e) => {
                          if (e.shiftKey) {
                            rollAction('Instinct', a);
                          } else {
                            setRollRight(`Instinct-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                          {a}
                        </TypographyH4>
                      </div>
                      <Separator />
                    </>
                  ))}
                  {selectedSkillset?.attributes.Instinct.map((a, i) => (
                    <>
                      <div
                        key={`ai-${i}`}
                        className="h-10 hover:cursor-pointer group"
                        onClick={(e) => {
                          if (e.shiftKey) {
                            rollAction('Instinct', a);
                          } else {
                            setRollRight(`Instinct-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                          {a}
                        </TypographyH4>
                      </div>
                      <Separator />
                    </>
                  ))}
                  {selectedArchetype?.attributes.Instinct.map((a, i) => (
                    <div
                      key={`ai-${i}`}
                      className="h-10 hover:cursor-pointer group"
                      onClick={(e) => {
                        if (e.shiftKey) {
                          rollAction('Instinct', a);
                        } else {
                          setRollRight(`Instinct-${a}`);
                        }
                      }}
                    >
                      <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                        {a}
                      </TypographyH4>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  {selectedBackground?.attributes.Instinct.map((k) => (
                    <>
                      <ActionScore
                        key={`bi-${k}`}
                        score={attributes.Instinct[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Instinct', k, s);
                        }}
                        className="h-10 justify-end"
                      />
                      <Separator />
                    </>
                  ))}
                  {selectedSkillset?.attributes.Instinct.map((k) => (
                    <>
                      <ActionScore
                        key={`ti-${k}`}
                        score={attributes.Instinct[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Instinct', k, s);
                        }}
                        className="h-10 justify-end"
                      />
                      <Separator />
                    </>
                  ))}
                  {selectedArchetype?.attributes.Instinct.map((k) => (
                    <ActionScore
                      key={`ari-${k}`}
                      score={attributes.Instinct[k]}
                      onChange={(s) => {
                        handleUpdateActionScore('Instinct', k, s);
                      }}
                      className="h-10 justify-end"
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 border-b-[1px]">
                <div
                  className="hover:cursor-pointer group border-r-[1px] pt-8"
                  onClick={() => {
                    rollAttribute('Machina', 'churn');
                  }}
                >
                  <TypographyH3 className="group-hover:underline">
                    Machina <VenetianMask className="inline mb-1" />
                  </TypographyH3>
                </div>
                <BuildupCheckboxes
                  key={`machinaXp${new Date().getTime()}`}
                  max={6}
                  current={machinaXp}
                  onChange={(n) => {
                    setMachinaXp(n);
                    setChanges(true);
                  }}
                  className="items-center mt-auto mb-2"
                />
              </div>
              <div className="grid grid-cols-4 mx-2">
                <div className="flex flex-col">
                  <div
                    className="h-10 flex items-center hover:cursor-pointer group"
                    onClick={(e) => {
                      if (e.shiftKey) {
                        rollBond(bonds.Professional[0]);
                      } else {
                        setRollLeft(
                          `Professional-${selectedBackground?.professionalBonds?.[0].name}`
                        );
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline">
                      {selectedBackground?.professionalBonds?.[0].name}
                    </TypographyH4>
                  </div>
                  <Separator />
                  <div
                    className="h-10 flex items-center hover:cursor-pointer group"
                    onClick={(e) => {
                      if (e.shiftKey) {
                        rollBond(bonds.Professional[1]);
                      } else {
                        setRollLeft(
                          `Professional-${selectedBackground?.professionalBonds?.[1].name}`
                        );
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline">
                      {selectedBackground?.professionalBonds?.[1]?.name}
                    </TypographyH4>
                  </div>
                </div>
                <div className="flex flex-col border-r-[1px]">
                  <ActionScore
                    key={`pro0${new Date().getTime()}`}
                    score={bonds.Professional[0].score}
                    onChange={(s) => {
                      setBonds({
                        Personal: bonds.Personal,
                        Familial: bonds.Familial,
                        Professional: [
                          {
                            name: bonds.Professional[0].name,
                            score: s,
                          },
                          {
                            name: bonds.Professional[1].name,
                            score: bonds.Professional[1].score,
                          },
                        ],
                      });
                    }}
                    className="h-10 justify-end mr-2"
                  />
                  <Separator />
                  <ActionScore
                    key={`pro1${new Date().getTime()}`}
                    score={bonds.Professional[1].score}
                    onChange={(s) => {
                      setBonds({
                        Personal: bonds.Personal,
                        Familial: bonds.Familial,
                        Professional: [
                          {
                            name: bonds.Professional[0].name,
                            score: bonds.Professional[0].score,
                          },
                          {
                            name: bonds.Professional[1].name,
                            score: s,
                          },
                        ],
                      });
                    }}
                    className="h-10 justify-end mr-2"
                  />
                </div>
                <div className="flex flex-col">
                  {selectedBackground?.attributes.Machina.map((a, i) => (
                    <>
                      <div
                        key={`am-${i}`}
                        className="h-10 hover:cursor-pointer group"
                        onClick={(e) => {
                          if (e.shiftKey) {
                            rollAction('Machina', a);
                          } else {
                            setRollRight(`Machina-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                          {a}
                        </TypographyH4>
                      </div>
                      <Separator />
                    </>
                  ))}
                  {selectedSkillset?.attributes.Machina.map((a, i) => (
                    <>
                      <div
                        key={`am-${i}`}
                        className="h-10 hover:cursor-pointer group"
                        onClick={(e) => {
                          if (e.shiftKey) {
                            rollAction('Machina', a);
                          } else {
                            setRollRight(`Machina-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                          {a}
                        </TypographyH4>
                      </div>
                      <Separator />
                    </>
                  ))}
                  {selectedArchetype?.attributes.Machina.map((a, i) => (
                    <div
                      key={`am-${i}`}
                      className="h-10 hover:cursor-pointer group"
                      onClick={(e) => {
                        if (e.shiftKey) {
                          rollAction('Machina', a);
                        } else {
                          setRollRight(`Machina-${a}`);
                        }
                      }}
                    >
                      <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline">
                        {a}
                      </TypographyH4>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  {selectedBackground?.attributes.Machina.map((k) => (
                    <>
                      <ActionScore
                        key={`bm-${k}`}
                        score={attributes.Machina[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Machina', k, s);
                        }}
                        className="h-10 justify-end"
                      />
                      <Separator />
                    </>
                  ))}
                  {selectedSkillset?.attributes.Machina.map((k) => (
                    <>
                      <ActionScore
                        key={`tm-${k}`}
                        score={attributes.Machina[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Machina', k, s);
                        }}
                        className="h-10 justify-end"
                      />
                      <Separator />
                    </>
                  ))}
                  {selectedArchetype?.attributes.Machina.map((k) => (
                    <ActionScore
                      key={`arm-${k}`}
                      score={attributes.Machina[k]}
                      onChange={(s) => {
                        handleUpdateActionScore('Machina', k, s);
                      }}
                      className="h-10 justify-end"
                    />
                  ))}
                </div>
              </div>
              <Card className="mt-4 p-4 flex flex-col gap-4">
                <TypographyP className="text-muted-foreground text-xs">
                  select two skills to roll or shift+click a skill to roll it
                </TypographyP>
                <div className="flex gap-4">
                  <Select
                    value={rollLeft}
                    onValueChange={(value) => {
                      setRollLeft(value);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {bonds.Personal.map((b, i) => {
                        if (b.name === '') return;
                        return (
                          <SelectItem
                            key={i}
                            value={`Personal-${b.name}`}
                            className="group-hover:underline"
                          >
                            {b.name}
                          </SelectItem>
                        );
                      })}
                      {bonds.Familial.map((b, i) => {
                        if (b.name === '') return;
                        return (
                          <SelectItem
                            key={i}
                            value={`Familial-${b.name}`}
                            className="group-hover:underline"
                          >
                            {b.name}
                          </SelectItem>
                        );
                      })}
                      {selectedBackground?.professionalBonds && [
                        <SelectItem
                          key={0}
                          value={`Professional-${selectedBackground.professionalBonds[0].name}`}
                          className="group-hover:underline"
                        >
                          {selectedBackground.professionalBonds[0].name}
                        </SelectItem>,
                        <SelectItem
                          key={1}
                          value={`Professional-${selectedBackground.professionalBonds[1].name}`}
                          className="group-hover:underline"
                        >
                          {selectedBackground.professionalBonds[1].name}
                        </SelectItem>,
                      ]}
                    </SelectContent>
                  </Select>
                  <Button
                    onClick={() => {
                      if (!rollLeft && !rollRight) return;
                      if (!rollLeft) {
                        const [attribute, action] = rollRight.split('-') as [
                          'Heart' | 'Instinct' | 'Machina',
                          string
                        ];
                        rollAction(attribute, action);
                      } else if (!rollRight) {
                        const [bondType, bondName] = rollLeft.split('-') as [
                          'Personal' | 'Familial' | 'Professional',
                          string
                        ];
                        const b = bonds[bondType].find(
                          (b) => b.name === bondName
                        );
                        if (b) rollBond(b);
                      } else {
                        const [bondType, bondName] = rollLeft.split('-') as [
                          'Personal' | 'Familial' | 'Professional',
                          string
                        ];
                        const b = bonds[bondType].find(
                          (b) => b.name === bondName
                        );
                        const [attributeRight, actionRight] = rollRight.split(
                          '-'
                        ) as ['Heart' | 'Instinct' | 'Machina', string];
                        if (b) {
                          rollComboChurn(b, attributeRight, actionRight);
                        }
                      }

                      setRollLeft('');
                      setRollRight('');
                    }}
                    className="flex items-center gap-2"
                  >
                    <Dices /> Roll
                  </Button>
                  <Select
                    value={rollRight}
                    onValueChange={(value) => {
                      setRollRight(value);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedBackground?.attributes.Heart.map((a, i) => (
                        <SelectItem key={i} value={`Heart-${a}`}>
                          {a}
                        </SelectItem>
                      ))}
                      {selectedSkillset?.attributes.Heart.map((a, i) => (
                        <SelectItem key={i} value={`Heart-${a}`}>
                          {a}
                        </SelectItem>
                      ))}
                      {selectedArchetype?.attributes.Heart.map((a, i) => (
                        <SelectItem key={i} value={`Heart-${a}`}>
                          {a}
                        </SelectItem>
                      ))}
                      {selectedBackground?.attributes.Instinct.map((a, i) => (
                        <SelectItem key={i} value={`Instinct-${a}`}>
                          {a}
                        </SelectItem>
                      ))}
                      {selectedSkillset?.attributes.Instinct.map((a, i) => (
                        <SelectItem key={i} value={`Instinct-${a}`}>
                          {a}
                        </SelectItem>
                      ))}
                      {selectedArchetype?.attributes.Instinct.map((a, i) => (
                        <SelectItem key={i} value={`Instinct-${a}`}>
                          {a}
                        </SelectItem>
                      ))}
                      {selectedBackground?.attributes.Machina.map((a, i) => (
                        <SelectItem key={i} value={`Machina-${a}`}>
                          {a}
                        </SelectItem>
                      ))}
                      {selectedSkillset?.attributes.Machina.map((a, i) => (
                        <SelectItem key={i} value={`Machina-${a}`}>
                          {a}
                        </SelectItem>
                      ))}
                      {selectedArchetype?.attributes.Machina.map((a, i) => (
                        <SelectItem key={i} value={`Machina-${a}`}>
                          {a}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="controlled">Controlled</SelectItem>
                      <SelectItem value="risky">Risky</SelectItem>
                      <SelectItem value="desperate">Desperate</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Effect" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="great">Great</SelectItem>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="limited">Limited</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-4 justify-between flex-wrap">
                  <div className="flex gap-4">
                    <div>
                      <Label htmlFor="bonus-dice">Bonus Dice</Label>
                      <Input
                        id="bonus-dice"
                        type="number"
                        className="w-20"
                        min={0}
                        value={bonusDice}
                        onChange={(e) => {
                          setBonusDice(parseInt(e.target.value));
                        }}
                      />
                    </div>
                    <div className="text-muted-foreground text-xs leading-3 mt-2">
                      <span>
                        You can gain bonus dice through:{' '}
                        <ul className="italic mx-2">
                          <li>teamwork</li>
                          <li>push yourself</li>
                          <li>devil&apos;s bargain</li>
                          <li>special ability</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="fortune-dice">Fortune Dice</Label>
                    <div className="flex gap-4">
                      <Input
                        id="fortune-dice"
                        type="number"
                        className="w-20"
                        min={0}
                        value={fortuneDice}
                        onChange={(e) => {
                          setFortuneDice(parseInt(e.target.value));
                        }}
                      />
                      <Button
                        onClick={() => {
                          let dice = [];
                          for (let i = 0; i < fortuneDice; i++) {
                            dice.push(2);
                          }
                          rollCombo('Fortune', '', dice);
                          setFortuneDice(0);
                        }}
                      >
                        Fortune Roll
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
              <div className="flex justify-between gap-4 mt-4">
                <TypographyH3 className="text-sm text-muted-foreground">
                  Experience
                </TypographyH3>
                <BuildupCheckboxes
                  key={`xp${new Date().getTime()}`}
                  max={8}
                  current={skillsetXp}
                  onChange={(n) => {
                    setSkillsetXp(n);
                    setChanges(true);
                  }}
                />
              </div>
              <Separator />
              <div className="flex justify-between gap-4 mt-2">
                <TypographyH3 className="text-sm text-muted-foreground">
                  Stress
                </TypographyH3>
                <BuildupCheckboxes
                  key={`stress${new Date().getTime()}`}
                  max={9}
                  current={stress}
                  onChange={(n) => {
                    setStress(n);
                    setChanges(true);
                  }}
                />
              </div>
              <div className="flex gap-4 flex-wrap">
                <div className="flex gap-4 flex-wrap mt-2">
                  <TypographyH4 className="text-sm text-muted-foreground">
                    Conditions
                  </TypographyH4>
                  {['Insecure', 'Afraid', 'Angry', 'Hopeless', 'Guilty'].map(
                    (c) => (
                      <Condition
                        key={`${c}${new Date().getTime()}`}
                        name={c}
                        active={conditions.includes(c)}
                        onClick={() => {
                          if (conditions.includes(c)) {
                            setConditions(
                              conditions.filter((con) => con !== c)
                            );
                          } else {
                            setConditions([...conditions, c]);
                          }
                          setChanges(true);
                        }}
                      />
                    )
                  )}
                  <div className="flex-shrink-0 ml-auto basis-[100px] border-[1px] border-border rounded-md p-1 flex items-center select-none">
                    <Clock
                      key={`conditionRecovery${new Date().getTime()}`}
                      max={8}
                      current={conditionRecovery}
                      size={35}
                      setVal={(n) => {
                        setConditionRecovery(n);
                        setChanges(true);
                      }}
                    />
                    <span className="text-xs text-muted-foreground text-center w-full">
                      recovery
                    </span>
                  </div>
                </div>
                <Separator />
              </div>
              <div className="flex items-end mt-4 justify-between">
                <TypographyH3 className="text-sm text-muted-foreground">
                  Harm
                </TypographyH3>
                <div className="flex-shrink-0 border-[1px] max-w-[100px] border-border rounded-t-md p-1 select-none flex items-center ">
                  <Clock
                    key={`healing${new Date().getTime()}`}
                    max={4}
                    current={healing}
                    size={35}
                    setVal={(n) => {
                      setHealing(n);
                      setChanges(true);
                    }}
                  />
                  <span className="text-xs text-muted-foreground text-center w-full">
                    healing
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="bg-secondary p-2 h-10 w-6 shrink-0">3</span>
                <Input
                  className="rounded-none"
                  value={harm3}
                  onChange={(e) => {
                    setHarm3(e.target.value);
                    handleDebounceChange();
                  }}
                />
                <span className="bg-secondary p-1.5 h-10 w-16 text-xs text-center shrink-0">
                  NEED HELP
                </span>
              </div>
              <div className="flex items-center">
                <span className="bg-secondary p-2 h-10 w-6 shrink-0">2</span>
                <Input
                  className="rounded-none"
                  value={harm2[0]}
                  onChange={(e) => {
                    setHarm2([e.target.value, harm2[1]]);
                    handleDebounceChange();
                  }}
                />
                <Input
                  className="rounded-none"
                  value={harm2[1]}
                  onChange={(e) => {
                    setHarm2([harm2[0], e.target.value]);
                    handleDebounceChange();
                  }}
                />
                <span className="bg-secondary px-1.5 py-3 h-10 w-16 text-xs text-center shrink-0">
                  -1D
                </span>
              </div>
              <div className="flex items-center">
                <span className="bg-secondary p-2 h-10 w-6 shrink-0">1</span>
                <Input
                  className="rounded-none"
                  value={harm1[0]}
                  disabled={true}
                  onChange={(e) => {
                    setHarm1([e.target.value, harm1[1]]);
                    handleDebounceChange();
                  }}
                />
                <Input
                  className="rounded-none"
                  value={harm1[1]}
                  onChange={(e) => {
                    setHarm1([harm1[0], e.target.value]);
                    handleDebounceChange();
                  }}
                />
                <span className="bg-secondary p-1.5 h-10 w-16 text-xs text-center shrink-0">
                  LESS EFFECT
                </span>
              </div>
              <div className="border-[1px] border-border rounded-b-md py-1.5 px-4 select-none flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={armor}
                    onCheckedChange={() => {
                      setArmor(!armor);
                      setChanges(true);
                    }}
                  />
                  Armor
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={hArmor}
                    onCheckedChange={() => {
                      setHArmor(!hArmor);
                      setChanges(true);
                    }}
                  />{' '}
                  Heavy
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={sArmor}
                    onCheckedChange={() => {
                      setSArmor(!sArmor);
                      setChanges(true);
                    }}
                  />{' '}
                  Special
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
