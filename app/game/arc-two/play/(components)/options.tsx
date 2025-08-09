import { Button } from "@/components/ui/button";
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
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import {
  ArchetypeV2,
  BackgroundV2,
  FightingStyleV2,
  Operative,
  Sleeve,
  Transformation,
} from "@/types/game";
import backgrounds from "@/public/arc2/backgrounds.json";
import archetypes from "@/public/arc2/archetypes.json";
import sleeves from "@/public/arc2/sleeves.json";
import operatives from "@/public/arc2/operatives.json";
import transformations from "@/public/arc2/transformations.json";
import fightingStyles from "@/public/arc2/fighting-styles.json";
import Portrait from "@/components/character-sheet/portrait";

export default function Options() {
  const {
    portrait,
    name,
    alias,
    selectedArchetype,
    selectedBackground,
    selectedSleeve,
    selectedOperative,
    selectedTransformation,
    selectedFightingStyle,
    setPortrait,
    setName,
    setAlias,
    setSelectedArchetype,
    setSelectedBackground,
    setSelectedSleeve,
    setSelectedOperative,
    setSelectedTransformation,
    setSelectedFightingStyle,
    setChanges,
    handleDebounceChange,
  } = useCharacterSheet();

  return (
    <div className="flex flex-col md:flex-row mt-1 items-start gap-1">
      <Portrait
        className="mb-1 mt-6"
        portrait={portrait}
        name={name}
        onPortraitChange={setPortrait}
        onChanges={setChanges}
      />
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
              key={selectedBackground?.name || "empty"}
              value={selectedBackground?.name}
              onValueChange={(value) => {
                const foundBackground = backgrounds.find(
                  (b) => b.name === value
                ) as BackgroundV2 | undefined;
                if (foundBackground) {
                  setSelectedBackground(foundBackground);
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
                  }}
                >
                  Clear
                </Button>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select
              key={selectedArchetype?.name || "empty"}
              value={selectedArchetype?.name}
              onValueChange={(value) => {
                const foundArchetype = archetypes.find(
                  (a) => a.name === value
                ) as ArchetypeV2 | undefined;
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
              key={selectedSleeve?.name || "empty"}
              value={selectedSleeve?.name}
              onValueChange={(value) => {
                const foundSleeve = sleeves.find((b) => b.name === value) as
                  | Sleeve
                  | undefined;
                if (foundSleeve) {
                  setSelectedSleeve(foundSleeve);
                  setChanges(true);
                }
              }}
            >
              <SelectTrigger className="font-bold text-sky-500">
                <SelectValue placeholder="Select a sleeve" />
              </SelectTrigger>
              <SelectContent>
                {sleeves.map((sleeve) => (
                  <SelectItem key={sleeve.name} value={sleeve.name}>
                    {sleeve.name}
                  </SelectItem>
                ))}
                <SelectSeparator />
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full px-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSleeve(undefined);
                    setChanges(true);
                  }}
                >
                  Clear
                </Button>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select
              key={selectedOperative?.name || "empty"}
              value={selectedOperative?.name}
              onValueChange={(value) => {
                const foundOperative = operatives.find(
                  (b) => b.name === value
                ) as Operative | undefined;
                if (foundOperative) {
                  setSelectedOperative(foundOperative);
                  setChanges(true);
                }
              }}
            >
              <SelectTrigger className="font-bold text-indigo-500">
                <SelectValue placeholder="Select an operative" />
              </SelectTrigger>
              <SelectContent>
                {operatives.map((operative) => (
                  <SelectItem key={operative.name} value={operative.name}>
                    {operative.name}
                  </SelectItem>
                ))}
                <SelectSeparator />
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full px-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedOperative(undefined);
                    setChanges(true);
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
              key={selectedTransformation?.name || "empty"}
              value={selectedTransformation?.name}
              onValueChange={(value) => {
                const foundTransformation = transformations.find(
                  (b) => b.name === value
                ) as Transformation | undefined;
                if (foundTransformation) {
                  setSelectedTransformation(foundTransformation);
                  setChanges(true);
                }
              }}
            >
              <SelectTrigger className="font-bold text-orange-500">
                <SelectValue placeholder="Select a transformation" />
              </SelectTrigger>
              <SelectContent>
                {transformations.map((transformation) => (
                  <SelectItem
                    key={transformation.name}
                    value={transformation.name}
                  >
                    {transformation.name}
                  </SelectItem>
                ))}
                <SelectSeparator />
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full px-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTransformation(undefined);
                    setChanges(true);
                  }}
                >
                  Clear
                </Button>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select
              key={selectedFightingStyle?.name || "empty"}
              value={selectedFightingStyle?.name}
              onValueChange={(value) => {
                const foundFightingStyle = fightingStyles.find(
                  (b) => b.name === value
                ) as FightingStyleV2 | undefined;
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
  );
}
