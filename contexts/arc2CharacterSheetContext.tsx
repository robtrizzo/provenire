"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  type ArchetypeV2,
  Loadout,
  Item,
  BackgroundV2,
  Sleeve,
  Operative,
  FightingStyleV2,
  Transformation,
} from "@/types/game";
import { debounce } from "@/lib/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";

const SUPPORTED_VERSION = 2;

interface CharacterSheetContextProps {
  compatibleVersions: number[];
  version: number;
  portrait: string;
  name: string;
  alias: string;
  univQuestions: string[];
  selectedArchetype: ArchetypeV2 | undefined;
  selectedBackground: BackgroundV2 | undefined;
  selectedSleeve: Sleeve | undefined;
  selectedOperative: Operative | undefined;
  selectedTransformation: Transformation | undefined;
  selectedFightingStyle: FightingStyleV2 | undefined;
  questions: Map<string, string>;
  notes: string;
  xp: number;
  stress: number;
  conditions: string[];
  harm3: string;
  harm2: string[];
  harm1: string[];
  armor: boolean;
  hArmor: boolean;
  sArmor: boolean;
  abilities: string[];
  loadout: Loadout | undefined;
  items: Item[];
  localUpdatedAt: Date | null;
  cloudUpdatedAt: Date | null;
  isFetching: boolean;
  isSaving: boolean;
  setPortrait: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setAlias: React.Dispatch<React.SetStateAction<string>>;
  setUnivQuestions: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedArchetype: React.Dispatch<
    React.SetStateAction<ArchetypeV2 | undefined>
  >;

  setSelectedBackground: React.Dispatch<
    React.SetStateAction<BackgroundV2 | undefined>
  >;
  setSelectedSleeve: React.Dispatch<React.SetStateAction<Sleeve | undefined>>;
  setSelectedOperative: React.Dispatch<
    React.SetStateAction<Operative | undefined>
  >;
  setSelectedTransformation: React.Dispatch<
    React.SetStateAction<Transformation | undefined>
  >;
  setSelectedFightingStyle: React.Dispatch<
    React.SetStateAction<FightingStyleV2 | undefined>
  >;
  setQuestions: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setNotes: React.Dispatch<React.SetStateAction<string>>;
  setXp: React.Dispatch<React.SetStateAction<number>>;
  setStress: React.Dispatch<React.SetStateAction<number>>;
  setConditions: React.Dispatch<React.SetStateAction<string[]>>;
  setHarm3: React.Dispatch<React.SetStateAction<string>>;
  setHarm2: React.Dispatch<React.SetStateAction<string[]>>;
  setHarm1: React.Dispatch<React.SetStateAction<string[]>>;
  setArmor: React.Dispatch<React.SetStateAction<boolean>>;
  setHArmor: React.Dispatch<React.SetStateAction<boolean>>;
  setSArmor: React.Dispatch<React.SetStateAction<boolean>>;
  setAbilities: React.Dispatch<React.SetStateAction<string[]>>;
  setLoadout: React.Dispatch<React.SetStateAction<Loadout | undefined>>;
  handleUpdateQuestion: (key: string, value: string) => void;
  handleUpdateItemName: (index: number, value: string) => void;
  handleUpdateItemSlots: (index: number, value: number) => void;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  handleUpdateArchetypeQuestion: (
    horizon: boolean,
    questionIdx: number,
    newQuestion: string
  ) => void;
  setChanges: React.Dispatch<React.SetStateAction<boolean>>;
  setCharacterLoaded: React.Dispatch<React.SetStateAction<Date>>;
  handleDebounceChange: () => void;
  setCloudUpdatedAt: React.Dispatch<React.SetStateAction<Date | null>>;
  clearCharacter: () => void;
}

const CharacterSheetContext = createContext<
  CharacterSheetContextProps | undefined
>(undefined);

export const useCharacterSheet = () => {
  const context = useContext(CharacterSheetContext);
  if (!context) {
    throw new Error(
      "useCharacterSheet must be used within a CharacterSheetProvider"
    );
  }
  return context;
};

