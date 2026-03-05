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
export default function OrElse() {
  return (
    <>
      <TypographyP>
        You may spend a <b>downtime</b> activity to{" "}
        <i>pit the oppressors against each other</i>. When you do, you may tick
        any <b>Faction clock</b> that you are aware of up or down. Make an{" "}
        <b>action roll</b>.
      </TypographyP>
      <div className="grid grid-cols-1 sm:grid-cols-2 border-1 rounded-md border-border p-2">
        <div className="col-span-1">
          <TypographyP>
            <InlineSymbol>
              <Theta />
            </InlineSymbol>{" "}
            : choose two
          </TypographyP>
          <TypographyP>
            <InlineSymbol>
              <ThetaDouble />
            </InlineSymbol>{" "}
            : choose one
          </TypographyP>
          <TypographyP>
            <InlineSymbol>
              <ThetaTriple />
            </InlineSymbol>{" "}
            : tick another <b>Faction clock</b> up or down
          </TypographyP>
        </div>
        <div className="col-span-1">
          <TypographyUnorderedList>
            <li>
              <b>-1 goodwill</b>
            </li>
            <li>
              <b>+1 spite</b>
            </li>
            <li>
              <b>+2 heat</b>
            </li>
          </TypographyUnorderedList>
          <TypographyP>
            On a{" "}
            <InlineSymbol>
              <Threat />
            </InlineSymbol>
            , <b>resist</b> or pick another option.
          </TypographyP>
        </div>
      </div>
    </>
  );
}
