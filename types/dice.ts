// Base faces without any effect
export type BaseFace = "t" | "a" | "ta" | "_";

// Effect degrees: r = reduced, s = standard, e = enhanced
export type EffectDegree = "r" | "s" | "e";

export type CritMarker = "c";

// DieFace can be:
// - A base face with no effect: "t", "a", "ta", "_"
// - A base face with crit marker: "tc", "ac", "tac", "_c"
// - A base face with effect: "t:s", "ta:e", etc.
// - A base face with crit and effect: "tc:s", "tac:e", etc.
// - Pure effect: "e:r", "e:s", "e:e"
// - Pure effect with crit: "ec:r", "ec:s", "ec:e"
export type DieFace =
  | BaseFace
  | `${BaseFace}${CritMarker}`
  | `${BaseFace}:${EffectDegree}`
  | `${BaseFace}${CritMarker}:${EffectDegree}`
  | `e:${EffectDegree}`
  | `e${CritMarker}:${EffectDegree}`;

export type Die = { faces: DieFace[]; variant: DieVariant; label?: string };

export type DieVariant =
  | "default"
  | "bond"
  | "ability"
  | "skill"
  | "emotion"
  | "push"
  | "fortune";
