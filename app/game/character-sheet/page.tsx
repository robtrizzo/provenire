'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
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
import loadouts from '@/public/loadouts.json';
import {
  type Archetype,
  type Skillset,
  type Background,
  type Heritage,
  type Action,
  type Bond,
  CharacterAttributes,
  Bonds,
  Loadout,
  Item,
} from '@/types/game';
import { Button } from '@/components/ui/button';
import { ActionScore } from '@/components/ui/action-score';
import { useToast } from '@/components/ui/use-toast';
import { Die } from '@/components/ui/die';
import { cn, debounce } from '@/lib/utils';
import {
  VenetianMask,
  Flame,
  Activity,
  Dices,
  BookOpen,
  X,
  Cog,
  ShieldAlert,
} from 'lucide-react';
import ActionDescription from '@/components/ui/action-description';
import { Card } from '@/components/ui/card';
import { Condition } from '@/components/ui/condition';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import Abilities from '@/components/ui/abilities/abilities';
import DowntimeActionsAccordion from '@/components/ui/downtime-actions-accordion';
import Crit from '@/components/ui/subsistence/crit/subsistenceCrit';
import Consequences from '@/components/ui/subsistence/consequences/subsistenceConsequences';
import StressCheckboxes from '@/components/ui/stress-checkboxes';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import SaveCharacter from './(components)/save-character';
import LoadCharacter from './(components)/load-character';
import ClearCharacter from './(components)/clear-character';
import ItemsTable from '@/app/game/character-sheet/(components)/items-table';
import BondInput from './(components)/bond-input';
import Clock from '@/components/ui/clock';
import XPClocks from './(components)/xp-clocks';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Close } from '@radix-ui/react-popover';
import XPInfo from './(components)/xp-info';

