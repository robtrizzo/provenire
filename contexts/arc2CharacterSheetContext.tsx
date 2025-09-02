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
  BackgroundV2,
  Sleeve,
  Operative,
  FightingStyleV2,
  Transformation,
  CharacterHarm,
  HarmModifier,
  Ability,
  ActionV2,
  ItemV2,
  Baggage,
  BondV2,
  Note,
} from "@/types/game";
import { debounce } from "@/lib/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import wealthLevels from "@/public/arc2/wealth.json";

const SUPPORTED_VERSION = 2;

const DEFAULT_HARM: CharacterHarm = {
  1: {
    slots: ["", ""],
    maxSlots: 2,
  },
  2: {
    slots: ["", ""],
    maxSlots: 2,
  },
  3: {
    slots: [""],
    maxSlots: 1,
  },
};

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
  notes: Note[];
  wealthP: number;
  wealthF: number;
  pelts: number;
  favors: number;
  maxWealthPReached: number;
  favorBankMember: boolean;
  subscriptions: number;
  actions: ActionV2[];
  bonds: BondV2[];
  rivals: BondV2[];
  xp: number;
  stress: number;
  maxStress: number;
  conditions: string[];
  memory: number;
  unlockedBaggage: Baggage[];
  harm: CharacterHarm;
  effectiveHarm: CharacterHarm;
  armor: boolean;
  hArmor: boolean;
  sArmor: boolean;
  abilities: Ability[];
  loadout: Loadout | undefined;
  items: ItemV2[];
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
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  setWealthP: React.Dispatch<React.SetStateAction<number>>;
  setWealthF: React.Dispatch<React.SetStateAction<number>>;
  setPelts: React.Dispatch<React.SetStateAction<number>>;
  setFavors: React.Dispatch<React.SetStateAction<number>>;
  setMaxWealthPReached: React.Dispatch<React.SetStateAction<number>>;
  setFavorBankMember: React.Dispatch<React.SetStateAction<boolean>>;
  setActions: React.Dispatch<React.SetStateAction<ActionV2[]>>;
  setBonds: React.Dispatch<React.SetStateAction<BondV2[]>>;
  setRivals: React.Dispatch<React.SetStateAction<BondV2[]>>;
  setXp: React.Dispatch<React.SetStateAction<number>>;
  setMaxStress: React.Dispatch<React.SetStateAction<number>>;
  setStress: React.Dispatch<React.SetStateAction<number>>;
  setConditions: React.Dispatch<React.SetStateAction<string[]>>;
  setMemory: React.Dispatch<React.SetStateAction<number>>;
  setUnlockedBaggage: React.Dispatch<React.SetStateAction<Baggage[]>>;
  setHarm: React.Dispatch<React.SetStateAction<CharacterHarm>>;
  setArmor: React.Dispatch<React.SetStateAction<boolean>>;
  setHArmor: React.Dispatch<React.SetStateAction<boolean>>;
  setSArmor: React.Dispatch<React.SetStateAction<boolean>>;
  setAbilities: React.Dispatch<React.SetStateAction<Ability[]>>;
  setLoadout: React.Dispatch<React.SetStateAction<Loadout | undefined>>;
  handleUpdateQuestion: (key: string, value: string) => void;
  handleUpdateSleeve: (sleeve: Sleeve | undefined) => void;
  harmsEmpty: () => boolean;
  handleUpdateHarmSlot: (
    level: number,
    slotIndex: number,
    description: string
  ) => void;
  handleToggleItemSubscription: (index: number) => void;
  setItems: React.Dispatch<React.SetStateAction<ItemV2[]>>;
  handleUpdateArchetypeQuestion: (
    horizon: boolean,
    questionIdx: number,
    newQuestion: string
  ) => void;
  handleAddAvailableAction: (action: ActionV2) => void;
  handleRemoveAvailableAction: (actionName: string) => void;
  handleEditAction: (newAction: ActionV2) => void;
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
  const [notes, setNotes] = useState<Note[]>([]);

  const [wealthP, setWealthP] = useState<number>(1);
  const [maxWealthPReached, setMaxWealthPReached] = useState<number>(1);
  const [wealthF, setWealthF] = useState<number>(1);
  const [pelts, setPelts] = useState<number>(0);
  const [favors, setFavors] = useState<number>(0);
  const [favorBankMember, setFavorBankMember] = useState<boolean>(true);

  const [actions, setActions] = useState<ActionV2[]>([]);
  const [bonds, setBonds] = useState<BondV2[]>([]);
  const [rivals, setRivals] = useState<BondV2[]>([]);

  const [xp, setXp] = useState(0);

  const [maxStress, setMaxStress] = useState(9);
  const [stress, setStress] = useState(0);
  const [conditions, setConditions] = useState<string[]>([]);

  const [memory, setMemory] = useState(0);
  const [unlockedBaggage, setUnlockedBaggage] = useState<Baggage[]>([]);

  const [harm, setHarm] = useState<CharacterHarm>(
    JSON.parse(JSON.stringify(DEFAULT_HARM))
  );

  const [armor, setArmor] = useState<boolean>(false);
  const [hArmor, setHArmor] = useState<boolean>(false);
  const [sArmor, setSArmor] = useState<boolean>(false);

  const [loadout, setLoadout] = useState<Loadout>();
  const [items, setItems] = useState<ItemV2[]>([]);

  const [abilities, setAbilities] = useState<Ability[]>([]);

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
    setNotes([]);
    setWealthP(1);
    setMaxWealthPReached(1);
    setWealthF(1);
    setPelts(0);
    setFavors(0);
    setFavorBankMember(true);
    setActions([]);
    setBonds([]);
    setRivals([]);
    setXp(0);
    setConditions([]);
    setStress(0);
    setMaxStress(0);
    setMemory(0);
    setUnlockedBaggage([]);
    setHarm(JSON.parse(JSON.stringify(DEFAULT_HARM)));
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
    const data = localStorage.getItem("charsheet-arc2");
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
        setNotes(parsed.notes || []);

        setWealthP(parsed.wealthP || 1);
        setMaxWealthPReached(parsed.maxWealthPReached || 1);
        setWealthF(parsed.wealthF || 1);
        setPelts(parsed.pelts || 0);
        setFavors(parsed.favors || 0);
        setFavorBankMember(parsed.favorBankMember || true);

        setActions(parsed.actions || []);
        setBonds(parsed.bonds || []);
        setRivals(parsed.rivals || []);

        setXp(parsed.xp);

        if (parsed.conditions) {
          setConditions(parsed.conditions);
        }
        setMaxStress(parsed.maxStress || 9);
        setStress(parsed.stress || 0);
        setMemory(parsed.memory || 0);
        setUnlockedBaggage(parsed.unlockedBaggage || []);
        setHarm(parsed.harm || JSON.parse(JSON.stringify(DEFAULT_HARM)));
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
          wealthP,
          maxWealthPReached,
          wealthF,
          pelts,
          favors,
          favorBankMember,
          actions,
          bonds,
          rivals,
          xp,
          maxStress,
          stress,
          conditions,
          memory,
          unlockedBaggage,
          harm,
          armor,
          hArmor,
          sArmor,
          abilities,
          loadout,
          items,
          updatedAt: savedDate,
        };
        localStorage.setItem("charsheet-arc2", JSON.stringify(data));
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
        wealthP,
        maxWealthPReached,
        wealthF,
        pelts,
        favors,
        actions,
        bonds,
        rivals,
        xp,
        maxStress,
        stress,
        conditions,
        memory,
        unlockedBaggage,
        harm,
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
          localStorage.setItem("charsheet-arc2", JSON.stringify(character));
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

  function harmsEmpty() {
    return Object.values(harm).every((level) =>
      level.slots.every((slot) => slot === "" || slot === undefined)
    );
  }

  function handleUpdateSleeve(newSleeve?: Sleeve | undefined) {
    setSelectedSleeve(newSleeve);

    let harmToCopy = DEFAULT_HARM;
    if (newSleeve?.harm) {
      harmToCopy = newSleeve.harm;
    }

    const newHarm: CharacterHarm = {};

    Object.keys(harmToCopy).forEach((level) => {
      newHarm[Number(level)] = harmToCopy[Number(level)];
    });

    setHarm(newHarm);
    setChanges(true);
  }

  function handleUpdateHarmSlot(
    level: number,
    slotIndex: number,
    description: string
  ) {
    const updatedHarm: CharacterHarm = {};

    Object.keys(harm).forEach((levelKey) => {
      const numericKey = Number(levelKey);
      updatedHarm[numericKey] = {
        slots: [...harm[numericKey].slots],
        maxSlots: harm[numericKey].maxSlots,
      };
    });

    if (!updatedHarm[level]) {
      const effectiveLevel = effectiveHarm[level];
      updatedHarm[level] = {
        slots: Array.from({ length: effectiveLevel.maxSlots }, () => ""), // Always start with empty slots
        maxSlots: 0,
      };
    }

    updatedHarm[level].slots[slotIndex] = description || "";

    setHarm(updatedHarm);
    handleDebounceChange();
  }

  function calculateEffectiveHarm(): CharacterHarm {
    const originalHarm = harm;
    const baseHarm: CharacterHarm = {};

    Object.keys(originalHarm).forEach((level) => {
      const levelKey = level as unknown as keyof typeof originalHarm;
      const numericKey = Number(level);

      baseHarm[numericKey] = {
        slots: [...originalHarm[levelKey].slots],
        maxSlots: originalHarm[levelKey].maxSlots,
      };
    });

    const allModifiers: HarmModifier[] = [];

    if (selectedOperative?.harmModifiers) {
      allModifiers.push(...selectedOperative.harmModifiers);
    }

    items.forEach((item) => {
      if (item.harmModifiers) {
        allModifiers.push(...item.harmModifiers);
      }
    });

    abilities.forEach((ability) => {
      if (ability.harmModifiers) {
        allModifiers.push(...ability.harmModifiers);
      }
    });

    allModifiers.forEach((mod) => {
      const modLevel = Number(mod.level);

      if (baseHarm[modLevel]) {
        const newMaxSlots = Math.max(
          0,
          baseHarm[modLevel].maxSlots + mod.slotChange
        );

        const currentSlots = [...baseHarm[modLevel].slots];
        if (newMaxSlots > currentSlots.length) {
          while (currentSlots.length < newMaxSlots) {
            currentSlots.push("");
          }
        } else if (newMaxSlots < currentSlots.length) {
          currentSlots.splice(newMaxSlots);
        }

        baseHarm[modLevel] = {
          slots: currentSlots,
          maxSlots: newMaxSlots,
        };
      } else if (mod.slotChange > 0) {
        baseHarm[modLevel] = {
          slots: Array.from({ length: mod.slotChange }, () => ""),
          maxSlots: Math.max(0, mod.slotChange),
        };
      }
    });

    return baseHarm;
  }

  const effectiveHarm = calculateEffectiveHarm();

  function calculateSubscriptions(): number {
    const actionSubs = actions.reduce((acc, action) => {
      if (action.type !== "codex" || !action.subscriptionPaid) {
        return acc;
      }

      // non-forbidden q1 codexes are subsidezed by ROOT
      const totalScore = action.score[0] + action.score[1];
      if (action.overCorpClassification !== "forbidden" && totalScore <= 1) {
        return acc;
      }

      // operative codex action subsidized by ROOT up to q2
      if (action.name === selectedOperative?.action && totalScore <= 2) {
        return acc;
      }

      return acc + (action.subscription || 1);
    }, 0);

    const itemSubs = items.reduce((acc, item) => {
      if (item.subscription && item.subscriptionPaid) {
        return acc + item.subscription;
      }
      return acc;
    }, 0);

    const favorBankInterest = favorBankMember ? wealthP : 0;

    const lifestyleSupports = wealthLevels.pelts[wealthP].supportsSubscriptions;

    const lifestyleCost = wealthLevels.pelts[maxWealthPReached].cost;

    return (
      Math.max(
        0,
        actionSubs +
          itemSubs +
          (favorBankMember ? 1 : 0) +
          (selectedSleeve?.subscription || 0) +
          lifestyleCost -
          lifestyleSupports
      ) - favorBankInterest
    );
  }

  const subscriptions = calculateSubscriptions();

  function handleToggleItemSubscription(index: number) {
    const newItems = [...items];
    const newValue = !newItems[index].subscriptionPaid;
    newItems[index] = { ...newItems[index], subscriptionPaid: newValue };
    setItems(newItems);
    handleDebounceChange();
  }

  function handleAddAvailableAction(action: ActionV2) {
    if (actions.findIndex((a) => a.name === action.name) === -1) {
      setActions([...actions, action]);
    }
    setChanges(true);
  }

  function handleRemoveAvailableAction(actionName: string) {
    setActions(actions.filter((a) => a.name !== actionName));
    setChanges(true);
  }

  function handleEditAction(newAction: ActionV2) {
    setActions(
      actions.map((action) =>
        action.name === newAction.name ? newAction : action
      )
    );

    setChanges(true);
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
        wealthP,
        maxWealthPReached,
        wealthF,
        pelts,
        favors,
        favorBankMember,
        subscriptions,
        actions,
        bonds,
        rivals,
        xp,
        maxStress,
        stress,
        conditions,
        memory,
        unlockedBaggage,
        harm,
        effectiveHarm,
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
        setSelectedOperative,
        setSelectedTransformation,
        setSelectedFightingStyle,
        setQuestions,
        setNotes,
        setWealthP,
        setMaxWealthPReached,
        setWealthF,
        setPelts,
        setFavors,
        setFavorBankMember,
        setActions,
        setBonds,
        setRivals,
        setXp,
        setMaxStress,
        setStress,
        setConditions,
        setMemory,
        setUnlockedBaggage,
        setHarm,
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
        handleUpdateSleeve,
        harmsEmpty,
        handleUpdateHarmSlot,
        handleToggleItemSubscription,
        handleAddAvailableAction,
        handleRemoveAvailableAction,
        handleEditAction,
        setCloudUpdatedAt,
        clearCharacter: setToDefaults,
      }}
    >
      {children}
    </CharacterSheetContext.Provider>
  );
}
