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

export type Background = {
  name: string;
  shortDescription: string;
  attributes: Attributes;
  questions: string[];
  actions: Action[];
};

export type Heritage = {
  name: string;
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
