import { Card } from "@/components/ui/card";
import {
  TypographyBlockquote,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";

export default function Overkill() {
  return (
    <>
      <TypographyP>
        <span className="font-cyber">&quot;Overkill, Beibe&quot;</span> does one
        thing and one thing well: destroy. It has little regard for the safety
        of the wielder or anyone within ten yards of the target. When you deploy
        the canon, it unfolds <span className="font-cyber">Canon&apos;s</span>{" "}
        arm and begins warming up. The warmup procedure can take some time, so{" "}
        <span className="font-cyber">Canon</span> is advised to plan ahead and
        play cool - lest they be caught in an awkward waiting game.
      </TypographyP>
      <TypographyP>
        Firing <span className="font-cyber">&quot;Overkill, Beibe&quot;</span>{" "}
        is some serious business and often comes at tradeoffs{" "}
        <span className="font-cyber">Canon</span> needs to choose from.
      </TypographyP>
      <Card className="px-4 my-4">
        <b className="font-cyber">
          When you fire &quot;Overkill, Beibe&quot;, make a fortune roll.
        </b>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <TypographyP>
            <b>1-3</b>: choose two
            <br />
            <b>4,5</b>: choose one
            <br />
            <b>6</b>: no tradeoff
            <br />
            <i className="text-muted-foreground">
              you may only choose unchosen options
            </i>
          </TypographyP>
          <TypographyUnorderedList>
            <li>Unwanted collateral damage</li>
            <li>Damaging feedback</li>
            <li>Fuel cell depleted</li>
            <li>Needs another warmup cycle</li>
          </TypographyUnorderedList>
        </div>
      </Card>
      <TypographyBlockquote className="font-cyber text-sm">
        Additional fuel cells are <b>3 inventory slots</b>.
      </TypographyBlockquote>
    </>
  );
}
