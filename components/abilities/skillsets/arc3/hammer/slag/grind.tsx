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
export default function Grind() {
  return (
    <>
      <TypographyP>
        You may spend a downtime activity to <i>fight for glory</i>. When you
        do, a random <b>faction</b> loses <b>1 manpower</b>. Make an{" "}
        <b>action roll</b>.
      </TypographyP>
      <div className="grid grid-cols-1 sm:grid-cols-2 border-1 rounded-md border-border p-2">
        <div className="col-span-1">
          <TypographyP>
            <InlineSymbol>
              <Theta />
            </InlineSymbol>{" "}
            : choose one; <b>level 2 harm</b>
          </TypographyP>
          <TypographyP>
            <InlineSymbol>
              <ThetaDouble />
            </InlineSymbol>{" "}
            : choose two; <b>level 2 harm</b>
          </TypographyP>
          <TypographyP>
            <InlineSymbol>
              <ThetaTriple />
            </InlineSymbol>{" "}
            : choose three
          </TypographyP>
        </div>
        <div className="col-span-1">
          <TypographyUnorderedList>
            <li>
              <b>+1 food</b>
            </li>
            <li>
              <b>+2 rep</b>
            </li>
            <li>
              <b>+1 xp</b>
            </li>
          </TypographyUnorderedList>
          <TypographyP>
            On a{" "}
            <InlineSymbol>
              <Threat />
            </InlineSymbol>
            , <b>resist</b> or lose <b>1 goodwill</b>.
          </TypographyP>
        </div>
      </div>
    </>
  );
}
