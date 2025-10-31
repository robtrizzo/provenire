"use client";

import { Button } from "@/components/ui/button";
import {
  Dices,
  Cog,
  Handshake,
  UserStar,
  LockKeyholeOpen,
  LockKeyhole,
  DoorOpen,
  DoorClosed,
  UserMinus,
  UserX,
  Megaphone,
} from "lucide-react";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import { useRoll } from "@/contexts/arc2RollContext";
import { ShineBorder } from "@/components/ui/shine-border";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GroupRollMember } from "@/types/roll";
import ActionScoreArray from "@/components/ui/action-score-array";
import { countScoreEntries } from "@/lib/roll";
import RollSection from "./roll-section";
import { FC, ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useGroupRoll } from "@/contexts/groupRollContext";

interface GroupRollDialogProps {
  children: ReactNode;
}

type GroupRollDialog = FC<GroupRollDialogProps> & {
  LeaderSection: FC;
  GMLeaderSection: FC;
  MemberRollSection: FC;
  MemberInfoSection: FC;
  GMMemberSection: FC;
  JoinControl: FC;
  RollControls: FC;
  AlertControl: FC;
};

const GroupRollDialog = ({ children }: { children: ReactNode }) => {
  const {
    groupRollDialogOpen,
    setGroupRollDialogOpen,
    setGroupRollAlert,
    loadGroupRoll,
    groupRollAlert,
  } = useGroupRoll();

  const hasLoaded = useRef(false);

  useEffect(() => {
    if (groupRollDialogOpen && !hasLoaded.current) {
      loadGroupRoll();
      hasLoaded.current = true;
    }

    if (!groupRollDialogOpen) {
      hasLoaded.current = false;
    }
  }, [groupRollDialogOpen, loadGroupRoll]);

  const handleOpenChange = (open: boolean) => {
    setGroupRollAlert(false);
    setGroupRollDialogOpen(open);
  };

  return (
    <Dialog open={groupRollDialogOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="relative">
          <ShineBorder
            shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            className={cn(groupRollAlert ? "visible" : "hidden")}
          />
          <Handshake /> Group
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Group Roll</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

function LeaderSection({ leader }: { leader?: GroupRollMember }) {
  const { groupRoll, handleChangeGroupRollLeader } = useGroupRoll();

  const { name } = useCharacterSheet();

  const becomeLeader = () => handleChangeGroupRollLeader(name);
  const stepDown = () => handleChangeGroupRollLeader(name, false);

  const isMember = groupRoll.some((member) => member.charName === name);
  const isLeader = !!leader && leader.charName === name;

  if (isLeader) {
    return (
      <div className="relative">
        <span className="italic text-center text-xs text-muted-foreground">
          <b className="text-amber-500">You</b> are the leader
        </span>
        <Button
          className="absolute top-0 right-0"
          size="sm"
          variant="outline"
          onClick={stepDown}
        >
          step down
        </Button>
      </div>
    );
  }

  return (
    <div className="relative">
      <LeaderStatus leader={leader} />
      <Button
        size="sm"
        variant="outline"
        onClick={becomeLeader}
        className="absolute top-0 right-0"
        disabled={!isMember}
      >
        <UserStar className="text-amber-500" /> Become the leader
      </Button>
    </div>
  );
}

function GMLeaderSection({ leader }: { leader?: GroupRollMember }) {
  return <LeaderStatus leader={leader} />;
}

function LeaderStatus({ leader }: { leader?: GroupRollMember }) {
  if (leader) {
    return (
      <span className="italic text-center text-xs text-muted-foreground">
        <b className="text-amber-500">
          {leader.charName || "An unnamed character"}
        </b>{" "}
        is the leader
      </span>
    );
  }

  return (
    <span className="italic text-center text-xs text-muted-foreground">
      <b>No one</b> is the leader
    </span>
  );
}

function MemberDiceBreakdown({ member }: { member: GroupRollMember }) {
  if (!member) return null;

  const { rollLeft, rollRight, bonusDiceRed, bonusDiceBlue } = member;

  return (
    <div className="flex gap-2 flex-wrap">
      {rollLeft && (
        <div className="flex gap-2">
          <div>{rollLeft?.name}: </div>{" "}
          <ActionScoreArray
            red={countScoreEntries(rollLeft?.score, 1)}
            blue={countScoreEntries(rollLeft?.score, 2)}
            pink={0}
          />
        </div>
      )}
      {rollRight && (
        <div className="flex gap-2">
          <span>{rollRight?.name}: </span>{" "}
          <ActionScoreArray
            red={countScoreEntries(rollRight?.score, 1)}
            blue={countScoreEntries(rollRight?.score, 2)}
            pink={0}
          />
        </div>
      )}
      {bonusDiceRed + bonusDiceBlue > 0 && (
        <div className="flex gap-2">
          <span>Bonus: </span>
          <ActionScoreArray red={bonusDiceRed} blue={bonusDiceBlue} pink={0} />
        </div>
      )}
      {member.emotional && (
        <div className="flex gap-2">
          <span>Emotional:</span>
          <ActionScoreArray red={0} blue={0} pink={member.emotional ? 1 : 0} />
        </div>
      )}
    </div>
  );
}

function MemberInfoSection({ member }: { member: GroupRollMember }) {
  if (!member) return null;

  return (
    <div className="flex justify-between">
      <MemberDiceBreakdown member={member} />
      <LockButtonIcon isLocked={member.lockedIn} />
    </div>
  );
}

function GMMemberSection({ member }: { member: GroupRollMember }) {
  if (!member) return null;

  return (
    <div className="flex items-center justify-between">
      <MemberDiceBreakdown member={member} />
      <GMMemberControls member={member} />
    </div>
  );
}

function GMMemberControls({ member }: { member: GroupRollMember }) {
  const {
    handleGroupRollLock,
    handleChangeGroupRollLeader,
    handleRemoveGroupRollMember,
  } = useGroupRoll();

  const toggleLeader = () =>
    handleChangeGroupRollLeader(member.charName, !member.leader);

  const remove = () => handleRemoveGroupRollMember(member.charName);

  const toggleLock = () =>
    handleGroupRollLock(member.charName, !member.lockedIn);

  return (
    <div className="flex gap-2">
      <Button size="icon" variant="outline" onClick={toggleLeader}>
        {member.leader ? (
          <UserMinus className="text-amber-500" />
        ) : (
          <UserStar className="text-amber-500" />
        )}
      </Button>
      <Button size="icon" variant="outline" onClick={remove}>
        <UserX className="text-red-500" />
      </Button>
      <LockButton isLocked={member.lockedIn} onClick={toggleLock} />
    </div>
  );
}

function MemberRollSection({ member }: { member: GroupRollMember }) {
  const { rollLeft, rollRight } = useRoll();
  const { handleGroupRollLock } = useGroupRoll();
  const { name } = useCharacterSheet();

  return (
    <div>
      <div className="flex gap-4">
        <div className="w-full">
          <RollSection.RollSelect disabled={member.lockedIn} />
        </div>
        <LockButton
          isLocked={member.lockedIn}
          disabled={!rollLeft || !rollRight}
          onClick={() => handleGroupRollLock(name, !member.lockedIn)}
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <RollSection.BonusDice disabled={member.lockedIn} />
        <RollSection.EmotionSection disabled={member.lockedIn} />
      </div>
    </div>
  );
}

function LockButton({
  isLocked,
  disabled = false,
  onClick,
}: {
  isLocked: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <Button size="icon" variant="outline" onClick={onClick} disabled={disabled}>
      <LockButtonIcon isLocked={isLocked} />
    </Button>
  );
}

function LockButtonIcon({ isLocked }: { isLocked: boolean }) {
  return isLocked ? (
    <LockKeyhole size={18} className="text-lime-500" />
  ) : (
    <LockKeyholeOpen size={18} className="text-zinc-500" />
  );
}

function GroupJoinControl() {
  const {
    groupRoll,
    setGroupRollDialogOpen,
    joinGroupRoll,
    handleRemoveGroupRollMember,
  } = useGroupRoll();

  const { name } = useCharacterSheet();

  const leave = () => {
    handleRemoveGroupRollMember(name);
    setGroupRollDialogOpen(false);
  };

  const isMember = groupRoll.some((member) => member.charName === name);

  return isMember ? (
    <Button variant="destructive" size="sm" onClick={leave}>
      <DoorClosed /> Leave
    </Button>
  ) : (
    <Button variant="outline" size="sm" onClick={() => joinGroupRoll(name)}>
      <DoorOpen /> Join
    </Button>
  );
}

function AlertControl() {
  const { handleGroupRollAlert } = useGroupRoll();
  return (
    <Button
      variant="destructive"
      size="sm"
      onClick={() => handleGroupRollAlert()}
    >
      <Megaphone /> Alert
    </Button>
  );
}

function RollControls() {
  const { groupRoll, handleGroupRoll } = useGroupRoll();

  const hasLeader = groupRoll.some((member) => member.leader);
  const allLockedIn = groupRoll.every((member) => member.lockedIn);

  return (
    <div className="flex gap-4">
      <Button
        variant="secondary"
        size="sm"
        onClick={async () => {
          handleGroupRoll("project");
        }}
        disabled={!allLockedIn || !hasLeader}
      >
        <Cog /> Project
      </Button>
      <Button
        onClick={async () => {
          handleGroupRoll("action");
        }}
        size="sm"
        className="flex items-center gap-2"
        disabled={!allLockedIn || !hasLeader}
      >
        <Dices /> Action
      </Button>
    </div>
  );
}

GroupRollDialog.LeaderSection = LeaderSection;
GroupRollDialog.GMLeaderSection = GMLeaderSection;
GroupRollDialog.MemberRollSection = MemberRollSection;
GroupRollDialog.MemberInfoSection = MemberInfoSection;
GroupRollDialog.GMMemberSection = GMMemberSection;
GroupRollDialog.JoinControl = GroupJoinControl;
GroupRollDialog.RollControls = RollControls;
GroupRollDialog.AlertControl = AlertControl;

export default GroupRollDialog;
