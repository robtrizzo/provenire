"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { Separator } from "@/components/ui/separator";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import heritages from "@/public/heritages.json";
import backgrounds from "@/public/backgrounds.json";
import archetypes from "@/public/archetypes.json";
import skillsets from "@/public/skillsets.json";
import universal_actions from "@/public/universal_actions.json";
import loadouts from "@/public/loadouts.json";
import {
  type Archetype,
  type Skillset,
  type Background,
  type Action,
  Item,
  Attribute,
} from "@/types/game";
import { Button } from "@/components/ui/button";
import { ActionScore } from "@/components/action-score";
import {
  VenetianMask,
  Flame,
  Activity,
  Dices,
  BookOpen,
  X,
  Cog,
  ShieldAlert,
  DiamondPlus,
} from "lucide-react";
import ActionDescription from "@/components/action-description";
import { Card } from "@/components/ui/card";
import { Condition } from "@/components/condition";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Abilities from "@/components/abilities/abilities";
import DowntimeActionsAccordion from "@/components/downtime-actions-accordion";
import Crit from "@/components/subsistence/crit/subsistenceCrit";
import Consequences from "@/components/subsistence/consequences/subsistenceConsequences";
import StressCheckboxes from "@/app/game/character-sheet/(components)/stress-checkboxes";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import SaveCharacter from "./(components)/save-character";
import LoadCharacter from "./(components)/load-character";
import ClearCharacter from "./(components)/clear-character";
import ItemsTable from "@/app/game/character-sheet/(components)/items-table";
import BondInput from "./(components)/bond-input";
import Clock from "@/components/clock";
import XPClocks from "./(components)/xp-clocks";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Close } from "@radix-ui/react-popover";
import XPInfo from "./(components)/xp-info";
import ConditionsInfo from "./(components)/conditions-info";
import { useCharacterSheet } from "@/contexts/characterSheetContext";
import { useRoll } from "@/contexts/rollContext";
import Portrait from "./(components)/portrait";
import { RollType } from "@/types/roll";
import DiceHistory from "./(components)/dice-history";

