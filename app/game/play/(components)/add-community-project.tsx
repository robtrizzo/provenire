import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CommunityProject } from "@/types/game";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  TypographyH4,
  TypographyOrderedList,
  TypographyP,
} from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import CommunityProjectSummary from "./community-project-summary";
import communityProjects from "@/public/community_projects.json";

export default function AddCommunityProject({
  addCommunityProject,
}: {
  addCommunityProject: (category: string, project: CommunityProject) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="secondary">
          <Plus /> add project
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 max-h-96 overflow-y-auto">
        <TypographyH4 className="mt-0 capitalize">
          Community Projects
        </TypographyH4>
        <Separator className="my-2 " />
        {communityProjects.map((c, idx) => (
          <div key={`${c.name}${idx}`} className="mt-4">
            <TypographyP className="text-lg">{c.name}</TypographyP>
            <Separator />
            <TypographyOrderedList>
              {c.projects.map((p, idx) => (
                <li
                  key={`${p.name}${idx}`}
                  onClick={() => {
                    addCommunityProject(c.name, p);
                    setOpen(false);
                  }}
                >
                  <CommunityProjectSummary
                    communityProject={p}
                    className="mt-2 px-1 pt-[2px] rounded-md hover:bg-secondary"
                  />
                </li>
              ))}
            </TypographyOrderedList>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
