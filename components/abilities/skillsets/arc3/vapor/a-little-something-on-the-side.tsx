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
export default function ALittleSomethingOnTheSide() {
  return (
    <>
      <TypographyP>
        Whenever <b>time passes</b>, you may steal from a <b>Faction</b> of your
        choice. Make an <b>action roll</b>.
      </TypographyP>
      <div className="grid grid-cols-1 sm:grid-cols-2 border-1 rounded-md border-border p-2">
        <div className="col-span-1">
          <TypographyP>
            <InlineSymbol>
              <Theta />
            </InlineSymbol>{" "}
            : choose one; <b>+1 spite</b>
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
            : choose three
          </TypographyP>
        </div>
        <div className="col-span-1">
          <TypographyUnorderedList>
            <li>
              <b>+1 food</b>
            </li>
            <li>
              <b>+1 material</b>
            </li>
            <li>
              <b>tick down one of their Faction clocks</b>
            </li>
          </TypographyUnorderedList>
          <TypographyP>
            On a{" "}
            <InlineSymbol>
              <Threat />
            </InlineSymbol>
            , <b>resist</b> or their security improves.
          </TypographyP>
        </div>
      </div>
    </>
  );
}
