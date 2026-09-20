"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { ChevronDown, ChevronRight, Plus, RefreshCw, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  useNpcSummaryCards,
  useActivePcs,
} from "@/contexts/arc3CrewSheetContext";
import { useCharacterSheet } from "@/contexts/arc3CharacterSheetContext";
import PcSummaryCard from "./pc-summary-card";
import NpcSummaryCard from "./npc-summary-card";
import NpcCardEditor from "./npc-card-editor";
import { keepPreviousData } from "@tanstack/react-query";
import { useCrewSheet } from "@/contexts/arc3CrewSheetContext";

export default function PartyOverview() {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "admin";
  const [addingNpc, setAddingNpc] = useState(false);
  const [showInactiveNpcs, setShowInactiveNpcs] = useState(false);
  const { isLoading: crewLoading } = useCrewSheet();

  const { npcSummaryCards, addNpcCard, updateNpcCard, removeNpcCard } =
    useNpcSummaryCards();
  const { activePcIds, addActivePc, removeActivePc } = useActivePcs();
  const { state: charState } = useCharacterSheet();

  const {
    data: characters,
    isPending,
    refetch,
    dataUpdatedAt,
  } = useQuery({
    queryKey: ["arc3-party-pcs"],
    queryFn: async () => {
      const res = await fetch("/api/characters/arc3");
      if (!res.ok) throw new Error("Failed to load characters");
      const json = await res.json();
      return json.characters ?? [];
    },
    refetchInterval: 15_000,
    placeholderData: keepPreviousData,
    staleTime: 14_000,
  });

  const allChars: any[] = characters ?? [];
  const activeChars = allChars.filter((c) => activePcIds.includes(c.id));
  const inactiveChars = allChars.filter((c) => !activePcIds.includes(c.id));

  const activeNpcs = npcSummaryCards.filter((c) => c.active);
  const inactiveNpcs = npcSummaryCards.filter((c) => !c.active);

  const myId = charState.id;
  const isInParty = activePcIds.includes(myId);
  const hasCharacter = !!charState.name;

  const lastUpdated = dataUpdatedAt
    ? new Date(dataUpdatedAt).toLocaleTimeString()
    : null;

  return (
    <div className="mt-4 space-y-6">
      {/* ── PCs ───────────────────────────────────────────── */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <TypographyH2 className="text-md text-muted-foreground">
            Player Characters
          </TypographyH2>
          <div className="flex items-center gap-2">
            {hasCharacter && (
              <Button
                size="sm"
                variant={isInParty ? "secondary" : "outline"}
                onClick={() =>
                  isInParty ? removeActivePc(myId) : addActivePc(myId)
                }
              >
                {isInParty ? "Leave Party" : "Join Party"}
              </Button>
            )}
            {isAdmin && inactiveChars.length > 0 && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-1" />
                    Add PC
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-52 p-2">
                  <div className="flex flex-col gap-1">
                    {inactiveChars.map((c: any) => (
                      <Button
                        key={c.id}
                        variant="ghost"
                        size="sm"
                        className="justify-start"
                        onClick={() => addActivePc(c.id)}
                      >
                        {c.name || "Unnamed"}
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            )}
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7"
              onClick={() => refetch()}
              title="Refresh"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {lastUpdated && (
          <p className="text-xs text-muted-foreground mb-2">
            Last updated {lastUpdated} · auto-refreshes every 15s
          </p>
        )}
        {isPending ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg border h-40 animate-pulse bg-muted"
              />
            ))}
          </div>
        ) : activeChars.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {activeChars.map((char: any) => (
              <div key={char.id} className="relative">
                {isAdmin && (
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-0.5 right-0.5 h-6 w-6 z-10 text-destructive hover:text-destructive"
                    onClick={() => removeActivePc(char.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
                <PcSummaryCard char={char} />
              </div>
            ))}
          </div>
        ) : !crewLoading ? (
          <p className="text-sm text-muted-foreground">
            No players have joined the party yet.
          </p>
        ) : null}
      </section>

      {/* ── NPCs ──────────────────────────────────────────── */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <TypographyH2 className="text-md text-muted-foreground">
            NPCs
          </TypographyH2>
          {isAdmin && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => setAddingNpc(true)}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add NPC
            </Button>
          )}
        </div>

        {activeNpcs.length === 0 && !crewLoading && (
          <p className="text-sm text-muted-foreground">No active NPCs.</p>
        )}
        {activeNpcs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {activeNpcs.map((card) => (
              <NpcSummaryCard
                key={card.id}
                card={card}
                isAdmin={isAdmin}
                onUpdate={(changes) => updateNpcCard(card.id, changes)}
                onRemove={() => removeNpcCard(card.id)}
                onToggleActive={() =>
                  updateNpcCard(card.id, { active: !card.active })
                }
              />
            ))}
          </div>
        )}

        {/* Inactive NPCs — admin only */}
        {isAdmin && inactiveNpcs.length > 0 && (
          <div className="mt-4">
            <button
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setShowInactiveNpcs((v) => !v)}
            >
              {showInactiveNpcs ? (
                <ChevronDown className="h-3 w-3" />
              ) : (
                <ChevronRight className="h-3 w-3" />
              )}
              Inactive NPCs ({inactiveNpcs.length})
            </button>
            {showInactiveNpcs && (
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 opacity-60">
                {inactiveNpcs.map((card) => (
                  <NpcSummaryCard
                    key={card.id}
                    card={card}
                    isAdmin={isAdmin}
                    onUpdate={(changes) => updateNpcCard(card.id, changes)}
                    onRemove={() => removeNpcCard(card.id)}
                    onToggleActive={() =>
                      updateNpcCard(card.id, { active: !card.active })
                    }
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      <NpcCardEditor
        open={addingNpc}
        onOpenChange={setAddingNpc}
        onSave={addNpcCard}
      />
    </div>
  );
}
