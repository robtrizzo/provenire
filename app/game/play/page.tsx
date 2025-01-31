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
import Image from "next/image";
import ExpertInput from "./(components)/expert-input";
import AddExpert from "./(components)/add-expert";

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
  const [experts, setExperts] = useState<Cohort[]>([]);

  const [schematics, setSchematics] = useState<Item[]>([]);
  const [formulae, setFormulae] = useState<Item[]>([]);
  const [rGangs, setRGangs] = useState<Cohort[]>([]);
  const [rExperts, setRExperts] = useState<Cohort[]>([]);

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
    (traits: string[], uses: number, ticks: number) => {
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

  const handleUpdateExpert = (expertName: string) => (ticks: number) => {
    setExperts((prevExperts) =>
      prevExperts?.map((expert) =>
        expert.name === expertName ? { ...expert, ticks } : expert
      )
    );
  };

  function handleAddExpert(expert: Cohort) {
    const expertExists = experts?.some(
      (existingExpert) => existingExpert.name === expert.name
    );
    if (expertExists) {
      console.log(`Expert with name ${expert.name} already exists`);
      return;
    }
    setExperts([...experts, expert]);
  }

  const handleUpdateSchematic =
    (schematicName: string) => (traits: string[], ticks: number) => {
      setSchematics((prevSchematics) =>
        prevSchematics.map((schematic) =>
          schematic.name === schematicName ? { ...schematic, ticks } : schematic
        )
      );
    };

  const handleRemoveSchematic = (schematicName: string) => () => {
    setSchematics(schematics.filter((s) => s.name !== schematicName));
  };

  function handleAddSchematic(schematic: Item) {
    const schematicExists = schematics.some(
      (existingItem) => existingItem.name === schematic.name
    );
    if (schematicExists) {
      console.log(`Schematic with name ${schematic.name} already exists`);
      return;
    }
    setSchematics([...schematics, schematic]);
  }

  const handleUpdateFormulae =
    (formulaeName: string) =>
    (traits: string[], uses: number, ticks: number) => {
      setFormulae((prevFormulae) =>
        prevFormulae.map((formulae) =>
          formulae.name === formulaeName ? { ...formulae, ticks } : formulae
        )
      );
    };

  function handleAddFormula(f: Item) {
    const formulaExists = formulae.some(
      (existingFormula) => existingFormula.name === f.name
    );
    if (formulaExists) {
      console.log(`Formula with name ${f.name} already exists`);
      return;
    }
    setFormulae([...formulae, f]);
  }

  const handleRemoveFormula = (formulaName: string) => () => {
    setFormulae(formulae.filter((f) => f.name !== formulaName));
  };

  useEffect(() => {
    if (window === undefined) return;
    // read the hash and set the tab
    const hash = window.location.hash;
    if (
      hash &&
      ["crew", "character", "dramatis-personae"].includes(hash.substring(1))
    ) {
      setTab(hash.substring(1));
    }
  }, []);

  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Play", href: "#" }]} />
      <Tabs defaultValue="crew" value={tab} className="w-full my-3 mx-auto">
        <TabsList className="grid w-full grid-cols-3">
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
          <TabsTrigger
            value="dramatis-personae"
            onClick={() => {
              setTab("dramatis-personae");
              // save the tab to the hash
              window.location.hash = "dramatis-personae";
            }}
          >
            Dramatis Personae
          </TabsTrigger>
        </TabsList>
        <TabsContent value="character" className="w-full"></TabsContent>
        <TabsContent value="crew" className="w-full">
          <TypographyH4 className="text-center">CREW NAME</TypographyH4>
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            <div className="px-2">
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
              <div className="mt-4 mb-2 flex justify-center items-center bg-linear-to-r/oklch from-pink-950 to-blue-950 rounded-lg border-[1px] border-border">
                <span className="mt-1 text-sm text-white">ASSETS</span>
              </div>
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">Equipment</b>
                <Separator />
              </div>
              {items.map((it, idx) => (
                <ItemInput
                  item={it}
                  updateItem={handleUpdateItem(it.name)}
                  key={idx}
                />
              ))}
              <div className="flex justify-center mt-1">
                <AddEquipment addItem={handleAddItem} />
              </div>
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">Alchemy</b>
                <Separator />
              </div>
              {alchemy.map((al, idx) => (
                <AlchemyInput
                  key={`${al.name}${idx}`}
                  updateAlchemy={handleUpdateAlchemy(al.name)}
                  alchemy={al}
                />
              ))}
              <div className="flex justify-center mt-1">
                <AddAlchemy addAlchemy={handleAddAlchemy} />
              </div>
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">Gangs</b>
                <Separator />
              </div>
              {gangs.map((g, idx) => (
                <GangInput
                  key={`${g.name}${idx}`}
                  updateGang={handleUpdateGang(g.name)}
                  gang={g}
                />
              ))}
              <div className="flex justify-center mt-1">
                <AddGang addGang={handleAddGang} />
              </div>
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">Experts</b>
                <Separator />
              </div>
              {experts.map((e, idx) => (
                <ExpertInput
                  key={`${e.name}${idx}`}
                  updateExpert={handleUpdateExpert(e.name)}
                  expert={e}
                />
              ))}
              <div className="flex justify-center mt-1">
                <AddExpert addExpert={handleAddExpert} />
              </div>
            </div>
            <div className="px-2">
              <div className="my-2 flex justify-center items-center bg-linear-to-r/oklch from-teal-900 to-blue-900 rounded-lg border-[1px] border-border">
                <span className="mt-1 text-sm text-white">AGENDAS</span>
              </div>
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">Craft the tools of rebellion</b>
                <Separator />
              </div>
              {schematics.map((s, idx) => (
                <ItemInput
                  key={`${s.name}${idx}`}
                  updateItem={handleUpdateSchematic(s.name)}
                  item={s}
                  variant="schematic"
                  removeItem={handleRemoveSchematic(s.name)}
                />
              ))}
              {formulae.map((f, idx) => (
                <AlchemyInput
                  key={`${f.name}${idx}`}
                  updateAlchemy={handleUpdateFormulae(f.name)}
                  alchemy={f}
                  variant="formula"
                  removeAlchemy={handleRemoveFormula(f.name)}
                />
              ))}
              <div className="flex justify-center gap-2 mt-2">
                <AddEquipment
                  addItem={handleAddSchematic}
                  variant="schematic"
                />
                <AddAlchemy addAlchemy={handleAddFormula} variant="formula" />
              </div>
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">
                  Explore the factory&apos;s heights and depths
                </b>
                <Separator />
              </div>
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">
                  Pit the oppressors against each other
                </b>
                <Separator />
              </div>
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">
                  Forge a path of connection and conversation
                </b>
                <Separator />
              </div>
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">Gamble and fight for glory</b>
                <Separator />
              </div>
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">
                  Make them know you&apos;re not afraid
                </b>
                <Separator />
              </div>
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">Make the pain worth it</b>
                <Separator />
              </div>
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">
                  Walk among the oppressors and learn their secrets
                </b>
                <Separator />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="dramatis-personae" className="w-full">
          <div>
            <div className="">
              <TypographyH4 className="text-orange-700 text-center">
                Dayshift
              </TypographyH4>
              <Separator className="mt-2 mb-4 bg-orange-700" />
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <div className="relative w-56 h-24 rounded-md border-[1px] border-border">
                  <Image
                    src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/Untitled-TGGV8Lx7llaXWqeiUW9TdeDdJop6QL.png"
                    alt="character portrait"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    sizes="(max-width: 224px) 100vw, 50vw"
                    className="z-0 rounded-md"
                  />
                  <div className="absolute group bottom-0 left-0 h-24 w-56 z-10 bg-black/50 rounded-md flex items-center justify-center hover:bg-black/10 transition-all duration-300">
                    <b className="text-lg group-hover:opacity-0 transition-all duration-300">
                      Drusa
                    </b>
                  </div>
                </div>
                <div className="relative w-56 h-24 rounded-md border-[1px] border-border">
                  {/* <Image
                  src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/wolfboy-8GbIppsoksWV3DEN87HWHXqcowr4EP.png"
                  alt="character portrait"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  sizes="(max-width: 224px) 100vw, 50vw"
                  className="z-0 rounded-md"
                /> */}
                  <div className="absolute bottom-0 left-0 h-24 w-56 z-10 bg-black/50 rounded-md flex items-center justify-center hover:bg-black/20 transition-all duration-300">
                    <b className="text-lg">Nail</b>
                  </div>
                </div>
                <div className="relative w-56 h-24 rounded-md border-[1px] border-border">
                  {/* <Image
                  src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/wolfboy-8GbIppsoksWV3DEN87HWHXqcowr4EP.png"
                  alt="character portrait"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  sizes="(max-width: 224px) 100vw, 50vw"
                  className="z-0 rounded-md"
                /> */}
                  <div className="absolute bottom-0 left-0 h-24 w-56 z-10 bg-black/50 rounded-md flex items-center justify-center hover:bg-black/20 transition-all duration-300">
                    <b className="text-lg">???</b>
                  </div>
                </div>
                <div className="relative w-56 h-24 rounded-md border-[1px] border-border">
                  {/* <Image
                  src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/wolfboy-8GbIppsoksWV3DEN87HWHXqcowr4EP.png"
                  alt="character portrait"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  sizes="(max-width: 224px) 100vw, 50vw"
                  className="z-0 rounded-md"
                /> */}
                  <div className="absolute bottom-0 left-0 h-24 w-56 z-10 bg-black/50 rounded-md flex items-center justify-center hover:bg-black/20 transition-all duration-300">
                    <b className="text-lg">???</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <TypographyH4 className="text-indigo-700 text-center">
              Nightshift
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-indigo-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <div className="relative w-56 h-24 rounded-md border-[1px] border-border">
                <Image
                  src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/wolfboy-8GbIppsoksWV3DEN87HWHXqcowr4EP.png"
                  alt="character portrait"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  sizes="(max-width: 224px) 100vw, 50vw"
                  className="z-0 rounded-md"
                />
                <div className="absolute group bottom-0 left-0 h-24 w-56 z-10 bg-black/50 rounded-md flex items-center justify-center hover:bg-black/20 transition-all duration-300">
                  <b className="text-lg group-hover:opacity-0 transition-all duration-300">
                    21
                  </b>
                </div>
              </div>
              <div className="relative w-56 h-24 rounded-md border-[1px] border-border">
                {/* <Image
                  src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/wolfboy-8GbIppsoksWV3DEN87HWHXqcowr4EP.png"
                  alt="character portrait"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  sizes="(max-width: 224px) 100vw, 50vw"
                  className="z-0 rounded-md"
                /> */}
                <div className="absolute bottom-0 left-0 h-24 w-56 z-10 bg-black/50 rounded-md flex items-center justify-center hover:bg-black/20 transition-all duration-300">
                  <b className="text-lg">Aika</b>
                </div>
              </div>
              <div className="relative w-56 h-24 rounded-md border-[1px] border-border">
                {/* <Image
                  src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/wolfboy-8GbIppsoksWV3DEN87HWHXqcowr4EP.png"
                  alt="character portrait"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  sizes="(max-width: 224px) 100vw, 50vw"
                  className="z-0 rounded-md"
                /> */}
                <div className="absolute bottom-0 left-0 h-24 w-56 z-10 bg-black/50 rounded-md flex items-center justify-center hover:bg-black/20 transition-all duration-300">
                  <b className="text-lg">Bessemer</b>
                </div>
              </div>
              <div className="relative w-56 h-24 rounded-md border-[1px] border-border">
                {/* <Image
                  src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/wolfboy-8GbIppsoksWV3DEN87HWHXqcowr4EP.png"
                  alt="character portrait"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  sizes="(max-width: 224px) 100vw, 50vw"
                  className="z-0 rounded-md"
                /> */}
                <div className="absolute bottom-0 left-0 h-24 w-56 z-10 bg-black/50 rounded-md flex items-center justify-center hover:bg-black/20 transition-all duration-300">
                  <b className="text-lg">Lilya</b>
                </div>
              </div>
              <div className="relative w-56 h-24 rounded-md border-[1px] border-border">
                {/* <Image
                  src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/wolfboy-8GbIppsoksWV3DEN87HWHXqcowr4EP.png"
                  alt="character portrait"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  sizes="(max-width: 224px) 100vw, 50vw"
                  className="z-0 rounded-md"
                /> */}
                <div className="absolute bottom-0 left-0 h-24 w-56 z-10 bg-black/50 rounded-md flex items-center justify-center hover:bg-black/20 transition-all duration-300">
                  <b className="text-lg">Von</b>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