export default function Charsheet() {
  const [tab, setTab] = useState("mission");

  const [actionReferencePopopverOpen, setActionReferencePopopverOpen] =
    useState(false);

  const [heritageSelectKey, setHeritageSelectKey] = useState(+new Date());
  const [archetypeSelectKey, setArchetypeSelectKey] = useState(+new Date());
  const [backgroundSelectKey, setBackgroundSelectKey] = useState(+new Date());
  const [skillsetSelectKey, setSkillsetSelectKey] = useState(+new Date());
  const [rollLeft, setRollLeft] = useState<string>("");
  const [rollRight, setRollRight] = useState<string>("");

  const {
    name,
    alias,
    univQuestions,
    bloodshedQ,
    selectedArchetype,
    selectedSkillset,
    selectedBackground,
    selectedHeritage,
    questions,
    xpRef,
    attributes,
    stress,
    conditions,
    conditionRecoveryRef,
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
    setName,
    setAlias,
    setUnivQuestions,
    setBloodshedQ,
    setSelectedArchetype,
    setSelectedSkillset,
    setSelectedBackground,
    setSelectedHeritage,
    setStress,
    setConditions,
    setHealing,
    setHarm3,
    setHarm2,
    setHarm1,
    setArmor,
    setHArmor,
    setSArmor,
    setAbilities,
    setBonds,
    setStarvation,
    setSubsist,
    setLoadout,
    setItems,
    setChanges,
    setCharacterLoaded,
    handleDebounceChange,
    handleUpdateQuestion,
    handleUpdateItemName,
    handleUpdateItemSlots,
    handleUpdateActionScore,
  } = useCharacterSheet();

  function triggerCharacterLoaded() {
    setCharacterLoaded(new Date());
  }

  useEffect(() => {
    if (window === undefined) return;
    // read the hash and set the tab
    const hash = window.location.hash;
    if (hash && ["mission", "profile", "churn"].includes(hash.substring(1))) {
      setTab(hash.substring(1));
    }
  }, []);

  async function handleRollButton(
    type: RollType,
    rollLeft: string,
    rollRight: string
  ) {
    if (!rollLeft && !rollRight) return;
    if (!rollLeft) {
      const [attribute, action] = rollRight.split("-") as [Attribute, string];
      const roll = await rollActions(type, attribute, action);
      diceToast(roll, action);
    } else if (!rollRight) {
      const [attribute, action] = rollLeft.split("-") as [Attribute, string];
      const roll = await rollActions(type, attribute, action);
      diceToast(roll, action);
    } else {
      const [attributeLeft, actionLeft] = rollLeft.split("-") as [
        Attribute,
        string
      ];
      const [attributeRight, actionRight] = rollRight.split("-") as [
        Attribute,
        string
      ];
      const roll = await rollActions(
        type,
        attributeLeft,
        actionLeft,
        attributeRight,
        actionRight
      );
      diceToast(roll, actionLeft, actionRight);
    }
    setRollLeft("");
    setRollRight("");
    setBonusDiceRed(0);
    setBonusDiceBlue(0);
  }

  const {
    diceToast,
    bonusDiceRed,
    bonusDiceBlue,
    fortuneDice,
    rollActions,
    rollDice,
    setBonusDiceRed,
    setBonusDiceBlue,
    setFortuneDice,
  } = useRoll();

  return (
    <div>
      <div className="flex justify-between">
        <Breadcrumbs
          crumbs={[
            { name: "Character Creation", href: "/game/character-creation" },
            { name: "Character Sheet", href: "#" },
          ]}
        />
        <div className="flex gap-2 mt-5">
          <DiceHistory />
          <SaveCharacter initialName={name} />
          <LoadCharacter triggerCharacterLoaded={triggerCharacterLoaded} />
          <ClearCharacter triggerCharacterLoaded={triggerCharacterLoaded} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-1 items-end gap-1">
        <Portrait className="mb-1" />
        <div className="w-full">
          <div className="flex gap-1 w-full">
            <div className="grow">
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
                  const foundSkillset = skillsets.find(
                    (t) => t.name === value
                  ) as Skillset | undefined;
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
        </div>
      </div>
      <Tabs defaultValue="mission" value={tab} className="w-full my-3 mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger
            value="mission"
            onClick={() => {
              setRollLeft("");
              setRollRight("");
              setTab("mission");
              // save the tab to the hash
              window.location.hash = "mission";
            }}
          >
            Mission
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            onClick={() => {
              setTab("profile");
              // save the tab to the hash
              window.location.hash = "profile";
            }}
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="churn"
            onClick={() => {
              setRollLeft("");
              setRollRight("");
              setTab("churn");
              // save the tab to the hash
              window.location.hash = "churn";
            }}
          >
            The Churn
          </TabsTrigger>
        </TabsList>
        <TabsContent value="mission" className="w-full">
          <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-6 focus-visible:outline-hidden">
            <div className="mt-4">
              <div className="flex flex-col gap-2">
                <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
                  Stress & Conditions <ConditionsInfo />
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
                  {["Insecure", "Afraid", "Angry", "Hopeless", "Guilty"].map(
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
                Actions{" "}
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
                      <BookOpen style={{ height: "24px", width: "24px" }} />
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
                    onClick={async (e) => {
                      if (e.shiftKey) {
                        const roll = await rollActions(
                          "action",
                          "Heart",
                          "Defy"
                        );
                        diceToast(roll, "Defy");
                      } else {
                        setRollLeft("Heart-Defy");
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline mt-0">
                      Defy
                    </TypographyH4>
                  </div>
                  <Separator />
                  <div
                    className="h-10 flex items-center hover:cursor-pointer group"
                    onClick={async (e) => {
                      if (e.shiftKey) {
                        const roll = await rollActions(
                          "action",
                          "Heart",
                          "Persuade"
                        );
                        diceToast(roll, "Persuade");
                      } else {
                        setRollLeft("Heart-Persuade");
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline mt-0">
                      Persuade
                    </TypographyH4>
                  </div>
                </div>
                <div className="flex flex-col  border-r-[1px]">
                  <ActionScore
                    key={`defy${new Date().getTime()}`}
                    score={attributes.Heart.Defy}
                    onChange={(s) => {
                      handleUpdateActionScore("Heart", "Defy", s);
                    }}
                    className="h-10 justify-end mr-2"
                  />
                  <Separator />
                  <ActionScore
                    key={`persuade${new Date().getTime()}`}
                    score={attributes.Heart.Persuade}
                    onChange={(s) => {
                      handleUpdateActionScore("Heart", "Persuade", s);
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
                        onClick={async (e) => {
                          if (e.shiftKey) {
                            const roll = await rollActions(
                              "action",
                              "Heart",
                              a
                            );
                            diceToast(roll, a);
                          } else {
                            setRollRight(`Heart-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                        onClick={async (e) => {
                          if (e.shiftKey) {
                            const roll = await rollActions(
                              "action",
                              "Heart",
                              a
                            );
                            diceToast(roll, a);
                          } else {
                            setRollRight(`Heart-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                      onClick={async (e) => {
                        if (e.shiftKey) {
                          const roll = await rollActions("action", "Heart", a);
                          diceToast(roll, a);
                        } else {
                          setRollRight(`Heart-${a}`);
                        }
                      }}
                    >
                      <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                          handleUpdateActionScore("Heart", k, s);
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
                          handleUpdateActionScore("Heart", k, s);
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
                        handleUpdateActionScore("Heart", k, s);
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
                    onClick={async (e) => {
                      if (e.shiftKey) {
                        const roll = await rollActions(
                          "action",
                          "Instinct",
                          "Charge"
                        );
                        diceToast(roll, "Charge");
                      } else {
                        setRollLeft("Instinct-Charge");
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline mt-0">
                      Charge
                    </TypographyH4>
                  </div>
                  <Separator />
                  <div
                    className="h-10 flex items-center hover:cursor-pointer group"
                    onClick={async (e) => {
                      if (e.shiftKey) {
                        const roll = await rollActions(
                          "action",
                          "Instinct",
                          "Prowl"
                        );
                        diceToast(roll, "Prowl");
                      } else {
                        setRollLeft("Instinct-Prowl");
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline mt-0">
                      Prowl
                    </TypographyH4>
                  </div>
                </div>
                <div className="flex flex-col border-r-[1px]">
                  <ActionScore
                    key={`charge${new Date().getTime()}`}
                    score={attributes.Instinct.Charge}
                    onChange={(s) => {
                      handleUpdateActionScore("Instinct", "Charge", s);
                    }}
                    className="h-10 justify-end mr-2"
                  />
                  <Separator />
                  <ActionScore
                    key={`prowl${new Date().getTime()}`}
                    score={attributes.Instinct.Prowl}
                    onChange={(s) => {
                      handleUpdateActionScore("Instinct", "Prowl", s);
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
                        onClick={async (e) => {
                          if (e.shiftKey) {
                            const roll = await rollActions(
                              "action",
                              "Instinct",
                              a
                            );
                            diceToast(roll, a);
                          } else {
                            setRollRight(`Instinct-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                        onClick={async (e) => {
                          if (e.shiftKey) {
                            const roll = await rollActions(
                              "action",
                              "Instinct",
                              a
                            );
                            diceToast(roll, a);
                          } else {
                            setRollRight(`Instinct-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                      onClick={async (e) => {
                        if (e.shiftKey) {
                          const roll = await rollActions(
                            "action",
                            "Instinct",
                            a
                          );
                          diceToast(roll, a);
                        } else {
                          setRollRight(`Instinct-${a}`);
                        }
                      }}
                    >
                      <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                          handleUpdateActionScore("Instinct", k, s);
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
                          handleUpdateActionScore("Instinct", k, s);
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
                        handleUpdateActionScore("Instinct", k, s);
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
                    onClick={async (e) => {
                      if (e.shiftKey) {
                        const roll = await rollActions(
                          "action",
                          "Machina",
                          "Suggest"
                        );
                        diceToast(roll, "Suggest");
                      } else {
                        setRollLeft("Machina-Suggest");
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline mt-0">
                      Suggest
                    </TypographyH4>
                  </div>
                  <Separator />
                  <div
                    className="h-10 flex items-center hover:cursor-pointer group"
                    onClick={async (e) => {
                      if (e.shiftKey) {
                        const roll = await rollActions(
                          "action",
                          "Machina",
                          "Survey"
                        );
                        diceToast(roll, "Survey");
                      } else {
                        setRollLeft("Machina-Survey");
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline mt-0">
                      Survey
                    </TypographyH4>
                  </div>
                </div>
                <div className="flex flex-col border-r-[1px]">
                  <ActionScore
                    key={`suggest${new Date().getTime()}`}
                    score={attributes.Machina.Suggest}
                    onChange={(s) => {
                      handleUpdateActionScore("Machina", "Suggest", s);
                    }}
                    className="h-10 justify-end mr-2"
                  />
                  <Separator />
                  <ActionScore
                    key={`survey${new Date().getTime()}`}
                    score={attributes.Machina.Survey}
                    onChange={(s) => {
                      handleUpdateActionScore("Machina", "Survey", s);
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
                        onClick={async (e) => {
                          if (e.shiftKey) {
                            const roll = await rollActions(
                              "action",
                              "Machina",
                              a
                            );
                            diceToast(roll, a);
                          } else {
                            setRollRight(`Machina-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                        onClick={async (e) => {
                          if (e.shiftKey) {
                            const roll = await rollActions(
                              "action",
                              "Machina",
                              a
                            );
                            diceToast(roll, a);
                          } else {
                            setRollRight(`Machina-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                      onClick={async (e) => {
                        if (e.shiftKey) {
                          const roll = await rollActions(
                            "action",
                            "Machina",
                            a
                          );
                          diceToast(roll, a);
                        } else {
                          setRollRight(`Machina-${a}`);
                        }
                      }}
                    >
                      <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                          handleUpdateActionScore("Machina", k, s);
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
                          handleUpdateActionScore("Machina", k, s);
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
                        handleUpdateActionScore("Machina", k, s);
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
                    className="rounded-none h-10"
                    value={harm3}
                    onChange={(e) => {
                      setHarm3(e.target.value);
                      handleDebounceChange();
                    }}
                  />
                  <div className="flex w-full">
                    <Input
                      className="rounded-none h-10"
                      value={harm2[0]}
                      onChange={(e) => {
                        setHarm2([e.target.value, harm2[1]]);
                        handleDebounceChange();
                      }}
                    />
                    <Input
                      className="rounded-none h-10"
                      value={harm2[1]}
                      onChange={(e) => {
                        setHarm2([harm2[0], e.target.value]);
                        handleDebounceChange();
                      }}
                    />
                  </div>
                  <div className="flex w-full">
                    <Input
                      className="rounded-none h-10"
                      value={harm1[0]}
                      disabled={true}
                      onChange={(e) => {
                        setHarm1([e.target.value, harm1[1]]);
                        handleDebounceChange();
                      }}
                    />
                    <Input
                      className="rounded-none h-10"
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
                  />{" "}
                  Heavy
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={sArmor}
                    onCheckedChange={() => {
                      setSArmor(!sArmor);
                      setChanges(true);
                    }}
                  />{" "}
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
                    onClick={async () => {
                      handleRollButton("resist", rollLeft, rollRight);
                    }}
                  >
                    <ShieldAlert /> Resist
                  </Button>
                  <Button
                    onClick={async () => {
                      handleRollButton("action", rollLeft, rollRight);
                    }}
                    className="flex items-center gap-2"
                  >
                    <Dices /> Action
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={async () => {
                      handleRollButton("project", rollLeft, rollRight);
                    }}
                  >
                    <Cog /> Project
                  </Button>
                </div>
                <div className="flex gap-4 justify-between flex-wrap">
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="bonus-dice" className="text-center">
                        Bonus Dice
                      </Label>
                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500" />
                          <Input
                            id="bonus-dice"
                            type="number"
                            className="w-20"
                            min={0}
                            value={bonusDiceRed}
                            onChange={(e) => {
                              setBonusDiceRed(parseInt(e.target.value));
                            }}
                          />
                        </div>
                        <div className="flex gap-2 items-center">
                          <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500" />
                          <Input
                            id="bonus-dice"
                            type="number"
                            className="w-20"
                            min={0}
                            value={bonusDiceBlue}
                            onChange={(e) => {
                              setBonusDiceBlue(parseInt(e.target.value));
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-muted-foreground text-xs leading-3 mt-2">
                      <span>
                        You can gain bonus dice through:{" "}
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
                        onClick={async () => {
                          const roll = await rollDice(
                            "fortune",
                            0,
                            fortuneDice
                          );
                          diceToast(roll);
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
                    checked={loadout?.name === "Discreet"}
                    onCheckedChange={() => {
                      setLoadout(loadouts[0]);
                      setChanges(true);
                    }}
                  />{" "}
                  Discreet
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={loadout?.name === "Conspicuous"}
                    onCheckedChange={() => {
                      setLoadout(loadouts[1]);
                      setChanges(true);
                    }}
                  />{" "}
                  Conspicuous
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={loadout?.name === "Bulky"}
                    onCheckedChange={() => {
                      setLoadout(loadouts[2]);
                      setChanges(true);
                    }}
                  />{" "}
                  Bulky
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={loadout?.name === "Encumbered"}
                    onCheckedChange={() => {
                      setLoadout(loadouts[3]);
                      setChanges(true);
                    }}
                  />{" "}
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
                        name: "",
                        slots: 1,
                      },
                    ]);
                  } else {
                    setItems([
                      ...items,
                      {
                        name: "",
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
                value={univQuestions?.[0] || ""}
                onChange={(e) => {
                  setUnivQuestions([
                    e.target.value,
                    univQuestions?.[1] || "",
                    univQuestions?.[2] || "",
                    univQuestions?.[3] || "",
                    univQuestions?.[4] || "",
                  ]);
                  handleDebounceChange();
                }}
              />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="dream">What&apos;s your dream?</Label>
              <Textarea
                id="dream"
                value={univQuestions?.[1] || ""}
                onChange={(e) => {
                  setUnivQuestions([
                    univQuestions?.[0] || "",
                    e.target.value,
                    univQuestions?.[2] || "",
                    univQuestions?.[3] || "",
                    univQuestions?.[4] || "",
                  ]);
                  handleDebounceChange();
                }}
              />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="faith">What do you have faith in?</Label>
              <Textarea
                id="faith"
                value={univQuestions?.[2] || ""}
                onChange={(e) => {
                  setUnivQuestions([
                    univQuestions?.[0] || "",
                    univQuestions?.[1] || "",
                    e.target.value,
                    univQuestions?.[3] || "",
                    univQuestions?.[4] || "",
                  ]);
                  handleDebounceChange();
                }}
              />
            </div>
            <div className="w-full gap-1.5 my-2">
              <Label htmlFor="hurt">What&apos;s your hurt?</Label>
              <Textarea
                id="hurt"
                value={univQuestions?.[3] || ""}
                onChange={(e) => {
                  setUnivQuestions([
                    univQuestions?.[0] || "",
                    univQuestions?.[1] || "",
                    univQuestions?.[2] || "",
                    e.target.value,
                    univQuestions?.[4] || "",
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
                value={univQuestions?.[4] || ""}
                onChange={(e) => {
                  setUnivQuestions([
                    univQuestions?.[0] || "",
                    univQuestions?.[1] || "",
                    univQuestions?.[2] || "",
                    univQuestions?.[3] || "",
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
                  value={questions.get(`${selectedBackground.name}-${i}`) || ""}
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
          <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-6 focus-visible:outline-hidden">
            <div className="my-4">
              <div className="flex flex-col gap-2">
                <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
                  Stress & Conditions <ConditionsInfo />
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
                  {["Insecure", "Afraid", "Angry", "Hopeless", "Guilty"].map(
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
                Actions{" "}
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
                      <BookOpen style={{ height: "24px", width: "24px" }} />
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
                    onClick={async (e) => {
                      if (e.shiftKey) {
                        const roll = await rollActions(
                          "action",
                          "Heart",
                          "Defy"
                        );
                        diceToast(roll, "Defy");
                      } else {
                        setRollLeft("Heart-Defy");
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline mt-0">
                      Defy
                    </TypographyH4>
                  </div>
                  <Separator />
                  <div
                    className="h-10 flex items-center hover:cursor-pointer group"
                    onClick={async (e) => {
                      if (e.shiftKey) {
                        const roll = await rollActions(
                          "action",
                          "Heart",
                          "Persuade"
                        );
                        diceToast(roll, "Persuade");
                      } else {
                        setRollLeft("Heart-Persuade");
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline mt-0">
                      Persuade
                    </TypographyH4>
                  </div>
                </div>
                <div className="flex flex-col  border-r-[1px]">
                  <ActionScore
                    key={`defy${new Date().getTime()}`}
                    score={attributes.Heart.Defy}
                    onChange={(s) => {
                      handleUpdateActionScore("Heart", "Defy", s);
                    }}
                    className="h-10 justify-end mr-2"
                  />
                  <Separator />
                  <ActionScore
                    key={`persuade${new Date().getTime()}`}
                    score={attributes.Heart.Persuade}
                    onChange={(s) => {
                      handleUpdateActionScore("Heart", "Persuade", s);
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
                        onClick={async (e) => {
                          if (e.shiftKey) {
                            const roll = await rollActions(
                              "action",
                              "Heart",
                              a
                            );
                            diceToast(roll, a);
                          } else {
                            setRollRight(`Heart-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                        onClick={async (e) => {
                          if (e.shiftKey) {
                            const roll = await rollActions(
                              "action",
                              "Heart",
                              a
                            );
                            diceToast(roll, a);
                          } else {
                            setRollRight(`Heart-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                      onClick={async (e) => {
                        if (e.shiftKey) {
                          const roll = await rollActions("action", "Heart", a);
                          diceToast(roll, a);
                        } else {
                          setRollRight(`Heart-${a}`);
                        }
                      }}
                    >
                      <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                          handleUpdateActionScore("Heart", k, s);
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
                          handleUpdateActionScore("Heart", k, s);
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
                        handleUpdateActionScore("Heart", k, s);
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
                    onClick={async (e) => {
                      if (e.shiftKey) {
                        const roll = await rollActions(
                          "action",
                          "Instinct",
                          "Charge"
                        );
                        diceToast(roll, "Charge");
                      } else {
                        setRollLeft("Instinct-Charge");
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline mt-0">
                      Charge
                    </TypographyH4>
                  </div>
                  <Separator />
                  <div
                    className="h-10 flex items-center hover:cursor-pointer group"
                    onClick={async (e) => {
                      if (e.shiftKey) {
                        const roll = await rollActions(
                          "action",
                          "Instinct",
                          "Prowl"
                        );
                        diceToast(roll, "Prowl");
                      } else {
                        setRollLeft("Instinct-Prowl");
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline mt-0">
                      Prowl
                    </TypographyH4>
                  </div>
                </div>
                <div className="flex flex-col border-r-[1px]">
                  <ActionScore
                    key={`charge${new Date().getTime()}`}
                    score={attributes.Instinct.Charge}
                    onChange={(s) => {
                      handleUpdateActionScore("Instinct", "Charge", s);
                    }}
                    className="h-10 justify-end mr-2"
                  />
                  <Separator />
                  <ActionScore
                    key={`prowl${new Date().getTime()}`}
                    score={attributes.Instinct.Prowl}
                    onChange={(s) => {
                      handleUpdateActionScore("Instinct", "Prowl", s);
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
                        onClick={async (e) => {
                          if (e.shiftKey) {
                            const roll = await rollActions(
                              "action",
                              "Instinct",
                              a
                            );
                            diceToast(roll, a);
                          } else {
                            setRollRight(`Instinct-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                        onClick={async (e) => {
                          if (e.shiftKey) {
                            const roll = await rollActions(
                              "action",
                              "Instinct",
                              a
                            );
                            diceToast(roll, a);
                          } else {
                            setRollRight(`Instinct-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                      onClick={async (e) => {
                        if (e.shiftKey) {
                          const roll = await rollActions(
                            "action",
                            "Instinct",
                            a
                          );
                          diceToast(roll, a);
                        } else {
                          setRollRight(`Instinct-${a}`);
                        }
                      }}
                    >
                      <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                          handleUpdateActionScore("Instinct", k, s);
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
                          handleUpdateActionScore("Instinct", k, s);
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
                        handleUpdateActionScore("Instinct", k, s);
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
                    onClick={async (e) => {
                      if (e.shiftKey) {
                        const roll = await rollActions(
                          "action",
                          "Machina",
                          "Suggest"
                        );
                        diceToast(roll, "Suggest");
                      } else {
                        setRollLeft("Machina-Suggest");
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline mt-0">
                      Suggest
                    </TypographyH4>
                  </div>
                  <Separator />
                  <div
                    className="h-10 flex items-center hover:cursor-pointer group"
                    onClick={async (e) => {
                      if (e.shiftKey) {
                        const roll = await rollActions(
                          "action",
                          "Machina",
                          "Survey"
                        );
                        diceToast(roll, "Survey");
                      } else {
                        setRollLeft("Machina-Survey");
                      }
                    }}
                  >
                    <TypographyH4 className="group-hover:underline mt-0">
                      Survey
                    </TypographyH4>
                  </div>
                </div>
                <div className="flex flex-col border-r-[1px]">
                  <ActionScore
                    key={`suggest${new Date().getTime()}`}
                    score={attributes.Machina.Suggest}
                    onChange={(s) => {
                      handleUpdateActionScore("Machina", "Suggest", s);
                    }}
                    className="h-10 justify-end mr-2"
                  />
                  <Separator />
                  <ActionScore
                    key={`survey${new Date().getTime()}`}
                    score={attributes.Machina.Survey}
                    onChange={(s) => {
                      handleUpdateActionScore("Machina", "Survey", s);
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
                        onClick={async (e) => {
                          if (e.shiftKey) {
                            const roll = await rollActions(
                              "action",
                              "Machina",
                              a
                            );
                            diceToast(roll, a);
                          } else {
                            setRollRight(`Machina-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                        onClick={async (e) => {
                          if (e.shiftKey) {
                            const roll = await rollActions(
                              "action",
                              "Machina",
                              a
                            );
                            diceToast(roll, a);
                          } else {
                            setRollRight(`Machina-${a}`);
                          }
                        }}
                      >
                        <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                      onClick={async (e) => {
                        if (e.shiftKey) {
                          const roll = await rollActions(
                            "action",
                            "Machina",
                            a
                          );
                          diceToast(roll, a);
                        } else {
                          setRollRight(`Machina-${a}`);
                        }
                      }}
                    >
                      <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
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
                          handleUpdateActionScore("Machina", k, s);
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
                          handleUpdateActionScore("Machina", k, s);
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
                        handleUpdateActionScore("Machina", k, s);
                      }}
                      className="h-10 justify-end"
                    />
                  ))}
                </div>
              </div>
              <TypographyH2 className="text-md text-muted-foreground mb-2 mt-8">
                Bonds
              </TypographyH2>
              <TypographyH3 className="mt-4 text-sm text-muted-foreground flex items-center justify-between">
                Personal
                <Button
                  size="icon"
                  variant="ghost"
                  className="p-1 text-green-600 hover:text-green-600 h-10 w-10"
                  onClick={() => {
                    setBonds((prevBonds) => ({
                      ...prevBonds,
                      Personal: [
                        ...prevBonds.Personal,
                        { name: "", score: [0, 0], description: "" },
                      ],
                    }));
                    setChanges(true);
                  }}
                >
                  <DiamondPlus style={{ height: "24px", width: "24px" }} />
                </Button>
              </TypographyH3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {bonds.Personal.map((b, i) => (
                  <BondInput
                    key={`bond-personal-${i}`}
                    bond={b}
                    handleSave={(name: string, description: string) => {
                      setBonds((prevBonds) => ({
                        Personal: prevBonds.Personal.map((bond, index) =>
                          index === i
                            ? { name, score: bond.score, description }
                            : bond
                        ),
                        Familial: prevBonds.Familial,
                        Professional: prevBonds.Professional,
                        Crew: prevBonds.Crew,
                      }));
                      setChanges(true);
                    }}
                    handleChangeScore={(s: number[]) => {
                      setBonds((prevBonds) => ({
                        Personal: prevBonds.Personal.map((bond, index) =>
                          index === i
                            ? {
                                name: bond.name,
                                score: s,
                                description: bond.description,
                              }
                            : bond
                        ),
                        Familial: prevBonds.Familial,
                        Professional: prevBonds.Professional,
                        Crew: prevBonds.Crew,
                      }));
                      setChanges(true);
                    }}
                    handleDeleteBond={() => {
                      setBonds((prevBonds) => ({
                        ...prevBonds,
                        Personal: prevBonds.Personal.filter(
                          (_, index) => i !== index
                        ),
                      }));
                      setChanges(true);
                    }}
                  />
                ))}
              </div>
              <TypographyH3 className="mt-4 text-sm text-muted-foreground flex items-center justify-between">
                Familial
                <Button
                  size="icon"
                  variant="ghost"
                  className="p-1 text-green-600 hover:text-green-600 h-10 w-10"
                  onClick={() => {
                    setBonds((prevBonds) => ({
                      ...prevBonds,
                      Familial: [
                        ...prevBonds.Familial,
                        { name: "", score: [0, 0], description: "" },
                      ],
                    }));
                    setChanges(true);
                  }}
                >
                  <DiamondPlus style={{ height: "24px", width: "24px" }} />
                </Button>
              </TypographyH3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {bonds.Familial.map((b, i) => (
                  <BondInput
                    key={`bond-familial-${i}`}
                    bond={b}
                    handleSave={(name: string, description: string) => {
                      setBonds((prevBonds) => ({
                        Personal: prevBonds.Personal,
                        Familial: prevBonds.Familial.map((bond, index) =>
                          index === i
                            ? { name, score: bond.score, description }
                            : bond
                        ),
                        Professional: prevBonds.Professional,
                        Crew: prevBonds.Crew,
                      }));
                      setChanges(true);
                    }}
                    handleChangeScore={(s: number[]) => {
                      setBonds((prevBonds) => ({
                        Personal: prevBonds.Personal,
                        Familial: prevBonds.Familial.map((bond, index) =>
                          index === i
                            ? {
                                name: bond.name,
                                score: s,
                                description: bond.description,
                              }
                            : bond
                        ),
                        Professional: prevBonds.Professional,
                        Crew: prevBonds.Crew,
                      }));
                      setChanges(true);
                    }}
                    handleDeleteBond={() => {
                      setBonds((prevBonds) => ({
                        ...prevBonds,
                        Familial: prevBonds.Familial.filter(
                          (_, index) => i !== index
                        ),
                      }));
                      setChanges(true);
                    }}
                  />
                ))}
              </div>
              <TypographyH3 className="mt-4 text-sm text-muted-foreground">
                Professional
              </TypographyH3>
              {selectedBackground ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                  <div className="m-2 max-w-96">
                    <div className="flex justify-between items-center">
                      <TypographyP>
                        {selectedBackground.professionalBonds?.[0].name}
                      </TypographyP>
                      <ActionScore
                        score={bonds.Professional[0].score}
                        onChange={(s: number[]) => {
                          setBonds((prevBonds) => ({
                            Personal: prevBonds.Personal,
                            Familial: prevBonds.Familial,
                            Professional: [
                              {
                                name: prevBonds.Professional[0].name,
                                description:
                                  prevBonds.Professional[0].description,
                                score: s,
                              },
                              prevBonds.Professional[1],
                            ],
                            Crew: prevBonds.Crew,
                          }));
                          setChanges(true);
                        }}
                      />
                    </div>
                    <TypographyP className="text-muted-foreground text-xs">
                      {selectedBackground?.professionalBonds?.[0].description}
                    </TypographyP>
                  </div>
                  <div className="m-2 max-w-96">
                    <div className="flex justify-between items-center">
                      <TypographyP>
                        {selectedBackground.professionalBonds?.[1].name}
                      </TypographyP>
                      <ActionScore
                        score={bonds.Professional[1].score}
                        onChange={(s: number[]) => {
                          setBonds((prevBonds) => ({
                            Personal: prevBonds.Personal,
                            Familial: prevBonds.Familial,
                            Professional: [
                              prevBonds.Professional[0],
                              {
                                name: prevBonds.Professional[1].name,
                                description:
                                  prevBonds.Professional[1].description,
                                score: s,
                              },
                            ],
                            Crew: prevBonds.Crew,
                          }));
                          setChanges(true);
                        }}
                      />
                    </div>
                    <TypographyP className="text-muted-foreground text-xs">
                      {selectedBackground?.professionalBonds?.[0].description}
                    </TypographyP>
                  </div>
                </div>
              ) : (
                <TypographyP className="text-center">
                  Select a <span className="text-red-500">background</span> to
                  view professional bonds
                </TypographyP>
              )}
              <TypographyH3 className="mt-4 text-sm text-muted-foreground flex items-center justify-between">
                Crew
                <Button
                  size="icon"
                  variant="ghost"
                  className="p-1 text-green-600 hover:text-green-600 h-10 w-10"
                  onClick={() => {
                    console.log(bonds);
                    if (bonds.Crew?.length > 0) {
                      setBonds((prevBonds) => ({
                        ...prevBonds,
                        Crew: [
                          ...prevBonds.Crew,
                          { name: "", score: [1, 0], description: "" },
                        ],
                      }));
                    } else {
                      setBonds((prevBonds) => ({
                        ...prevBonds,
                        Crew: [{ name: "", score: [1, 0], description: "" }],
                      }));
                    }
                    setChanges(true);
                  }}
                >
                  <DiamondPlus style={{ height: "24px", width: "24px" }} />
                </Button>
              </TypographyH3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {bonds.Crew?.map((b, i) => (
                  <BondInput
                    key={`bond-crew-${i}`}
                    bond={b}
                    handleSave={(name: string, description: string) => {
                      setBonds((prevBonds) => ({
                        Personal: prevBonds.Personal,
                        Familial: prevBonds.Familial,
                        Professional: prevBonds.Professional,
                        Crew: prevBonds.Crew.map((bond, index) =>
                          index === i
                            ? { name, score: bond.score, description }
                            : bond
                        ),
                      }));
                      setChanges(true);
                    }}
                    handleChangeScore={(s: number[]) => {
                      setBonds((prevBonds) => ({
                        Personal: prevBonds.Personal,
                        Familial: prevBonds.Familial,
                        Professional: prevBonds.Professional,
                        Crew: prevBonds.Crew.map((bond, index) =>
                          index === i
                            ? {
                                name: bond.name,
                                score: s,
                                description: bond.description,
                              }
                            : bond
                        ),
                      }));
                      setChanges(true);
                    }}
                    handleDeleteBond={() => {
                      setBonds((prevBonds) => ({
                        ...prevBonds,
                        Crew: prevBonds.Crew.filter((_, index) => i !== index),
                      }));
                      setChanges(true);
                    }}
                  />
                ))}
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
                    className="rounded-none h-10"
                    value={harm3}
                    onChange={(e) => {
                      setHarm3(e.target.value);
                      handleDebounceChange();
                    }}
                  />
                  <div className="flex w-full">
                    <Input
                      className="rounded-none h-10"
                      value={harm2[0]}
                      onChange={(e) => {
                        setHarm2([e.target.value, harm2[1]]);
                        handleDebounceChange();
                      }}
                    />
                    <Input
                      className="rounded-none h-10"
                      value={harm2[1]}
                      onChange={(e) => {
                        setHarm2([harm2[0], e.target.value]);
                        handleDebounceChange();
                      }}
                    />
                  </div>
                  <div className="flex w-full">
                    <Input
                      className="rounded-none h-10"
                      value={harm1[0]}
                      disabled={true}
                      onChange={(e) => {
                        setHarm1([e.target.value, harm1[1]]);
                        handleDebounceChange();
                      }}
                    />
                    <Input
                      className="rounded-none h-10"
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
                  />{" "}
                  Heavy
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={sArmor}
                    onCheckedChange={() => {
                      setSArmor(!sArmor);
                      setChanges(true);
                    }}
                  />{" "}
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
                    onClick={async () => {
                      handleRollButton("resist", rollLeft, rollRight);
                    }}
                  >
                    <ShieldAlert /> Resist
                  </Button>
                  <Button
                    onClick={async () => {
                      handleRollButton("resist", rollLeft, rollRight);
                    }}
                    className="flex items-center gap-2"
                  >
                    <Dices /> Action
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={async () => {
                      handleRollButton("resist", rollLeft, rollRight);
                    }}
                  >
                    <Cog /> Project
                  </Button>
                </div>
                <div className="flex gap-4 justify-between flex-wrap">
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="bonus-dice" className="text-center">
                        Bonus Dice
                      </Label>
                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500" />
                          <Input
                            id="bonus-dice"
                            type="number"
                            className="w-20"
                            min={0}
                            value={bonusDiceRed}
                            onChange={(e) => {
                              setBonusDiceRed(parseInt(e.target.value));
                            }}
                          />
                        </div>
                        <div className="flex gap-2 items-center">
                          <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500" />
                          <Input
                            id="bonus-dice"
                            type="number"
                            className="w-20"
                            min={0}
                            value={bonusDiceBlue}
                            onChange={(e) => {
                              setBonusDiceBlue(parseInt(e.target.value));
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-muted-foreground text-xs leading-3 mt-2">
                      <span>
                        You can gain bonus dice through:{" "}
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
                        onClick={async () => {
                          const roll = await rollDice(
                            "fortune",
                            0,
                            fortuneDice
                          );
                          diceToast(roll);
                        }}
                      >
                        Fortune Roll
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
              <TypographyH2 className="mt-4 flex items-end justify-between">
                Subsistence{" "}
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
              <Crit background={selectedBackground?.name || ""} />
              <TypographyH3 className="text-sm text-muted-foreground mt-4">
                Failure Consequences (
                <span className="text-red-500">{selectedBackground?.name}</span>
                )
              </TypographyH3>
              <TypographyP>Choose one:</TypographyP>
              <Consequences background={selectedBackground?.name || ""} />
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
