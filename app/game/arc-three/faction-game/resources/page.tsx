import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";

import { Boxes, Droplet, Droplets, Wheat } from "lucide-react";
import ClockCost from "@/components/clock-cost";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Resources</TypographyH1>

      <TypographyP>
        Each faction represents resources on a scale from <b>0 to 4</b>. Without
        specifically constructed storehouses, a faction's maximum stockpile is{" "}
        <b>2</b>.
      </TypographyP>
      <TypographyBlockquote>
        <b>0</b> = None; <b>1</b> = Scarce; <b>2</b> = Adequate; <b>3</b> =
        Surplus; <b>4</b> = Stockpile
      </TypographyBlockquote>

      <TypographyH3>Advisors</TypographyH3>
      <TypographyP>
        First, each crew member in the faction receives resources equal to the
        faction's stockpile values. Some members of the crew lead a faction or
        they're responsible for their resources. Once per <b>time passes</b>,
        they may requisition one of their faction's stockpiles for{" "}
        <div className="inline-block">
          <div className="flex items-center">
            <div className="text-red-500">
              <Droplets size={20} />
            </div>{" "}
            <ClockCost num={1} ticks={6} r={20} />
          </div>
        </div>
        ,{" "}
        <div className="inline-block">
          <div className="flex items-center">
            <div className="text-amber-500">
              <Wheat size={20} />
            </div>{" "}
            <ClockCost num={1} ticks={6} r={20} />
          </div>
        </div>
        ,{" "}
        <div className="inline-block">
          <div className="flex items-center">
            <div className="text-purple-500">
              <Boxes size={20} />
            </div>{" "}
            <ClockCost num={1} ticks={6} r={20} />
          </div>
        </div>
        , or{" "}
        <div className="inline-block">
          <div className="flex items-center">
            <div className="text-blue-500">
              <Droplet size={20} />
            </div>{" "}
            <ClockCost num={1} ticks={6} r={20} />
          </div>
        </div>{" "}
        respectively.
      </TypographyP>

      <TypographyH3>Councilors</TypographyH3>
      <TypographyP>
        Some members of the crew manage resources across the entire sector. They
        are responsible for choosing how it is distributed and overseeing the
        logistics. Fabrication-wide resources are represented as a delta from{" "}
        <b>-2</b> to <b>+2</b>.
      </TypographyP>
      <TypographyBlockquote>
        <b>-2</b> = Severe Defecit; <b>-1</b> = Defecit; <b>0</b> = Balanced;{" "}
        <b>+1</b> = Surplus; <b>+2</b> = Grand Surplus
      </TypographyBlockquote>
      <TypographyP>
        Whenever <b>time passes</b>, the <b>Narrator</b> will inform councilors
        of their managed resource's delta. Each councilor gains{" "}
        <div className="inline-block">
          <div className="flex items-center">
            <div className="text-purple-500">
              <Boxes size={20} />
            </div>{" "}
            <ClockCost num={1} ticks={6} r={20} />
          </div>
        </div>{" "}
        and{" "}
        <div className="inline-block">
          <div className="flex items-center">
            <div className="text-amber-500">
              <Wheat size={20} />
            </div>{" "}
            <ClockCost num={1} ticks={6} r={20} />
          </div>
        </div>{" "}
        according to the delta. This is the amount which can be safely allocated
        towards projects without negatively impacting factions.
      </TypographyP>
      <TypographyP>
        <b>Councilors</b> can of course decide they need more resources and pull
        them from a loyal faction. Once per <b>time passes</b> per{" "}
        <b>loyalty clock</b>, each councilor may deplete a loyal faction's{" "}
        <b>food</b> or <b>materials</b> stockpile by <b>1</b> to gain{" "}
        <div className="inline-block">
          <div className="flex items-center">
            <div className="text-purple-500">
              <Boxes size={20} />
            </div>{" "}
            <ClockCost num={1} ticks={6} r={20} />
          </div>
        </div>{" "}
        or{" "}
        <div className="inline-block">
          <div className="flex items-center">
            <div className="text-amber-500">
              <Wheat size={20} />
            </div>{" "}
            <ClockCost num={1} ticks={6} r={20} />
          </div>
        </div>{" "}
        accordingly.
      </TypographyP>
    </>
  );
}
