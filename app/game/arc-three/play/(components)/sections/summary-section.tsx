"use client";

import { ReactNode, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ClearableMultiSelect } from "@/components/character-sheet/clearable-multiselect";
import ClearableSelect from "@/components/character-sheet/clearable-select";
import Portrait from "@/components/character-sheet/portrait";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ALL_ALDAMS,
  ALL_ARCHETYPES,
  ALL_BACKGROUNDS,
  ALL_DONUMS,
  ALL_FIGHTING_STYLES,
  ALL_HERITAGES,
  ALL_INTEGRATIONS,
  ALL_REMEMBRANCES,
  ALL_RESPONSIBILITIES,
  ALL_ROLES,
  ALL_SKILLSETS,
  ALL_TRANSFORMATIONS,
  useFields,
} from "@/contexts/arc3CharacterSheetContext";
import Controls from "./controls-section";

export default function SummarySection() {
  const [compact, setCompact] = useState(true);

  const [
    {
      heritage,
      archetype,
      background,
      skillset,
      skillsetSubclass,
      fightingStyles,
      aldams,
      transformations,
      donums,
      name,
      portrait,
      remembrance,
      integration,
      responsibility,
      role,
      id,
    },
    set,
  ] = useFields({ debounceMs: 300 });

  const hasIdentity =
    heritage || background || archetype || skillset || skillsetSubclass;
  const hasPowers =
    fightingStyles.length > 0 ||
    aldams.length > 0 ||
    transformations.length > 0 ||
    donums.length > 0;
  const hasExtras = remembrance || integration || responsibility || role;

  if (compact) {
    return (
      <div className="mt-1.5 flex gap-4">
        <div className="flex flex-col items-center">
          <Portrait
            className="mb-1 w-[108px] h-[108px]"
            portrait={portrait}
            name={name || id}
            onPortraitChange={(newPortrait) => set({ portrait: newPortrait })}
            onChanges={() => {}}
          />
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <u className="font-bold text-lg mr-1 decoration-muted-foreground">
            {name || (
              <span className="text-muted-foreground italic">Unnamed</span>
            )}
          </u>
          {hasIdentity && (
            <div className="flex gap-1.5 flex-wrap">
              {heritage && (
                <BadgeTooltip
                  name={heritage.name}
                  typeDecorator={<span className="text-sky-500">Heritage</span>}
                  shortDescription={heritage.shortDescription}
                  className="border-sky-500/40 bg-sky-500/10 text-sky-500 font-bold"
                />
              )}
              {background && (
                <BadgeTooltip
                  name={background.name}
                  typeDecorator={
                    <span className="text-red-500">Background</span>
                  }
                  shortDescription={background.shortDescription}
                  className="border-red-500/40 bg-red-500/10 text-red-500 font-bold"
                />
              )}
              {archetype && (
                <BadgeTooltip
                  name={archetype.name}
                  typeDecorator={
                    <span className="text-amber-500">Archetype</span>
                  }
                  shortDescription={archetype.shortDescription}
                  className="border-amber-500/40 bg-amber-500/10 text-amber-500 font-bold"
                />
              )}
              {skillset && (
                <BadgeTooltip
                  name={skillset.name}
                  typeDecorator={
                    <span className="text-violet-500">Skillset</span>
                  }
                  shortDescription={skillset.shortDescription}
                  className="border-violet-500/40 bg-violet-500/10 text-violet-500 font-bold"
                />
              )}
              {skillsetSubclass && (
                <BadgeTooltip
                  name={skillsetSubclass.name}
                  typeDecorator={
                    <span className="text-violet-500">Subclass</span>
                  }
                  shortDescription={skillsetSubclass.shortDescription}
                  className="border-violet-500/40 bg-violet-500/10 text-violet-500 font-bold"
                />
              )}
            </div>
          )}
          {hasPowers && (
            <div className="flex gap-1.5 flex-wrap">
              {fightingStyles.length > 0 && (
                <CollapsedBadgeTooltip
                  items={fightingStyles}
                  label="Fighting Style"
                  pluralLabel="Fighting Styles"
                  className="border-emerald-500/40 bg-emerald-500/10 text-emerald-500 font-bold"
                  decoratorClassName="text-emerald-500"
                />
              )}
              {aldams.length > 0 && (
                <CollapsedBadgeTooltip
                  items={aldams}
                  label="Aldam"
                  className="border-rose-500/40 bg-rose-500/10 text-rose-500 font-bold"
                  decoratorClassName="text-rose-500"
                />
              )}
              {transformations.length > 0 && (
                <CollapsedBadgeTooltip
                  items={transformations}
                  label="Transformation"
                  className="border-orange-500/40 bg-orange-500/10 text-orange-500 font-bold"
                  decoratorClassName="text-orange-500"
                />
              )}
              {donums.length > 0 && (
                <CollapsedBadgeTooltip
                  items={donums}
                  label="Donum"
                  className="border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-500 font-bold"
                  decoratorClassName="text-fuchsia-500"
                />
              )}
            </div>
          )}
          {hasExtras && (
            <div className="flex gap-1.5 flex-wrap">
              {remembrance && (
                <BadgeTooltip
                  name={remembrance.name}
                  typeDecorator={
                    <span className="text-indigo-500">Remembrance</span>
                  }
                  shortDescription={remembrance.shortDescription}
                  className="border-indigo-500/40 bg-indigo-500/10 text-indigo-500 font-bold"
                />
              )}
              {integration && (
                <BadgeTooltip
                  name={integration.name}
                  typeDecorator={
                    <span className="text-cyan-500">Integration</span>
                  }
                  shortDescription={integration.shortDescription}
                  className="border-cyan-500/40 bg-cyan-500/10 text-cyan-500 font-bold"
                />
              )}
              {responsibility && (
                <BadgeTooltip
                  name={responsibility.name}
                  typeDecorator={
                    <span className="text-yellow-500">Responsibility</span>
                  }
                  shortDescription={responsibility.shortDescription}
                  className="border-yellow-500/40 bg-yellow-500/10 text-yellow-500 font-bold"
                />
              )}
              {role && (
                <BadgeTooltip
                  name={role.name}
                  typeDecorator={<span className="text-blue-500">Role</span>}
                  shortDescription={role.shortDescription}
                  className="border-blue-500/40 bg-blue-500/10 text-blue-500 font-bold"
                />
              )}
            </div>
          )}
        </div>
        <div className="ml-auto shrink-0">
          <Controls
            isCompact={compact}
            onToggleView={() => setCompact(false)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-start gap-1">
      <Portrait
        className="mb-1 w-[156px] h-[156px]"
        portrait={portrait}
        name={name || id}
        onPortraitChange={(newPortrait) => set({ portrait: newPortrait })}
        onChanges={() => {}}
      />
      <div className="w-full">
        <div className="flex gap-1 mb-1">
          <Input
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => set({ name: e.target.value })}
            className="grow"
          />
          <Controls isCompact={compact} onToggleView={() => setCompact(true)} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-1 w-full mb-1">
          <ClearableSelect
            items={ALL_HERITAGES}
            value={heritage?.name}
            placeholder="Select a heritage"
            triggerClassName="font-bold text-sky-500"
            showDescription
            onSelect={(b) => set({ heritage: b })}
            onClear={() => set({ heritage: undefined })}
          />
          <ClearableSelect
            items={ALL_BACKGROUNDS}
            value={background?.name}
            placeholder="Select a background"
            triggerClassName="font-bold text-red-500"
            showDescription
            onSelect={(b) => set({ background: b })}
            onClear={() => set({ background: undefined })}
          />
          <ClearableSelect
            items={ALL_ARCHETYPES}
            value={archetype?.name}
            placeholder="Select an archetype"
            triggerClassName="font-bold text-amber-500"
            showDescription
            onSelect={(a) => set({ archetype: a })}
            onClear={() => set({ archetype: undefined })}
          />
          <ClearableSelect
            items={ALL_SKILLSETS}
            value={skillset?.name}
            placeholder="Select a skillset"
            triggerClassName="font-bold text-violet-500"
            showDescription
            onSelect={(s) =>
              set({
                skillset: s,
                skillsetSubclass:
                  s.name === skillset?.name ? skillsetSubclass : undefined,
              })
            }
            onClear={() =>
              set({ skillset: undefined, skillsetSubclass: undefined })
            }
          />
          {skillset?.subclasses && skillset.subclasses.length > 0 && (
            <ClearableSelect
              items={skillset.subclasses}
              value={skillsetSubclass?.name}
              placeholder="Select a subclass"
              triggerClassName="font-bold text-violet-500"
              showDescription
              onSelect={(sc) => set({ skillsetSubclass: sc })}
              onClear={() => set({ skillsetSubclass: undefined })}
            />
          )}
          <ClearableMultiSelect
            items={ALL_FIGHTING_STYLES}
            values={fightingStyles.map((f) => f.name)}
            placeholder={
              <b className="text-emerald-500">Select fighting styles</b>
            }
            triggerClassName="font-bold text-emerald-500 w-full bg-background!"
            badgeLabel={(f) => <b className="text-emerald-500">{f.name}</b>}
            onValuesChange={(names) =>
              set({
                fightingStyles: ALL_FIGHTING_STYLES.filter((f) =>
                  names.includes(f.name),
                ),
              })
            }
            onClear={() => set({ fightingStyles: [] })}
            showDescription
          />
          <ClearableMultiSelect
            items={ALL_ALDAMS}
            values={aldams.map((a) => a.name)}
            placeholder={<b className="text-rose-500">Select Aldams</b>}
            triggerClassName="font-bold text-rose-500 w-full bg-background!"
            badgeLabel={(a) => <b className="text-rose-500">{a.name}</b>}
            onValuesChange={(names) =>
              set({ aldams: ALL_ALDAMS.filter((a) => names.includes(a.name)) })
            }
            onClear={() => set({ aldams: [] })}
          />
          <ClearableMultiSelect
            items={ALL_TRANSFORMATIONS}
            values={transformations.map((t) => t.name)}
            placeholder={
              <b className="text-orange-500">Select transformations</b>
            }
            triggerClassName="font-bold text-orange-500 w-full bg-background!"
            badgeLabel={(t) => <b className="text-orange-500">{t.name}</b>}
            onValuesChange={(names) =>
              set({
                transformations: ALL_TRANSFORMATIONS.filter((t) =>
                  names.includes(t.name),
                ),
              })
            }
            onClear={() => set({ transformations: [] })}
            showDescription
          />
          <ClearableMultiSelect
            items={ALL_DONUMS}
            values={donums.map((d) => d.name)}
            placeholder={<b className="text-fuchsia-500">Select Donums</b>}
            triggerClassName="font-bold text-fuchsia-500 w-full bg-background!"
            badgeLabel={(d) => <b className="text-fuchsia-500">{d.name}</b>}
            onValuesChange={(names) =>
              set({ donums: ALL_DONUMS.filter((d) => names.includes(d.name)) })
            }
            onClear={() => set({ donums: [] })}
            showDescription
          />
          <ClearableSelect
            items={ALL_REMEMBRANCES}
            value={remembrance?.name}
            placeholder="Select a remembrance"
            triggerClassName="font-bold text-indigo-500"
            showDescription
            onSelect={(r) => set({ remembrance: r })}
            onClear={() => set({ remembrance: undefined })}
          />
          <ClearableSelect
            items={ALL_INTEGRATIONS}
            value={integration?.name}
            placeholder="Select an integration"
            triggerClassName="font-bold text-cyan-500"
            showDescription
            onSelect={(i) => set({ integration: i })}
            onClear={() => set({ integration: undefined })}
          />
          <ClearableSelect
            items={ALL_RESPONSIBILITIES}
            value={responsibility?.name}
            placeholder="Select a responsibility"
            triggerClassName="font-bold text-yellow-500"
            showDescription
            onSelect={(r) => set({ responsibility: r })}
            onClear={() => set({ responsibility: undefined })}
          />
          <ClearableSelect
            items={ALL_ROLES}
            value={role?.name}
            placeholder="Select a role"
            triggerClassName="font-bold text-blue-500"
            showDescription
            onSelect={(r) => set({ role: r })}
            onClear={() => set({ role: undefined })}
          />
        </div>
      </div>
    </div>
  );
}

function BadgeTooltip({
  name,
  typeDecorator,
  shortDescription,
  className,
}: {
  name: string;
  typeDecorator?: ReactNode;
  shortDescription?: string;
  className: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="outline" className={className}>
            {name}
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="max-w-56 border shadow-md">
          <p className="font-bold">
            {name}
            {typeDecorator && (
              <span className="font-normal"> ({typeDecorator})</span>
            )}
          </p>
          {shortDescription && (
            <p className="text-muted-foreground">{shortDescription}</p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function CollapsedBadgeTooltip({
  items,
  label,
  pluralLabel,
  className,
  decoratorClassName,
}: {
  items: Array<{ name: string; shortDescription?: string }>;
  label: string;
  pluralLabel?: string;
  className: string;
  decoratorClassName: string;
}) {
  const displayName =
    items.length === 1
      ? items[0].name
      : `${pluralLabel ?? label + "s"} (${items.length})`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="outline" className={className}>
            {displayName}
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="max-w-56 border shadow-md">
          {items.map((item, i) => (
            <div key={item.name} className={i > 0 ? "mt-1.5" : ""}>
              <p className="font-bold">
                {item.name}
                <span className="font-normal">
                  {" "}
                  (<span className={decoratorClassName}>{label}</span>)
                </span>
              </p>
              {item.shortDescription && (
                <p className="text-muted-foreground">{item.shortDescription}</p>
              )}
            </div>
          ))}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
