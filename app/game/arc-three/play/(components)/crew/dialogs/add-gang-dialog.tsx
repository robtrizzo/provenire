import { GangTrait } from "@/contexts/arc3CrewSheetContext";

const GANG_POSITIVE_TRAITS: GangTrait[] = [
  {
    name: "Brutal",
    description: "won't shy away from extreme violence",
    tag: "positive",
  },
  {
    name: "Fearsome",
    description: "terrifying in aspect and reputation",
    tag: "positive",
  },
  {
    name: "Independant",
    description:
      "can be trusted to take the initiative and make good decisions on their own",
    tag: "positive",
  },
  {
    name: "Loyal",
    description:
      "won't be swayed away from the crew by bribes or nonlethal pressure",
    tag: "positive",
  },
  {
    name: "Numerous",
    description: "can't be easily wiped out",
    tag: "positive",
  },
  {
    name: "Tenacious",
    description: "won't be deterred from a task",
    tag: "positive",
  },
];

const GANG_NEGATIVE_TRAITS: GangTrait[] = [
  {
    name: "Braggarts",
    description: "leak evidence and spread self aggrandizing gossip",
    tag: "negative",
  },
  {
    name: "Disorganized",
    description: "ineffective at complex tasks",
    tag: "negative",
  },
  {
    name: "Principled",
    description: "there are certain ethics this gang won't betray",
    tag: "negative",
  },
  {
    name: "Skiddish",
    description: "won't take big risks; easily intimidated",
    tag: "negative",
  },
  {
    name: "Unreliable",
    description: "possibly busy, unwilling, or unable to help",
    tag: "negative",
  },
];
