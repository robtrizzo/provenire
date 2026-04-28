import { InlineSymbol } from "@/components/dice/dice-borders";
import {
  Theta,
  ThetaDouble,
  ThetaTriple,
  Threat,
} from "@/components/dice/dice-symbols";
import {
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
export default function BuyingTime() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> de-escalate a violent conflict
      </span>
      <TypographyP>
        You can delay violent conflict between two factions by putting yourself
        between them, sometimes at the very last second.
      </TypographyP>
      <div className="grid grid-cols-1 sm:grid-cols-2 border-1 rounded-md border-border p-2">
        <div className="col-span-1">
          <TypographyP>
            <InlineSymbol>
              <Theta />
            </InlineSymbol>{" "}
            : choose three
          </TypographyP>
          <TypographyP>
            <InlineSymbol>
              <ThetaDouble />
            </InlineSymbol>{" "}
            : choose two
          </TypographyP>
          <TypographyP>
            <InlineSymbol>
              <ThetaTriple />
            </InlineSymbol>{" "}
            : <b>+1 rep</b>
          </TypographyP>
        </div>
        <div className="col-span-1">
          <TypographyUnorderedList>
            <li>
              <b>2 stress</b>
            </li>
            <li>
              <b>level 2 harm</b>
            </li>
            <li>
              <b>-1 intel</b>
            </li>
          </TypographyUnorderedList>
          <TypographyP>
            On a{" "}
            <InlineSymbol>
              <Threat />
            </InlineSymbol>
            , <b>resist</b> or <b>+1 spite</b>.
          </TypographyP>
        </div>
      </div>
    </>
  );
}
