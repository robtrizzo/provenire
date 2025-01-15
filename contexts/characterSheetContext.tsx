'use client';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import {
  type Archetype,
  type Skillset,
  type Background,
  type Heritage,
  CharacterAttributes,
  Bonds,
  Loadout,
  Item,
} from '@/types/game';
import { debounce } from '@/lib/utils';

interface CharacterSheetContextProps {
  name: string;
  alias: string;
  univQuestions: string[];
  bloodshedQ: string;
  selectedArchetype: Archetype | undefined;
  selectedSkillset: Skillset | undefined;
  selectedBackground: Background | undefined;
  selectedHeritage: Heritage | undefined;
  questions: Map<string, any>;
  xpRef: React.MutableRefObject<number>;
  attributes: CharacterAttributes;
  stress: number;
  conditions: string[];
  conditionRecoveryRef: React.MutableRefObject<number>;
  healing: number;
  harm3: string;
  harm2: string[];
  harm1: string[];
  armor: boolean;
  hArmor: boolean;
  sArmor: boolean;
  abilities: string[];
  bonds: Bonds;
  starvation: number;
  subsist: number;
  loadout: any;
  items: Item[];
  setName: React.Dispatch<React.SetStateAction<string>>;
  setAlias: React.Dispatch<React.SetStateAction<string>>;
  setUnivQuestions: React.Dispatch<React.SetStateAction<string[]>>;
  setBloodshedQ: React.Dispatch<React.SetStateAction<string>>;
  setSelectedArchetype: React.Dispatch<React.SetStateAction<any>>;
  setSelectedSkillset: React.Dispatch<React.SetStateAction<any>>;
  setSelectedBackground: React.Dispatch<React.SetStateAction<any>>;
  setSelectedHeritage: React.Dispatch<React.SetStateAction<any>>;
  setQuestions: React.Dispatch<React.SetStateAction<Map<string, any>>>;
  setAttributes: React.Dispatch<React.SetStateAction<any>>;
  setStress: React.Dispatch<React.SetStateAction<number>>;
  setConditions: React.Dispatch<React.SetStateAction<any[]>>;
  setHealing: React.Dispatch<React.SetStateAction<number>>;
  setHarm3: React.Dispatch<React.SetStateAction<string>>;
  setHarm2: React.Dispatch<React.SetStateAction<string[]>>;
  setHarm1: React.Dispatch<React.SetStateAction<string[]>>;
  setArmor: React.Dispatch<React.SetStateAction<boolean>>;
  setHArmor: React.Dispatch<React.SetStateAction<boolean>>;
  setSArmor: React.Dispatch<React.SetStateAction<boolean>>;
  setAbilities: React.Dispatch<React.SetStateAction<any[]>>;
  setBonds: React.Dispatch<React.SetStateAction<Bonds>>;
  setStarvation: React.Dispatch<React.SetStateAction<number>>;
  setSubsist: React.Dispatch<React.SetStateAction<number>>;
  setLoadout: React.Dispatch<React.SetStateAction<any>>;
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
  setChanges: React.Dispatch<React.SetStateAction<boolean>>;
  setCharacterLoaded: React.Dispatch<React.SetStateAction<Date>>;
  handleDebounceChange: () => void;
  handleUpdateQuestion: (key: string, value: string) => void;
  handleUpdateItemName: (index: number, value: string) => void;
  handleUpdateItemSlots: (index: number, value: number) => void;
  handleUpdateActionScore: (
    attribute: 'Heart' | 'Instinct' | 'Machina',
    action: string,
    score: number[]
  ) => void;
}

const CharacterSheetContext = createContext<
  CharacterSheetContextProps | undefined
>(undefined);

export const useCharacterSheet = () => {
  const context = useContext(CharacterSheetContext);
  if (!context) {
    throw new Error(
      'useCharacterSheet must be used within a CharacterSheetProvider'
    );
  }
  return context;
};

export default function CharacterSheetProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedArchetype, setSelectedArchetype] = useState<Archetype>();
  const [selectedSkillset, setSelectedSkillset] = useState<Skillset>();
  const [selectedBackground, setSelectedBackground] = useState<Background>();
  const [selectedHeritage, setSelectedHeritage] = useState<Heritage>();

  const [name, setName] = useState('');
  const [alias, setAlias] = useState('');
  const [univQuestions, setUnivQuestions] = useState<string[]>([
    '',
    '',
    '',
    '',
    '',
  ]);
  const [bloodshedQ, setBloodshedQ] = useState<string>('');

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
    Crew: [
      { name: '', score: [1, 0] },
      { name: '', score: [1, 0] },
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

  const [changes, setChanges] = useState(false);
  const [characterLoaded, setCharacterLoaded] = useState<Date>(new Date());

  useEffect(() => {
    if (typeof window === 'undefined') return;
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
        Crew: [
          { name: '', score: [1, 0] },
          { name: '', score: [1, 0] },
        ],
      });
      setStarvation(0);
      setSubsist(0);
      setLoadout(undefined);
      setItems([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterLoaded]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (changes) {
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

  return (
    <CharacterSheetContext.Provider
      value={{
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
        setQuestions,
        setAttributes,
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
      }}
    >
      {children}
    </CharacterSheetContext.Provider>
  );
}
