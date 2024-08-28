export type Archetype = {
  name: string;
  questions: string[];
  shortDescription: string;
  attributes: Attributes;
};

interface Attributes {
  Heart: string[];
  Instinct: string[];
  Machina: string[];
}

export type Background = {
  name: string;
  shortDescription: string;
  attributes: Attributes;
};

export type Heritage = {
  name: string;
};

export type Troublemaker = {
  name: string;
  shortDescription: string;
  attributes: Attributes;
  questions: string[];
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
