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
export default function SpeakingUpForWhatsRight() {
  return (
    <>
      <TypographyP>
        During downtime, Leaders can spend a <b>downtime</b> activity speaking
        out and letting the overseers know that <i>you are not afraid</i>. Make
        an <b>action roll</b>.
      </TypographyP>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <TypographyP>
            <InlineSymbol>
              <Theta />
            </InlineSymbol>
            ,{" "}
            <InlineSymbol>
              <ThetaDouble />
            </InlineSymbol>{" "}
            : choose one
          </TypographyP>
          <TypographyP>
            <InlineSymbol>
              <ThetaTriple />
            </InlineSymbol>{" "}
            : choose two
          </TypographyP>
        </div>
        <div className="col-span-1">
          <TypographyUnorderedList>
            <li>
              <b>+1 rep</b>
            </li>
            <li>
              <b>+1 goodwill</b>
            </li>
          </TypographyUnorderedList>
          <TypographyP>
            On a{" "}
            <InlineSymbol>
              <Threat />
            </InlineSymbol>
            , <b>resist</b> or the crew gains <b>+3 heat</b>.
          </TypographyP>
        </div>
      </div>
    </>
  );
}
