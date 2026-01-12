import { Separator } from "@/components/ui/separator";
import { TypographyH3, TypographyH4 } from "@/components/ui/typography";
import { ReactNode } from "react";
import { CritBorderGradient, D6 } from "./(components)/dice-borders";
import {
  ArrowDouble,
  Theta,
  ThetaDouble,
  ThetaTriple,
  Threat,
  ThreatSpread,
} from "./(components)/dice-symbols";
import {
  AbilityDice,
  BondDice,
  type DieFace,
  DieVariant,
  EffectDegree,
  getBaseFace,
  getEffectDegree,
  isCritCandidate,
  SkillDice,
} from "@/lib/dice";

export default async function Page() {
  return (
    <div>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <D6 size={128}></D6>
          <D6 size={128}>
            <Theta />
          </D6>
          <D6 size={128}>
            <ThetaDouble />
          </D6>
          <D6 size={128}>
            <ThetaTriple />
          </D6>
        </div>
        <div className="flex flex-col gap-2">
          <D6 size={128}>
            <Threat />
          </D6>
          <D6 size={128}>
            <>
              <ThreatSpread />
              <Theta />
            </>
          </D6>
          <D6 size={128}>
            <>
              <ThreatSpread />
              <ThetaDouble />
            </>
          </D6>
          <D6 size={128}>
            <>
              <ThreatSpread />
              <ThetaTriple />
            </>
          </D6>
        </div>
        <div className="flex flex-col gap-2">
          <D6 size={128}>
            <ArrowDouble />
          </D6>
          <D6 size={128}>
            <>
              <ArrowDouble />
              <Theta />
            </>
          </D6>
          <D6 size={128}>
            <>
              <ArrowDouble />
              <ThetaDouble />
            </>
          </D6>
          <D6 size={128}>
            <>
              <ArrowDouble />
              <ThetaTriple />
            </>
          </D6>
        </div>
        <div className="flex flex-col gap-2">
          <D6 size={128}>
            <>
              <ThreatSpread />
              <ArrowDouble />
            </>
          </D6>
          <D6 size={128}>
            <>
              <ThreatSpread />
              <ArrowDouble />
              <Theta />
            </>
          </D6>
          <D6 size={128}>
            <>
              <ThreatSpread />
              <ArrowDouble />
              <ThetaDouble />
            </>
          </D6>
          <D6 size={128}>
            <>
              <ThreatSpread />
              <ArrowDouble />
              <ThetaTriple />
            </>
          </D6>
        </div>
      </div>

      <TypographyH4>Emotion Die</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <ThetaDouble />
        </D6>
      </div>
      <TypographyH4>Push Die</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <>
            <ArrowDouble />
            <Theta />
            <ThreatSpread />
          </>
        </D6>
        <D6 size={84}>
          <ThetaTriple />
        </D6>
      </div>

      <Separator className="mt-4" />

      <TypographyH3>Ability Dice</TypographyH3>
      <TypographyH4>Level 0</TypographyH4>

      <Die die={AbilityDice[0]} variant="ability" />
      <TypographyH4>Level 1</TypographyH4>
      <Die die={AbilityDice[1]} variant="ability" />
      <TypographyH4>Level 2</TypographyH4>
      <Die die={AbilityDice[2]} variant="ability" />
      <TypographyH4>Level 3</TypographyH4>
      <Die die={AbilityDice[3]} variant="ability" />

      <Separator className="mt-4" />

      <TypographyH3>Skill Die</TypographyH3>
      <TypographyH4>Level 1</TypographyH4>
      <Die die={SkillDice[1]} variant="skill" />

      <TypographyH4>Level 2</TypographyH4>
      <Die die={SkillDice[2]} variant="skill" />

      <TypographyH4>Level 3</TypographyH4>
      <Die die={SkillDice[3]} variant="skill" />

      <TypographyH4>Level 4</TypographyH4>
      <Die die={SkillDice[4]} variant="skill" />

      <Separator className="mt-4" />

      <TypographyH4>Bond Die (Level 0)</TypographyH4>
      <Die die={BondDice[0]} variant="bond" />
      <TypographyH4>Bond Die (Level 1)</TypographyH4>
      <Die die={BondDice[1]} variant="bond" />
      <TypographyH4>Bond Die (Level 2)</TypographyH4>
      <Die die={BondDice[2]} variant="bond" />
      <TypographyH4>Bond Die (Level 3)</TypographyH4>
      <Die die={BondDice[3]} variant="bond" />
      <TypographyH4>Bond Die (Level 4)</TypographyH4>
      <Die die={BondDice[4]} variant="bond" />
    </div>
  );
}

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
  die: DieFace[];
  size?: number;
  variant?: DieVariant;
  className?: string;
  gap?: number;
}

export function Die({
  die,
  size = 84,
  variant = "ability",
  className,
  gap = 1,
}: DieProps) {
  return (
    <div className={`flex gap-${gap}`}>
      {die.map((face, index) => (
        <DieFace
          key={index}
          face={face}
          size={size}
          variant={variant}
          className={className}
        />
      ))}
    </div>
  );
}
