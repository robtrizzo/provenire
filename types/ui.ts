import { z } from "zod";

export type CharacterFilter = {
  name: string;
  characters: string[];
  enabled: boolean;
};

export const CharacterFilterSchema = z.object({
  name: z.string(),
  characters: z.array(z.string()),
  enabled: z.boolean(),
});
