'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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
import type {
  Archetype,
  Troublemaker,
  Background,
  Heritage,
} from '@/types/game';
import { Checkbox } from '@/components/ui/checkbox';

export function Charsheet() {
  const [selectedArchetype, setSelectedArchetype] = useState<Archetype>();
  const [selectedTroublemaker, setSelectedTroublemaker] =
    useState<Troublemaker>();
  const [selectedBackground, setSelectedBackground] = useState<Background>();
  const [selectedHeritage, setSelectedHeritage] = useState<Heritage>();
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
            onValueChange={(value) => {
              for (const heritage of heritages) {
                if (heritage.name && heritage.name === value) {
                  setSelectedHeritage(heritage);
                } else if (heritage.heritages) {
                  for (const h of heritage.heritages) {
                    if (h.name === value) {
                      setSelectedHeritage(h);
                    }
                  }
                }
              }
            }}
          >
            <SelectTrigger>
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
                }
              })}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            onValueChange={(value) => {
              const foundBackground = backgrounds.find((b) => b.name === value);
              if (foundBackground) {
                setSelectedBackground(foundBackground);
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a background" />
            </SelectTrigger>
            <SelectContent>
              {backgrounds.map((background) => (
                <SelectItem key={background.name} value={background.name}>
                  {background.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 w-full my-1">
        <div>
          <Select
            onValueChange={(value) => {
              const foundTroublemaker = troublemakers.find(
                (t) => t.name === value
              );
              if (foundTroublemaker) {
                setSelectedTroublemaker(foundTroublemaker);
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a troublemaker" />
            </SelectTrigger>
            <SelectContent>
              {troublemakers.map((troublemaker) => (
                <SelectItem key={troublemaker.name} value={troublemaker.name}>
                  {troublemaker.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            onValueChange={(value) => {
              const foundArchetype = archetypes.find((a) => a.name === value);
              if (foundArchetype) {
                setSelectedArchetype(foundArchetype);
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an archetype" />
            </SelectTrigger>
            <SelectContent>
              {archetypes.map((archetype) => (
                <SelectItem key={archetype.name} value={archetype.name}>
                  {archetype.name}
                </SelectItem>
              ))}
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
            <TypographyH2>{selectedTroublemaker?.name}</TypographyH2>
            <div className="flex my-3">
              <div className="flex-grow"></div>
              <div>
                <div className="flex gap-4">
                  <TypographyH3>Troublemaker</TypographyH3>
                  <div className="flex justify-between items-center gap-1">
                    <Checkbox className="rounded-none" />
                    <Checkbox className="rounded-none" />
                    <Checkbox className="rounded-none" />
                    <Checkbox className="rounded-none" />
                    <Checkbox className="rounded-none" />
                    <Checkbox className="rounded-none" />
                    <Checkbox className="rounded-none" />
                    <Checkbox className="rounded-none" />
                  </div>
                </div>
                <div className="mt-8 flex  justify-between gap-4">
                  <TypographyH3>Heart</TypographyH3>
                  <div className="flex items-center gap-1">
                    <Checkbox className="rounded-none" />
                    <Checkbox className="rounded-none" />
                    <Checkbox className="rounded-none" />
                    <Checkbox className="rounded-none" />
                    <Checkbox className="rounded-none" />
                    <Checkbox className="rounded-none" />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex flex-col">
                    <TypographyH4 className="h-8 flex items-center">
                      Defy
                    </TypographyH4>
                    <TypographyH4 className="h-8 flex items-center">
                      Persuade
                    </TypographyH4>
                  </div>
                  <div className="flex flex-col">
                    <div className="h-8 flex items-center">
                      <Checkbox className="rounded-full" />
                      <Separator orientation="vertical" className="mx-2" />
                      <Checkbox className="rounded-full" />
                    </div>
                    <div className="h-8 flex items-center">
                      <Checkbox className="rounded-full" />
                      <Separator orientation="vertical" className="mx-2" />
                      <ActionCheckbox />
                    </div>
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

function ActionCheckbox() {
  const [level, setLevel] = useState(0);
  if (level === 0) {
    return (
      <Checkbox
        onClick={() => {
          setLevel(1);
        }}
        className="rounded-full"
        checked={false}
      />
    );
  }
  if (level === 1) {
    return (
      <Checkbox
        onClick={() => setLevel(2)}
        className="rounded-full data-[state=checked]:bg-red-600 data-[state=checked]:text-red-600"
        checked={true}
      />
    );
  }
  if (level === 2) {
    return (
      <Checkbox
        onClick={() => setLevel(0)}
        className="rounded-full data-[state=checked]:bg-blue-600 data-[state=checked]:text-blue-600"
        checked={true}
      />
    );
  }
}
