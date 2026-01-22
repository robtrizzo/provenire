import { DonumPhase } from "@/types/game";

export function advanceDonum(phase: DonumPhase): DonumPhase {
  switch (phase) {
    case "Emergence":
      return "Nascence";
    case "Nascence":
      return "Versance";
    case "Versance":
      return "Dominance";
    case "Dominance":
      return "Dominance";
    default:
      return "Emergence";
  }
}

export function clockMax(phase: DonumPhase): number {
  switch (phase) {
    case "Emergence":
      return 6;
    case "Nascence":
      return 12;
    default:
      return 6;
  }
}
