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
import Charsheet from "./(components)/character-sheet/character-sheet";
import NamePortrait from "./(components)/name-portrait";

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
        <TabsContent value="character" className="w-full">
          <Charsheet />
        </TabsContent>
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
                    key={`heat-${Date.now()}`}
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
                    key={`wanted-${Date.now()}`}
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
                    key={`food-${Date.now()}`}
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
                    key={`rep-${Date.now()}`}
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
                    key={`materials-${Date.now()}`}
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
                    key={`goodwill-${Date.now()}`}
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
                    key={`intel-${Date.now()}`}
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
                <NamePortrait
                  name="Drusa"
                  src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/Untitled-TGGV8Lx7llaXWqeiUW9TdeDdJop6QL.png"
                />
                <NamePortrait
                  name="Nail"
                  src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/hammer-T3LcbIfLfh8D9dl5dUbIUvLjw5hitK.png"
                />
                <NamePortrait
                  name="Malgus Veradun"
                  src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/malgus%20zoom-ddkzKNoA2HM3SVVuSyFTXSoJanLlQO.png"
                />
                <NamePortrait
                  name="Merit"
                  src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/Merit-ONhjE1e3VgsiiaXtUJ9Kc26jA2gxkA.png"
                />
              </div>
            </div>
          </div>
          <div>
            <TypographyH4 className="text-indigo-700 text-center">
              Nightshift
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-indigo-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="21"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/21-c9CAB4fwfsIieihTnWV1SBAPMfoTLN.png"
              />
              <NamePortrait name="Aika" />
              <NamePortrait name="Bessemer" />
              <NamePortrait name="Lilya Amati" />
              <NamePortrait name="Von" />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-amber-700 text-center">
              The Bends
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-amber-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait name="Quarrel" />
              <NamePortrait
                name="Lio"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/lio-h4re0AHod2CdO426HfBL8FYmpc0Ka8.png"
              />
              <NamePortrait
                name="Kent"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/kent-yJg3Bx1cEpAehnuwlvyYpuVUczIxEM.png"
              />
              <NamePortrait name="Gaila the Daft" />
              <NamePortrait name="Audo the Gorger" />
              <NamePortrait
                name="Hellet"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/hellet-7mEQLBRZhZ0TYFRgzYtJajxf2NtiER.png"
              />
              <NamePortrait
                name="Gelimer"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/gelimer-bR5kHyWPRHihiduHHveP6SoeNqcuU2.png"
              />
              <NamePortrait
                name="Alma"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/alma-7U53x1yaJA7FAfcM68Rh8wXYvpOOxO.png"
              />
              <NamePortrait
                name="Nimund"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/nimund-eflJ1s1CuzGyZfSt4RKI65GwEL1vBe.png"
              />
              <NamePortrait
                name="Lorel"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/lorel-QxW0yIfTGWnOwdAkuXII2HqPFtExCL.png"
              />
              <NamePortrait name="Miteri" />
              <NamePortrait name="Kian" />
              <NamePortrait
                name="Bran"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/bran-t15uFlCWv8jZU8Hct9jv1yBXqYpJmd.png"
              />
              <NamePortrait
                name="Gideon"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/gideon-g2OPARDZWXAXUKSOLILDxaP9boctc4.png"
              />
              <NamePortrait
                name="Theo"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/theo-K3Jaq5FjwQMd7KvSMDZ2agtGRHZZUR.png"
              />
              <NamePortrait name="Hrodulfr" />
              <NamePortrait name="Adosinda" />
              <NamePortrait name="Tan" />
              <NamePortrait name="Shiro" />
              <NamePortrait name="Suba" />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-red-700 text-center">
              Gorger&apos;s Sommoliers
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-red-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait name="Audo the Gorger" />
              <NamePortrait
                name="Hellet"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/hellet-7mEQLBRZhZ0TYFRgzYtJajxf2NtiER.png"
              />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-amber-700 text-center">
              Stairwell
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-amber-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="Ash Aalart"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/ash_aalart-tOBiTOJA4pyqnEVK3r1yq7afkZO3zO.png"
              />
              <NamePortrait
                name="Sigsvult"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/sigsvult-Zh8yh013E97NDoCJ3mxCLtmZu2g2oY.png"
              />
              <NamePortrait
                name="Hichem"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/hichem-oq7cIO9aaPbwesYUGlg6bOf6ujlpD9.png"
              />
              <NamePortrait
                name="Warner"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/warner-pioR1Zfj9Fg7S6ED5NEjSBc36c9KuY.png"
              />
              <NamePortrait
                name="Cyrus"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/cyrus-wTDQRYWiqIZkJPGhjnLYbTLT4f9rk5.png"
              />
              <NamePortrait
                name="Adwil"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/adwil-U81gl4zuW3J5VxAJXovVV3rKUuoLvY.png"
              />
              <NamePortrait
                name="Wess the Shark"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/wess_the_shark-T44H4oXH3sLbLf6y1jVXhcAIgRkK7v.png"
              />
              <NamePortrait
                name="Svintha the Cumber"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/svintha_the_crumber-8EUn3dzeyavRkJbsIkCie0jRjJxg4s.png"
              />
              <NamePortrait name="Naric the Swindler" />
              <NamePortrait
                name="Borani"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/borani-gAyIKjm2hYkRL0U43WI4CX779JtbSh.png"
              />
              <NamePortrait
                name="Inga"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/inga-VkSI5ifqVNbZ3Cyod1ekwfCB6dgCaF.jpg"
              />
              <NamePortrait
                name="Tovarus"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/tovarus-QUmbIXcq1YEsNaWS6Fcq0G7ej8HHCX.png"
              />
              <NamePortrait
                name="Cassian"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/Cassian-AwYwlLgy2q5uojS5E9wLTPNnYprM2T.png"
              />
              <NamePortrait
                name="Kuni the Rover"
                dead={true}
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/kuni_the_rover-6W58DYOqk9tTF02FKmYUjJPHnOifLU.png"
              />
              <NamePortrait
                name="Lorya"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/lorya-KiUIZNkyVm6ZYI1zvVjSTUFvHH2eac.png"
              />
              <NamePortrait name="Mori" />
              <NamePortrait name="Kaethe" />
              <NamePortrait name="Buffy" />
              <NamePortrait name="Melisande" />
              <NamePortrait name="Ivid" />
              <NamePortrait name="Rodulf" />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-red-700 text-center">
              The Youngers
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-red-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="Warner"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/warner-pioR1Zfj9Fg7S6ED5NEjSBc36c9KuY.png"
              />
              <NamePortrait
                name="Cyrus"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/cyrus-wTDQRYWiqIZkJPGhjnLYbTLT4f9rk5.png"
              />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-amber-700 text-center">
              Lofts
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-amber-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="21"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/21-c9CAB4fwfsIieihTnWV1SBAPMfoTLN.png"
              />
              <NamePortrait
                name="Drusa"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/Untitled-TGGV8Lx7llaXWqeiUW9TdeDdJop6QL.png"
              />
              <NamePortrait
                name="Nail"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/hammer-T3LcbIfLfh8D9dl5dUbIUvLjw5hitK.png"
              />
              <NamePortrait
                name="Malgus Veradun"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/malgus%20zoom-ddkzKNoA2HM3SVVuSyFTXSoJanLlQO.png"
              />
              <NamePortrait
                name="Sire Cyber"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/ciber-3kRUQMXgN8n3A8Yl5oxRYEQkaL8xFy.png"
              />
              <NamePortrait
                name="Moore"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/moore-xdL34jiIpqbq12fBP7ylLfwVfYs1oW.png"
              />
              <NamePortrait
                name="Nichros Perydark"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/nichros-gcRsOgNLwIfYpxQmgvZQ9gwkIa0MtQ.png"
              />
              <NamePortrait
                name="Laramie Black"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/laramie-AYr5CYeTlrzrymKadRlb7SGNvGrZ1T.png"
              />
              <NamePortrait
                name="Yewin"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/yewin-pYKST6JA3xUAdSl9iC4Ttnk3CgSlUE.png"
              />
              <NamePortrait name="Zamza Veradun" />
              <NamePortrait name="Noirax Veradun" />
              <NamePortrait
                name="Venee Palen"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/venee-CYx0NW9EiswyGwm4BOfbaarF2T8AIV.png"
              />
              <NamePortrait name="Pachni" />
              <NamePortrait name="Kasr" />
              <NamePortrait
                name="Amalina the Crow"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/amalina-63ucDPz86bPMLiccVP3EwOXZQABSCP.png"
              />
              <NamePortrait
                name="Naaza"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/Naaza-SgQQ3GQ8hq2ngblx7OsEyDDiiTtV0D.png"
              />
              <NamePortrait
                name="Kerrac"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/Kerrac-yMdl8VAj4keAinv3Iy571WVOg0KxC7.png"
              />
              <NamePortrait name="Riks the Rat" />
              <NamePortrait
                name="Gnaeus"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/gnaeus-ovrlgdcikCCeg14D6HZM1w6GKdk8Ra.jpg"
              />
              <NamePortrait
                name="Hamlin"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/hamlin-sEMswDBl8cGOn1DLeq5koaLRLDcRos.jpg"
              />
              <NamePortrait
                name="Wilgefort"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/wilgefort-UJGTrnLq52Zif0PQVTau5YczGN8yTh.png"
              />
              <NamePortrait
                name="Seperi"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/seperi-S8xjBpK4qD2N6tPkUl06mYyGeagqm2.png"
              />
              <NamePortrait name="Ardaric" />
              <NamePortrait name="Theodora" />
              <NamePortrait name="Elisaweta" />
              <NamePortrait name="Jeanne" />
              <NamePortrait name="Melle" />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-red-700 text-center">
              Moore&apos;s
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-red-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="Moore"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/moore-xdL34jiIpqbq12fBP7ylLfwVfYs1oW.png"
              />
              <NamePortrait
                name="Malgus Veradun"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/malgus%20zoom-ddkzKNoA2HM3SVVuSyFTXSoJanLlQO.png"
              />
              <NamePortrait
                name="Nichros Perydark"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/nichros-gcRsOgNLwIfYpxQmgvZQ9gwkIa0MtQ.png"
              />
              <NamePortrait
                name="Laramie Black"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/laramie-AYr5CYeTlrzrymKadRlb7SGNvGrZ1T.png"
              />
              <NamePortrait
                name="Yewin"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/yewin-pYKST6JA3xUAdSl9iC4Ttnk3CgSlUE.png"
              />
              <NamePortrait name="Zamza Veradun" />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-amber-700 text-center">
              Fab Floor
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-amber-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="Merit"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/Merit-ONhjE1e3VgsiiaXtUJ9Kc26jA2gxkA.png"
              />
              <NamePortrait name="Lester Aurus" />
              <NamePortrait
                name="Minamo"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/minamo-B6ONa8uwecV7MxSgr1hk9FPCfjp9Dq.png"
              />
              <NamePortrait
                name="Enzo"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/enzo-MJm7deywDtMBXPd0GWUWsUr6pnWFMH.png"
              />
              <NamePortrait
                name="Seb"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/Seb-9SRgLYcSvnrVkO4J1KVAVGw7m9GXub.png"
              />
              <NamePortrait
                name="Nadia"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/Nadia-2duB0lW8p4Gcl3MJxVLHdg0MZzzWoV.png"
              />
              <NamePortrait name="Veria" />
              <NamePortrait name="Malix" />
              <NamePortrait name="Gisava the Bully" />
              <NamePortrait
                name="Felix the Facetious"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/felix-svkBibbDF74FlII5MXY0DAmoK2ZBGw.png"
              />
              <NamePortrait name="Lorin" />
              <NamePortrait
                name="Cyrus"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/cyrus_enforcer-ryB6WlN1COzjTUGeO8EQ3AN8CviSdi.png"
              />
              <NamePortrait name="Radegond the Stalker" />
              <NamePortrait name="Duara the Thinblood" />
              <NamePortrait
                name="Utthas"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/utthas-nXjFoOBfkv24dZgUyZQR35CbMcqBln.png"
              />
              <NamePortrait name="Rasha of the machines" />
              <NamePortrait
                name="Geleswin"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/gleleswin-Z8FabIkq6njDsVtaEDMSOFIDxcE6hw.png"
              />
              <NamePortrait
                name="Gisa"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/gisa-OpJYsx6LwVCBHKIpmLRtAl9bgmvqvl.png"
              />
              <NamePortrait name="Shal" />
              <NamePortrait
                name="Finn"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/finn-sfGoSGWQnd6jZVLlR3IouuSpd53zxQ.png"
              />
              <NamePortrait
                name="Oza Kriche"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/oza-PpDlP3aecTXM6yj6bdgPkclFo78u7M.png"
              />
              <NamePortrait
                name="Sara"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/Sara-jB7uf7ozPyOEC4H4fBijQkzt0q7egz.png"
              />
              <NamePortrait name="Rasha" />
              <NamePortrait name="Naoko" />
              <NamePortrait name="Tsuji" />
              <NamePortrait name="Conrad" />
              <NamePortrait name="Nibel" />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-red-700 text-center">
              Scarbacks
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-red-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="Enzo"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/enzo-MJm7deywDtMBXPd0GWUWsUr6pnWFMH.png"
              />
              <NamePortrait name="Veria" />
              <NamePortrait name="Malix" />
              <NamePortrait
                name="Oza Kriche"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/oza-PpDlP3aecTXM6yj6bdgPkclFo78u7M.png"
              />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-red-700 text-center">
              Enforcers
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-red-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="Kuni the Rover"
                dead={true}
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/kuni_the_rover-6W58DYOqk9tTF02FKmYUjJPHnOifLU.png"
              />
              <NamePortrait
                name="Svintha the Cumber"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/svintha_the_crumber-8EUn3dzeyavRkJbsIkCie0jRjJxg4s.png"
              />
              <NamePortrait name="Audo the Gorger" />
              <NamePortrait name="Riks the Rat" />
              <NamePortrait name="Radegond the Stalker" />
              <NamePortrait name="Naric the Swindler" />
              <NamePortrait name="Gisava the Bully" />
              <NamePortrait name="Gaila the Daft" />
              <NamePortrait
                name="Hellet"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/hellet-7mEQLBRZhZ0TYFRgzYtJajxf2NtiER.png"
              />
              <NamePortrait
                name="Borani"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/borani-gAyIKjm2hYkRL0U43WI4CX779JtbSh.png"
              />
              <NamePortrait
                name="Wess the Shark"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/wess_the_shark-T44H4oXH3sLbLf6y1jVXhcAIgRkK7v.png"
              />
              <NamePortrait
                name="Kerrac"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/Kerrac-yMdl8VAj4keAinv3Iy571WVOg0KxC7.png"
              />
              <NamePortrait
                name="Naaza"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/Naaza-SgQQ3GQ8hq2ngblx7OsEyDDiiTtV0D.png"
              />
              <NamePortrait name="Noirax Veradun" />
              <NamePortrait
                name="Felix the Facetious"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/felix-svkBibbDF74FlII5MXY0DAmoK2ZBGw.png"
              />
              <NamePortrait
                name="Cyrus"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/cyrus_enforcer-ryB6WlN1COzjTUGeO8EQ3AN8CviSdi.png"
              />
              <NamePortrait name="Ardaric" />
              <NamePortrait name="Kaethe" />
              <NamePortrait
                name="Lorya"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/lorya-KiUIZNkyVm6ZYI1zvVjSTUFvHH2eac.png"
              />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-red-700 text-center">
              Prowlers
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-red-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="Amalina the Crow"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/amalina-63ucDPz86bPMLiccVP3EwOXZQABSCP.png"
              />
              <NamePortrait name="Duara the Thinblood" />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-cyan-700 text-center">
              Archivists
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-cyan-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="Drusa"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/Untitled-TGGV8Lx7llaXWqeiUW9TdeDdJop6QL.png"
              />
              <NamePortrait
                name="Alma"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/alma-7U53x1yaJA7FAfcM68Rh8wXYvpOOxO.png"
              />
              <NamePortrait name="Quarrel" />
              <NamePortrait
                name="Enzo"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/enzo-MJm7deywDtMBXPd0GWUWsUr6pnWFMH.png"
              />
              <NamePortrait name="Theodora" />
              <NamePortrait name="Elisaweta" />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-cyan-700 text-center">
              Machinists
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-cyan-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="Geleswin"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/gleleswin-Z8FabIkq6njDsVtaEDMSOFIDxcE6hw.png"
              />
              <NamePortrait
                name="Bran"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/bran-t15uFlCWv8jZU8Hct9jv1yBXqYpJmd.png"
              />
              <NamePortrait name="Malix" />
              <NamePortrait
                name="Venee Palen"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/venee-CYx0NW9EiswyGwm4BOfbaarF2T8AIV.png"
              />
              <NamePortrait name="Kasr" />
              <NamePortrait name="Nibel" />
              <NamePortrait name="Rodulf" />
              <NamePortrait name="Buffy" />
              <NamePortrait name="Tan" />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-cyan-700 text-center">
              Operators
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-cyan-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="Nail"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/hammer-T3LcbIfLfh8D9dl5dUbIUvLjw5hitK.png"
              />
              <NamePortrait name="Veria" />
              <NamePortrait
                name="Theo"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/theo-K3Jaq5FjwQMd7KvSMDZ2agtGRHZZUR.png"
              />
              <NamePortrait
                name="Nimund"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/nimund-eflJ1s1CuzGyZfSt4RKI65GwEL1vBe.png"
              />
              <NamePortrait
                name="Cassian"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/Cassian-AwYwlLgy2q5uojS5E9wLTPNnYprM2T.png"
              />
              <NamePortrait
                name="Yewin"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/yewin-pYKST6JA3xUAdSl9iC4Ttnk3CgSlUE.png"
              />
              <NamePortrait
                name="Utthas"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/utthas-nXjFoOBfkv24dZgUyZQR35CbMcqBln.png"
              />
              <NamePortrait name="Conrad" />
              <NamePortrait name="Adosinda" />
              <NamePortrait name="Mori" />
              <NamePortrait name="Shiro" />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-cyan-700 text-center">
              Runners
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-cyan-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="Nadia"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/Nadia-2duB0lW8p4Gcl3MJxVLHdg0MZzzWoV.png"
              />
              <NamePortrait
                name="Tovarus"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/tovarus-QUmbIXcq1YEsNaWS6Fcq0G7ej8HHCX.png"
              />
              <NamePortrait
                name="Adwil"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/adwil-U81gl4zuW3J5VxAJXovVV3rKUuoLvY.png"
              />
              <NamePortrait name="Kian" />
              <NamePortrait
                name="Seperi"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/seperi-S8xjBpK4qD2N6tPkUl06mYyGeagqm2.png"
              />
              <NamePortrait
                name="Sara"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/Sara-jB7uf7ozPyOEC4H4fBijQkzt0q7egz.png"
              />
              <NamePortrait name="Rasha" />
              <NamePortrait name="Melisande" />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-cyan-700 text-center">
              Scrappers
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-cyan-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="Merit"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/Merit-ONhjE1e3VgsiiaXtUJ9Kc26jA2gxkA.png"
              />
              <NamePortrait
                name="Finn"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/finn-sfGoSGWQnd6jZVLlR3IouuSpd53zxQ.png"
              />
              <NamePortrait
                name="Oza Kriche"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/oza-PpDlP3aecTXM6yj6bdgPkclFo78u7M.png"
              />
              <NamePortrait
                name="Inga"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/inga-VkSI5ifqVNbZ3Cyod1ekwfCB6dgCaF.jpg"
              />
              <NamePortrait
                name="Lorel"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/lorel-QxW0yIfTGWnOwdAkuXII2HqPFtExCL.png"
              />
              <NamePortrait name="Naoko" />
              <NamePortrait name="Suba" />
              <NamePortrait name="Tsuji" />
            </div>
          </div>
          <div>
            <TypographyH4 className="text-cyan-700 text-center">
              Stokers
            </TypographyH4>
            <Separator className="mt-2 mb-4 bg-cyan-700" />
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <NamePortrait
                name="21"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/21-c9CAB4fwfsIieihTnWV1SBAPMfoTLN.png"
              />
              <NamePortrait
                name="Wilgefort"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/wilgefort-UJGTrnLq52Zif0PQVTau5YczGN8yTh.png"
              />
              <NamePortrait
                name="Gisa"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/gisa-OpJYsx6LwVCBHKIpmLRtAl9bgmvqvl.png"
              />
              <NamePortrait
                name="Seb"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/Seb-9SRgLYcSvnrVkO4J1KVAVGw7m9GXub.png"
              />
              <NamePortrait
                name="Gideon"
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/npc-art/gideon-g2OPARDZWXAXUKSOLILDxaP9boctc4.png"
              />
              <NamePortrait name="Melle" />
              <NamePortrait name="Ivid" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
