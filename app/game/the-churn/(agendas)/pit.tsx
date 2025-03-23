import {
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import Link from "next/link";
import HierarchyTree from "@/components/hierarchy-tree";

export default function Pit() {
  return (
    <>
      <TypographyH3>Pit the oppressors against each other</TypographyH3>
      <TypographyP>
        During The Churn, the crew is traversing the hierarchy of power in the
        Steel Trap. Or more accurately, they&apos;re coercing and manipulating
        the workers around them to do so. Make a{" "}
        <Link href="/game/actions-and-rolls#project-rolls">
          <b className="underline text-red-500">project roll</b>
        </Link>{" "}
        and gain informants equal to the result. These are hapless or unwilling
        workers who have been manipulated into spying for the crew.
      </TypographyP>
      <TypographyP>
        The crew can sacrifice any number of informants to roll that many dice.
        They gain intel equal to the result: <b>1-3:</b> 0 (and one survives to
        seek revenge), <b>4,5:</b> 1, <b>6:</b> 2, <b>Critical:</b> 3.
      </TypographyP>
      <TypographyP>
        The crew then spends <b>intel (1/2/4/6)</b> to blackmail or plant
        informants in the overseers&apos; ranks. They select an upgrade from the
        hierarchy tree. An upgrade can only be selected if all of the
        prerequisite upgrades are also selected.
      </TypographyP>
      <TypographyH4>Overseer Hierarchy Tree</TypographyH4>
      <div className="max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-290px)] overflow-auto">
        <HierarchyTree />
      </div>
    </>
  );
}
