"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import itemsData from "@/public/items.json";
import faction_data from "@/public/factions.json";
import {
  Blackmail,
  Clock,
  Cohort,
  CommunityProject,
  Faction,
  FightingInstructor,
  Gladiator,
  Item,
  Operation,
} from "@/types/game";

interface CrewSheetContextProps {
  heat: number;
  wanted: number;
  food: number;
  materials: number;
  rep: number;
  goodwill: number;
  intel: number;
  items: Item[];
  alchemy: Item[];
  gangs: Cohort[];
  experts: Cohort[];
  schematics: Item[];
  formulae: Item[];
  rGangs: Cohort[];
  rExperts: Cohort[];
  scouting: Clock[];
  blackmail: Blackmail[];
  factions: Faction[];
  pcGladiators: Gladiator[];
  fInstructors: FightingInstructor[];
  livingSpace: CommunityProject[];
  security: CommunityProject[];
  lair: CommunityProject[];
  community: CommunityProject[];
  operations: Operation[];
  clocks: Clock[];
  setHeat: Dispatch<SetStateAction<number>>;
  setWanted: Dispatch<SetStateAction<number>>;
  setFood: Dispatch<SetStateAction<number>>;
  setMaterials: Dispatch<SetStateAction<number>>;
  setRep: Dispatch<SetStateAction<number>>;
  setGoodwill: Dispatch<SetStateAction<number>>;
  setIntel: Dispatch<SetStateAction<number>>;
  handleUpdateItem: (
    itemName: string
  ) => (traits: string[], ticks: number) => void;
  handleAddItem: (item: Item) => void;
  handleUpdateAlchemy: (
    alchemyName: string
  ) => (traits: string[], uses: number, ticks: number) => void;
  handleAddAlchemy: (al: Item) => void;
  handleUpdateGang: (
    gangName: string
  ) => (traits: string[], ticks: number) => void;
  handleAddGang: (gang: Cohort) => void;
  handleUpdateExpert: (expertName: string) => (ticks: number) => void;
  handleAddExpert: (expert: Cohort) => void;
  handleUpdateSchematic: (
    schematicName: string
  ) => (traits: string[], ticks: number) => void;
  handleAddSchematic: (schematic: Item) => void;
  handleRemoveSchematic: (schematicName: string) => () => void;
  handleUpdateFormulae: (
    formulaeName: string
  ) => (traits: string[], uses: number, ticks: number) => void;
  handleAddFormula: (f: Item) => void;
  handleRemoveFormula: (formulaName: string) => () => void;
  handleAddRGang: (rg: Cohort) => void;
  handleUpdateRGang: (
    rGangName: string
  ) => (traits: string[], ticks: number) => void;
  handleRemoveRGang: (rGangName: string) => () => void;
  handleAddRExpert: (re: Cohort) => void;
  handleUpdateRExpert: (rExpertName: string) => (ticks: number) => void;
  handleRemoveRExpert: (rExpertName: string) => () => void;
  handleAddScouting: (c: Clock) => void;
  handleUpdateScouting: (scoutingName: string) => (ticks: number) => void;
  handleRemoveScouting: (scoutingName: string) => () => void;
  handleAddBlackmail: (b: Blackmail) => void;
  handleRemoveBlackmail: (blackmailName: string) => () => void;
  handleUpdateFaction: (factionName: string) => (ticks: number) => void;
  handleAddPCGladiator: (gladiator: Gladiator) => void;
  handleUpdatePCGladiator: (pcGladiatorName: string) => (rank: number) => void;
  handleRemovePCGladiator: (pcGladiatorName: string) => () => void;
  handleAddFightingInstructor: (instructor: FightingInstructor) => void;
  handleUpdateFightingInstructor: (
    fightingInstructorName: string
  ) => (ticks: number) => void;
  handleRemoveFightingInstructor: (
    fightingInstructorName: string
  ) => () => void;
  handleAddCommunityProject: (
    category: string,
    project: CommunityProject
  ) => void;
  handleUpdateCommunityProject: (
    category: string,
    communityProjectName: string
  ) => (ticks: number) => void;
  handleRemoveCommunityProject: (
    category: string,
    communityProjectName: string
  ) => () => void;
  handleAddOperation: (operation: Operation) => void;
  handleUpdateOperation: (operationName: string) => (ticks: number) => void;
  handleRemoveOperation: (operationName: string) => () => void;
  handleAddClock: (clock: Clock) => void;
  handleUpdateClock: (
    clockName: string
  ) => (name: string, ticks: number) => void;
  handleRemoveClock: (clockName: string) => () => void;
}

