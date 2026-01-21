import { getBaseFace, getEffectDegree, isCritCandidate } from "@/lib/dice";
import { CritBorderGradient, D6 } from "./dice-borders";
import {
  ArrowDouble,
  Theta,
  ThetaDouble,
  ThetaTriple,
  Threat,
  ThreatSpread,
} from "./dice-symbols";
import { ReactNode } from "react";
import type { Die, DieFace, DieVariant, EffectDegree } from "@/types/dice";

// Get the effect symbol based on degree
const getEffectSymbol = (effectDegree: EffectDegree | null) => {
  switch (effectDegree) {
    case "r":
      return <Theta />;
    case "s":
      return <ThetaDouble />;
    case "e":
      return <ThetaTriple />;
    default:
      return null;
  }
};

/**
 * Renders the inner symbols for a die face
 */
export function renderFaceSymbols(face: DieFace): ReactNode {
  const base = getBaseFace(face);
  const effectDegree = getEffectDegree(face);

  // Pure effect face (e:r, e:s, e:e)
  if (base === "e") {
    return getEffectSymbol(effectDegree);
  }

  // Blank face
  if (base === "_") {
    return null;
  }

  const hasThreat = base.includes("t");
  const hasAdvantage = base.includes("a");
  const hasEffect = effectDegree !== null;

  // If face has effect, threats are "spread" (use ThreatSpread instead of Threat)
  const threatSymbol =
    hasEffect || hasAdvantage ? <ThreatSpread /> : <Threat />;

  return (
    <>
      {hasThreat && threatSymbol}
      {hasAdvantage && <ArrowDouble />}
      {getEffectSymbol(effectDegree)}
    </>
  );
}

interface DieFaceProps {
  face: DieFace;
  size?: number;
  variant?: DieVariant;
  className?: string;
}

export function DieFace({
  face,
  size = 84,
  variant = "ability",
  className,
}: DieFaceProps) {
  return (
    <D6 size={size} variant={variant} className={className}>
      {isCritCandidate(face) && <CritBorderGradient />}
      {renderFaceSymbols(face)}
    </D6>
  );
}

interface DieProps {
  die: Die;
  size?: number;
  className?: string;
  gap?: number;
}

export function Die({ die, size = 84, className, gap = 1 }: DieProps) {
  return (
    <div className={`flex gap-${gap}`}>
      {die.faces.map((face, index) => (
        <DieFace
          key={index}
          face={face}
          size={size}
          variant={die.variant}
          className={className}
        />
      ))}
    </div>
  );
}
