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

export interface Ability {
  name: string;
  keystone?: boolean;
  slug: string;
}

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
};

export interface Action {
  name: string;
  attribute: 'Heart' | 'Instinct' | 'Machina';
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
  score: number[];
}

export type Bonds = {
  Personal: Bond[];
  Familial: Bond[];
  Professional: Bond[];
};

export type Loadout = {
  name: string;
  load: number;
  desc: string;
};

export type Item = {
  name: string;
  slots: number;
};
