import { BuildupCheckboxes } from "@/components/buildup-checkboxes";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function WealthTrackerSkeleton() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center flex-wrap gap-4">
        <span className="font-cyber">¤P</span>
        <Skeleton className="h-[35px] w-[35px] rounded-full" />
        <BuildupCheckboxes
          clearPosition="start"
          current={0}
          max={8}
          numDisabled={8}
          onChange={(n: number) => {
            console.log(n);
          }}
        />
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            className="text-muted-foreground text-center"
            disabled={true}
          >
            -
          </Button>
          <span className="font-cyber text-xs">lifestyle</span>
          <Button
            variant="ghost"
            className="text-muted-foreground text-center"
            disabled={true}
          >
            +
          </Button>
        </div>
      </div>
      <Separator className="my-2" />
      <div className="flex items-center flex-wrap gap-4">
        <span className="font-cyber">¤F</span>
        <Skeleton className="h-[35px] w-[35px] rounded-full" />
        <BuildupCheckboxes
          clearPosition="start"
          current={0}
          max={4}
          numDisabled={4}
          onChange={(n: number) => {
            console.log(n);
          }}
        />
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            className="text-muted-foreground text-center"
            disabled={true}
          >
            +
          </Button>
          <span className="font-cyber text-xs">lifestyle</span>
          <Button
            variant="ghost"
            className="text-muted-foreground text-center"
            disabled={true}
          >
            -
          </Button>
        </div>
      </div>
      <Separator className="my-2" />
    </div>
  );
}