export default function Charsheet() {
  const [tab, setTab] = useState('mission');

  const [selectedArchetype, setSelectedArchetype] = useState<Archetype>();
  const [selectedSkillset, setSelectedSkillset] = useState<Skillset>();
  const [selectedBackground, setSelectedBackground] = useState<Background>();
  const [selectedHeritage, setSelectedHeritage] = useState<Heritage>();

  const [heritageSelectKey, setHeritageSelectKey] = useState(+new Date());
  const [archetypeSelectKey, setArchetypeSelectKey] = useState(+new Date());
  const [backgroundSelectKey, setBackgroundSelectKey] = useState(+new Date());
  const [skillsetSelectKey, setSkillsetSelectKey] = useState(+new Date());

  const [actionReferencePopopverOpen, setActionReferencePopopverOpen] =
    useState(false);

  const [name, setName] = useState('');
  const [alias, setAlias] = useState('');
  const [univQuestions, setUnivQuestions] = useState<string[]>([
    '',
    '',
    '',
    '',
    '',
  ]);
  const [bloodshedQ, setBloodshedQ] = useState<string>();

  // where this is convenient, the performance is mid
  const [questions, setQuestions] = useState<Map<string, string>>(new Map());

  const xpRef = useRef(0);

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
  const conditionRecoveryRef = useRef(0);

  const [healing, setHealing] = useState<number>(0);
  const [harm3, setHarm3] = useState<string>('');
  const [harm2, setHarm2] = useState<string[]>(['', '']);
  const [harm1, setHarm1] = useState<string[]>(['tired', '']);

  const [armor, setArmor] = useState<boolean>(false);
  const [hArmor, setHArmor] = useState<boolean>(false);
  const [sArmor, setSArmor] = useState<boolean>(false);

  const [loadout, setLoadout] = useState<Loadout>();
  const [items, setItems] = useState<Item[]>([]);

  const [starvation, setStarvation] = useState<number>(0);
  const [subsist, setSubsist] = useState<number>(0);

  const [abilities, setAbilities] = useState<string[]>([]);

  const { toast } = useToast();

  const [changes, setChanges] = useState(false);

  const [rollLeft, setRollLeft] = useState<string>('');
  const [rollRight, setRollRight] = useState<string>('');
  const [resistanceRoll, setResistanceRoll] = useState<
    'Heart' | 'Instinct' | 'Machina' | ''
  >('');
  const [bonusDice, setBonusDice] = useState<number>(0);
  const [fortuneDice, setFortuneDice] = useState<number>(0);

  const [characterLoaded, setCharacterLoaded] = useState<Date>(new Date());

  function triggerCharacterLoaded() {
    setCharacterLoaded(new Date());
  }

  useEffect(() => {
    if (window === undefined) return;
    // read the hash and set the tab
    const hash = window.location.hash;
    if (hash && ['mission', 'profile', 'churn'].includes(hash.substring(1))) {
      setTab(hash.substring(1));
    }
    const data = localStorage.getItem('charsheet');
    if (data) {
      const parsed = JSON.parse(data);
      setName(parsed.name);
      setAlias(parsed.alias);
      setUnivQuestions(parsed.univQuestions);
      setBloodshedQ(parsed.bloodshedQ);
      setSelectedArchetype(parsed.selectedArchetype);
      setSelectedSkillset(parsed.selectedSkillset);
      setSelectedBackground(parsed.selectedBackground);
      setSelectedHeritage(parsed.selectedHeritage);
      setQuestions(new Map(parsed.questions));
      xpRef.current = parsed.xp || 0;
      if (parsed.attributes) {
        setAttributes(parsed.attributes);
      }
      if (parsed.conditions) {
        setConditions(parsed.conditions);
      }
      setStress(parsed.stress || 0);
      conditionRecoveryRef.current = parsed.conditionRecovery || 0;
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
      setLoadout(parsed.loadout);
      setItems(parsed.items);
    } else {
      // if there is no data, set the default values
      setName('');
      setAlias('');
      setUnivQuestions(['', '', '', '', '']);
      setBloodshedQ('');
      setSelectedArchetype(undefined);
      setSelectedSkillset(undefined);
      setSelectedBackground(undefined);
      setSelectedHeritage(undefined);
      setQuestions(new Map());
      xpRef.current = 0;
      setAttributes({
        Heart: { Defy: [0, 0], Persuade: [0, 0] },
        Instinct: { Charge: [0, 0], Prowl: [0, 0] },
        Machina: { Suggest: [0, 0], Survey: [0, 0] },
      });
      setConditions([]);
      setStress(0);
      conditionRecoveryRef.current = 0;
      setHealing(0);
      setHarm3('');
      setHarm2(['', '']);
      setHarm1(['tired', '']);
      setArmor(false);
      setHArmor(false);
      setSArmor(false);
      setAbilities([]);
      setBonds({
        Personal: [
          { name: '', score: [0, 0] },
          { name: '', score: [0, 0] },
        ],
        Familial: [
          { name: '', score: [0, 0] },
          { name: '', score: [0, 0] },
        ],
        Professional: [
          { name: '', score: [0, 0] },
          { name: '', score: [0, 0] },
        ],
      });
      setStarvation(0);
      setSubsist(0);
      setLoadout(undefined);
      setItems([]);
    }
  }, [characterLoaded]);

  // every 0.1 seconds, check if there are changes and save them to local storage and the server
  useEffect(() => {
    const interval = setInterval(() => {
      if (changes) {
        // save to local storage
        const data = {
          name,
          alias,
          univQuestions,
          bloodshedQ,
          selectedArchetype,
          selectedSkillset,
          selectedBackground,
          selectedHeritage,
          questions: Array.from(questions),
          xp: xpRef.current,
          attributes,
          stress,
          conditions,
          conditionRecovery: conditionRecoveryRef.current,
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
          loadout,
          items,
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

  function handleUpdateQuestion(key: string, value: string) {
    if (value === '') {
      // Map.delete mutates and returns a boolean, so we have to get creative to create a copy of the map without the key
      setQuestions(new Map(Array.from(questions).filter(([k]) => k !== key)));
    } else {
      setQuestions(new Map(questions.set(key, value)));
    }
    handleDebounceChange();
  }

  function handleUpdateItemName(index: number, value: string) {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], name: value };
    setItems(newItems);
    handleDebounceChange();
  }
  function handleUpdateItemSlots(index: number, value: number) {
    const newValue = value < 0 ? 0 : value;
    const newItems = [...items];
    newItems[index] = { ...newItems[index], slots: newValue };
    setItems(newItems);
    handleDebounceChange();
  }

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
          <div className="flex items-center gap-1">
            <span className="mt-1">
              Rolled {action1} + {action2}
            </span>
            <Die roll={r1} className="h-10 w-10" />
            <Die roll={r2} className="h-10 w-10" />
          </div>
        ),
        description: (
          <div className="flex gap-4 items-center">
            <Die roll={result} className="h-10 w-10" />
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
        <div className="flex items-center flex-wrap gap-1">
          <span className="mt-1">
            Rolled {action1}
            {action2 ? ` + ${action2}` : ''}
          </span>
          {redRolls.map((r, i) => (
            <Die key={i} roll={r} className="h-8 w-8 text-red-800" />
          ))}
          {blueRolls.map((r, i) => (
            <Die key={i} roll={r} className="h-8 w-8 text-blue-800" />
          ))}
        </div>
      ),
      description: (
        <div className="flex items-center gap-4">
          {crit ? (
            [
              redRolls
                .filter((r) => r === 6)
                .map((r, i) => (
                  <Die key={i} roll={r} className="h-10 w-10 text-red-400" />
                )),
              blueRolls
                .filter((r) => r === 6)
                .map((r, i) => (
                  <Die key={i} roll={r} className="h-10 w-10 text-blue-400" />
                )),
            ]
          ) : (
            <Die
              roll={result}
              className={cn(
                'h-10 w-10',
                blueHigher ? 'text-blue-400' : 'text-red-400'
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

  function rollResistChurn(
    bond: Bond,
    attribute: 'Heart' | 'Instinct' | 'Machina',
    action: string
  ) {
    const score1 = bond.score || [0, 0];
    const score2 = attributes[attribute][action] || [0, 0];
    rollResist(bond.name, action, [...score1, ...score2]);
  }

  function rollResistMission(
    attribute1: 'Heart' | 'Instinct' | 'Machina',
    action1: string,
    attribute2: 'Heart' | 'Instinct' | 'Machina',
    action2: string
  ) {
    const score1 = attributes?.[attribute1]?.[action1] || [0, 0];
    const score2 = attributes?.[attribute2]?.[action2] || [0, 0];
    rollResist(action1, action2, [...score1, ...score2]);
  }

  function rollResist(action1: string, action2: string, dice: number[]) {
    for (let i = 0; i < bonusDice; i++) {
      dice.push(2);
    }
    if (dice.reduce((acc, s) => acc + s, 0) === 0) {
      // roll 2d6 and take the lowest
      let r1 = Math.floor(Math.random() * 6) + 1;
      let r2 = Math.floor(Math.random() * 6) + 1;
      const result = Math.min(r1, r2);
      let stress: number;
      switch (result) {
        case 1:
        case 2:
        case 3:
          stress = 4;
          break;
        case 4:
        case 5:
          stress = 3;
          break;
        case 6:
          stress = 2;
          break;
        default:
          stress = 4;
          break;
      }
      toast({
        variant: 'grid',
        // @ts-ignore
        title: (
          <div className="flex items-center gap-1">
            <span className="mt-1">
              Rolled {action1} + {action2}
            </span>
            <Die roll={r1} className="h-10 w-10" />
            <Die roll={r2} className="h-10 w-10" />
          </div>
        ),
        description: (
          <div className="flex gap-4 items-center">
            <Die roll={result} className="h-10 w-10" />
            <span className="mt-1">{`Take ${stress} stress.`}</span>
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
    let resultText: string;
    // detect if there are 2 or more 6s
    let redcrit = false;
    let bluecrit = false;
    const redSixes = redRolls.filter((r) => r === 6).length;
    const blueSixes = blueRolls.filter((r) => r === 6).length;
    let highestRed = Math.max(...redRolls);
    let highestBlue = Math.max(...blueRolls);
    const blueHigher = highestBlue >= highestRed;
    if (blueSixes >= 2) {
      bluecrit = true;
      resultText = 'Crit! Clear 1 stress.';
    } else if (blueSixes + redSixes >= 2) {
      redcrit = true;
      resultText = 'Crit! Take no stress.';
    } else {
      result = blueHigher ? highestBlue : highestRed;
      let stress: number;
      switch (result) {
        case 1:
        case 2:
        case 3:
          stress = blueHigher ? 3 : 4;
          break;
        case 4:
        case 5:
          stress = blueHigher ? 2 : 3;
          break;
        case 6:
          if (bluecrit) {
            stress = -1;
          } else if (redcrit || blueHigher) {
            stress = 0;
          } else {
            stress = 1;
          }
          break;
        default:
          stress = 4;
          break;
      }
      resultText = `Take ${stress} stress.`;
    }
    toast({
      variant: 'grid',
      // @ts-ignore
      title: (
        <div className="flex items-center gap-1">
          <span className="mt-1">
            Resisted with {action1} + {action2}
          </span>
          {redRolls.map((r, i) => (
            <Die key={i} roll={r} className="h-8 w-8 text-red-800" />
          ))}
          {blueRolls.map((r, i) => (
            <Die key={i} roll={r} className="h-8 w-8 text-blue-800" />
          ))}
        </div>
      ),
      description: (
        <div className="flex items-center gap-4">
          {redcrit || bluecrit ? (
            [
              redRolls
                .filter((r) => r === 6)
                .map((r, i) => (
                  <Die key={i} roll={r} className="h-10 w-10 text-red-400" />
                )),
              blueRolls
                .filter((r) => r === 6)
                .map((r, i) => (
                  <Die key={i} roll={r} className="h-10 w-10 text-blue-400" />
                )),
            ]
          ) : (
            <Die
              roll={blueHigher ? highestBlue : highestRed}
              className={cn(
                'h-10 w-10',
                blueHigher ? 'text-blue-400' : 'text-red-400'
              )}
            />
          )}
          <span className="mt-1">{resultText}</span>
        </div>
      ),
    });
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

  return (
    <div>
      <div className="flex justify-between">
        <Breadcrumbs
          crumbs={[
            { name: 'Character Creation', href: '/game/character-creation' },
            { name: 'Character Sheet', href: '#' },
          ]}
        />
        <div className="flex gap-2 mt-5">
          <SaveCharacter initialName={name} />
          <LoadCharacter triggerCharacterLoaded={triggerCharacterLoaded} />
          <ClearCharacter triggerCharacterLoaded={triggerCharacterLoaded} />
        </div>
      </div>
      <div className="flex gap-1 w-full mt-1">
        <div className="flex-grow">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              handleDebounceChange();
            }}
          />
        </div>
        <div>
          <Label htmlFor="alias">Alias</Label>
          <Input
            id="alias"
            placeholder="Alias"
            value={alias}
            onChange={(e) => {
              setAlias(e.target.value);
              handleDebounceChange();
            }}
          />
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
            <SelectTrigger className="font-bold text-amber-500">
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
      <Tabs defaultValue="mission" value={tab} className="w-full my-3 mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger
            value="mission"
            onClick={() => {
              setRollLeft('');
              setRollRight('');
              setTab('mission');
              // save the tab to the hash
              window.location.hash = 'mission';
            }}
          >
            Mission
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            onClick={() => {
              setTab('profile');
              // save the tab to the hash
              window.location.hash = 'profile';
            }}
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="churn"
            onClick={() => {
              setRollLeft('');
              setRollRight('');
              setTab('churn');
              // save the tab to the hash
              window.location.hash = 'churn';
            }}
          >
            The Churn
          </TabsTrigger>
        </TabsList>
        <TabsContent value="mission" className="w-full">
          <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-6 focus-visible:outline-none">
            <div className="mt-4">
              <div className="flex flex-col gap-2">
                <TypographyH2 className="text-md text-muted-foreground">
                  Stress & Conditions
                </TypographyH2>
                <div className="flex justify-between">
                  <StressCheckboxes
                    key={`stress${new Date().getTime()}`}
                    max={9}
                    conditions={conditions}
                    current={stress}
                    onChange={(n) => {
                      setStress(n);
                      setChanges(true);
                    }}
                  />
                  <div className="ml-auto border-[1px] border-border rounded-md p-1 flex items-center gap-2 select-none">
                    <Clock
                      key={`conditionRecovery-${new Date().getTime()}`}
                      max={8}
                      current={conditionRecoveryRef.current}
                      width={35}
                      height={35}
                      setVal={(n) => {
                        conditionRecoveryRef.current = n;
                        setChanges(true);
                      }}
                    />
                    <span className="text-xs text-muted-foreground text-center">
                      recovery
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 flex-wrap mt-2">
                  {['Insecure', 'Afraid', 'Angry', 'Hopeless', 'Guilty'].map(
                    (c) => (
                      <Condition
                        key={`${c}${new Date().getTime()}`}
                        name={c}
                        active={conditions.includes(c)}
                        disabled={
                          conditions.length >= 4 && !conditions.includes(c)
                        }
                        onClick={() => {
                          if (conditions.includes(c)) {
                            setConditions(
                              conditions.filter((con) => con !== c)
                            );
                          } else if (conditions.length < 4) {
                            // todo refactor with a variable maxStress
                            setConditions([...conditions, c]);
                          }
                          setChanges(true);
                        }}
                      />
                    )
                  )}
                </div>
              </div>
              <TypographyH2 className="text-md text-muted-foreground mt-8 flex items-end justify-between">
                Actions{' '}
                <Popover
                  open={actionReferencePopopverOpen}
                  onOpenChange={setActionReferencePopopverOpen}
                >
                  <PopoverTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="p-1 text-blue-600 hover:text-blue-600 h-10 w-10"
                    >
                      <BookOpen style={{ height: '24px', width: '24px' }} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full relative">
                    <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
                      <X className="h-4 w-4" />
                    </Close>
                    <TypographyH4 className="text-md">Actions</TypographyH4>
                    <TypographyH3 className="mt-4 text-sm text-muted-foreground">
                      Universal Actions
                    </TypographyH3>
                    <div className="ml-2">
                      {universal_actions.map((action, i) => (
                        <ActionDescription key={i} action={action as Action} />
                      ))}
                    </div>
                    {selectedBackground && (
                      <div>
                        <TypographyH3 className="text-sm text-muted-foreground text-red-500">
                          {selectedBackground?.name}&apos;s Actions
                        </TypographyH3>
                        <div className="ml-2">
                          {selectedBackground?.actions?.map((action, i) => (
                            <ActionDescription key={i} action={action} />
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedSkillset && (
                      <div>
                        <TypographyH3 className="text-sm text-muted-foreground text-indigo-500">
                          {selectedSkillset?.name}&apos;s Actions
                        </TypographyH3>
                        <div className="ml-2">
                          {selectedSkillset?.actions?.map((action, i) => (
                            <ActionDescription key={i} action={action} />
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedArchetype && (
                      <div>
                        <TypographyH3 className="text-sm text-muted-foreground text-amber-500">
                          {selectedArchetype?.name}&apos;s Action
                        </TypographyH3>
                        <div className="ml-2">
                          {selectedArchetype?.actions?.map((action, i) => (
                            <ActionDescription key={i} action={action} />
                          ))}
                        </div>
                      </div>
                    )}
                  </PopoverContent>
                </Popover>
              </TypographyH2>
              <div className="border-b-[1px]">
                <div className=" mt-8">
                  <TypographyH3 className="text-center">
                    Heart <Flame className="inline mb-2" />
                  </TypographyH3>
                </div>
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
              <div className="border-b-[1px]">
                <div className="pt-8">
                  <TypographyH3 className="text-center">
                    Instinct <Activity className="inline mb-2" />
                  </TypographyH3>
                </div>
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
              <div className="border-b-[1px]">
                <div className="pt-8">
                  <TypographyH3 className="text-center">
                    Machina <VenetianMask className="inline mb-1" />
                  </TypographyH3>
                </div>
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
              <TypographyH2 className="text-md text-muted-foreground mt-8">
                Abilities
              </TypographyH2>
              {selectedSkillset && (
                <div>
                  <TypographyH3 className="text-sm text-indigo-500 mt-4">
                    {selectedSkillset?.name}&apos;s Abilities
                  </TypographyH3>
                  <div className="ml-2">
                    <Abilities
                      abilities={selectedSkillset?.abilities?.mission}
                      characterAbilities={abilities}
                      setCharacterAbilities={setAbilities}
                      setChanges={setChanges}
                    />
                    <Abilities
                      abilities={selectedSkillset?.abilities?.downtime}
                      characterAbilities={abilities}
                      setCharacterAbilities={setAbilities}
                      setChanges={setChanges}
                    />
                  </div>
                </div>
              )}
              {selectedArchetype && (
                <div className="mt-4">
                  <TypographyH3 className="text-sm text-amber-500 mt-4">
                    {selectedArchetype?.name}&apos;s Abilities
                  </TypographyH3>
                  <div className="ml-2">
                    <Abilities
                      abilities={selectedArchetype?.abilities?.mission}
                      characterAbilities={abilities}
                      setCharacterAbilities={setAbilities}
                      setChanges={setChanges}
                    />
                    <Abilities
                      abilities={selectedArchetype?.abilities?.downtime}
                      characterAbilities={abilities}
                      setCharacterAbilities={setAbilities}
                      setChanges={setChanges}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col my-6 md:mt-4">
              <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
                Experience <XPInfo />
              </TypographyH2>
              <XPClocks
                current={xpRef.current}
                setVal={(n) => {
                  xpRef.current = n;
                  setChanges(true);
                }}
                key={`xpclocks-${new Date().getTime()}`}
              />

              <div className="flex items-end mt-4 justify-between">
                <TypographyH3 className="text-sm text-muted-foreground">
                  Harm
                </TypographyH3>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  <span className="bg-secondary p-2 h-10 w-6 shrink-0">3</span>
                  <span className="bg-secondary p-2 h-10 w-6 shrink-0">2</span>
                  <span className="bg-secondary p-2 h-10 w-6 shrink-0">1</span>
                </div>
                <div className="flex flex-col items-center w-full">
                  <Input
                    className="rounded-none"
                    value={harm3}
                    onChange={(e) => {
                      setHarm3(e.target.value);
                      handleDebounceChange();
                    }}
                  />
                  <div className="flex w-full">
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
                  </div>
                  <div className="flex w-full">
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
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-16 gap-4 border-[1px] border-border h-[120px]">
                  <Clock
                    key={`healing${new Date().getTime()}`}
                    max={4}
                    current={healing}
                    height={35}
                    width={35}
                    setVal={(n) => {
                      setHealing(n);
                      setChanges(true);
                    }}
                  />
                  <span className="text-xs text-muted-foreground text-center">
                    healing
                  </span>
                </div>
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
                <div className="flex gap-4 mx-auto">
                  <Button
                    variant="destructive"
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
                      rollResistMission(
                        attributeLeft,
                        actionLeft,
                        attributeRight,
                        actionRight
                      );
                      setRollLeft('');
                      setRollRight('');
                      setBonusDice(0);
                    }}
                  >
                    <ShieldAlert /> Resist
                  </Button>
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
                    <Dices /> Action
                  </Button>
                  <Button variant="secondary" disabled>
                    <Cog /> Project
                  </Button>
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

              <div className="mt-6">
                <TypographyH3 className="text-sm text-muted-foreground">
                  Loadout
                </TypographyH3>
              </div>
              {loadout && (
                <TypographyP className="text-sm text-muted-foreground">
                  {loadout.desc}
                </TypographyP>
              )}
              <Separator className="mt-1 mb-2" />
              <div className="flex align-end justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={loadout?.name === 'Discreet'}
                    onCheckedChange={() => {
                      setLoadout(loadouts[0]);
                      setChanges(true);
                    }}
                  />{' '}
                  Discreet
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={loadout?.name === 'Conspicuous'}
                    onCheckedChange={() => {
                      setLoadout(loadouts[1]);
                      setChanges(true);
                    }}
                  />{' '}
                  Conspicuous
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={loadout?.name === 'Bulky'}
                    onCheckedChange={() => {
                      setLoadout(loadouts[2]);
                      setChanges(true);
                    }}
                  />{' '}
                  Bulky
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={loadout?.name === 'Encumbered'}
                    onCheckedChange={() => {
                      setLoadout(loadouts[3]);
                      setChanges(true);
                    }}
                  />{' '}
                  Encumbered
                </div>
              </div>
              <ItemsTable
                className="mt-4"
                items={items}
                loadout={loadout}
                handleChangeItemName={handleUpdateItemName}
                handleChangeItemSlots={handleUpdateItemSlots}
                handleAddItem={() => {
                  if (!items || items.length === 0) {
                    setItems([
                      {
                        name: '',
                        slots: 1,
                      },
                    ]);
                  } else {
                    setItems([
                      ...items,
                      {
                        name: '',
                        slots: 1,
                      },
                    ]);
                  }
                  setChanges(true);
                }}
                handleAddBasicItem={(item: Item) => {
                  if (!items || items.length === 0) {
                    setItems([item]);
                  } else {
                    setItems([...items, item]);
                  }
                  setChanges(true);
                }}
                handleRemoveItem={(index: number) => {
                  setItems(items.filter((_, i) => i !== index));
                  setChanges(true);
                }}
              />
              <TypographyH2 className="text-md text-muted-foreground mt-6">
                Downtime
              </TypographyH2>
              <div className="ml-2">
                <DowntimeActionsAccordion />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="profile" className="w-full">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="look">Look</Label>
              <Textarea
                id="look"
                value={univQuestions?.[0] || ''}
                onChange={(e) => {
                  setUnivQuestions([
                    e.target.value,
                    univQuestions?.[1] || '',
                    univQuestions?.[2] || '',
                    univQuestions?.[3] || '',
                    univQuestions?.[4] || '',
                  ]);
                  handleDebounceChange();
                }}
              />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="dream">What&apos;s your dream?</Label>
              <Textarea
                id="dream"
                value={univQuestions?.[1] || ''}
                onChange={(e) => {
                  setUnivQuestions([
                    univQuestions?.[0] || '',
                    e.target.value,
                    univQuestions?.[2] || '',
                    univQuestions?.[3] || '',
                    univQuestions?.[4] || '',
                  ]);
                  handleDebounceChange();
                }}
              />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="faith">What do you have faith in?</Label>
              <Textarea
                id="faith"
                value={univQuestions?.[2] || ''}
                onChange={(e) => {
                  setUnivQuestions([
                    univQuestions?.[0] || '',
                    univQuestions?.[1] || '',
                    e.target.value,
                    univQuestions?.[3] || '',
                    univQuestions?.[4] || '',
                  ]);
                  handleDebounceChange();
                }}
              />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="hurt">What&apos;s your hurt?</Label>
              <Textarea
                id="hurt"
                value={univQuestions?.[3] || ''}
                onChange={(e) => {
                  setUnivQuestions([
                    univQuestions?.[0] || '',
                    univQuestions?.[1] || '',
                    univQuestions?.[2] || '',
                    e.target.value,
                    univQuestions?.[4] || '',
                  ]);
                  handleDebounceChange();
                }}
              />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="option">
                What has shown you that there&apos;s no other option?
              </Label>
              <Textarea
                id="option"
                value={univQuestions?.[4] || ''}
                onChange={(e) => {
                  setUnivQuestions([
                    univQuestions?.[0] || '',
                    univQuestions?.[1] || '',
                    univQuestions?.[2] || '',
                    univQuestions?.[3] || '',
                    e.target.value,
                  ]);
                  handleDebounceChange();
                }}
              />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="bloodshed" className="text-red-700">
                Will there be bloodshed?
              </Label>
              <Select
                value={bloodshedQ}
                onValueChange={(value) => {
                  setBloodshedQ(value);
                  setChanges(true);
                }}
              >
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
                <Textarea
                  id="remembrance"
                  value={questions.get(`${selectedHeritage.name}-0`)}
                  onChange={(e) => {
                    handleUpdateQuestion(
                      `${selectedHeritage.name}-0`,
                      e.target.value
                    );
                  }}
                />
              </div>
            )}
            {selectedBackground?.questions?.map((q, i) => (
              <div key={`q-${i}`} className="w-full gap-1.5 my-2">
                <Label htmlFor={`q-${i}`} className="text-red-500 box-border">
                  {q}
                </Label>
                <Textarea
                  id={`q-${i}`}
                  value={questions.get(`${selectedBackground.name}-${i}`) || ''}
                  onChange={(e) => {
                    handleUpdateQuestion(
                      `${selectedBackground.name}-${i}`,
                      e.target.value
                    );
                  }}
                />
              </div>
            ))}
            {selectedSkillset?.questions?.map((q, i) => (
              <div key={`q-${i}`} className="w-full gap-1.5 my-2">
                <Label htmlFor={`q-${i}`} className="text-indigo-500 ">
                  {q}
                </Label>
                <Textarea
                  id={`q-${i}`}
                  value={questions.get(`${selectedSkillset.name}-${i}`)}
                  onChange={(e) => {
                    handleUpdateQuestion(
                      `${selectedSkillset.name}-${i}`,
                      e.target.value
                    );
                  }}
                />
              </div>
            ))}
            {selectedArchetype?.questions.map((q, i) => (
              <div key={`q-${i}`} className="w-full gap-1.5 my-2">
                <Label htmlFor={`q-${i}`} className="text-amber-500 box-border">
                  {q}
                </Label>
                <Textarea
                  id={`q-${i}`}
                  value={questions.get(`${selectedArchetype.name}-${i}`)}
                  onChange={(e) => {
                    handleUpdateQuestion(
                      `${selectedArchetype.name}-${i}`,
                      e.target.value
                    );
                  }}
                />
              </div>
            ))}
          </div>
        </TabsContent>
        {/* THE CHURN */}
        <TabsContent value="churn" className="w-full">
          <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-6 focus-visible:outline-none">
            <div className="my-4">
              <div className="flex flex-col gap-2">
                <TypographyH2 className="text-md text-muted-foreground">
                  Stress & Conditions
                </TypographyH2>
                <div className="flex justify-between">
                  <StressCheckboxes
                    key={`stress${new Date().getTime()}`}
                    max={9}
                    conditions={conditions}
                    current={stress}
                    onChange={(n) => {
                      setStress(n);
                      setChanges(true);
                    }}
                  />
                  <div className="ml-auto border-[1px] border-border rounded-md p-1 flex items-center gap-2 select-none">
                    <Clock
                      key={`conditionRecovery-${new Date().getTime()}`}
                      max={8}
                      current={conditionRecoveryRef.current}
                      width={35}
                      height={35}
                      setVal={(n) => {
                        conditionRecoveryRef.current = n;
                        setChanges(true);
                      }}
                    />
                    <span className="text-xs text-muted-foreground text-center">
                      recovery
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 flex-wrap mt-2">
                  {['Insecure', 'Afraid', 'Angry', 'Hopeless', 'Guilty'].map(
                    (c) => (
                      <Condition
                        key={`${c}${new Date().getTime()}`}
                        name={c}
                        active={conditions.includes(c)}
                        disabled={
                          conditions.length >= 4 && !conditions.includes(c)
                        }
                        onClick={() => {
                          if (conditions.includes(c)) {
                            setConditions(
                              conditions.filter((con) => con !== c)
                            );
                          } else if (conditions.length < 4) {
                            // todo refactor with a variable maxStress
                            setConditions([...conditions, c]);
                          }
                          setChanges(true);
                        }}
                      />
                    )
                  )}
                </div>
              </div>
              <TypographyH2 className="text-md text-muted-foreground mt-8 flex items-end justify-between">
                Actions{' '}
                <Popover
                  open={actionReferencePopopverOpen}
                  onOpenChange={setActionReferencePopopverOpen}
                >
                  <PopoverTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="p-1 text-blue-600 hover:text-blue-600 h-10 w-10"
                    >
                      <BookOpen style={{ height: '24px', width: '24px' }} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full relative">
                    <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
                      <X className="h-4 w-4" />
                    </Close>
                    <TypographyH2 className="text-md mb-2">
                      Actions
                    </TypographyH2>
                    {selectedBackground && (
                      <div>
                        <TypographyH3 className="text-sm text-muted-foreground text-red-500">
                          {selectedBackground?.name}&apos;s Actions
                        </TypographyH3>
                        <div className="ml-2">
                          {selectedBackground?.actions?.map((action, i) => (
                            <ActionDescription key={i} action={action} />
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedSkillset && (
                      <div>
                        <TypographyH3 className="text-sm text-muted-foreground text-indigo-500">
                          {selectedSkillset?.name}&apos;s Actions
                        </TypographyH3>
                        <div className="ml-2">
                          {selectedSkillset?.actions?.map((action, i) => (
                            <ActionDescription key={i} action={action} />
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedArchetype && (
                      <div>
                        <TypographyH3 className="text-sm text-muted-foreground text-amber-500">
                          {selectedArchetype?.name}&apos;s Action
                        </TypographyH3>
                        <div className="ml-2">
                          {selectedArchetype?.actions?.map((action, i) => (
                            <ActionDescription key={i} action={action} />
                          ))}
                        </div>
                      </div>
                    )}
                  </PopoverContent>
                </Popover>
              </TypographyH2>
              <div className="border-b-[1px]">
                <div className="mt-8">
                  <TypographyH3 className="text-center">
                    Heart <Flame className="inline mb-2" />
                  </TypographyH3>
                </div>
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
                            description: bonds.Personal[0].description,
                            score: s,
                          },
                          bonds.Personal[1],
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
                          bonds.Personal[0],
                          {
                            name: bonds.Personal[1].name,
                            score: s,
                            description: bonds.Personal[1].description,
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
              <div className="border-b-[1px]">
                <div className="pt-8">
                  <TypographyH3 className="text-center">
                    Instinct <Activity className="inline mb-2" />
                  </TypographyH3>
                </div>
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
                            description: bonds.Familial[0].description,
                          },
                          bonds.Familial[1],
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
                          bonds.Familial[0],
                          {
                            name: bonds.Familial[1].name,
                            score: s,
                            description: bonds.Familial[1].description,
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
              <div className="border-b-[1px]">
                <div className="pt-8">
                  <TypographyH3 className="text-center">
                    Machina <VenetianMask className="inline mb-1" />
                  </TypographyH3>
                </div>
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
                          bonds.Professional[1],
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
                          bonds.Professional[0],
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
              <TypographyH2 className="text-md text-muted-foreground mb-2 mt-8">
                Bonds
              </TypographyH2>
              <TypographyH3 className="mt-4 text-sm text-muted-foreground">
                Personal
              </TypographyH3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <BondInput
                  bond={bonds.Personal[0]}
                  handleSave={(name: string, description: string) => {
                    setBonds({
                      Personal: [
                        {
                          name,
                          score: bonds.Personal[0].score,
                          description,
                        },
                        bonds.Personal[1],
                      ],
                      Familial: bonds.Familial,
                      Professional: bonds.Professional,
                    });
                    setChanges(true);
                  }}
                />
                <BondInput
                  bond={bonds.Personal[1]}
                  handleSave={(name: string, description: string) => {
                    setBonds({
                      Personal: [
                        bonds.Personal[0],
                        {
                          name,
                          score: bonds.Personal[1].score,
                          description,
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
                <BondInput
                  bond={bonds.Familial[0]}
                  handleSave={(name: string, description: string) => {
                    setBonds({
                      Personal: bonds.Personal,
                      Familial: [
                        {
                          name,
                          score: bonds.Familial[0].score,
                          description,
                        },
                        bonds.Familial[1],
                      ],
                      Professional: bonds.Professional,
                    });
                    setChanges(true);
                  }}
                />
                <BondInput
                  bond={bonds.Familial[1]}
                  handleSave={(name: string, description: string) => {
                    setBonds({
                      Personal: bonds.Personal,
                      Familial: [
                        bonds.Familial[0],
                        {
                          name,
                          score: bonds.Familial[1].score,
                          description,
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                <TypographyP className="m-2 max-w-96">
                  {selectedBackground?.professionalBonds?.[0].name}:{' '}
                  <span className="text-muted-foreground text-xs">
                    {selectedBackground?.professionalBonds?.[0].description}
                  </span>
                </TypographyP>
                <TypographyP className="m-2 max-w-96">
                  {selectedBackground?.professionalBonds?.[1].name}:{' '}
                  <span className="text-muted-foreground text-xs">
                    {selectedBackground?.professionalBonds?.[1].description}
                  </span>
                </TypographyP>
              </div>
            </div>
            <div className="my-4 flex flex-col">
              <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
                Experience <XPInfo />
              </TypographyH2>
              <XPClocks
                current={xpRef.current}
                setVal={(n) => {
                  xpRef.current = n;
                  setChanges(true);
                }}
                key={`xpclocks-${new Date().getTime()}`}
              />
              <div className="flex items-end mt-4 justify-between">
                <TypographyH3 className="text-sm text-muted-foreground">
                  Harm
                </TypographyH3>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  <span className="bg-secondary p-2 h-10 w-6 shrink-0">3</span>
                  <span className="bg-secondary p-2 h-10 w-6 shrink-0">2</span>
                  <span className="bg-secondary p-2 h-10 w-6 shrink-0">1</span>
                </div>
                <div className="flex flex-col items-center w-full">
                  <Input
                    className="rounded-none"
                    value={harm3}
                    onChange={(e) => {
                      setHarm3(e.target.value);
                      handleDebounceChange();
                    }}
                  />
                  <div className="flex w-full">
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
                  </div>
                  <div className="flex w-full">
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
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-16 gap-4 border-[1px] border-border h-[120px]">
                  <Clock
                    key={`healing-${new Date().getTime()}`}
                    max={4}
                    current={healing}
                    height={35}
                    width={35}
                    setVal={(n) => {
                      setHealing(n);
                      setChanges(true);
                    }}
                  />
                  <span className="text-xs text-muted-foreground text-center">
                    healing
                  </span>
                </div>
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
                <div className="flex gap-4 mx-auto">
                  <Button
                    variant="destructive"
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
                          rollResistChurn(b, attributeRight, actionRight);
                        }
                      }

                      setRollLeft('');
                      setRollRight('');
                    }}
                  >
                    <ShieldAlert /> Resist
                  </Button>
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
                    <Dices /> Action
                  </Button>
                  <Button variant="secondary" disabled>
                    <Cog /> Project
                  </Button>
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
              <TypographyH2 className="mt-4 flex items-end justify-between">
                Subsistence{' '}
                <div className="flex gap-4">
                  <div className="border-[1px] border-border rounded-md p-1 flex items-center gap-2 select-none basis-[120px]">
                    <div className="shrink-9">
                      <Clock
                        key={`subsist-${new Date().getTime()}`}
                        max={8}
                        current={subsist}
                        height={35}
                        width={35}
                        setVal={(n) => {
                          setSubsist(n);
                          setChanges(true);
                        }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground text-center text-balance shrink">
                      {selectedBackground?.subsistenceClock}
                    </span>
                  </div>
                  <div className="border-[1px] border-border rounded-md p-1 flex items-center gap-2 select-none basis-[120px]">
                    <div className="shrink-0">
                      <Clock
                        key={`starvation-${new Date().getTime()}`}
                        max={5}
                        current={starvation}
                        height={35}
                        width={35}
                        setVal={(n) => {
                          setStarvation(n);
                          setChanges(true);
                        }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground text-center text-balance shrink">
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
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