const CrewSheetContext = createContext<CrewSheetContextProps | undefined>(
  undefined
);

export const useCrewSheet = () => {
  const context = useContext(CrewSheetContext);
  if (!context) {
    throw new Error("useCrewSheet must be used within a CrewSheetProvider");
  }
  return context;
};

export default function CrewSheetProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [heat, setHeat] = useState(0);
  const [wanted, setWanted] = useState(0);

  const [food, setFood] = useState(0);
  const [materials, setMaterials] = useState(0);
  const [rep, setRep] = useState(0);
  const [goodwill, setGoodwill] = useState(0);
  const [intel, setIntel] = useState(0);

  const [items, setItems] = useState<Item[]>(itemsData.starting);
  const [alchemy, setAlchemy] = useState<Item[]>([]);
  const [gangs, setGangs] = useState<Cohort[]>([]);
  const [experts, setExperts] = useState<Cohort[]>([]);

  const [schematics, setSchematics] = useState<Item[]>([]);
  const [formulae, setFormulae] = useState<Item[]>([]);
  const [rGangs, setRGangs] = useState<Cohort[]>([]);
  const [rExperts, setRExperts] = useState<Cohort[]>([]);
  const [scouting, setScouting] = useState<Clock[]>([]);
  const [blackmail, setBlackmail] = useState<Blackmail[]>([]);
  const [factions, setFactions] = useState<Faction[]>(faction_data);
  const [pcGladiators, setPCGladiators] = useState<Gladiator[]>([]);
  const [fInstructors, setFInstructors] = useState<FightingInstructor[]>([]);
  const [livingSpace, setLivingSpace] = useState<CommunityProject[]>([]);
  const [security, setSecurity] = useState<CommunityProject[]>([]);
  const [lair, setLair] = useState<CommunityProject[]>([]);
  const [community, setCommunity] = useState<CommunityProject[]>([]);
  const [operations, setOperations] = useState<Operation[]>([]);
  const [clocks, setClocks] = useState<Clock[]>([]);

  const handleUpdateItem =
    (itemName: string) => (traits: string[], ticks: number) => {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.name === itemName ? { ...item, traits, ticks } : item
        )
      );
    };

  function handleAddItem(item: Item) {
    const itemExists = items.some(
      (existingItem) => existingItem.name === item.name
    );
    if (itemExists) {
      console.log(`Item with name ${item.name} already exists`);
      return;
    }
    setItems([...items, item]);
  }

  const handleUpdateAlchemy =
    (alchemyName: string) =>
    (traits: string[], uses: number, ticks: number) => {
      setAlchemy((prevAlchemy) =>
        prevAlchemy.map((alchemy) =>
          alchemy.name === alchemyName
            ? { ...alchemy, traits, ticks, uses }
            : alchemy
        )
      );
    };

  function handleAddAlchemy(al: Item) {
    const alchemyExists = alchemy.some(
      (existingItem) => existingItem.name === al.name
    );
    if (alchemyExists) {
      console.log(`Alchemy with name ${al.name} already exists`);
      return;
    }
    setAlchemy([...alchemy, al]);
  }

  const handleUpdateGang =
    (gangName: string) => (traits: string[], ticks: number) => {
      setGangs((prevGangs) =>
        prevGangs.map((gang) =>
          gang.name === gangName ? { ...gang, traits, ticks } : gang
        )
      );
    };

  function handleAddGang(gang: Cohort) {
    const gangExists = gangs.some(
      (existingGang) => existingGang.name === gang.name
    );
    if (gangExists) {
      console.log(`Gang with name ${gang.name} already exists`);
      return;
    }
    setGangs([...gangs, gang]);
  }

  const handleUpdateExpert = (expertName: string) => (ticks: number) => {
    setExperts((prevExperts) =>
      prevExperts?.map((expert) =>
        expert.name === expertName ? { ...expert, ticks } : expert
      )
    );
  };

  function handleAddExpert(expert: Cohort) {
    const expertExists = experts?.some(
      (existingExpert) => existingExpert.name === expert.name
    );
    if (expertExists) {
      console.log(`Expert with name ${expert.name} already exists`);
      return;
    }
    setExperts([...experts, expert]);
  }

  const handleUpdateSchematic =
    (schematicName: string) => (traits: string[], ticks: number) => {
      setSchematics((prevSchematics) =>
        prevSchematics.map((schematic) =>
          schematic.name === schematicName ? { ...schematic, ticks } : schematic
        )
      );
    };

  const handleRemoveSchematic = (schematicName: string) => () => {
    setSchematics(schematics.filter((s) => s.name !== schematicName));
  };

  function handleAddSchematic(schematic: Item) {
    const schematicExists = schematics.some(
      (existingItem) => existingItem.name === schematic.name
    );
    if (schematicExists) {
      console.log(`Schematic with name ${schematic.name} already exists`);
      return;
    }
    setSchematics([...schematics, schematic]);
  }

  const handleUpdateFormulae =
    (formulaeName: string) =>
    (traits: string[], uses: number, ticks: number) => {
      setFormulae((prevFormulae) =>
        prevFormulae.map((formulae) =>
          formulae.name === formulaeName ? { ...formulae, ticks } : formulae
        )
      );
    };

  function handleAddFormula(f: Item) {
    const formulaExists = formulae.some(
      (existingFormula) => existingFormula.name === f.name
    );
    if (formulaExists) {
      console.log(`Formula with name ${f.name} already exists`);
      return;
    }
    setFormulae([...formulae, f]);
  }

  const handleRemoveFormula = (formulaName: string) => () => {
    setFormulae(formulae.filter((f) => f.name !== formulaName));
  };

  const handleUpdateRGang =
    (rGangName: string) => (traits: string[], ticks: number) => {
      setRGangs((prevRGangs) =>
        prevRGangs.map((rGang) =>
          rGang.name === rGangName ? { ...rGang, ticks } : rGang
        )
      );
    };

  function handleAddRGang(rg: Cohort) {
    const rGangExists = rGangs.some(
      (existingRGang) => existingRGang.name === rg.name
    );
    if (rGangExists) {
      console.log(`Recruit-gang with name ${rg.name} already exists`);
      return;
    }
    setRGangs([...rGangs, rg]);
  }

  const handleRemoveRGang = (rGangName: string) => () => {
    setRGangs(rGangs.filter((rg) => rg.name !== rGangName));
  };

  const handleUpdateRExpert = (rExpertName: string) => (ticks: number) => {
    setRExperts((prevRExperts) =>
      prevRExperts.map((rExpert) =>
        rExpert.name === rExpertName ? { ...rExpert, ticks } : rExpert
      )
    );
  };

  function handleAddRExpert(re: Cohort) {
    const rExpertExists = rExperts.some(
      (existingRExpert) => existingRExpert.name === re.name
    );
    if (rExpertExists) {
      console.log(`Recruit-expert with name ${re.name} already exists`);
      return;
    }
    setRExperts([...rExperts, re]);
  }

  const handleRemoveRExpert = (rExpertName: string) => () => {
    setRExperts(rExperts.filter((re) => re.name !== rExpertName));
  };

  function handleAddScouting(c: Clock) {
    const scoutingExists = scouting.some(
      (existingScouting) => existingScouting.name === c.name
    );
    if (scoutingExists) {
      console.log(`Scouting mission with name ${c.name} already exists`);
      return;
    }
    setScouting([...scouting, c]);
  }

  const handleUpdateScouting = (scoutingName: string) => (ticks: number) => {
    setScouting((prevScouting) =>
      prevScouting.map((scouting) =>
        scouting.name === scoutingName ? { ...scouting, ticks } : scouting
      )
    );
  };

  const handleRemoveScouting = (scoutingName: string) => () => {
    setScouting(scouting.filter((s) => s.name !== scoutingName));
  };

  function handleAddBlackmail(b: Blackmail) {
    const blackmailExists = blackmail.some(
      (existingBlackmail) => existingBlackmail.name === b.name
    );
    if (blackmailExists) {
      console.log(`Blackmail with name ${b.name} already exists`);
      return;
    }
    setBlackmail([...blackmail, b]);
  }

  const handleRemoveBlackmail = (blackmailName: string) => () => {
    setBlackmail(blackmail.filter((b) => b.name !== blackmailName));
  };

  const handleUpdateFaction = (factionName: string) => (ticks: number) => {
    setFactions((prevFactions) =>
      prevFactions.map((faction) =>
        faction.name === factionName ? { ...faction, ticks } : faction
      )
    );
  };

  const handleUpdatePCGladiator =
    (pcGladiatorName: string) => (rank: number) => {
      setPCGladiators((prevPCGladiators) =>
        prevPCGladiators.map((gladiator) =>
          gladiator.name === pcGladiatorName
            ? { ...gladiator, rank }
            : gladiator
        )
      );
    };

  function handleAddPCGladiator(gladiator: Gladiator) {
    const gladiatorExists = pcGladiators.some(
      (existingGladiator) => existingGladiator.name === gladiator.name
    );
    if (gladiatorExists) {
      console.log(`PC Gladiator with name ${gladiator.name} already exists`);
      return;
    }
    setPCGladiators([...pcGladiators, gladiator]);
  }

  const handleRemovePCGladiator = (pcGladiatorName: string) => () => {
    setPCGladiators(pcGladiators.filter((g) => g.name !== pcGladiatorName));
  };

  const handleUpdateFightingInstructor =
    (fightingInstructorName: string) => (ticks: number) => {
      setFInstructors((prevFInstructors) =>
        prevFInstructors.map((instructor) =>
          instructor.name === fightingInstructorName
            ? { ...instructor, ticks }
            : instructor
        )
      );
    };

  function handleAddFightingInstructor(instructor: FightingInstructor) {
    const instructorExists = fInstructors.some(
      (existingIntructor) => existingIntructor.name === instructor.name
    );
    if (instructorExists) {
      console.log(
        `Fighting instructor with name ${instructor.name} already exists`
      );
      return;
    }
    setFInstructors([...fInstructors, instructor]);
  }

  const handleRemoveFightingInstructor =
    (fightingInstructorName: string) => () => {
      setFInstructors(
        fInstructors.filter((i) => i.name !== fightingInstructorName)
      );
    };

  function getCommunityProjectState(category: string) {
    let val: CommunityProject[] = [];
    let setter: Dispatch<SetStateAction<CommunityProject[]>> = () => {};

    switch (category) {
      case "Living Space":
        val = livingSpace;
        setter = setLivingSpace;
        break;
      case "Security":
        val = security;
        setter = setSecurity;
        break;
      case "Lair":
        val = lair;
        setter = setLair;
        break;
      case "Community":
        val = community;
        setter = setCommunity;
        break;
      default:
        console.error("Invalid community project category: ", category);
        break;
    }

    return { val, setter };
  }

  function handleAddCommunityProject(
    category: string,
    project: CommunityProject
  ) {
    const { val, setter } = getCommunityProjectState(category);

    const valExists = val.some(
      (existingVal) => existingVal.name === project.name
    );
    if (valExists) {
      console.log(
        `${category} community project with name ${project.name} already exists`
      );
      return;
    }

    setter([...val, project]);
  }

  const handleUpdateCommunityProject =
    (category: string, communityProjectName: string) => (ticks: number) => {
      const { setter } = getCommunityProjectState(category);
      setter((prevCommunityProjects) =>
        prevCommunityProjects.map((project) =>
          project.name === communityProjectName
            ? { ...project, ticks }
            : project
        )
      );
    };

  const handleRemoveCommunityProject =
    (category: string, communityProjectName: string) => () => {
      const { val, setter } = getCommunityProjectState(category);
      setter(val.filter((p) => p.name !== communityProjectName));
    };

  function handleAddOperation(operation: Operation) {
    const operationExists = operations.some(
      (existingOperation) => existingOperation.name === operation.name
    );
    if (operationExists) {
      console.log(`Operation with name ${operation.name} already exists`);
      return;
    }
    setOperations([...operations, operation]);
  }

  const handleUpdateOperation = (operationName: string) => (ticks: number) => {
    setOperations((prevOperations) =>
      prevOperations.map((operation) =>
        operation.name === operationName ? { ...operation, ticks } : operation
      )
    );
  };

  const handleRemoveOperation = (operationName: string) => () => {
    setOperations(operations.filter((o) => o.name !== operationName));
  };

  function handleAddClock(clock: Clock) {
    const clockExists = clocks.some(
      (existingClock) => existingClock.name === clock.name
    );
    if (clockExists) {
      console.log(`Clock with name ${clock.name} already exists`);
      return;
    }
    setClocks([...clocks, clock]);
  }

  const handleUpdateClock =
    (clockName: string) => (name: string, ticks: number) => {
      if (name !== clockName) {
        const clockExists = clocks.some(
          (existingClock) => existingClock.name === name
        );
        if (clockExists) {
          console.log(`Clock with name ${name} already exists`);
          return;
        }
      }
      setClocks((prevClocks) =>
        prevClocks.map((clock) =>
          clock.name === clockName ? { ...clock, name, ticks } : clock
        )
      );
    };

  const handleRemoveClock = (clockName: string) => () => {
    setClocks(clocks.filter((c) => c.name !== clockName));
  };

  return (
    <CrewSheetContext.Provider
      value={{
        heat,
        wanted,
        food,
        materials,
        rep,
        goodwill,
        intel,
        items,
        alchemy,
        gangs,
        experts,
        schematics,
        formulae,
        rGangs,
        rExperts,
        scouting,
        blackmail,
        factions,
        pcGladiators,
        fInstructors,
        livingSpace,
        security,
        lair,
        community,
        operations,
        clocks,
        setHeat,
        setWanted,
        setFood,
        setMaterials,
        setRep,
        setGoodwill,
        setIntel,
        handleUpdateItem,
        handleAddItem,
        handleUpdateAlchemy,
        handleAddAlchemy,
        handleUpdateGang,
        handleAddGang,
        handleUpdateExpert,
        handleAddExpert,
        handleUpdateSchematic,
        handleAddSchematic,
        handleRemoveSchematic,
        handleUpdateFormulae,
        handleAddFormula,
        handleRemoveFormula,
        handleAddRGang,
        handleUpdateRGang,
        handleRemoveRGang,
        handleAddRExpert,
        handleUpdateRExpert,
        handleRemoveRExpert,
        handleAddScouting,
        handleUpdateScouting,
        handleRemoveScouting,
        handleAddBlackmail,
        handleRemoveBlackmail,
        handleUpdateFaction,
        handleAddPCGladiator,
        handleUpdatePCGladiator,
        handleRemovePCGladiator,
        handleAddFightingInstructor,
        handleUpdateFightingInstructor,
        handleRemoveFightingInstructor,
        handleAddCommunityProject,
        handleUpdateCommunityProject,
        handleRemoveCommunityProject,
        handleAddOperation,
        handleUpdateOperation,
        handleRemoveOperation,
        handleAddClock,
        handleUpdateClock,
        handleRemoveClock,
      }}
    >
      {children}
    </CrewSheetContext.Provider>
  );
}
