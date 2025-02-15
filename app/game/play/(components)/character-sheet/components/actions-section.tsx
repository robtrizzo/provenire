import { Separator } from "@/components/ui/separator";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
} from "@/components/ui/typography";
import { ActionScore } from "@/components/action-score";
import { VenetianMask, Flame, Activity } from "lucide-react";
import { useCharacterSheet } from "@/contexts/characterSheetContext";
import { useRoll } from "@/contexts/rollContext";
import ActionsSummaryPopover from "./actions-summary-popover";

export default function ActionsSection() {
  const {
    selectedArchetype,
    selectedSkillset,
    selectedBackground,
    selectedFightingStyle,
    attributes,
    handleUpdateActionScore,
  } = useCharacterSheet();

  const { diceToast, rollActions, setRollLeft, setRollRight } = useRoll();

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground mt-8 flex items-end justify-between">
        Actions <ActionsSummaryPopover />
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
          <Separator />
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
          <Separator />
        </div>
        <div className="flex flex-col">
          {selectedBackground?.attributes.Heart.map((a, i) => (
            <>
              <div
                key={`bh-${i}`}
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
              <Separator key={`bh-sep-${i}`} />
            </>
          ))}
          {selectedSkillset?.attributes.Heart.map((a, i) => (
            <>
              <div
                key={`sh-${i}`}
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
              <Separator key={`sh-sep-${i}`} />
            </>
          ))}
          {selectedArchetype?.attributes.Heart.map((a, i) => (
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
              <Separator key={`ah-sep-${i}`} />
            </>
          ))}
          {selectedFightingStyle?.attributes.Heart.map((a, i) => (
            <>
              <div
                key={`fh-${i}`}
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
              <Separator key={`fh-sep-${i}`} />
            </>
          ))}
        </div>
        <div className="flex flex-col">
          {selectedBackground?.attributes.Heart.map((k, i) => (
            <>
              <ActionScore
                key={`bhs-${i}`}
                score={attributes.Heart[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Heart", k, s);
                }}
                className="h-10 justify-end"
              />
              <Separator key={`bhs-sep-${i}`} />
            </>
          ))}
          {selectedSkillset?.attributes.Heart.map((k, i) => (
            <>
              <ActionScore
                key={`shs-${i}`}
                score={attributes.Heart[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Heart", k, s);
                }}
                className="h-10 justify-end"
              />
              <Separator key={`shs-sep-${i}`} />
            </>
          ))}
          {selectedArchetype?.attributes.Heart.map((k, i) => (
            <>
              <ActionScore
                key={`ahs-${i}`}
                score={attributes.Heart[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Heart", k, s);
                }}
                className="h-10 justify-end"
              />
              <Separator key={`ahs-sep-${i}`} />
            </>
          ))}
          {selectedFightingStyle?.attributes.Heart.map((k, i) => (
            <>
              <ActionScore
                key={`fhs-${i}`}
                score={attributes.Heart[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Heart", k, s);
                }}
                className="h-10 justify-end"
              />
              <Separator key={`fhs-sep-${i}`} />
            </>
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
                const roll = await rollActions("action", "Instinct", "Charge");
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
          <Separator />
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
          <Separator />
        </div>
        <div className="flex flex-col">
          {selectedBackground?.attributes.Instinct.map((a, i) => (
            <>
              <div
                key={`bi-${i}`}
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
              <Separator key={`bi-sep-${i}`} />
            </>
          ))}
          {selectedSkillset?.attributes.Instinct.map((a, i) => (
            <>
              <div
                key={`si-${i}`}
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
              <Separator key={`si-sep-${i}`} />
            </>
          ))}
          {selectedArchetype?.attributes.Instinct.map((a, i) => (
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
              <Separator key={`ai-sep-${i}`} />
            </>
          ))}
          {selectedFightingStyle?.attributes.Instinct.map((a, i) => (
            <>
              <div
                key={`fi-${i}`}
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
              <Separator key={`fi-sep-${i}`} />
            </>
          ))}
        </div>
        <div className="flex flex-col">
          {selectedBackground?.attributes.Instinct.map((k, i) => (
            <>
              <ActionScore
                key={`bis-${i}`}
                score={attributes.Instinct[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Instinct", k, s);
                }}
                className="h-10 justify-end"
              />
              <Separator key={`bis-sep-${i}`} />
            </>
          ))}
          {selectedSkillset?.attributes.Instinct.map((k, i) => (
            <>
              <ActionScore
                key={`sis-${i}`}
                score={attributes.Instinct[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Instinct", k, s);
                }}
                className="h-10 justify-end"
              />
              <Separator key={`sis-sep-${i}`} />
            </>
          ))}
          {selectedArchetype?.attributes.Instinct.map((k, i) => (
            <>
              <ActionScore
                key={`ais-${i}`}
                score={attributes.Instinct[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Instinct", k, s);
                }}
                className="h-10 justify-end"
              />
              <Separator key={`ais-sep-${i}`} />
            </>
          ))}
          {selectedFightingStyle?.attributes.Instinct.map((k, i) => (
            <>
              <ActionScore
                key={`fis-${i}`}
                score={attributes.Instinct[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Instinct", k, s);
                }}
                className="h-10 justify-end"
              />
              <Separator key={`fis-sep-${i}`} />
            </>
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
                const roll = await rollActions("action", "Machina", "Suggest");
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
          <Separator />
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
          <Separator />
        </div>
        <div className="flex flex-col">
          {selectedBackground?.attributes.Machina.map((a, i) => (
            <>
              <div
                key={`bm-${i}`}
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
              <Separator key={`bm-sep-${i}`} />
            </>
          ))}
          {selectedSkillset?.attributes.Machina.map((a, i) => (
            <>
              <div
                key={`sm-${i}`}
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
              <Separator key={`sm-sep-${i}`} />
            </>
          ))}
          {selectedArchetype?.attributes.Machina.map((a, i) => (
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
              <Separator key={`am-sep-${i}`} />
            </>
          ))}
          {selectedFightingStyle?.attributes.Machina.map((a, i) => (
            <>
              <div
                key={`fm-${i}`}
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
              <Separator key={`fm-sep-${i}`} />
            </>
          ))}
        </div>
        <div className="flex flex-col">
          {selectedBackground?.attributes.Machina.map((k, i) => (
            <>
              <ActionScore
                key={`bms-${i}`}
                score={attributes.Machina[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Machina", k, s);
                }}
                className="h-10 justify-end"
              />
              <Separator key={`bms-sep-${i}`} />
            </>
          ))}
          {selectedSkillset?.attributes.Machina.map((k, i) => (
            <>
              <ActionScore
                key={`sms-${i}`}
                score={attributes.Machina[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Machina", k, s);
                }}
                className="h-10 justify-end"
              />
              <Separator key={`sms-sep-${i}`} />
            </>
          ))}
          {selectedArchetype?.attributes.Machina.map((k, i) => (
            <>
              <ActionScore
                key={`ams-${i}`}
                score={attributes.Machina[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Machina", k, s);
                }}
                className="h-10 justify-end"
              />
              <Separator key={`ams-sep-${i}`} />
            </>
          ))}
          {selectedFightingStyle?.attributes.Machina.map((k, i) => (
            <>
              <ActionScore
                key={`fms-${i}`}
                score={attributes.Machina[k]}
                onChange={(s) => {
                  handleUpdateActionScore("Machina", k, s);
                }}
                className="h-10 justify-end"
              />
              <Separator key={`fms-sep-${i}`} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
