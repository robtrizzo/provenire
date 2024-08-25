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
};
