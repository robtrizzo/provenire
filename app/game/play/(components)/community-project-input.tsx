"use client";

import { useState } from "react";
import Clock from "@/components/clock";
import { Button } from "@/components/ui/button";
import { SaveIcon, Bomb } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import { CommunityProject } from "@/types/game";
import CommunityProjectSummary from "./community-project-summary";

export default function CommunityProjectInput({
  communityProject,
  updateCommunityProject,
  removeCommunityProject,
}: {
  communityProject: CommunityProject;
  updateCommunityProject: (ticks: number) => void;
  removeCommunityProject: () => void;
}) {
  const { name, description, clock } = communityProject;

  const [open, setOpen] = useState(false);
  const [ticks, setTicks] = useState(communityProject.ticks);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div>
          <CommunityProjectSummary
            communityProject={communityProject}
            className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex justify-between items-center">
          <TypographyH4 className="mt-0">{name}</TypographyH4>
          <Clock
            max={clock}
            current={ticks}
            setVal={(n) => {
              setTicks(n);
            }}
            width={35}
            height={35}
          />
        </div>
        <TypographyP>{description}</TypographyP>
        <div className="flex mt-2">
          <Button
            variant="destructive"
            type="button"
            onClick={() => {
              removeCommunityProject();
              setOpen(false);
            }}
          >
            <Bomb />
            Remove
          </Button>
          <Button
            variant="secondary"
            className="text-sm ml-auto"
            onClick={() => {
              updateCommunityProject(ticks);
              setOpen(false);
            }}
          >
            <SaveIcon />
            Save
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
