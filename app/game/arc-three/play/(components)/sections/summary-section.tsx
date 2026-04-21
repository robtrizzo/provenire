import { ClearableMultiSelect } from "@/components/character-sheet/clearable-multiselect";
import ClearableSelect from "@/components/character-sheet/clearable-select";
import Portrait from "@/components/character-sheet/portrait";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  ALL_ALDAMS,
  ALL_ARCHETYPES,
  ALL_BACKGROUNDS,
  ALL_DONUMS,
  ALL_FIGHTING_STYLES,
  ALL_HERITAGES,
  ALL_INTEGRATIONS,
  ALL_REMEMBRANCES,
  ALL_SKILLSETS,
  ALL_TRANSFORMATIONS,
  useFields,
} from "@/contexts/arc3CharacterSheetContext";
import Controls from "./controls-section";

export default function SummarySection() {
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
    },
    set,
  ] = useFields({
    debounceMs: 300,
  });

  return (
    <div className="flex flex-col md:flex-row items-start gap-1">
      <Portrait
        className="mb-1 w-[156px] h-[156px]"
        portrait={portrait}
        name={name}
        onPortraitChange={(newPortrait) => set({ portrait: newPortrait })}
        onChanges={() => {}}
      />
      <div className="w-full">
        <div className="flex gap-1 mb-1">
          <Input
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              set({ name: e.target.value });
            }}
            className="grow"
          />
          <Controls />
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
              set({
                aldams: ALL_ALDAMS.filter((a) => names.includes(a.name)),
              })
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
              set({
                donums: ALL_DONUMS.filter((d) => names.includes(d.name)),
              })
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
            onSelect={(r) => set({ integration: r })}
            onClear={() => set({ integration: undefined })}
          />
        </div>
      </div>
    </div>
  );
}
