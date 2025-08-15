import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Close } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { Currency, ListRestart, Pause, Repeat, X } from "lucide-react";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import wealthLevels from "@/public/arc2/wealth.json";
import { ActionV2 } from "@/types/game";
import { Separator } from "@/components/ui/separator";

export default function Subscriptions() {
  const [open, setOpen] = useState(false);
  const {
    subscriptions,
    wealthP,
    maxWealthPReached,
    favorBankMember,
    setFavorBankMember,
    actions,
    selectedOperative,
    selectedSleeve,
    setMaxWealthPReached,
    setChanges,
  } = useCharacterSheet();

  const lifestyle = wealthLevels.pelts[wealthP];

  const favorBankInterest = favorBankMember ? -1 + wealthP : 0;

  const lifestyleSupports = lifestyle.supportsSubscriptions;

  const subtotal =
    subscriptions +
    favorBankInterest +
    lifestyleSupports +
    (favorBankMember ? 1 : 0);

  const codexActions = actions.filter(
    (a) => a.type === "codex" && a.subscriptionPaid
  );

  const toggleFavorBankSubscription = () => {
    setFavorBankMember(!favorBankMember);
    setChanges(true);
  };

  const normalizeMaxLifestyle = () => {
    setMaxWealthPReached(wealthP);
    setChanges(true);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="font-cyber text-emerald-500"
        >
          {subscriptions >= 0 ? (
            <span className="text-emerald-500">
              <Repeat className="inline-block" /> {subscriptions * -1} ¤P
            </span>
          ) : (
            <span className="text-amber-500">
              <Repeat className="inline-block" /> +{subscriptions * -1} ¤P
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-screen w-[450px] relative h-[500px] overflow-auto">
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
        <div className="mt-4 text-sm p-1 rounded-sm border-muted-foreground border-[1px] text-center">
          Bills / income accrue at the start of each <b>Churn</b> phase.
        </div>
        <div className="font-cyber mt-2 text-sm">Cyberware</div>
        <div className="flex flex-col items-end">
          {codexActions.map((ca, idx) => (
            <CodexActionSubscriptionItem
              key={ca.name + idx}
              codexAction={ca}
              operativeAction={ca.name === selectedOperative?.action}
            />
          ))}
          {favorBankMember && (
            <span className="font-cyber text-sm">
              FavorBank fees <span className="text-emerald-500">1 ¤P</span>
            </span>
          )}
        </div>
        {(selectedSleeve?.subscription || 0) > 0 && (
          <>
            <Separator className="my-1" />
            <div className="font-cyber mt-2 text-sm">Sleeve</div>
            <div className="flex flex-col items-end">
              <span className="font-cyber text-sm">
                {selectedSleeve?.name}{" "}
                <span className="text-emerald-500">
                  {selectedSleeve?.subscription} ¤P
                </span>
              </span>
            </div>
          </>
        )}
        <Separator className="my-1" />
        <span className="font-cyber text-sm">Lifestyle</span>
        <div className="flex flex-col items-end">
          <span className="font-cyber text-sm">
            Living conditions upkeep{" "}
            <span className="text-emerald-500">
              {wealthLevels.pelts[maxWealthPReached].cost} ¤P
            </span>
          </span>
        </div>
        <Separator className="my-1" />
        <div className="flex justify-between font-cyber text-sm">
          <span>Subtotal:</span>
          <span className="text-emerald-500">-{subtotal} ¤P</span>
        </div>
        <span className="flex justify-between items-end font-cyber text-sm">
          <span>
            Expendable income{" "}
            <span className="text-muted-foreground text-xs">
              (only covers subscriptions)
            </span>
            :
          </span>
          <span className="text-primary">+{lifestyleSupports} ¤P</span>
        </span>
        <Separator className="my-1" />
        {favorBankMember && (
          <>
            <span className="flex justify-between font-cyber text-sm">
              FavorBank interest:{" "}
              <span className="text-amber-500">+{wealthP} ¤P</span>
            </span>
            <Separator className="my-1" />
          </>
        )}
        <span className="flex justify-between items-end font-cyber">
          <b>Grand Total:</b>
          {subscriptions >= 0 ? (
            <span className="text-emerald-500">{subscriptions * -1} ¤P</span>
          ) : (
            <span className="text-amber-500">+{subscriptions * -1} ¤P</span>
          )}
        </span>
        <div className="flex flex-col gap-2">
          <Button
            className="mt-8"
            size="sm"
            variant="outline"
            onClick={toggleFavorBankSubscription}
          >
            {favorBankMember ? (
              <span>
                <Pause className="inline-block" /> pause{" "}
                <span className="font-cyber">FavorBank</span> subscription
              </span>
            ) : (
              <span>
                <Currency className="inline-block" /> resume{" "}
                <span className="font-cyber">FavorBank</span> subscription{" "}
              </span>
            )}
          </Button>
          <Button size="sm" variant="outline" onClick={normalizeMaxLifestyle}>
            <ListRestart /> reset living conditions to current lifestyle
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function CodexActionSubscriptionItem({
  codexAction,
  operativeAction,
}: {
  codexAction: ActionV2;
  operativeAction: boolean;
}) {
  const totalScore = codexAction.score[0] + codexAction.score[1];
  const subsidizedByRoot =
    (codexAction.overCorpClassification !== "forbidden" && totalScore <= 1) ||
    (operativeAction && totalScore >= 2);

  if (subsidizedByRoot) {
    return (
      <span className="font-cyber text-sm text-muted-foreground">
        <span className="text-xs text-primary">(ROOT subsidized)</span>{" "}
        <span className="line-through">
          Skill Codex ( {codexAction.name} ) {codexAction.subscription} ¤P
        </span>
      </span>
    );
  }

  return (
    <span className="font-cyber text-sm">
      Skill Codex ( {codexAction.name} ){" "}
      <span className="text-emerald-500">{codexAction.subscription} ¤P</span>
    </span>
  );
}
