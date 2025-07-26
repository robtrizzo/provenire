"use client";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Hand, RefreshCw } from "lucide-react";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useOperatives } from "@/contexts/operativesContext";
import { useSession } from "next-auth/react";
import UserAvatar from "@/components/ui/UserAvatar";

const votecardstyle =
  "border-[1px] p-2 rounded-md w-full hover:border-2 mb-[2px] hover:mb-0";

export default function OperativeVotePopover({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-2 right-2"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Hand />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <VoteSection name={name} />
      </PopoverContent>
    </Popover>
  );
}

function VoteSection({ name }: { name: string }) {
  const session = useSession();
  const {
    MAX_POINTS,
    pointsSpent,
    refetchVotes,
    votesFetching,
    castVoteError,
  } = useOperatives();

  if (!session.data?.user) {
    return (
      <div className="flex flex-col items-center gap-2">
        <TypographyH4>Login Required</TypographyH4>
        <TypographyP>
          You must be logged in to cast a vote for this operative.
        </TypographyP>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <TypographyH4>Indicate Interest</TypographyH4>
      <span className="text-xs">
        Select your interest level in this operative.
      </span>
      <TypographyP>
        Your points remaining: <b>{MAX_POINTS - pointsSpent}</b>
      </TypographyP>
      {castVoteError && (
        <span className="text-red-500 text-xs">Error: {castVoteError}</span>
      )}
      <div className="flex flex-col items-center gap-2 relative">
        <VoteTypeSection name={name} vote="please" />
        <VoteTypeSection name={name} vote="seemsCool" />
        <VoteTypeSection name={name} vote="noOpinion" />
        <VoteTypeSection name={name} vote="fuckNo" />
        {votesFetching && (
          <div className="absolute top-0 left-0 w-full h-full border-2 border-dashed border-muted rounded-md pointer-events-none z-20 flex items-center justify-center gap-2">
            <b>LOADING</b> <RefreshCw className="animate-spin" />
          </div>
        )}
      </div>
      <div className="flex justify-center mt-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={async () => {
            refetchVotes();
          }}
        >
          <RefreshCw /> Refresh Votes
        </Button>
      </div>
    </div>
  );
}

function getVoteTypeSectionBorderColor(vote: CharacterOptionVoteType): string {
  switch (vote) {
    case "please":
      return "border-green-500";
    case "seemsCool":
      return "border-indigo-500";
    case "fuckNo":
      return "border-red-500";
    default:
      return "border-border";
  }
}

function VoteTypeSectionDescriptor({
  vote,
}: {
  vote: CharacterOptionVoteType;
}) {
  switch (vote) {
    case "please":
      return (
        <>
          <span className="text-muted-foreground">(</span>
          <b>3</b>
          <span className="text-muted-foreground">)</span> PLEASE PLEASE PLEASE
          PLEASE PLEASE
        </>
      );
    case "seemsCool":
      return (
        <>
          <span className="text-muted-foreground">(</span>
          <b>1</b>
          <span className="text-muted-foreground">)</span> Seems cool
        </>
      );
    case "fuckNo":
      return <>Fuck no please not this one</>;
    default:
      return <>No opinion</>;
  }
}

function VoteTypeSection({
  name,
  vote,
}: {
  name: string;
  vote: CharacterOptionVoteType;
}) {
  const { votes, castVote, votesFetching } = useOperatives();

  const operativeVotes = votes.find((vote) => vote.name === name)?.votes[vote];

  return (
    <div
      className={cn(
        votecardstyle,
        getVoteTypeSectionBorderColor(vote),
        votesFetching && "opacity-20"
      )}
      onClick={() => {
        if (votesFetching) return;
        castVote({ operative: name, vote });
      }}
    >
      <VoteTypeSectionDescriptor vote={vote} />
      <div className="flex flex-col gap-1">
        {operativeVotes?.map((user) => (
          <UserAvatar key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
