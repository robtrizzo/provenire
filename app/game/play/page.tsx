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
import ItemInput from "./(components)/item-input";
import AddEquipment from "./(components)/add-equipment";
import AlchemyInput from "./(components)/alchemy-input";
import AddAlchemy from "./(components)/add-alchemy";
import AddGang from "./(components)/add-gang";
import GangInput from "./(components)/gang-input";
import Image from "next/image";
import ExpertInput from "./(components)/expert-input";
import AddExpert from "./(components)/add-expert";
import AddScouting from "./(components)/add-scouting";
import ScoutingInput from "./(components)/scouting-input";
import AddBlackmail from "./(components)/add-blackmail";
import BlackmailInput from "./(components)/blackmail-input";
import FactionInput from "./(components)/faction-input";
import AddGladiator from "./(components)/add-gladiator";
import GladitorInput from "./(components)/gladiator-input";
import AddFightingInstructor from "./(components)/add-fighting-instructor";
import FightingInstructorInput from "./(components)/fighting-instructor-input";
import AddCommunityProject from "./(components)/add-community-project";
import CommunityProjectInput from "./(components)/community-project-input";
import AddOperation from "./(components)/add-operation";
import OperationInput from "./(components)/operation-input";
import AddClock from "./(components)/add-clock";
import ClockInput from "./(components)/clock-input";
import { useCrewSheet } from "@/contexts/crewSheetContext";
import { useSession } from "next-auth/react";

