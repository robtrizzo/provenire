export interface Character {
  name: string;
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
};

export type Donum = {
  name: string;
  translation: string;
  description: string;
};

export interface Ability {
  name: string;
  keystone?: boolean;
  slug: string;
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
  attribute: Attribute;
  description: string;
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
}
