import { Separator } from "@/components/ui/separator";
import { TypographyH3, TypographyH4 } from "@/components/ui/typography";
import { D6 } from "./(components)/dice-borders";
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
  EmotionDie,
  PushDie,
  SkillDice,
} from "@/lib/dice";
import { Die } from "./(components)/dice";

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
      <Die die={EmotionDie} />

      <TypographyH4>Push Die</TypographyH4>
      <Die die={PushDie} />

      <Separator className="mt-4" />

      <TypographyH3>Ability Dice</TypographyH3>
      <TypographyH4>Level 0</TypographyH4>

      <Die die={AbilityDice[0]} />
      <TypographyH4>Level 1</TypographyH4>
      <Die die={AbilityDice[1]} />
      <TypographyH4>Level 2</TypographyH4>
      <Die die={AbilityDice[2]} />
      <TypographyH4>Level 3</TypographyH4>
      <Die die={AbilityDice[3]} />

      <Separator className="mt-4" />

      <TypographyH3>Skill Die</TypographyH3>
      <TypographyH4>Level 1</TypographyH4>
      <Die die={SkillDice[1]} />

      <TypographyH4>Level 2</TypographyH4>
      <Die die={SkillDice[2]} />

      <TypographyH4>Level 3</TypographyH4>
      <Die die={SkillDice[3]} />

      <TypographyH4>Level 4</TypographyH4>
      <Die die={SkillDice[4]} />

      <Separator className="mt-4" />

      <TypographyH4>Bond Die (Level 0)</TypographyH4>
      <Die die={BondDice[0]} />
      <TypographyH4>Bond Die (Level 1)</TypographyH4>
      <Die die={BondDice[1]} />
      <TypographyH4>Bond Die (Level 2)</TypographyH4>
      <Die die={BondDice[2]} />
      <TypographyH4>Bond Die (Level 3)</TypographyH4>
      <Die die={BondDice[3]} />
      <TypographyH4>Bond Die (Level 4)</TypographyH4>
      <Die die={BondDice[4]} />
    </div>
  );
}
