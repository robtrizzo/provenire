"use client";
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
import ItemInput from "../item-input";
import AddEquipment from "../add-equipment";
import AlchemyInput from "../alchemy-input";
import AddAlchemy from "../add-alchemy";
import AddGang from "../add-gang";
import GangInput from "../gang-input";
import ExpertInput from "../expert-input";
import AddExpert from "../add-expert";
import AddScouting from "../add-scouting";
import ScoutingInput from "../scouting-input";
import AddBlackmail from "../add-blackmail";
import BlackmailInput from "../blackmail-input";
import FactionInput from "../faction-input";
import AddGladiator from "../add-gladiator";
import GladitorInput from "../gladiator-input";
import AddFightingInstructor from "../add-fighting-instructor";
import FightingInstructorInput from "../fighting-instructor-input";
import AddCommunityProject from "../add-community-project";
import CommunityProjectInput from "../community-project-input";
import AddOperation from "../add-operation";
import OperationInput from "../operation-input";
import AddClock from "../add-clock";
import ClockInput from "../clock-input";
import { useCrewSheet } from "@/contexts/crewSheetContext";
import { useSession } from "next-auth/react";
import SaveCrewButton from "./save-crew-button";
import LoadCrewButton from "./load-crew-button";

export default function CrewSheet() {
  const session = useSession();
  const isAdmin = session?.data?.user.role === "admin";

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

  return (
    <>
      {isAdmin && (
        <div className="flex">
          <div className="flex gap-2 mt-2 mr-2 ml-auto">
            <SaveCrewButton />
            <LoadCrewButton />
          </div>
        </div>
      )}
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
          {isAdmin && (
            <div className="flex justify-center mt-1">
              <AddGang addGang={handleAddGang} />
            </div>
          )}
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
          {isAdmin && (
            <div className="flex justify-center mt-1">
              <AddExpert addExpert={handleAddExpert} />
            </div>
          )}
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
              <AddEquipment addItem={handleAddSchematic} variant="schematic" />
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
              updateFightingInstructor={handleUpdateFightingInstructor(i.name)}
              removeFightingInstructor={handleRemoveFightingInstructor(i.name)}
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
    </>
  );
}
