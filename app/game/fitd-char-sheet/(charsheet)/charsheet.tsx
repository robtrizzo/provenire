'use client';
import { useState, useEffect } from 'react';
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
} from '@/components/ui/typography';
import heritages from '@/public/heritages.json';
import backgrounds from '@/public/backgrounds.json';
import archetypes from '@/public/archetypes.json';
import troublemakers from '@/public/troublemakers.json';
import {
  type Archetype,
  type Troublemaker,
  type Background,
  type Heritage,
  CharacterAttributes,
} from '@/types/game';
import { Button } from '@/components/ui/button';
import { BuildupCheckboxes } from '@/components/ui/buildup-checkboxes';
import { ActionScore } from '@/components/ui/action-score';
import { useToast } from '@/components/ui/use-toast';
import { Die } from '@/components/ui/die';
import { cn } from '@/lib/utils';

export function Charsheet() {
  const [selectedArchetype, setSelectedArchetype] = useState<Archetype>();
  const [selectedTroublemaker, setSelectedTroublemaker] =
    useState<Troublemaker>();
  const [selectedBackground, setSelectedBackground] = useState<Background>();
  const [selectedHeritage, setSelectedHeritage] = useState<Heritage>();

  const [heritageSelectKey, setHeritageSelectKey] = useState(+new Date());
  const [archetypeSelectKey, setArchetypeSelectKey] = useState(+new Date());
  const [backgroundSelectKey, setBackgroundSelectKey] = useState(+new Date());
  const [troublemakerSelectKey, setTroublemakerSelectKey] = useState(
    +new Date()
  );

  const [troublemakerXp, setTroublemakerXp] = useState(0);
  const [heartXp, setHeartXp] = useState(0);
  const [instinctXp, setInstinctXp] = useState(0);
  const [machinaXp, setMachinaXp] = useState(0);

  const [attributes, setAttributes] = useState<CharacterAttributes>({
    Heart: { Defy: [0, 0], Persuade: [0, 0] },
    Instinct: { Charge: [0, 0], Prowl: [0, 0] },
    Machina: { Suggest: [0, 0], Survey: [0, 0] },
  });

  const { toast } = useToast();

  const [changes, setChanges] = useState(false);

  useEffect(() => {
    if (window === undefined) return;
    const data = localStorage.getItem('charsheet');
    if (data) {
      const parsed = JSON.parse(data);
      setSelectedArchetype(parsed.selectedArchetype);
      setSelectedTroublemaker(parsed.selectedTroublemaker);
      setSelectedBackground(parsed.selectedBackground);
      setSelectedHeritage(parsed.selectedHeritage);
      setTroublemakerXp(parsed.troublemakerXp || 0);
      setHeartXp(parsed.heartXp || 0);
      setInstinctXp(parsed.instinctXp || 0);
      setMachinaXp(parsed.machinaXp || 0);
      if (parsed.attributes) {
        setAttributes(parsed.attributes);
      }
    }
  }, []);

  // every 0.5 seconds, check if there are changes and save them to local storage and the server
  useEffect(() => {
    const interval = setInterval(() => {
      if (changes) {
        // save to local storage
        const data = {
          selectedArchetype,
          selectedTroublemaker,
          selectedBackground,
          selectedHeritage,
          troublemakerXp,
          heartXp,
          instinctXp,
          machinaXp,
          attributes,
        };
        localStorage.setItem('charsheet', JSON.stringify(data));
        // TODO save to server
        setChanges(false);
      }
    }, 500);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changes]);

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

    if (a === 0 && b === 0) {
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
            <span className="mt-1">Rolled {action}</span>
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
    let red = score.reduce((acc, s) => (s === 1 ? acc + 1 : acc), 0);
    let blue = score.reduce((acc, s) => (s === 2 ? acc + 1 : acc), 0);
    let redRolls = [];
    let blueRolls = [];
    for (let i = 0; i < red; i++) {
      redRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    for (let i = 0; i < blue; i++) {
      blueRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    let highestRed = Math.max(...redRolls);
    let highestBlue = Math.max(...blueRolls);
    const result = Math.max(highestBlue, highestRed);
    const blueHigher = highestBlue >= highestRed;

    let resultText = '';
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
    toast({
      variant: 'grid',
      // @ts-ignore
      title: (
        <div className="flex items-start gap-1">
          <span className="mt-1">Rolled {action}</span>
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
          <Die
            roll={result}
            className={cn(
              'h-5 w-5',
              blueHigher ? 'text-blue-500' : 'text-red-500'
            )}
          />
          <span className="mt-1">{resultText}</span>
        </div>
      ),
    });
  }

  // helper function to get the explicit keys for each attribute
  const attributeExplicitKeys = {
    Heart: ['Defy', 'Persuade'],
    Instinct: ['Charge', 'Prowl'],
    Machina: ['Suggest', 'Survey'],
  };

  function rollAttribute(attribute: 'Heart' | 'Instinct' | 'Machina') {
    const attr = attributes[attribute];
    const ekeys = attributeExplicitKeys[attribute];
    const bkeys = selectedBackground?.attributes?.[attribute] ?? [];
    const tkeys = selectedTroublemaker?.attributes?.[attribute] ?? [];
    const akeys = selectedArchetype?.attributes?.[attribute] ?? [];
    const keys = [...ekeys, ...bkeys, ...tkeys, ...akeys];
    const scores = keys.map((k) => attr[k]).filter((s) => s);
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
                } else if (heritage.heritages) {
                  for (const h of heritage.heritages) {
                    if (h.name === value) {
                      setSelectedHeritage(h);
                      setChanges(true);
                    }
                  }
                }
              }
            }}
          >
            <SelectTrigger className="font-bold underline decoration-sky-500">
              <SelectValue placeholder="Select a heritage" />
            </SelectTrigger>
            <SelectContent>
              {heritages.map((heritage) => {
                if (heritage.category) {
                  return (
                    <SelectGroup
                      key={heritage.category}
                      className="border-b-[1px]"
                    >
                      <SelectLabel className="text-lg border-t-[1px]">
                        {heritage.category}
                      </SelectLabel>
                      {heritage.heritages.map((h) => (
                        <SelectItem key={h.name} value={h.name}>
                          {h.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  );
                } else if (heritage.name) {
                  return (
                    <SelectItem
                      key={heritage.name}
                      value={heritage.name}
                      className="text-lg"
                    >
                      {heritage.name}
                    </SelectItem>
                  );
                }
              })}
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
              const foundBackground = backgrounds.find((b) => b.name === value);
              if (foundBackground) {
                setSelectedBackground(foundBackground);
                setChanges(true);
              }
            }}
          >
            <SelectTrigger className="font-bold underline decoration-red-500">
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
            key={troublemakerSelectKey}
            value={selectedTroublemaker?.name}
            onValueChange={(value) => {
              const foundTroublemaker = troublemakers.find(
                (t) => t.name === value
              );
              if (foundTroublemaker) {
                setSelectedTroublemaker(foundTroublemaker);
                setChanges(true);
              }
            }}
          >
            <SelectTrigger className="font-bold underline decoration-indigo-500">
              <SelectValue placeholder="Select a troublemaker" />
            </SelectTrigger>
            <SelectContent>
              {troublemakers.map((troublemaker) => (
                <SelectItem key={troublemaker.name} value={troublemaker.name}>
                  {troublemaker.name}
                  <span className="text-muted-foreground ml-4">
                    {troublemaker.shortDescription}
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
                  setSelectedTroublemaker(undefined);
                  setChanges(true);
                  setTroublemakerSelectKey(+new Date());
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
              const foundArchetype = archetypes.find((a) => a.name === value);
              if (foundArchetype) {
                setSelectedArchetype(foundArchetype);
                setChanges(true);
              }
            }}
          >
            <SelectTrigger className="font-bold underline decoration-amber-700">
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
      <Tabs defaultValue="profile" className="w-full my-3 mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="mission">Mission</TabsTrigger>
          <TabsTrigger value="churn">The Churn</TabsTrigger>
        </TabsList>
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
            {selectedBackground?.questions?.map((q, i) => (
              <div key={`q-${i}`} className="w-full gap-1.5 my-2">
                <Label htmlFor={`q-${i}`} className="text-red-500 box-border">
                  {q}
                </Label>
                <Textarea id={`q-${i}`} />
              </div>
            ))}
          </div>
          <Separator className="my-3"></Separator>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
            {selectedTroublemaker?.questions?.map((q, i) => (
              <div key={`q-${i}`} className="w-full gap-1.5 my-2">
                <Label htmlFor={`q-${i}`} className="text-indigo-500 ">
                  {q}
                </Label>
                <Textarea id={`q-${i}`} />
              </div>
            ))}
          </div>
          <Separator className="my-3"></Separator>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
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
        <TabsContent value="mission" className="w-full">
          <div className="my-3">
            <TypographyH2>
              {selectedTroublemaker?.name}
              <span className="text-muted-foreground text-lg ml-8">
                {selectedTroublemaker?.shortDescription}
              </span>
            </TypographyH2>
            <div className="flex my-3">
              <div className="flex-grow"></div>
              <div>
                <div className="flex gap-4">
                  <TypographyH3>Troublemaker</TypographyH3>
                  <BuildupCheckboxes
                    max={8}
                    current={troublemakerXp}
                    onChange={(n) => {
                      setTroublemakerXp(n);
                      setChanges(true);
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 border-b-[1px]">
                  <div
                    className="hover:cursor-pointer group border-r-[1px] mt-8"
                    onClick={() => {
                      rollAttribute('Heart');
                    }}
                  >
                    <TypographyH3 className="group-hover:font-extrabold">
                      Heart
                    </TypographyH3>
                  </div>
                  <BuildupCheckboxes
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
                      onClick={() => {
                        rollAction('Heart', 'Defy');
                      }}
                    >
                      <TypographyH4 className="group-hover:font-extrabold">
                        Defy
                      </TypographyH4>
                    </div>
                    <Separator />
                    <div
                      className="h-10 flex items-center hover:cursor-pointer group"
                      onClick={() => {
                        rollAction('Heart', 'Persuade');
                      }}
                    >
                      <TypographyH4 className="group-hover:font-extrabold">
                        Persuade
                      </TypographyH4>
                    </div>
                  </div>
                  <div className="flex flex-col  border-r-[1px]">
                    <ActionScore
                      score={attributes.Heart.Defy}
                      onChange={(s) => {
                        handleUpdateActionScore('Heart', 'Defy', s);
                      }}
                      className="h-10 justify-end mr-2"
                    />
                    <Separator />
                    <ActionScore
                      score={attributes.Heart.Persuade}
                      onChange={(s) => {
                        handleUpdateActionScore('Heart', 'Persuade', s);
                      }}
                      className="h-10 justify-end mr-2"
                    />
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
                          className="h-10 ml-2"
                        />
                        <Separator />
                      </>
                    ))}
                    {selectedTroublemaker?.attributes.Heart.map((k) => (
                      <>
                        <ActionScore
                          key={`th-${k}`}
                          score={attributes.Heart[k]}
                          onChange={(s) => {
                            handleUpdateActionScore('Heart', k, s);
                          }}
                          className="h-10 ml-2"
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
                        className="h-10 ml-2"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Heart.map((a, i) => (
                      <>
                        <div
                          key={`ah-${i}`}
                          className="h-10 hover:cursor-pointer group"
                          onClick={() => {
                            rollAction('Heart', a);
                          }}
                        >
                          <TypographyH4 className="h-10 flex items-center justify-end underline decoration-red-500 group-hover:font-extrabold">
                            {a}
                          </TypographyH4>
                        </div>
                        <Separator />
                      </>
                    ))}
                    {selectedTroublemaker?.attributes.Heart.map((a, i) => (
                      <>
                        <div
                          key={`ah-${i}`}
                          className="h-10 hover:cursor-pointer group"
                          onClick={() => {
                            rollAction('Heart', a);
                          }}
                        >
                          <TypographyH4 className="h-10 flex items-center justify-end underline decoration-indigo-500 group-hover:font-extrabold">
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
                        onClick={() => {
                          rollAction('Heart', a);
                        }}
                      >
                        <TypographyH4 className="h-10 flex items-center justify-end underline decoration-amber-700 group-hover:font-extrabold">
                          {a}
                        </TypographyH4>
                      </div>
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
                    <TypographyH3 className="group-hover:font-extrabold">
                      Instinct
                    </TypographyH3>
                  </div>
                  <BuildupCheckboxes
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
                      onClick={() => {
                        rollAction('Instinct', 'Charge');
                      }}
                    >
                      <TypographyH4 className="group-hover:font-extrabold">
                        Charge
                      </TypographyH4>
                    </div>
                    <Separator />
                    <div
                      className="h-10 flex items-center hover:cursor-pointer group"
                      onClick={() => {
                        rollAction('Instinct', 'Prowl');
                      }}
                    >
                      <TypographyH4 className="group-hover:font-extrabold">
                        Prowl
                      </TypographyH4>
                    </div>
                  </div>
                  <div className="flex flex-col border-r-[1px]">
                    <ActionScore
                      score={attributes.Instinct.Charge}
                      onChange={(s) => {
                        handleUpdateActionScore('Instinct', 'Charge', s);
                      }}
                      className="h-10 justify-end mr-2"
                    />
                    <Separator />
                    <ActionScore
                      score={attributes.Instinct.Prowl}
                      onChange={(s) => {
                        handleUpdateActionScore('Instinct', 'Prowl', s);
                      }}
                      className="h-10 justify-end mr-2"
                    />
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
                          className="h-10 ml-2"
                        />
                        <Separator />
                      </>
                    ))}
                    {selectedTroublemaker?.attributes.Instinct.map((k) => (
                      <>
                        <ActionScore
                          key={`ti-${k}`}
                          score={attributes.Instinct[k]}
                          onChange={(s) => {
                            handleUpdateActionScore('Instinct', k, s);
                          }}
                          className="h-10 ml-2"
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
                        className="h-10 ml-2"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Instinct.map((a, i) => (
                      <>
                        <div
                          key={`ai-${i}`}
                          className="h-10 hover:cursor-pointer group"
                          onClick={() => {
                            rollAction('Instinct', a);
                          }}
                        >
                          <TypographyH4 className="h-10 flex items-center justify-end underline decoration-red-500 group-hover:font-extrabold">
                            {a}
                          </TypographyH4>
                        </div>
                        <Separator />
                      </>
                    ))}
                    {selectedTroublemaker?.attributes.Instinct.map((a, i) => (
                      <>
                        <div
                          key={`ai-${i}`}
                          className="h-10 hover:cursor-pointer group"
                          onClick={() => {
                            rollAction('Instinct', a);
                          }}
                        >
                          <TypographyH4 className="h-10 flex items-center justify-end underline decoration-indigo-500 group-hover:font-extrabold">
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
                        onClick={() => {
                          rollAction('Instinct', a);
                        }}
                      >
                        <TypographyH4 className="h-10 flex items-center justify-end underline decoration-amber-700 group-hover:font-extrabold">
                          {a}
                        </TypographyH4>
                      </div>
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
                    <TypographyH3 className="group-hover:font-extrabold">
                      Machina
                    </TypographyH3>
                  </div>
                  <BuildupCheckboxes
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
                      onClick={() => {
                        rollAction('Machina', 'Suggest');
                      }}
                    >
                      <TypographyH4 className="group-hover:font-extrabold">
                        Suggest
                      </TypographyH4>
                    </div>
                    <Separator />
                    <div
                      className="h-10 flex items-center hover:cursor-pointer group"
                      onClick={() => {
                        rollAction('Machina', 'Survey');
                      }}
                    >
                      <TypographyH4 className="group-hover:font-extrabold">
                        Survey
                      </TypographyH4>
                    </div>
                  </div>
                  <div className="flex flex-col border-r-[1px]">
                    <ActionScore
                      score={attributes.Machina.Suggest}
                      onChange={(s) => {
                        handleUpdateActionScore('Machina', 'Suggest', s);
                      }}
                      className="h-10 justify-end mr-2"
                    />
                    <Separator />
                    <ActionScore
                      score={attributes.Machina.Survey}
                      onChange={(s) => {
                        handleUpdateActionScore('Machina', 'Survey', s);
                      }}
                      className="h-10 justify-end mr-2"
                    />
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
                          className="h-10 ml-2"
                        />
                        <Separator />
                      </>
                    ))}
                    {selectedTroublemaker?.attributes.Machina.map((k) => (
                      <>
                        <ActionScore
                          key={`tm-${k}`}
                          score={attributes.Machina[k]}
                          onChange={(s) => {
                            handleUpdateActionScore('Machina', k, s);
                          }}
                          className="h-10 ml-2"
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
                        className="h-10 ml-2"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Machina.map((a, i) => (
                      <>
                        <div
                          key={`am-${i}`}
                          className="h-10 hover:cursor-pointer group"
                          onClick={() => {
                            rollAction('Machina', a);
                          }}
                        >
                          <TypographyH4 className="h-10 flex items-center justify-end underline decoration-red-500 group-hover:font-extrabold">
                            {a}
                          </TypographyH4>
                        </div>
                        <Separator />
                      </>
                    ))}
                    {selectedTroublemaker?.attributes.Machina.map((a, i) => (
                      <>
                        <div
                          key={`am-${i}`}
                          className="h-10 hover:cursor-pointer group"
                          onClick={() => {
                            rollAction('Machina', a);
                          }}
                        >
                          <TypographyH4 className="h-10 flex items-center justify-end underline decoration-indigo-500 group-hover:font-extrabold">
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
                        onClick={() => {
                          rollAction('Machina', a);
                        }}
                      >
                        <TypographyH4 className="h-10 flex items-center justify-end underline decoration-amber-700 group-hover:font-extrabold">
                          {a}
                        </TypographyH4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="churn" className="w-full">
          <div className="my-3">
            <TypographyH2>{selectedArchetype?.name}</TypographyH2>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
