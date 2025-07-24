import TheChessGameOfLife from "./archetypes/arc2/strategist/the-chess-game-of-life";
import MyBodyIsMyMachine from "./archetypes/arc2/strategist/my-body-is-my-machine";
import VillainousIntellect from "./archetypes/arc2/strategist/villainous-intellect";
import ThirstForKnowledge from "./archetypes/arc2/strategist/thirst-for-knowledge";

export const abilityRegistry = {
  archetypes: {
    arc2: {
      strategist: {
        "the-chess-game-of-life": TheChessGameOfLife,
        "my-body-is-my-machine": MyBodyIsMyMachine,
        "villainous-intellect": VillainousIntellect,
        "thirst-for-knowledge": ThirstForKnowledge,
      },
    },
  },
} as const;
