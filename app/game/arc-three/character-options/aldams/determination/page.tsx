import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import aldams from "@/public/arc3/aldams.json";
import Aldam from "../(components)/aldam";

const determination = aldams.find((a) => a.name === "Determination");

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Determination</TypographyH1>
      <TypographyP>
        For the Kilder, blood arts are tied intrinsically to the their
        bodies&apos; ability to withstand the punishing side effects. Children
        are trained in harsh fitness regimens from the time they can walk.
        Anyone who doesn&apos;t meet strict standards are forbidden from
        attempting the art.
      </TypographyP>
      <TypographyBlockquote>
        For the purposes of <b>Determination</b>, your character&apos;s physical
        fitness will be tracked with the <b>Stamina</b> clock.
      </TypographyBlockquote>
      <TypographyH3>Stamina</TypographyH3>
      <TypographyP>
        <b className="mr-1">Stamina</b> is a rough estimation of the body&apos;s
        ability to survive the brutal Kilder Aldam. To determine your starting{" "}
        <b>Stamina</b>, count the number of <b>xp clocks</b> you have spent on{" "}
        <b>phsyical actions</b> and <b>fighting style abilities</b>. This is the
        number of <b>ticks</b> you start with on the <b>Stamina clock</b>.
      </TypographyP>
      <TypographyP>
        You tick the <b>Stamina clock</b> when:
      </TypographyP>
      <TypographyUnorderedList>
        <li>you complete a mission (+1)</li>
        <li>
          you <b>train</b> during <b>downtime</b> (+2)
        </li>
        <li>
          you spend <b>xp clocks</b> on a <b>physical action</b> or{" "}
          <b>fighting style ability</b> (+1 per clock spent)
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        <b>Stamina</b> must be constantly honed or it will quickly atrophe. You
        remove ticks from the <b>Stamina clock</b> when:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          you <b>take a breather</b> after a mission (-1)
        </li>
        <li>
          you <b>heal</b> during <b>downtime</b> (-2)
        </li>
        <li>
          time passes (-3 if you are <i>hungry</i>)
        </li>
      </TypographyUnorderedList>
      {determination?.abilities.map((a, idx) => (
        <Aldam aldamSlug="determination" ability={a} key={idx} />
      ))}
    </>
  );
}