export default function CharacterSheetProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();
  const isAdmin = session?.data?.user.role === "admin";

  const [selectedArchetype, setSelectedArchetype] = useState<ArchetypeV2>();
  const [selectedBackground, setSelectedBackground] = useState<BackgroundV2>();
  const [selectedSleeve, setSelectedSleeve] = useState<Sleeve>();
  const [selectedOperative, setSelectedOperative] = useState<Operative>();
  const [selectedTransformation, setSelectedTransformation] =
    useState<Transformation>();
  const [selectedFightingStyle, setSelectedFightingStyle] =
    useState<FightingStyleV2>();

  const [version, setVersion] = useState(SUPPORTED_VERSION);
  const [portrait, setPortrait] = useState("");
  const [name, setName] = useState("");
  const [alias, setAlias] = useState("");
  const [univQuestions, setUnivQuestions] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
  ]);

  // where this is convenient, the performance is mid
  const [questions, setQuestions] = useState<Map<string, string>>(new Map());
  const [notes, setNotes] = useState<string>("");

  const [xp, setXp] = useState(0);

  const [stress, setStress] = useState(0);
  const [conditions, setConditions] = useState<string[]>([]);

  const [harm3, setHarm3] = useState<string>("");
  const [harm2, setHarm2] = useState<string[]>(["", ""]);
  const [harm1, setHarm1] = useState<string[]>(["tired", ""]);

  const [armor, setArmor] = useState<boolean>(false);
  const [hArmor, setHArmor] = useState<boolean>(false);
  const [sArmor, setSArmor] = useState<boolean>(false);

  const [loadout, setLoadout] = useState<Loadout>();
  const [items, setItems] = useState<Item[]>([]);

  const [abilities, setAbilities] = useState<string[]>([]);

  const [changes, setChanges] = useState(false);
  const [dbChanges, setDbChanges] = useState(false);
  const [characterLoaded, setCharacterLoaded] = useState<Date>(new Date());
  const [localUpdatedAt, setLocalUpdatedAt] = useState<Date | null>(null);
  const [cloudUpdatedAt, setCloudUpdatedAt] = useState<Date | null>(null);

  const { toast } = useToast();

  function setToDefaults() {
    console.log("Setting to defaults");
    setVersion(SUPPORTED_VERSION);
    setPortrait("");
    setName("");
    setAlias("");
    setUnivQuestions(["", "", "", "", ""]);
    setSelectedArchetype(undefined);
    setSelectedBackground(undefined);
    setSelectedSleeve(undefined);
    setSelectedOperative(undefined);
    setSelectedTransformation(undefined);
    setSelectedFightingStyle(undefined);
    setQuestions(new Map());
    setNotes("");
    setXp(0);
    setConditions([]);
    setStress(0);
    setHarm3("");
    setHarm2(["", ""]);
    setHarm1(["", ""]);
    setArmor(false);
    setHArmor(false);
    setSArmor(false);
    setAbilities([]);
    setLoadout(undefined);
    setItems([]);
    setLocalUpdatedAt(null);
    setCloudUpdatedAt(null);
  }

  useEffect(() => {
    if (typeof window === "undefined") return;
    const data = localStorage.getItem("charsheet");
    if (data) {
      const parsed = JSON.parse(data);
      if (!parsed) {
        setToDefaults();
      } else {
        setVersion(parsed.version);
        setPortrait(parsed.portrait);
        setName(parsed.name);
        setAlias(parsed.alias);
        setUnivQuestions(parsed.univQuestions);
        setSelectedArchetype(parsed.selectedArchetype);
        setSelectedBackground(parsed.selectedBackground);
        setSelectedSleeve(parsed.selectedSleeve);
        setSelectedOperative(parsed.selectedOperative);
        setSelectedTransformation(parsed.selectedTransformation);
        setSelectedFightingStyle(parsed.selectedFightingStyle);

        setQuestions(new Map(parsed.questions));
        setNotes(parsed.notes || "");

        setXp(parsed.xp);

        if (parsed.conditions) {
          setConditions(parsed.conditions);
        }
        setStress(parsed.stress || 0);
        setHarm3(parsed.harm3 || "");
        setHarm2(parsed.harm2 || ["", ""]);
        setHarm1(parsed.harm1 || ["", ""]);
        setArmor(parsed.armor || false);
        setHArmor(parsed.hArmor || false);
        setSArmor(parsed.sArmor || false);
        setAbilities(parsed.abilities || []);
        setLoadout(parsed.loadout);
        setItems(parsed.items);
        setLocalUpdatedAt(parsed.updatedAt);
        setCloudUpdatedAt(parsed.updatedAt);
      }
    } else {
      setToDefaults();
    }
  }, [characterLoaded]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (changes) {
        const savedDate = new Date();
        const data = {
          version,
          portrait,
          name,
          alias,
          univQuestions,
          selectedArchetype,
          selectedBackground,
          selectedSleeve,
          selectedOperative,
          selectedTransformation,
          selectedFightingStyle,
          questions: Array.from(questions),
          notes,
          xp,
          stress,
          conditions,
          harm3,
          harm2,
          harm1,
          armor,
          hArmor,
          sArmor,
          abilities,
          loadout,
          items,
          updatedAt: savedDate,
        };
        localStorage.setItem("charsheet", JSON.stringify(data));
        setLocalUpdatedAt(savedDate);
        setChanges(false);
        setDbChanges(true);
      }
    }, 100);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changes]);

  const { mutateAsync: saveToCloud, isPending } = useMutation({
    mutationFn: async () => {
      if (!name) {
        return;
      }
      const data = {
        version,
        portrait,
        name,
        alias,
        univQuestions,
        selectedArchetype,
        selectedBackground,
        selectedSleeve,
        selectedOperative,
        selectedTransformation,
        selectedFightingStyle,
        questions: Array.from(questions),
        notes,
        xp,
        stress,
        conditions,
        harm3,
        harm2,
        harm1,
        armor,
        hArmor,
        sArmor,
        abilities,
        loadout,
        items,
      };
      if (!data) {
        return;
      }
      const stringifiedData = JSON.stringify(data);
      const response = await fetch(`/api/characters/upload`, {
        method: "POST",
        body: JSON.stringify({ character: stringifiedData }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save character");
      }
      return response.json();
    },
    onError: (error) => {
      console.error("Error saving character to cloud", error);
      toast({
        title: "Error",
        description: `Character auto-save to cloud failed`,
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Character auto-saved to cloud",
      });
    },
  });

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
      if (!character) {
        console.debug("No character found");
        return { message: "no character found" };
      }

      /**
       * if the fetched character sheet is newer than the character data
       * in local storage, set the character sheet to that
       */
      try {
        console.log("character", character);
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
    const interval = setInterval(() => {
      if (!isAdmin && dbChanges) {
        saveToCloud();
        setCloudUpdatedAt(new Date());
        setDbChanges(false);
      }
    }, 60 * 1000 /** 1 minute */);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin, dbChanges]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDebounceChange = useCallback(
    debounce(() => {
      setChanges(true);
    }, 300),
    []
  );

  function handleUpdateQuestion(key: string, value: string) {
    if (value === "") {
      // Map.delete mutates and returns a boolean, so we have to get creative to create a copy of the map without the key
      setQuestions(new Map(Array.from(questions).filter(([k]) => k !== key)));
    } else {
      setQuestions(new Map(questions.set(key, value)));
    }
    handleDebounceChange();
  }

  function handleUpdateArchetypeQuestion(
    horizon: boolean,
    questionIdx: number,
    newQuestion: string
  ) {
    if (!selectedArchetype?.questions) {
      console.error("can't update archetype question: archetype not selected");
      return;
    }
    const questions = horizon
      ? selectedArchetype.questions.horizon
      : selectedArchetype.questions.starting;
    if (questionIdx > questions.length - 1) {
      console.error("can't update archetype question: index out of bounds");
      return;
    }
    questions[questionIdx] = newQuestion;
    if (horizon) {
      setSelectedArchetype({
        ...selectedArchetype,
        questions: {
          horizon: questions,
          starting: selectedArchetype.questions.starting,
        },
      });
    } else {
      setSelectedArchetype({
        ...selectedArchetype,
        questions: {
          horizon: selectedArchetype.questions.horizon,
          starting: questions,
        },
      });
    }
    setChanges(true);
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

  return (
    <CharacterSheetContext.Provider
      value={{
        compatibleVersions: [SUPPORTED_VERSION],
        version,
        portrait,
        name,
        alias,
        univQuestions,
        selectedArchetype,
        selectedBackground,
        selectedSleeve,
        selectedOperative,
        selectedTransformation,
        selectedFightingStyle,
        questions,
        notes,
        xp,
        stress,
        conditions,
        harm3,
        harm2,
        harm1,
        armor,
        hArmor,
        sArmor,
        abilities,
        loadout,
        items,
        localUpdatedAt,
        cloudUpdatedAt,
        isFetching,
        isSaving: isPending,
        setPortrait,
        setName,
        setAlias,
        setUnivQuestions,
        setSelectedArchetype,
        setSelectedBackground,
        setSelectedSleeve,
        setSelectedOperative,
        setSelectedTransformation,
        setSelectedFightingStyle,
        setQuestions,
        setNotes,
        setXp,
        setStress,
        setConditions,
        setHarm3,
        setHarm2,
        setHarm1,
        setArmor,
        setHArmor,
        setSArmor,
        setAbilities,
        setLoadout,
        setItems,
        setChanges,
        setCharacterLoaded,
        handleDebounceChange,
        handleUpdateQuestion,
        handleUpdateArchetypeQuestion,
        handleUpdateItemName,
        handleUpdateItemSlots,
        setCloudUpdatedAt,
        clearCharacter: setToDefaults,
      }}
    >
      {children}
    </CharacterSheetContext.Provider>
  );
}
