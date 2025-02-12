"use client";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import universal_actions from "@/public/universal_actions.json";
import loadouts from "@/public/loadouts.json";
import { type Action, Item } from "@/types/game";
import { Button } from "@/components/ui/button";
import { ActionScore } from "@/components/action-score";
import { VenetianMask, Flame, Activity, BookOpen, X } from "lucide-react";
import ActionDescription from "@/components/action-description";
import { Checkbox } from "@/components/ui/checkbox";
import Abilities from "@/components/abilities/abilities";
import ItemsTable from "@/app/game/play/(components)/character-sheet/components/items-table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Close } from "@radix-ui/react-popover";
import RollSection from "../components/roll-section";
import Bonds from "../components/bonds";
import { useCharacterSheet } from "@/contexts/characterSheetContext";
import { useRoll } from "@/contexts/rollContext";
import XPSection from "./xp-section";
import StressSection from "./stress-section";
import HarmSection from "./harm-section";

export default function MissionSection() {
  const [actionReferencePopopverOpen, setActionReferencePopopverOpen] =
    useState(false);

  const {
    selectedArchetype,
    selectedSkillset,
    selectedBackground,
    attributes,
    abilities,
    loadout,
    items,
    setAbilities,
    setLoadout,
    setItems,
    setChanges,
    handleUpdateItemName,
    handleUpdateItemSlots,
    handleUpdateActionScore,
  } = useCharacterSheet();

  const { diceToast, rollActions, setRollLeft, setRollRight } = useRoll();

  return (
    <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-6 focus-visible:outline-hidden">
      <div className="mt-4">
        <TypographyH2 className="text-md text-muted-foreground mt-8 flex items-end justify-between">
          Actions{" "}
          <Popover
            open={actionReferencePopopverOpen}
            onOpenChange={setActionReferencePopopverOpen}
          >
            <PopoverTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="p-1 text-blue-600 hover:text-blue-600 h-10 w-10"
              >
                <BookOpen style={{ height: "24px", width: "24px" }} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full relative">
              <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
                <X className="h-4 w-4" />
              </Close>
              <TypographyH4 className="text-md">Actions</TypographyH4>
              <TypographyH3 className="mt-4 text-sm text-muted-foreground">
                Universal Actions
              </TypographyH3>
              <div className="ml-2">
                {universal_actions.map((action, i) => (
                  <ActionDescription key={i} action={action as Action} />
                ))}
              </div>
              {selectedBackground && (
                <div>
                  <TypographyH3 className="text-sm text-red-500">
                    {selectedBackground?.name}&apos;s Actions
                  </TypographyH3>
                  <div className="ml-2">
                    {selectedBackground?.actions?.map((action, i) => (
                      <ActionDescription key={i} action={action} />
                    ))}
                  </div>
                </div>
              )}
              {selectedSkillset && (
                <div>
                  <TypographyH3 className="text-sm text-indigo-500">
                    {selectedSkillset?.name}&apos;s Actions
                  </TypographyH3>
                  <div className="ml-2">
                    {selectedSkillset?.actions?.map((action, i) => (
                      <ActionDescription key={i} action={action} />
                    ))}
                  </div>
                </div>
              )}
              {selectedArchetype && (
                <div>
                  <TypographyH3 className="text-sm text-amber-500">
                    {selectedArchetype?.name}&apos;s Action
                  </TypographyH3>
                  <div className="ml-2">
                    {selectedArchetype?.actions?.map((action, i) => (
                      <ActionDescription key={i} action={action} />
                    ))}
                  </div>
                </div>
              )}
            </PopoverContent>
          </Popover>
        </TypographyH2>
        <div className="border-b-[1px]">
          <div className=" mt-8">
            <TypographyH3 className="text-center">
              Heart <Flame className="inline mb-2" />
            </TypographyH3>
          </div>
        </div>
        <div className="grid grid-cols-4 mx-2">
          <div className="flex flex-col">
            <div
              className="h-10 flex items-center hover:cursor-pointer group"
              onClick={async (e) => {
                if (e.shiftKey) {
                  const roll = await rollActions("action", "Heart", "Defy");
                  diceToast(roll, "Defy");
                } else {
                  setRollLeft("Heart-Defy");
                }
              }}
            >
              <TypographyH4 className="group-hover:underline mt-0">
                Defy
              </TypographyH4>
            </div>
            <Separator />
            <div
              className="h-10 flex items-center hover:cursor-pointer group"
              onClick={async (e) => {
                if (e.shiftKey) {
                  const roll = await rollActions("action", "Heart", "Persuade");
                  diceToast(roll, "Persuade");
                } else {
                  setRollLeft("Heart-Persuade");
                }
              }}
            >
              <TypographyH4 className="group-hover:underline mt-0">
                Persuade
              </TypographyH4>
            </div>
          </div>
          <div className="flex flex-col  border-r-[1px]">
            <ActionScore
              key={`defy${new Date().getTime()}`}
              score={attributes.Heart.Defy}
              onChange={(s) => {
                handleUpdateActionScore("Heart", "Defy", s);
              }}
              className="h-10 justify-end mr-2"
            />
            <Separator />
            <ActionScore
              key={`persuade${new Date().getTime()}`}
              score={attributes.Heart.Persuade}
              onChange={(s) => {
                handleUpdateActionScore("Heart", "Persuade", s);
              }}
              className="h-10 justify-end mr-2"
            />
          </div>
          <div className="flex flex-col">
            {selectedBackground?.attributes.Heart.map((a, i) => (
              <>
                <div
                  key={`ah-${i}`}
                  className="h-10 hover:cursor-pointer group"
                  onClick={async (e) => {
                    if (e.shiftKey) {
                      const roll = await rollActions("action", "Heart", a);
                      diceToast(roll, a);
                    } else {
                      setRollRight(`Heart-${a}`);
                    }
                  }}
                >
                  <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
                    {a}
                  </TypographyH4>
                </div>
                <Separator />
              </>
            ))}
            {selectedSkillset?.attributes.Heart.map((a, i) => (
              <>
                <div
                  key={`ah-${i}`}
                  className="h-10 hover:cursor-pointer group"
                  onClick={async (e) => {
                    if (e.shiftKey) {
                      const roll = await rollActions("action", "Heart", a);
                      diceToast(roll, a);
                    } else {
                      setRollRight(`Heart-${a}`);
                    }
                  }}
                >
                  <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
                    {a}
                  </TypographyH4>
                </div>
                <Separator />
              </>
            ))}
            {selectedArchetype?.attributes.Heart.map((a, i) => (
              <div
                key={`ah-${i}`}
                className="h-10 hover:cursor-pointer group"
                onClick={async (e) => {
                  if (e.shiftKey) {
                    const roll = await rollActions("action", "Heart", a);
                    diceToast(roll, a);
                  } else {
                    setRollRight(`Heart-${a}`);
                  }
                }}
              >
                <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
                  {a}
                </TypographyH4>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {selectedBackground?.attributes.Heart.map((k) => (
              <>
                <ActionScore
                  key={`bh-${k}`}
                  score={attributes.Heart[k]}
                  onChange={(s) => {
                    handleUpdateActionScore("Heart", k, s);
                  }}
                  className="h-10 justify-end"
                />
                <Separator />
              </>
            ))}
            {selectedSkillset?.attributes.Heart.map((k) => (
              <>
                <ActionScore
                  key={`th-${k}`}
                  score={attributes.Heart[k]}
                  onChange={(s) => {
                    handleUpdateActionScore("Heart", k, s);
                  }}
                  className="h-10 justify-end"
                />
                <Separator />
              </>
            ))}
            {selectedArchetype?.attributes.Heart.map((k) => (
              <ActionScore
                key={`arh-${k}`}
                score={attributes.Heart[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Heart", k, s);
                }}
                className="h-10 justify-end"
              />
            ))}
          </div>
        </div>
        <div className="border-b-[1px]">
          <div className="pt-8">
            <TypographyH3 className="text-center">
              Instinct <Activity className="inline mb-2" />
            </TypographyH3>
          </div>
        </div>
        <div className="grid grid-cols-4 mx-2">
          <div className="flex flex-col">
            <div
              className="h-10 flex items-center hover:cursor-pointer group"
              onClick={async (e) => {
                if (e.shiftKey) {
                  const roll = await rollActions(
                    "action",
                    "Instinct",
                    "Charge"
                  );
                  diceToast(roll, "Charge");
                } else {
                  setRollLeft("Instinct-Charge");
                }
              }}
            >
              <TypographyH4 className="group-hover:underline mt-0">
                Charge
              </TypographyH4>
            </div>
            <Separator />
            <div
              className="h-10 flex items-center hover:cursor-pointer group"
              onClick={async (e) => {
                if (e.shiftKey) {
                  const roll = await rollActions("action", "Instinct", "Prowl");
                  diceToast(roll, "Prowl");
                } else {
                  setRollLeft("Instinct-Prowl");
                }
              }}
            >
              <TypographyH4 className="group-hover:underline mt-0">
                Prowl
              </TypographyH4>
            </div>
          </div>
          <div className="flex flex-col border-r-[1px]">
            <ActionScore
              key={`charge${new Date().getTime()}`}
              score={attributes.Instinct.Charge}
              onChange={(s) => {
                handleUpdateActionScore("Instinct", "Charge", s);
              }}
              className="h-10 justify-end mr-2"
            />
            <Separator />
            <ActionScore
              key={`prowl${new Date().getTime()}`}
              score={attributes.Instinct.Prowl}
              onChange={(s) => {
                handleUpdateActionScore("Instinct", "Prowl", s);
              }}
              className="h-10 justify-end mr-2"
            />
          </div>
          <div className="flex flex-col">
            {selectedBackground?.attributes.Instinct.map((a, i) => (
              <>
                <div
                  key={`ai-${i}`}
                  className="h-10 hover:cursor-pointer group"
                  onClick={async (e) => {
                    if (e.shiftKey) {
                      const roll = await rollActions("action", "Instinct", a);
                      diceToast(roll, a);
                    } else {
                      setRollRight(`Instinct-${a}`);
                    }
                  }}
                >
                  <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
                    {a}
                  </TypographyH4>
                </div>
                <Separator />
              </>
            ))}
            {selectedSkillset?.attributes.Instinct.map((a, i) => (
              <>
                <div
                  key={`ai-${i}`}
                  className="h-10 hover:cursor-pointer group"
                  onClick={async (e) => {
                    if (e.shiftKey) {
                      const roll = await rollActions("action", "Instinct", a);
                      diceToast(roll, a);
                    } else {
                      setRollRight(`Instinct-${a}`);
                    }
                  }}
                >
                  <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
                    {a}
                  </TypographyH4>
                </div>
                <Separator />
              </>
            ))}
            {selectedArchetype?.attributes.Instinct.map((a, i) => (
              <div
                key={`ai-${i}`}
                className="h-10 hover:cursor-pointer group"
                onClick={async (e) => {
                  if (e.shiftKey) {
                    const roll = await rollActions("action", "Instinct", a);
                    diceToast(roll, a);
                  } else {
                    setRollRight(`Instinct-${a}`);
                  }
                }}
              >
                <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
                  {a}
                </TypographyH4>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {selectedBackground?.attributes.Instinct.map((k) => (
              <>
                <ActionScore
                  key={`bi-${k}`}
                  score={attributes.Instinct[k]}
                  onChange={(s) => {
                    handleUpdateActionScore("Instinct", k, s);
                  }}
                  className="h-10 justify-end"
                />
                <Separator />
              </>
            ))}
            {selectedSkillset?.attributes.Instinct.map((k) => (
              <>
                <ActionScore
                  key={`ti-${k}`}
                  score={attributes.Instinct[k]}
                  onChange={(s) => {
                    handleUpdateActionScore("Instinct", k, s);
                  }}
                  className="h-10 justify-end"
                />
                <Separator />
              </>
            ))}
            {selectedArchetype?.attributes.Instinct.map((k) => (
              <ActionScore
                key={`ari-${k}`}
                score={attributes.Instinct[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Instinct", k, s);
                }}
                className="h-10 justify-end"
              />
            ))}
          </div>
        </div>
        <div className="border-b-[1px]">
          <div className="pt-8">
            <TypographyH3 className="text-center">
              Machina <VenetianMask className="inline mb-1" />
            </TypographyH3>
          </div>
        </div>
        <div className="grid grid-cols-4 mx-2">
          <div className="flex flex-col">
            <div
              className="h-10 flex items-center hover:cursor-pointer group"
              onClick={async (e) => {
                if (e.shiftKey) {
                  const roll = await rollActions(
                    "action",
                    "Machina",
                    "Suggest"
                  );
                  diceToast(roll, "Suggest");
                } else {
                  setRollLeft("Machina-Suggest");
                }
              }}
            >
              <TypographyH4 className="group-hover:underline mt-0">
                Suggest
              </TypographyH4>
            </div>
            <Separator />
            <div
              className="h-10 flex items-center hover:cursor-pointer group"
              onClick={async (e) => {
                if (e.shiftKey) {
                  const roll = await rollActions("action", "Machina", "Survey");
                  diceToast(roll, "Survey");
                } else {
                  setRollLeft("Machina-Survey");
                }
              }}
            >
              <TypographyH4 className="group-hover:underline mt-0">
                Survey
              </TypographyH4>
            </div>
          </div>
          <div className="flex flex-col border-r-[1px]">
            <ActionScore
              key={`suggest${new Date().getTime()}`}
              score={attributes.Machina.Suggest}
              onChange={(s) => {
                handleUpdateActionScore("Machina", "Suggest", s);
              }}
              className="h-10 justify-end mr-2"
            />
            <Separator />
            <ActionScore
              key={`survey${new Date().getTime()}`}
              score={attributes.Machina.Survey}
              onChange={(s) => {
                handleUpdateActionScore("Machina", "Survey", s);
              }}
              className="h-10 justify-end mr-2"
            />
          </div>
          <div className="flex flex-col">
            {selectedBackground?.attributes.Machina.map((a, i) => (
              <>
                <div
                  key={`am-${i}`}
                  className="h-10 hover:cursor-pointer group"
                  onClick={async (e) => {
                    if (e.shiftKey) {
                      const roll = await rollActions("action", "Machina", a);
                      diceToast(roll, a);
                    } else {
                      setRollRight(`Machina-${a}`);
                    }
                  }}
                >
                  <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
                    {a}
                  </TypographyH4>
                </div>
                <Separator />
              </>
            ))}
            {selectedSkillset?.attributes.Machina.map((a, i) => (
              <>
                <div
                  key={`am-${i}`}
                  className="h-10 hover:cursor-pointer group"
                  onClick={async (e) => {
                    if (e.shiftKey) {
                      const roll = await rollActions("action", "Machina", a);
                      diceToast(roll, a);
                    } else {
                      setRollRight(`Machina-${a}`);
                    }
                  }}
                >
                  <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
                    {a}
                  </TypographyH4>
                </div>
                <Separator />
              </>
            ))}
            {selectedArchetype?.attributes.Machina.map((a, i) => (
              <div
                key={`am-${i}`}
                className="h-10 hover:cursor-pointer group"
                onClick={async (e) => {
                  if (e.shiftKey) {
                    const roll = await rollActions("action", "Machina", a);
                    diceToast(roll, a);
                  } else {
                    setRollRight(`Machina-${a}`);
                  }
                }}
              >
                <TypographyH4 className="h-10 ml-2 flex items-center justify-start group-hover:underline mt-0">
                  {a}
                </TypographyH4>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {selectedBackground?.attributes.Machina.map((k) => (
              <>
                <ActionScore
                  key={`bm-${k}`}
                  score={attributes.Machina[k]}
                  onChange={(s) => {
                    handleUpdateActionScore("Machina", k, s);
                  }}
                  className="h-10 justify-end"
                />
                <Separator />
              </>
            ))}
            {selectedSkillset?.attributes.Machina.map((k) => (
              <>
                <ActionScore
                  key={`tm-${k}`}
                  score={attributes.Machina[k]}
                  onChange={(s) => {
                    handleUpdateActionScore("Machina", k, s);
                  }}
                  className="h-10 justify-end"
                />
                <Separator />
              </>
            ))}
            {selectedArchetype?.attributes.Machina.map((k) => (
              <ActionScore
                key={`arm-${k}`}
                score={attributes.Machina[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Machina", k, s);
                }}
                className="h-10 justify-end"
              />
            ))}
          </div>
        </div>
        <TypographyH2 className="text-md text-muted-foreground mt-4">
          Bonds
        </TypographyH2>
        <Bonds />
      </div>
      <div className="flex flex-col my-6 md:mt-4">
        <XPSection />

        <StressSection />

        <HarmSection />

        <RollSection />

        <div className="mt-6">
          <TypographyH3 className="text-sm text-muted-foreground">
            Loadout
          </TypographyH3>
        </div>
        {loadout && (
          <TypographyP className="text-sm text-muted-foreground">
            {loadout.desc}
          </TypographyP>
        )}
        <Separator className="mt-1 mb-2" />
        <div className="flex align-end justify-between">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={loadout?.name === "Discreet"}
              onCheckedChange={() => {
                setLoadout(loadouts[0]);
                setChanges(true);
              }}
            />{" "}
            Discreet
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={loadout?.name === "Conspicuous"}
              onCheckedChange={() => {
                setLoadout(loadouts[1]);
                setChanges(true);
              }}
            />{" "}
            Conspicuous
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={loadout?.name === "Bulky"}
              onCheckedChange={() => {
                setLoadout(loadouts[2]);
                setChanges(true);
              }}
            />{" "}
            Bulky
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={loadout?.name === "Encumbered"}
              onCheckedChange={() => {
                setLoadout(loadouts[3]);
                setChanges(true);
              }}
            />{" "}
            Encumbered
          </div>
        </div>
        <ItemsTable
          className="mt-4"
          items={items}
          loadout={loadout}
          handleChangeItemName={handleUpdateItemName}
          handleChangeItemSlots={handleUpdateItemSlots}
          handleAddItem={() => {
            if (!items || items.length === 0) {
              setItems([
                {
                  name: "",
                  slots: 1,
                },
              ]);
            } else {
              setItems([
                ...items,
                {
                  name: "",
                  slots: 1,
                },
              ]);
            }
            setChanges(true);
          }}
          handleAddBasicItem={(item: Item) => {
            if (!items || items.length === 0) {
              setItems([item]);
            } else {
              setItems([...items, item]);
            }
            setChanges(true);
          }}
          handleRemoveItem={(index: number) => {
            setItems(items.filter((_, i) => i !== index));
            setChanges(true);
          }}
        />
        <TypographyH2 className="text-md text-muted-foreground mt-8">
          Abilities
        </TypographyH2>
        {selectedSkillset && (
          <div>
            <TypographyH3 className="text-sm text-indigo-500 mt-4">
              {selectedSkillset?.name}&apos;s Abilities
            </TypographyH3>
            <div className="ml-2">
              <Abilities
                abilities={selectedSkillset?.abilities?.mission}
                characterAbilities={abilities}
                setCharacterAbilities={setAbilities}
                setChanges={setChanges}
              />
              <Abilities
                abilities={selectedSkillset?.abilities?.downtime}
                characterAbilities={abilities}
                setCharacterAbilities={setAbilities}
                setChanges={setChanges}
              />
            </div>
          </div>
        )}
        {selectedArchetype && (
          <div className="mt-4">
            <TypographyH3 className="text-sm text-amber-500 mt-4">
              {selectedArchetype?.name}&apos;s Abilities
            </TypographyH3>
            <div className="ml-2">
              <Abilities
                abilities={selectedArchetype?.abilities?.mission}
                characterAbilities={abilities}
                setCharacterAbilities={setAbilities}
                setChanges={setChanges}
              />
              <Abilities
                abilities={selectedArchetype?.abilities?.downtime}
                characterAbilities={abilities}
                setCharacterAbilities={setAbilities}
                setChanges={setChanges}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
