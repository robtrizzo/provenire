"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import heritages from "@/public/heritages.json";
import backgrounds from "@/public/backgrounds.json";
import archetypes from "@/public/archetypes.json";
import skillsets from "@/public/skillsets.json";
import fightingStyles from "@/public/fighting_styles.json";
import donums from "@/public/donums.json";
import {
  type Archetype,
  type Skillset,
  type Background,
  type FightingStyle,
  Donum,
} from "@/types/game";
import { Button } from "@/components/ui/button";
import SaveCharacter from "./components/save-character";
import LoadCharacter from "./components/load-character";
import ClearCharacter from "./components/clear-character";
import { useCharacterSheet } from "@/contexts/characterSheetContext";
import { useRoll } from "@/contexts/rollContext";
import Portrait from "./components/portrait";
import MissionSection from "./components/mission-section";
import ProfileSection from "./components/profile-section";
import ChurnSection from "./components/churn-section";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export default function Charsheet() {
  const [tab, setTab] = useState("mission");

  const [heritageSelectKey, setHeritageSelectKey] = useState(+new Date());
  const [archetypeSelectKey, setArchetypeSelectKey] = useState(+new Date());
  const [backgroundSelectKey, setBackgroundSelectKey] = useState(+new Date());
  const [skillsetSelectKey, setSkillsetSelectKey] = useState(+new Date());
  const [fightingStyleSelectKey, setFightingStyleSelectKey] = useState(
    +new Date()
  );
  const [donumSelectKey, setDonumSelectKey] = useState(+new Date());

  const {
    name,
    alias,
    selectedArchetype,
    selectedSkillset,
    selectedBackground,
    selectedHeritage,
    selectedFightingStyle,
    selectedDonum,
    bonds,
    localUpdatedAt,
    cloudUpdatedAt,
    isSaving,
    setName,
    setAlias,
    setSelectedArchetype,
    setSelectedSkillset,
    setSelectedBackground,
    setSelectedHeritage,
    setSelectedFightingStyle,
    setSelectedDonum,
    setBonds,
    setChanges,
    setCharacterLoaded,
    setCloudUpdatedAt,
    handleDebounceChange,
  } = useCharacterSheet();

  const { toast } = useToast();

  const { isFetching, refetch } = useQuery({
    queryKey: ["characters", name],
    queryFn: async () => {
      if (!name) {
        return { message: "no character to fetch" };
      }
      const response = await fetch(`/api/characters/${name}`, {
        cache: "no-cache",
      });
      const character = await response.json();

      /**
       * if the fetched character sheet is newer than the character data
       * in local storage, set the character sheet to that
       */
      try {
        if (
          !localUpdatedAt ||
          new Date(character.updatedAt) > new Date(localUpdatedAt)
        ) {
          console.log("loading character from db");
          localStorage.setItem("charsheet", JSON.stringify(character));
          setCharacterLoaded(new Date());
          toast({
            title: "Newer version of character synced from cloud.",
          });
          return { message: "character loaded" };
        }
        console.log("ignoring old character save");
        // still set the cloudUpdatedAt to the fetched value
        setCloudUpdatedAt(character.updatedAt);
        return { message: "ignoring old character save" };
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: `There was an error syncing character with cloud: ${error}`,
          variant: "destructive",
        });
        return {
          message: "there was an error while loading character",
          error,
        };
      }
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        !!localUpdatedAt &&
        !!cloudUpdatedAt &&
        new Date(localUpdatedAt) <= new Date(cloudUpdatedAt)
      ) {
        refetch();
      }
    }, 5 * 60 * 1000 /** 5 minutes */);
    return () => clearInterval(interval);
  }, [localUpdatedAt, cloudUpdatedAt, refetch]);

  useEffect(() => {
    if (window === undefined) return;

    // read the hash and set the tab
    const hash = window.location.hash;
    if (hash && ["mission", "profile", "churn"].includes(hash.substring(1))) {
      setTab(hash.substring(1));
    }
  }, []);

  const { setRollLeft, setRollRight } = useRoll();

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 mt-5 ml-auto">
          <div className="flex flex-col">
            <code className="text-xs text-muted-foreground">
              last <span className="text-amber-800">local</span> save:{" "}
              {localUpdatedAt
                ? new Date(localUpdatedAt).toLocaleString()
                : "N/A"}
            </code>
            <code className="text-xs text-muted-foreground">
              last <span className="text-sky-800">cloud</span> save:{" "}
              {isSaving
                ? "saving..."
                : isFetching
                ? "fetching..."
                : cloudUpdatedAt
                ? new Date(cloudUpdatedAt).toLocaleString()
                : "N/A"}
            </code>
          </div>
          <SaveCharacter initialName={name} />
          <LoadCharacter />
          <ClearCharacter />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-1 items-start gap-1">
        <Portrait className="mb-1 mt-6" />
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
                          description:
                            foundBackground.professionalBonds[0].description,
                          score: bonds.Professional[0].score,
                        },
                        {
                          name: foundBackground.professionalBonds[1].name,
                          description:
                            foundBackground.professionalBonds[1].description,
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 w-full my-1">
            <div>
              <Select
                key={fightingStyleSelectKey}
                value={selectedFightingStyle?.name}
                onValueChange={(value) => {
                  const foundFightingStyle = fightingStyles.find(
                    (fs) => fs.name === value
                  ) as FightingStyle | undefined;
                  if (foundFightingStyle) {
                    setSelectedFightingStyle(foundFightingStyle);
                    setChanges(true);
                  }
                }}
              >
                <SelectTrigger className="font-bold text-emerald-500">
                  <SelectValue placeholder="Select a fighting style" />
                </SelectTrigger>
                <SelectContent>
                  {fightingStyles.map((fs) => (
                    <SelectItem key={fs.name} value={fs.name}>
                      {fs.name}
                      <span className="text-muted-foreground ml-4">
                        {fs.description}
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
                      setSelectedFightingStyle(undefined);
                      setChanges(true);
                      setFightingStyleSelectKey(+new Date());
                    }}
                  >
                    Clear
                  </Button>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select
                key={donumSelectKey}
                value={selectedDonum?.name}
                onValueChange={(value) => {
                  const foundDonum = donums.find((fs) => fs.name === value) as
                    | Donum
                    | undefined;
                  if (foundDonum) {
                    setSelectedDonum(foundDonum);
                    setChanges(true);
                  }
                }}
              >
                <SelectTrigger className="font-bold text-fuchsia-500 group">
                  <SelectValue
                    placeholder={
                      <span>
                        Select a{" "}
                        <i className="blur-[1px] animate-ping hidden group-hover:inline">
                          ? ? D O N U M ? ..
                        </i>
                        <span className="group-hover:hidden">
                          transformation
                        </span>
                      </span>
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {donums.map((d) => (
                    <SelectItem key={d.name} value={d.name}>
                      {d.name}
                      <span className="text-muted-foreground ml-4">
                        ({d.translation})
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
                      setSelectedDonum(undefined);
                      setChanges(true);
                      setDonumSelectKey(+new Date());
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
          <MissionSection />
        </TabsContent>
        <TabsContent value="profile" className="w-full">
          <ProfileSection />
        </TabsContent>
        {/* THE CHURN */}
        <TabsContent value="churn" className="w-full">
          <ChurnSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
