"use client";
import CharacterFiltersProvider from "@/providers/character-filters-provider";
import DiceSheet from "@/components/character-sheet/dice-history/dice-sheet";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1 } from "@/components/ui/typography";
import { useRoll } from "@/contexts/arc2RollContext";
import FilterCharacters from "@/components/gm/filter-characters";
import Characters from "@/components/gm/characters";
import { useQuery } from "@tanstack/react-query";
import { Character as CharacterType, CharacterV2 } from "@/types/game";
import Character from "@/components/gm/chraracter";
import GroupRollDialog from "../(components)/group-roll-dialog";
import { GroupRollMember } from "@/types/roll";
import { Separator } from "@/components/ui/separator";
import EngagementRoll from "../(components)/engagement-roll";

export default function Page() {
  const {
    rolls,
    currentDiceFilter,
    handleCurrentDiceFilterChange,
    fetchNextPage,
    refetchRolls,
    hasNextPage,
    rollsArePending,
  } = useRoll();

  const { data, isPending } = useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const response = await fetch("/api/characters?v=2", {
        cache: "no-cache",
      });
      const data = await response.json();
      return data.characters;
    },
  });

  return (
    <>
      <div className="flex justify-between">
        <Breadcrumbs />
        <div className="flex gap-2 mt-5">
          <DiceSheet
            rolls={rolls}
            currentDiceFilter={currentDiceFilter}
            handleCurrentDiceFilterChange={handleCurrentDiceFilterChange}
            fetchNextPage={fetchNextPage}
            refetchRolls={refetchRolls}
            hasNextPage={hasNextPage}
            rollsArePending={rollsArePending}
          />
        </div>
      </div>
      <TypographyH1>The Crew</TypographyH1>
      <div className="flex flex-col gap-4">
        <GroupRollSection />
        <EngagementRoll.Dialog.Wrapper>
          <EngagementRoll.Dialog.ConfigureBase>
            <EngagementRoll.Configure />
          </EngagementRoll.Dialog.ConfigureBase>
        </EngagementRoll.Dialog.Wrapper>
        <CharacterFiltersProvider>
          <FilterCharacters />
          {!isPending && (
            <Characters characters={data}>
              {(character: CharacterType) => {
                const c = character as unknown as CharacterV2;
                return (
                  <Character character={character}>
                    <div className="grid grid-cols-12">
                      <div className="col-span-4 flex flex-col">
                        <Character.XP character={character} />
                        <Character.Conditions character={character} />
                        <Character.StressV2 character={c} />
                        <Character.Baggage character={c} />
                      </div>
                      <div className="col-span-8">
                        <Character.ActionsV2 character={c} />
                      </div>
                    </div>
                    <Character.HarmV2 character={c} />
                  </Character>
                );
              }}
            </Characters>
          )}
        </CharacterFiltersProvider>
      </div>
    </>
  );
}

function GroupRollSection() {
  const { groupRoll } = useRoll();

  const leader: GroupRollMember | undefined = groupRoll.find(
    (member) => member.leader
  );
  const otherMembers: GroupRollMember[] = groupRoll.filter(
    (member) => !member.leader
  );

  return (
    <GroupRollDialog>
      <div>
        <GroupRollDialog.GMLeaderSection leader={leader} />
        {leader && <GroupRollDialog.GMMemberSection member={leader} />}
      </div>
      <Separator />
      {otherMembers.map((member, idx) => (
        <div key={member.charName + idx}>
          <i className="text-xs text-muted-foreground">
            <b>{member.charName || "Unnamed character"}</b>
          </i>
          <GroupRollDialog.GMMemberSection
            key={member.charName + idx}
            member={member}
          />
        </div>
      ))}
      <div className="flex">
        <GroupRollDialog.AlertControl />
        <div className="ml-auto">
          <GroupRollDialog.RollControls />
        </div>
      </div>
    </GroupRollDialog>
  );
}
