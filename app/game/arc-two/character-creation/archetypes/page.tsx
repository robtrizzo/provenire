import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import ArchetypeVotePopover from "./(components)/archetype-vote-popover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import archetypes from "@/public/arc2/archetypes.json";
import { ArchetypeV2 } from "@/types/game";
import Ability from "@/components/abilities/ability";

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1 className="font-cyber mb-8">Archetypes</TypographyH1>
      <TypographyP>
        Even without your memories, some things stay the same. This is who you
        are, or at least one piece of you that survived the{" "}
        <i>memory shelving</i>. In some ways, this is who you&apos;ve always
        been. In others, key parts of your past shaped you.
      </TypographyP>
      <TypographyBlockquote>
        Your character will regain memory of their <b>Horizon Questions</b> once
        you&apos;ve crossed the <i>memroy horizon</i> (unlocking <b>four</b>{" "}
        pieces of <b>baggage</b>).
      </TypographyBlockquote>
      <TypographyH3>Choosing an Archetype</TypographyH3>
      <TypographyP>
        The questions are intended to allow you to develop your character&apos;s
        personality and flesh out their short tenure at{" "}
        <span className="font-cyber">Root</span> so far. For questions involving
        staff at <span className="font-cyber">Root</span>, feel free to name an
        established character or make one up.
      </TypographyP>
      <TypographyP>
        Due to the nature of these questions and abilities, I ask that you
        attempt to pick a unique archetype from each of the other players.
      </TypographyP>
      {archetypes.map((a) => (
        <Archetype key={a.name} archetype={a} />
      ))}
    </>
  );
}

function Archetype({ archetype }: { archetype: ArchetypeV2 }) {
  const { name, questions, shortDescription, startingAction, abilities } =
    archetype;
  return (
    <>
      <ArchetypeTitle name={name} />
      <span className="text-muted-foreground">{shortDescription}</span>
      <TypographyP>
        <b className="font-cyber">
          Starting Action:{" "}
          <span className="text-red-500">{startingAction}</span>
        </b>
      </TypographyP>
      <TypographyP>
        <b className="font-cyber">Starting Questons:</b>
      </TypographyP>
      <div className="ml-4 mt-2">
        <i className="text-sm">
          {questions.starting.map((q, i) => (
            <TypographyP key={name + "question" + i}>{q}</TypographyP>
          ))}
        </i>
      </div>
      {archetype.questions.horizon.length > 0 && (
        <>
          <TypographyP>
            <b className="font-cyber">Horizon Questons:</b>
          </TypographyP>
          <div className="ml-4 mt-2">
            <i className="text-sm">
              {questions.horizon.map((q, i) => (
                <TypographyP key={name + "question" + i}>{q}</TypographyP>
              ))}
            </i>
          </div>
        </>
      )}

      <Accordion type="multiple">
        <AccordionItem value="chessgame">
          <AccordionTrigger className="hover:no-underline">
            <TypographyP>
              <b className="font-cyber">Starting Ability</b>
            </TypographyP>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mx-4">
              <b className="text-amber-500 font-cyber">{abilities[0].name}</b>
              <Ability
                ability={abilities[0]}
                category="archetypes"
                arc="arc2"
                type={archetype.name.toLocaleLowerCase()}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="multiple">
        <AccordionItem value="chessgame">
          <AccordionTrigger className="hover:no-underline">
            <TypographyP>
              <b className="font-cyber">Unlockable Abilities:</b>
            </TypographyP>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mx-4 flex flex-col gap-2">
              {abilities.slice(1).map((a, i) => {
                return (
                  <div key={a.name + i}>
                    <b className="font-cyber">{a.name}</b>
                    <Ability
                      ability={a}
                      category="archetypes"
                      arc="arc2"
                      type={archetype.name.toLocaleLowerCase()}
                    />
                  </div>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

function ArchetypeTitle({ name }: { name: string }) {
  return (
    <TypographyH2 className="font-cyber mt-8" id={name}>
      <div className="flex justify-between">
        {name}
        <ArchetypeVotePopover name={name} />
      </div>
    </TypographyH2>
  );
}