export default function Page() {
  const session = useSession();
  const isAdmin = session?.data?.user.role === "admin";

  const [tab, setTab] = useState("crew");

  const {
    heat,
    wanted,
    food,
    materials,
    rep,
    goodwill,
    intel,
    items,
    alchemy,
    gangs,
    experts,
    schematics,
    formulae,
    rGangs,
    rExperts,
    scouting,
    blackmail,
    factions,
    pcGladiators,
    fInstructors,
    livingSpace,
    security,
    lair,
    community,
    operations,
    clocks,
    setHeat,
    setWanted,
    setFood,
    setMaterials,
    setRep,
    setGoodwill,
    setIntel,
    handleUpdateItem,
    handleAddItem,
    handleUpdateAlchemy,
    handleAddAlchemy,
    handleUpdateGang,
    handleAddGang,
    handleUpdateExpert,
    handleAddExpert,
    handleUpdateSchematic,
    handleAddSchematic,
    handleRemoveSchematic,
    handleUpdateFormulae,
    handleAddFormula,
    handleRemoveFormula,
    handleAddRGang,
    handleUpdateRGang,
    handleRemoveRGang,
    handleAddRExpert,
    handleUpdateRExpert,
    handleRemoveRExpert,
    handleAddScouting,
    handleUpdateScouting,
    handleRemoveScouting,
    handleAddBlackmail,
    handleRemoveBlackmail,
    handleUpdateFaction,
    handleAddPCGladiator,
    handleUpdatePCGladiator,
    handleRemovePCGladiator,
    handleAddFightingInstructor,
    handleUpdateFightingInstructor,
    handleRemoveFightingInstructor,
    handleAddCommunityProject,
    handleUpdateCommunityProject,
    handleRemoveCommunityProject,
    handleAddOperation,
    handleUpdateOperation,
    handleRemoveOperation,
    handleAddClock,
    handleUpdateClock,
    handleRemoveClock,
    setChanges,
  } = useCrewSheet();

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
                      if (isAdmin) {
                        setHeat(n);
                        setChanges(true);
                      }
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
                      if (isAdmin) {
                        setWanted(n);
                        setChanges(true);
                      }
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
                      if (isAdmin) {
                        setFood(n);
                        setChanges(true);
                      }
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
                      if (isAdmin) {
                        setRep(n);
                        setChanges(true);
                      }
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
                      if (isAdmin) {
                        setMaterials(n);
                        setChanges(true);
                      }
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
                      if (isAdmin) {
                        setGoodwill(n);
                        setChanges(true);
                      }
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
                      if (isAdmin) {
                        setIntel(n);
                        setChanges(true);
                      }
                    }}
                    clearPosition="end"
                  />
                </div>
              </div>
              <div className="mt-4 mb-2 flex justify-center items-center bg-linear-to-r/oklch from-teal-900 to-blue-900 rounded-lg border-[1px] border-border">
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
                  enable={isAdmin}
                />
              ))}
              {isAdmin && (
                <div className="flex justify-center mt-1">
                  <AddEquipment addItem={handleAddItem} />
                </div>
              )}
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">Alchemy</b>
                <Separator />
              </div>
              {alchemy.map((al, idx) => (
                <AlchemyInput
                  key={`${al.name}${idx}`}
                  updateAlchemy={handleUpdateAlchemy(al.name)}
                  alchemy={al}
                  enable={isAdmin}
                />
              ))}
              {isAdmin && (
                <div className="flex justify-center mt-1">
                  <AddAlchemy addAlchemy={handleAddAlchemy} />
                </div>
              )}
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">Gangs</b>
                <Separator />
              </div>
              {gangs.map((g, idx) => (
                <GangInput
                  key={`${g.name}${idx}`}
                  updateGang={handleUpdateGang(g.name)}
                  gang={g}
                  enable={isAdmin}
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
                  enable={isAdmin}
                />
              ))}
              <div className="flex justify-center mt-1">
                <AddExpert addExpert={handleAddExpert} />
              </div>
            </div>
            <div className="px-2">
              <div className="my-2 flex justify-center items-center bg-linear-to-r/oklch from-pink-950 to-blue-950 rounded-lg border-[1px] border-border">
                <span className="mt-1 text-sm text-white">AGENDAS</span>
              </div>
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">Forge the tools of rebellion</b>
                <Separator />
              </div>
              {schematics.length > 0 && (
                <div className="flex justify-center my-1">
                  <span className="text-xs">SCHEMATICS</span>
                </div>
              )}
              {schematics.map((s, idx) => (
                <ItemInput
                  key={`${s.name}${idx}`}
                  updateItem={handleUpdateSchematic(s.name)}
                  item={s}
                  variant="schematic"
                  removeItem={handleRemoveSchematic(s.name)}
                  enable={isAdmin}
                />
              ))}
              {formulae.length > 0 && (
                <div className="flex justify-center my-1">
                  <span className="text-xs">FORMULAE</span>
                </div>
              )}
              {formulae.map((f, idx) => (
                <AlchemyInput
                  key={`${f.name}${idx}`}
                  updateAlchemy={handleUpdateFormulae(f.name)}
                  alchemy={f}
                  variant="formula"
                  removeAlchemy={handleRemoveFormula(f.name)}
                  enable={isAdmin}
                />
              ))}
              {isAdmin && (
                <div className="flex justify-center gap-1 mt-2">
                  <AddEquipment
                    addItem={handleAddSchematic}
                    variant="schematic"
                  />
                  <AddAlchemy addAlchemy={handleAddFormula} variant="formula" />
                </div>
              )}
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">
                  Explore the factory&apos;s heights and depths
                </b>
                <Separator />
              </div>
              {scouting.map((s, idx) => (
                <ScoutingInput
                  key={`${s.name}${idx}`}
                  scouting={s}
                  updateScouting={handleUpdateScouting(s.name)}
                  removeScouting={handleRemoveScouting(s.name)}
                  enable={isAdmin}
                />
              ))}
              {isAdmin && (
                <div className="flex justify-center">
                  <AddScouting addScouting={handleAddScouting} />
                </div>
              )}
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">
                  Pit the oppressors against each other
                </b>
                <Separator />
              </div>
              {blackmail.map((b, idx) => (
                <BlackmailInput
                  key={`${b.name}${idx}`}
                  blackmail={b}
                  removeBlackmail={handleRemoveBlackmail(b.name)}
                  enable={isAdmin}
                />
              ))}
              {isAdmin && (
                <div className="flex justify-center">
                  <AddBlackmail addBlackmail={handleAddBlackmail} />
                </div>
              )}
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">
                  Carve a path of connection and conversation
                </b>
                <Separator />
              </div>
              {factions.map((f, idx) => (
                <FactionInput
                  key={`${f.name}${idx}`}
                  faction={f}
                  updateFaction={handleUpdateFaction(f.name)}
                  enable={isAdmin}
                />
              ))}
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">Gamble and fight for glory</b>
                <Separator />
              </div>
              {pcGladiators.length > 0 && (
                <div className="flex justify-center my-1">
                  <span className="text-xs">CREW GLADIATORS</span>
                </div>
              )}
              {pcGladiators.map((g, idx) => (
                <GladitorInput
                  key={`${g.name}${idx}`}
                  gladiator={g}
                  updateGladiator={handleUpdatePCGladiator(g.name)}
                  removeGladiator={handleRemovePCGladiator(g.name)}
                  enable={isAdmin}
                />
              ))}
              {fInstructors.length > 0 && (
                <div className="flex justify-center my-1">
                  <span className="text-xs">FIGHTING INSTRUCTORS</span>
                </div>
              )}
              {fInstructors.map((i, idx) => (
                <FightingInstructorInput
                  key={`${i.name}${idx}`}
                  fightingInstructor={i}
                  updateFightingInstructor={handleUpdateFightingInstructor(
                    i.name
                  )}
                  removeFightingInstructor={handleRemoveFightingInstructor(
                    i.name
                  )}
                  enable={isAdmin}
                />
              ))}
              {isAdmin && (
                <div className="flex justify-center gap-1">
                  <AddGladiator addGladiator={handleAddPCGladiator} />
                  <AddFightingInstructor
                    addFightingInstructor={handleAddFightingInstructor}
                  />
                </div>
              )}
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">
                  Make them know you&apos;re not afraid
                </b>
                <Separator />
              </div>
              {rGangs.length > 0 && (
                <div className="flex justify-center my-1">
                  <span className="text-xs">GANGS</span>
                </div>
              )}
              {rGangs.map((rg, idx) => (
                <GangInput
                  key={`${rg.name}${idx}`}
                  updateGang={handleUpdateRGang(rg.name)}
                  gang={rg}
                  variant="recruit"
                  removeGang={handleRemoveRGang(rg.name)}
                  enable={isAdmin}
                />
              ))}
              {rExperts.length > 0 && (
                <div className="flex justify-center my-1">
                  <span className="text-xs">EXPERTS</span>
                </div>
              )}
              {rExperts.map((re, idx) => (
                <ExpertInput
                  key={`${re.name}${idx}`}
                  updateExpert={handleUpdateRExpert(re.name)}
                  expert={re}
                  variant="recruit"
                  removeExpert={handleRemoveRExpert(re.name)}
                  enable={isAdmin}
                />
              ))}
              {isAdmin && (
                <div className="flex justify-center gap-1 mt-2">
                  <AddGang addGang={handleAddRGang} />
                  <AddExpert addExpert={handleAddRExpert} />
                </div>
              )}
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">Make the pain worth it</b>
                <Separator />
              </div>
              {livingSpace.length > 0 && (
                <div className="flex justify-center my-1">
                  <span className="text-xs">LIVING SPACE</span>
                </div>
              )}
              {livingSpace.map((p, idx) => (
                <CommunityProjectInput
                  key={`${p.name}${idx}`}
                  communityProject={p}
                  updateCommunityProject={handleUpdateCommunityProject(
                    "Living Space",
                    p.name
                  )}
                  removeCommunityProject={handleRemoveCommunityProject(
                    "Living Space",
                    p.name
                  )}
                  enable={isAdmin}
                />
              ))}
              {security.length > 0 && (
                <div className="flex justify-center my-1">
                  <span className="text-xs">SECURITY</span>
                </div>
              )}
              {security.map((p, idx) => (
                <CommunityProjectInput
                  key={`${p.name}${idx}`}
                  communityProject={p}
                  updateCommunityProject={handleUpdateCommunityProject(
                    "Security",
                    p.name
                  )}
                  removeCommunityProject={handleRemoveCommunityProject(
                    "Security",
                    p.name
                  )}
                  enable={isAdmin}
                />
              ))}
              {lair.length > 0 && (
                <div className="flex justify-center my-1">
                  <span className="text-xs">LAIR</span>
                </div>
              )}
              {lair.map((p, idx) => (
                <CommunityProjectInput
                  key={`${p.name}${idx}`}
                  communityProject={p}
                  updateCommunityProject={handleUpdateCommunityProject(
                    "Lair",
                    p.name
                  )}
                  removeCommunityProject={handleRemoveCommunityProject(
                    "Lair",
                    p.name
                  )}
                  enable={isAdmin}
                />
              ))}
              {community.length > 0 && (
                <div className="flex justify-center my-1">
                  <span className="text-xs">COMMUNITY</span>
                </div>
              )}
              {community.map((p, idx) => (
                <CommunityProjectInput
                  key={`${p.name}${idx}`}
                  communityProject={p}
                  updateCommunityProject={handleUpdateCommunityProject(
                    "Community",
                    p.name
                  )}
                  removeCommunityProject={handleRemoveCommunityProject(
                    "Community",
                    p.name
                  )}
                  enable={isAdmin}
                />
              ))}
              {isAdmin && (
                <div className="flex justify-center gap-2 mt-2">
                  <AddCommunityProject
                    addCommunityProject={handleAddCommunityProject}
                  />
                </div>
              )}
              <div className="mt-4 mb-2 mx-2">
                <b className="mt-1 text-white">
                  Walk among the oppressors and learn their secrets
                </b>
                <Separator />
              </div>
              {operations.map((o, idx) => (
                <OperationInput
                  key={`${o.name}${idx}`}
                  operation={o}
                  updateOperation={handleUpdateOperation(o.name)}
                  removeOperation={handleRemoveOperation(o.name)}
                  enable={isAdmin}
                />
              ))}
              {isAdmin && (
                <div className="flex justify-center gap-2 mt-2">
                  <AddOperation addOperation={handleAddOperation} />
                </div>
              )}
            </div>
          </div>
          <div className="mb-2 mt-4 flex justify-center items-center bg-linear-to-r/oklch from-slate-900 to-stone-900 rounded-lg border-[1px] border-border">
            <span className="mt-1 text-sm text-white">PROJECTS & CLOCKS</span>
          </div>
          {clocks.map((c, idx) => (
            <ClockInput
              key={`${c.name}${idx}`}
              clock={c}
              updateClock={handleUpdateClock(c.name)}
              removeClock={handleRemoveClock(c.name)}
              enable={isAdmin}
            />
          ))}
          {isAdmin && (
            <div className="flex justify-center mt-2">
              <AddClock addClock={handleAddClock} />
            </div>
          )}
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
                    <b className="text-lg">Malgus Veradun</b>
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
