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
            <SelectTrigger className="font-bold underline decoration-amber-500">
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
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-1">
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="look">Look</Label>
              <Textarea placeholder="Type your look here." id="look" />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="hurt">What&apos;s your hurt?</Label>
              <Textarea id="look" />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="life">
                What makes your life hard in the factory?
              </Label>
              <Textarea id="life" />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="dream">What&apos;s your dream?</Label>
              <Textarea id="dream" />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="option">
                What has shown you that there&apos;s no other option?
              </Label>
              <Textarea id="option" />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="faith">What do you have faith in?</Label>
              <Textarea id="faith" />
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
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-1">
            {selectedArchetype?.questions.map((q, i) => (
              <div key={`q-${i}`} className="w-full gap-1.5 my-2">
                <Label htmlFor={`q-${i}`}>{q}</Label>
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
                <div className="mt-8 flex  justify-between gap-4">
                  <TypographyH3>Heart</TypographyH3>
                  <BuildupCheckboxes
                    max={6}
                    current={heartXp}
                    onChange={(n) => {
                      setHeartXp(n);
                      setChanges(true);
                    }}
                  />
                </div>
                <div className="grid grid-cols-4 gap-4 m-2">
                  <div className="flex flex-col">
                    <TypographyH4 className="h-8 flex items-center">
                      Defy
                    </TypographyH4>
                    <TypographyH4 className="h-8 flex items-center">
                      Persuade
                    </TypographyH4>
                  </div>
                  <div className="flex flex-col">
                    <ActionScore
                      score={attributes.Heart.Defy}
                      onChange={(s) => {
                        handleUpdateActionScore('Heart', 'Defy', s);
                      }}
                      className="h-8 justify-end"
                    />
                    <ActionScore
                      score={attributes.Heart.Persuade}
                      onChange={(s) => {
                        handleUpdateActionScore('Heart', 'Persuade', s);
                      }}
                      className="h-8 justify-end"
                    />
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Heart.map((k) => (
                      <ActionScore
                        key={`bh-${k}`}
                        score={attributes.Heart[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Heart', k, s);
                        }}
                        className="h-8"
                      />
                    ))}
                    {selectedTroublemaker?.attributes.Heart.map((k) => (
                      <ActionScore
                        key={`th-${k}`}
                        score={attributes.Heart[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Heart', k, s);
                        }}
                        className="h-8"
                      />
                    ))}
                    {selectedArchetype?.attributes.Heart.map((k) => (
                      <ActionScore
                        key={`arh-${k}`}
                        score={attributes.Heart[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Heart', k, s);
                        }}
                        className="h-8"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Heart.map((a, i) => (
                      <TypographyH4
                        key={`ah-${i}`}
                        className="h-8 flex items-center justify-start underline decoration-red-500"
                      >
                        {a}
                      </TypographyH4>
                    ))}
                    {selectedTroublemaker?.attributes.Heart.map((a, i) => (
                      <TypographyH4
                        key={`ah-${i}`}
                        className="h-8 flex items-center justify-start underline decoration-indigo-500"
                      >
                        {a}
                      </TypographyH4>
                    ))}
                    {selectedArchetype?.attributes.Heart.map((a, i) => (
                      <TypographyH4
                        key={`ah-${i}`}
                        className="h-8 flex items-center justify-start underline decoration-amber-500"
                      >
                        {a}
                      </TypographyH4>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex  justify-between gap-4">
                  <TypographyH3>Instinct</TypographyH3>
                  <BuildupCheckboxes
                    max={6}
                    current={instinctXp}
                    onChange={(n) => {
                      setInstinctXp(n);
                      setChanges(true);
                    }}
                  />
                </div>
                <div className="grid grid-cols-4 gap-4 m-2">
                  <div className="flex flex-col">
                    <TypographyH4 className="h-8 flex items-center">
                      Charge
                    </TypographyH4>
                    <TypographyH4 className="h-8 flex items-center">
                      Prowl
                    </TypographyH4>
                  </div>
                  <div className="flex flex-col">
                    <ActionScore
                      score={attributes.Instinct.Charge}
                      onChange={(s) => {
                        handleUpdateActionScore('Instinct', 'Charge', s);
                      }}
                      className="h-8 justify-end"
                    />
                    <ActionScore
                      score={attributes.Instinct.Prowl}
                      onChange={(s) => {
                        handleUpdateActionScore('Instinct', 'Prowl', s);
                      }}
                      className="h-8 justify-end"
                    />
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Instinct.map((k) => (
                      <ActionScore
                        key={`bi-${k}`}
                        score={attributes.Instinct[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Instinct', k, s);
                        }}
                        className="h-8"
                      />
                    ))}
                    {selectedTroublemaker?.attributes.Instinct.map((k) => (
                      <ActionScore
                        key={`ti-${k}`}
                        score={attributes.Instinct[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Instinct', k, s);
                        }}
                        className="h-8"
                      />
                    ))}
                    {selectedArchetype?.attributes.Instinct.map((k) => (
                      <ActionScore
                        key={`ari-${k}`}
                        score={attributes.Instinct[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Instinct', k, s);
                        }}
                        className="h-8"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Instinct.map((a, i) => (
                      <TypographyH4
                        key={`ai-${i}`}
                        className="h-8 flex items-center underline decoration-red-500"
                      >
                        {a}
                      </TypographyH4>
                    ))}
                    {selectedTroublemaker?.attributes.Instinct.map((a, i) => (
                      <TypographyH4
                        key={`ai-${i}`}
                        className="h-8 flex items-center underline decoration-indigo-500"
                      >
                        {a}
                      </TypographyH4>
                    ))}
                    {selectedArchetype?.attributes.Instinct.map((a, i) => (
                      <TypographyH4
                        key={`ai-${i}`}
                        className="h-8 flex items-center underline decoration-amber-500"
                      >
                        {a}
                      </TypographyH4>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex justify-between gap-4">
                  <TypographyH3>Machina</TypographyH3>
                  <BuildupCheckboxes
                    max={6}
                    current={machinaXp}
                    onChange={(n) => {
                      setMachinaXp(n);
                      setChanges(true);
                    }}
                  />
                </div>
                <div className="grid grid-cols-4 gap-4 m-2">
                  <div className="flex flex-col">
                    <TypographyH4 className="h-8 flex items-center">
                      Suggest
                    </TypographyH4>
                    <TypographyH4 className="h-8 flex items-center">
                      Survey
                    </TypographyH4>
                  </div>
                  <div className="flex flex-col">
                    <ActionScore
                      score={attributes.Machina.Suggest}
                      onChange={(s) => {
                        handleUpdateActionScore('Machina', 'Suggest', s);
                      }}
                      className="h-8 justify-end"
                    />
                    <ActionScore
                      score={attributes.Machina.Survey}
                      onChange={(s) => {
                        handleUpdateActionScore('Machina', 'Survey', s);
                      }}
                      className="h-8 justify-end"
                    />
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Machina.map((k) => (
                      <ActionScore
                        key={`bm-${k}`}
                        score={attributes.Machina[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Machina', k, s);
                        }}
                        className="h-8"
                      />
                    ))}
                    {selectedTroublemaker?.attributes.Machina.map((k) => (
                      <ActionScore
                        key={`tm-${k}`}
                        score={attributes.Machina[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Machina', k, s);
                        }}
                        className="h-8"
                      />
                    ))}
                    {selectedArchetype?.attributes.Machina.map((k) => (
                      <ActionScore
                        key={`arm-${k}`}
                        score={attributes.Machina[k]}
                        onChange={(s) => {
                          handleUpdateActionScore('Machina', k, s);
                        }}
                        className="h-8"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    {selectedBackground?.attributes.Machina.map((a, i) => (
                      <TypographyH4
                        key={`am-${i}`}
                        className="h-8 flex items-center underline decoration-red-500"
                      >
                        {a}
                      </TypographyH4>
                    ))}
                    {selectedTroublemaker?.attributes.Machina.map((a, i) => (
                      <TypographyH4
                        key={`am-${i}`}
                        className="h-8 flex items-center underline decoration-indigo-500"
                      >
                        {a}
                      </TypographyH4>
                    ))}
                    {selectedArchetype?.attributes.Machina.map((a, i) => (
                      <TypographyH4
                        key={`am-${i}`}
                        className="h-8 flex items-center underline decoration-amber-500"
                      >
                        {a}
                      </TypographyH4>
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
