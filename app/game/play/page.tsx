"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { TypographyH4 } from "@/components/ui/typography";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  Brain,
  Handshake,
  Wheat,
  Anvil,
  Speech,
  Eye,
  Siren,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { BuildupCheckboxes } from "@/components/buildup-checkboxes";
import itemsData from "@/public/items.json";
import type { Cohort, Item } from "@/types/game";
import ItemInput from "./(components)/item-input";
import AddEquipment from "./(components)/add-equipment";
import AlchemyInput from "./(components)/alchemy-input";
import AddAlchemy from "./(components)/add-alchemy";
import AddGang from "./(components)/add-gang";
import GangInput from "./(components)/gang-input";

export default function Page() {
  const [tab, setTab] = useState("crew");

  const [heat, setHeat] = useState(0);
  const [wanted, setWanted] = useState(0);

  const [food, setFood] = useState(0);
  const [materials, setMaterials] = useState(0);
  const [rep, setRep] = useState(0);
  const [goodwill, setGoodwill] = useState(0);
  const [intel, setIntel] = useState(0);

  const [items, setItems] = useState<Item[]>(itemsData.starting);
  const [alchemy, setAlchemy] = useState<Item[]>([]);
  const [gangs, setGangs] = useState<Cohort[]>([]);

  const handleUpdateItem =
    (itemName: string) => (traits: string[], ticks: number) => {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.name === itemName ? { ...item, traits, ticks } : item
        )
      );
    };

  function handleAddItem(item: Item) {
    const itemExists = items.some(
      (existingItem) => existingItem.name === item.name
    );
    if (itemExists) {
      console.log(`Item with name ${item.name} already exists`);
      return;
    }
    setItems([...items, item]);
  }

  const handleUpdateAlchemy =
    (alchemyName: string) =>
    (traits: string[], ticks: number, uses: number) => {
      setAlchemy((prevAlchemy) =>
        prevAlchemy.map((alchemy) =>
          alchemy.name === alchemyName
            ? { ...alchemy, traits, ticks, uses }
            : alchemy
        )
      );
    };

  function handleAddAlchemy(al: Item) {
    const alchemyExists = alchemy.some(
      (existingItem) => existingItem.name === al.name
    );
    if (alchemyExists) {
      console.log(`Alchemy with name ${al.name} already exists`);
      return;
    }
    setAlchemy([...alchemy, al]);
  }

  const handleUpdateGang =
    (gangName: string) => (traits: string[], ticks: number) => {
      setGangs((prevGangs) =>
        prevGangs.map((gang) =>
          gang.name === gangName ? { ...gang, traits, ticks } : gang
        )
      );
    };

  function handleAddGang(gang: Cohort) {
    const gangExists = gangs.some(
      (existingGang) => existingGang.name === gang.name
    );
    if (gangExists) {
      console.log(`Gang with name ${gang.name} already exists`);
      return;
    }
    setGangs([...gangs, gang]);
  }

  useEffect(() => {
    if (window === undefined) return;
    // read the hash and set the tab
    const hash = window.location.hash;
    if (hash && ["crew", "character"].includes(hash.substring(1))) {
      setTab(hash.substring(1));
    }
  }, []);

  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Play", href: "#" }]} />
      <Tabs defaultValue="crew" value={tab} className="w-full my-3 mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="character"
            onClick={() => {
              setTab("character");
              // save the tab to the hash
              window.location.hash = "character";
            }}
          >
            Character
          </TabsTrigger>
          <TabsTrigger
            value="crew"
            onClick={() => {
              setTab("crew");
              // save the tab to the hash
              window.location.hash = "crew";
            }}
          >
            Crew
          </TabsTrigger>
        </TabsList>
        <TabsContent value="character" className="w-full"></TabsContent>
        <TabsContent value="crew" className="w-full">
          <div className="grid w-full grid-cols-1 md:grid-cols-4">
            <div className="md:col-span-2 px-2">
              <TypographyH4 className="text-center">CREW NAME</TypographyH4>
              <div className="my-2 flex justify-center items-center bg-linear-to-r/oklch from-orange-900 to-rose-900 rounded-lg border-[1px] border-border">
                <span className="mt-1 text-sm text-white">HEAT</span>
              </div>
              <div className="flex justify-between items-center flex-wrap">
                <div className="flex items-center gap-2">
                  <Eye className="text-orange-500" />
                  <BuildupCheckboxes
                    max={9}
                    current={heat}
                    numDisabled={0}
                    onChange={(n) => {
                      setHeat(n);
                    }}
                    clearPosition="end"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Siren className="text-rose-500" />
                  <BuildupCheckboxes
                    max={4}
                    current={wanted}
                    numDisabled={0}
                    onChange={(n) => {
                      setWanted(n);
                    }}
                    clearPosition="end"
                  />
                </div>
              </div>
              <div className="mt-4 mb-2 flex justify-center items-center bg-linear-to-r/oklch from-amber-900 to-teal-900 rounded-lg border-[1px] border-border">
                <span className="mt-1 text-sm text-white">RESOURCES</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Wheat className="text-amber-500" />
                  <BuildupCheckboxes
                    max={4}
                    current={food}
                    numDisabled={3}
                    onChange={(n) => {
                      setFood(n);
                    }}
                    clearPosition="end"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Speech className="text-lime-500" />
                  <BuildupCheckboxes
                    max={4}
                    current={rep}
                    numDisabled={3}
                    onChange={(n) => {
                      setRep(n);
                    }}
                    clearPosition="end"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Anvil className="text-violet-500" />
                  <BuildupCheckboxes
                    max={4}
                    current={materials}
                    numDisabled={3}
                    onChange={(n) => {
                      setMaterials(n);
                    }}
                    clearPosition="end"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Handshake className="text-fuchsia-500" />
                  <BuildupCheckboxes
                    max={4}
                    current={goodwill}
                    numDisabled={3}
                    onChange={(n) => {
                      setGoodwill(n);
                    }}
                    clearPosition="end"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2"></div>
                <div className="flex items-center gap-2">
                  <Brain className="text-teal-500" />
                  <BuildupCheckboxes
                    max={4}
                    current={intel}
                    numDisabled={3}
                    onChange={(n) => {
                      setIntel(n);
                    }}
                    clearPosition="end"
                  />
                </div>
              </div>
              <div className="mt-4 mb-2 flex justify-center items-center bg-linear-to-r/oklch from-neutral-800 to-stone-950 rounded-lg border-[1px] border-border">
                <span className="mt-1 text-sm text-white">EQUIPMENT</span>
              </div>
              {items.map((it, idx) => (
                <ItemInput
                  item={it}
                  updateItem={handleUpdateItem(it.name)}
                  key={idx}
                />
              ))}
              <AddEquipment addItem={handleAddItem} />
              <div className="mt-4 mb-2 flex justify-center items-center bg-linear-to-r/oklch from-violet-950 to-slate-950 rounded-lg border-[1px] border-border">
                <span className="mt-1 text-sm text-white">ALCHEMY</span>
              </div>
              {alchemy.map((al, idx) => (
                <AlchemyInput
                  key={`${al.name}${idx}`}
                  updateAlchemy={handleUpdateAlchemy(al.name)}
                  alchemy={al}
                />
              ))}
              <AddAlchemy addAlchemy={handleAddAlchemy} />
              <div className="mt-4 mb-2 flex justify-center items-center bg-linear-to-r/oklch from-emerald-950 to-gray-950 rounded-lg border-[1px] border-border">
                <span className="mt-1 text-sm text-white">GANGS</span>
              </div>
              {gangs.map((g, idx) => (
                <GangInput
                  key={`${g.name}${idx}`}
                  updateGang={handleUpdateGang(g.name)}
                  gang={g}
                />
              ))}
              <AddGang addGang={handleAddGang} />
            </div>
            <div>
              <div className="">
                <TypographyH4 className="text-orange-700 text-center">
                  Dayshift
                </TypographyH4>
                <Separator className="mt-2 mb-4 bg-orange-700" />
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                  <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                  <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                  <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                  <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                </div>
              </div>
            </div>
            <div>
              <TypographyH4 className="text-indigo-700 text-center">
                Nightshift
              </TypographyH4>
              <Separator className="mt-2 mb-4 bg-indigo-700" />
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
                <div className="relative w-56 h-24 rounded-md border-[1px] border-border"></div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
