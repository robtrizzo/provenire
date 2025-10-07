export interface Character {
  name: string;
  updatedAt: Date;
  player: string;
  portrait?: string;
  key?: string;
  stress: number;
  conditions: string[];
  healing: number;
  harm3: string;
  harm2: string[];
  harm1: string[];
  armor: boolean;
  sArmor: boolean;
  hArmor: boolean;
  abilities: string[];
  version?: number;
}

export type Archetype = {
  name: string;
  questions: string[];
  shortDescription: string;
  attributes: Attributes;
  actions: Action[];
  abilities: {
    mission: Ability[];
    downtime: Ability[];
  };
};

export type FightingStyle = {
  name: string;
  instructor: string;
  description: string;
  attributes: Attributes;
  actions: Action[];
  abilities: Ability[];
  restrictedTo?: string;
};

export type Donum = {
  name: string;
  translation: string;
  description: string;
  provenire: string;
  metamorphosis: string;
  advance?: string;
  phase: DonumPhase;
  type?: string;
  restrictedTo: string;
  abilities: Ability[];
};

export type DonumPhase = "Emergence" | "Nascence" | "Versance" | "Dominance";

export interface Ability {
  name: string;
  keystone?: boolean;
  slug: string;
  harmModifiers?: HarmModifier[];
  cost?: number;
  type?: string;
  source?: string;
}

export type Attribute = "Heart" | "Instinct" | "Machina";

interface Attributes {
  Heart: string[];
  Instinct: string[];
  Machina: string[];
}

interface ProfBond {
  name: string;
  description: string;
}

export type Background = {
  name: string;
  shortDescription: string;
  attributes: Attributes;
  questions: string[];
  actions: Action[];
  subsistenceClock: string;
  professionalBonds: ProfBond[];
};

export type Heritage = {
  name: string;
  remembrance: string;
  shortDescription: string;
};

export interface Action {
  name: string;
  attribute?: Attribute;
  description: string;
  restrictAtStart?: boolean;
  suboptions?: string[];
}

export type Skillset = {
  name: string;
  shortDescription: string;
  attributes: Attributes;
  questions: string[];
  actions: Action[];
  agendas: string;
  abilities: {
    mission: Ability[];
    downtime: Ability[];
  };
};

export type CharacterAttributes = {
  Heart: {
    Defy: number[];
    Persuade: number[];
    [key: string]: number[];
  };
  Instinct: {
    Charge: number[];
    Prowl: number[];
    [key: string]: number[];
  };
  Machina: {
    Suggest: number[];
    Survey: number[];
    [key: string]: number[];
  };
};

export interface Bond {
  name: string;
  description?: string;
  score: number[];
}

export type Bonds = {
  Personal: Bond[];
  Familial: Bond[];
  Professional: Bond[];
  Crew: Bond[];
};

export type Loadout = {
  name: string;
  load: number;
  desc: string;
};

export type Item = Clock & {
  slots: number;
  uses?: number;
  traits: string[];
  description: string;
  harmModifiers?: HarmModifier[];
};

export type Faction = Clock & {
  location: string;
  description: string;
  agenda: string;
};

export type Cohort = Clock & {
  location: string;
  traits: string[];
};

export interface Clock {
  name: string;
  ticks: number;
  clock: number;
}

export type Region = {
  name: string;
  contact: Clock & {
    description: string;
  };
  danger: Clock & {
    description: string;
  };
  pathways: Clock[];
};

export type Blackmail = {
  name: string;
  effect: string;
};

export type Gladiator = {
  name: string;
  rank: number;
};

export type FightingInstructor = Clock & {
  fightingStyle: string;
  description: string;
};

export type CommunityProject = Clock & {
  description: string;
};

export type Operation = Clock & {
  effect: string;
};

export interface Crew {
  name: string;
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
  updatedAt: Date;
}

// ARC TWO ------------------ //

export type ArchetypeV2 = {
  name: string;
  questions: {
    starting: string[];
    horizon: string[];
  };
  shortDescription: string;
  startingAction: string;
  abilities: Ability[];
};

export type BackgroundV2 = {
  name: string;
  actions: {
    starting: string[];
    baggage: string[];
  };
  baggage: Baggage[];
};

export type Baggage = {
  name: string;
  subtitle?: string;
  description: string;
  unlocks: BaggageUnlock[];
};

export type BaggageUnlock = {
  name: string;
  unlocked: boolean;
  type:
    | "cyberware"
    | "action"
    | "transformation"
    | "drive"
    | "fightingStyle"
    | "bond"
    | "rival";
};

export type Sleeve = {
  name: string;
  codexSlots: number;
  price?: number;
  subscription?: number;
  manufacturer?: string;
  tech?: string[];
  harm?: CharacterHarm;
};

export interface HarmModifier {
  level: number;
  slotChange: number;
  source: string;
  sourceId: string;
}

export type CustomResourceType = "xp-clock" | "heat-track";

export interface CustomResource {
  id: string;
  name: string;
  type: CustomResourceType;
  description?: string;
  config: CustomResourceConfig;
}

export type CustomResourceConfig = XPClockConfig | HeatTrackConfig;

export interface XPClockConfig {
  xp: number;
  default: 0;
}

export interface HeatTrackConfig {
  heat: number;
  max: number;
  default: 0;
}

export type Operative = {
  name: string;
  action: string;
  harmModifiers?: HarmModifier[];
  abilities: Ability[];
  customResources?: CustomResource[];
};

export type FightingStyleV2 = {
  name: string;
  description: string;
  instructor?: string;
  abilities: Ability[];
};

export type Transformation = {
  name: string;
  translation?: string;
  description?: string;
  provenire?: string;
  abilities: Ability[];
};

export interface CharacterV2 {
  name: string;
  updatedAt: Date;
  player: string;
  portrait?: string;
  key?: string;
  stress: number;
  conditions: string[];
  harm: CharacterHarm;
  armor: boolean;
  sArmor: boolean;
  hArmor: boolean;
  abilities: string[];
  actions: {
    left: ActionV2[];
    right: ActionV2[];
  };
  unlockedBaggage?: Baggage[];
}

export type CharacterHarm = {
  [level: number]: HarmLevel;
};
export type HarmLevel = {
  slots: string[];
  maxSlots: number;
};

export type DictionaryAction = {
  name: string;
  description: string;
  restrictAtStart?: boolean;
  suboptions?: string[];
};

export interface Rollable {
  name: string;
  score: [number, number];
}

export type ActionV2 = {
  name: string;
  description: string;
  type: "ego" | "codex" | "bond";
  overCorpClassification?: "basic" | "restricted" | "forbidden";
  suboptions?: string[];
  subscription?: number;
  subscriptionPaid?: boolean;
  score: [number, number];
  tags?: string[];
  position?: "left" | "right";
};

export type PeltsWealthLevel = {
  name: string;
  conditions: string;
  supportsSubscriptions: number;
  cost: number;
};

export type ItemV2 = {
  name: string;
  slots: number;
  uses?: number;
  traits?: string[];
  description?: string;
  harmModifiers?: HarmModifier[];
  dangerous?: boolean;
  cost?: number;
  subscription?: number;
  subscriptionPaid?: boolean;
  options?: [
    {
      name: string;
      description?: string;
      cost?: number;
      subscription?: number;
      dangerous?: boolean;
      codexExpansion?: number;
    }
  ];
  codexExpansion?: number;
};

export type BondV2 = {
  name: string;
  notes?: string;
  score: [number, number];
  advanced?: boolean;
};

export type Note = {
  name: string;
  content: string;
  clock?: Clock;
};
