import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
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
      <div className="ml-4 mt-2">
        <i className="text-sm">
          {questions.map((q, i) => (
            <TypographyP key={name + "question" + i}>{q}</TypographyP>
          ))}
        </i>
      </div>

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
