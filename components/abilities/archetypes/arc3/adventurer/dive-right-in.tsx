import { InlineSymbol } from "@/components/dice/dice-borders";
import {
  Theta,
  ThetaDouble,
  ThetaTriple,
} from "@/components/dice/dice-symbols";
import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function DiveRightIn() {
  return (
    <>
      <TypographyP>
        During the mission when there&apos;s a lull in the action, the
        Adventurer can explain what they want and declare that they&apos;re{" "}
        <b>diving in</b>. They mark <b>1 xp</b>. The <b>Narrator</b> describes
        the first obstacle; the Adventurer describes how the crew has already
        overcome it and makes an <b>action roll</b>.{" "}
        <InlineSymbol>
          <ThetaTriple />
        </InlineSymbol>{" "}
        : no consequences;{" "}
        <InlineSymbol>
          <ThetaDouble />
        </InlineSymbol>{" "}
        : one consequence;{" "}
        <InlineSymbol>
          <Theta />
        </InlineSymbol>{" "}
        : two consequences and mark <b>Frantic</b>.
      </TypographyP>
      <TypographyBlockquote>
        <strong>Frantic</strong>: You cannot <strong>take a breather</strong> or{" "}
        <strong>recover</strong>. Clear by making it up to the crew (fix the
        current situation or spend downtime activities helping others until
        you&apos;re forgiven).
      </TypographyBlockquote>
    </>
  );
}
