import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useResource } from "@/contexts/arc3CharacterSheetContext";
import { cn } from "@/lib/utils";
import {
  Boxes,
  Brain,
  ChessPawn,
  Droplet,
  Droplets,
  Handshake,
  Minus,
  Plus,
  Speech,
  Wheat,
} from "lucide-react";
import { ReactNode, useState } from "react";

type Resource = {
  key: string;
  label: string;
  icon: ReactNode;
  description?: ReactNode;
};

const RESOURCES: Resource[] = [
  {
    key: "advantage",
    label: "Advantage",
    icon: (
      <InlineSymbol size={24}>
        <Advantage />
      </InlineSymbol>
    ),
    description: (
      <div className="text-sm text-muted-foreground">
        <p>
          Advantage is gained via rolling{" "}
          <InlineSymbol size={24}>
            <Advantage />
          </InlineSymbol>{" "}
          on a die face or via various abilities. Some special abilities are
          enabled by:
        </p>
        <ul className="mx-4 mt-1 list-disc">
          <li>having Advantage</li>
          <li>spending Advantage</li>
          <li>gaining Advantage while you already have it</li>
        </ul>
        <p className="mt-2">You can also spend Advantage to:</p>
        <ul className="mx-4 mt-1 list-disc">
          <li>
            <b>assist</b> a teammate
          </li>
          <li>
            reduce the cost of <b>resisting</b> by <b>1 stress</b>
          </li>
          <li>reduce the resource cost of an ability by 1</li>
          <li>
            gain a <i>narrative edge</i>
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "blood",
    label: "Blood",
    icon: <Droplets className="h-4 w-4 text-red-500" />,
    description: (
      <div className="text-sm text-muted-foreground">
        <p>
          Blood is gained by harvesting it from your foes or tithing it from
          communities. It can be spent to fuel{" "}
          <b className="text-rose-500">Aldams</b> or{" "}
          <b className="text-orange-500">Transformations</b>.
        </p>
      </div>
    ),
  },
  {
    key: "water",
    label: "Water",
    icon: <Droplet className="h-4 w-4 text-blue-500" />,
    description: (
      <div className="text-sm text-muted-foreground">
        <p>
          Water is gained by collecting from the rain chamber. It can be spent
          to fuel <b className="text-fuchsia-500">Donums</b>.
        </p>
      </div>
    ),
  },
  {
    key: "food",
    label: "Food",
    icon: <Wheat className="h-4 w-4 text-amber-500" />,
    description: (
      <div className="text-sm text-muted-foreground">
        <p>
          Food is gained by overseer deliveries or harvested from the dead. It
          can be spent to reduce <b>starvation clocks</b>.
        </p>
      </div>
    ),
  },
  {
    key: "materials",
    label: "Materials",
    icon: <Boxes className="h-4 w-4 text-purple-500" />,
    description: (
      <div className="text-sm text-muted-foreground">
        <p>
          Materials are gained by scavenging, scrapping, and overseer
          deliveries. They can be spent to:
        </p>
        <ul className="mx-4 mt-1 list-disc">
          <li>acquire a large amount of equipment</li>
          <li>manufacture gear for the rebellion</li>
          <li>repair or construct structures and machines</li>
          <li>deliver shipments to the overseers</li>
        </ul>
      </div>
    ),
  },
  {
    key: "rep",
    label: "Rep",
    icon: <Speech className="h-4 w-4 text-lime-500" />,
    description: (
      <div className="text-sm text-muted-foreground">
        <p>
          Rep is gained by taking credit for rebellious action. It can be spent
          to:
        </p>
        <ul className="mx-4 mt-1 list-disc">
          <li>gain bonus dice to inspire people or flex accomplishments</li>
          <li>recruit gangs and experts</li>
          <li>increase a community&apos;s tier</li>
        </ul>
      </div>
    ),
  },
  {
    key: "goodwill",
    label: "Goodwill",
    icon: <Handshake className="h-4 w-4 text-pink-500" />,
    description: (
      <div className="text-sm text-muted-foreground">
        <p>
          Goodwill is gained by helping communities in need and maintaining
          strong alliances. It can be spent to:
        </p>
        <ul className="mx-4 mt-1 list-disc">
          <li>create community spaces</li>
          <li>forge alliances</li>
          <li>gain bonus dice in good faith negotiations</li>
        </ul>
      </div>
    ),
  },
  {
    key: "intel",
    label: "Intel",
    icon: <Brain className="h-4 w-4 text-teal-500" />,
    description: (
      <div className="text-sm text-muted-foreground">
        <p>
          Intel is gained via spy networks, loyal enforcers, and public
          community spaces. It can be spent to gain bonus dice on{" "}
          <b>gather information</b> checks or in bad faith negotiations.
        </p>
      </div>
    ),
  },
  {
    key: "manpower",
    label: "Manpower",
    icon: <ChessPawn className="h-4 w-4 text-orange-500" />,
    description: (
      <div className="text-sm text-muted-foreground">
        <p>
          Manpower is gained via population in loyal factions, inspired workers,
          and <b>rep</b>. It can be spent to:
        </p>
        <ul className="mx-4 mt-1 list-disc">
          <li>replenish or upgrade a gang</li>
          <li>gain bonus dice on a character project</li>
          <li>staff a community project</li>
        </ul>
      </div>
    ),
  },
];

export default function ResourcesDialog({ open, onOpenChange }: DialogProps) {
  const [selectedKey, setSelectedKey] = useState(RESOURCES[0].key);
  const selected = RESOURCES.find((r) => r.key === selectedKey) ?? RESOURCES[0];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden">
        <div className="flex h-[460px]">
          {/* Sidebar */}
          <nav className="flex flex-col w-36 border-r shrink-0">
            <DialogHeader className="px-4 py-4 border-b">
              <DialogTitle>Resources</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col py-2 overflow-y-auto">
              {RESOURCES.map((r) => (
                <button
                  key={r.key}
                  onClick={() => setSelectedKey(r.key)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm text-left transition-colors hover:bg-muted ${
                    selectedKey === r.key ? "bg-muted font-medium" : ""
                  }`}
                >
                  {r.icon}
                  {r.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Detail panel */}
          <ResourceDetail resource={selected} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ResourceDetail({ resource }: { resource: Resource }) {
  const [res, set] = useResource(resource.key);

  return (
    <div className="flex flex-col flex-1 p-6 gap-5 overflow-y-auto">
      <div className="flex items-center justify-center gap-2 font-semibold">
        {resource.icon}
        {resource.label}
      </div>

      <div className="flex items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-muted-foreground">Current</span>
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="outline"
              className="h-7 w-7"
              onClick={() => set("current", res.current - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span
              className={cn(
                "w-6 text-center tabular-nums",
                res.current === 0 && "text-muted-foreground",
                res.current > res.max && "text-red-500",
              )}
            >
              {res.current}
            </span>
            <Button
              size="icon"
              variant="outline"
              className="h-7 w-7"
              onClick={() => set("current", res.current + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-muted-foreground">Max</span>
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="outline"
              className="h-7 w-7"
              onClick={() => set("max", res.max - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span
              className={cn(
                "w-6 text-center tabular-nums",
                res.max === 0 && "text-muted-foreground",
              )}
            >
              {res.max}
            </span>
            <Button
              size="icon"
              variant="outline"
              className="h-7 w-7"
              onClick={() => set("max", res.max + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
      <Button
        size="sm"
        variant="outline"
        className="text-xs text-muted-foreground"
        onClick={() => {
          set("current", 0);
          set("max", res.default);
        }}
      >
        Reset to default
      </Button>

      {resource.description}
    </div>
  );
}
