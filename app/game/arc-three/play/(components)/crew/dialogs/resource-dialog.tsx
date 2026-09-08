import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";
import {
  BookOpen,
  Boxes,
  Brain,
  ChessPawn,
  Droplet,
  Droplets,
  Handshake,
  Minus,
  Plus,
  Speech,
  Trash2,
  Wheat,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ResourceProject,
  useResourceProjects,
} from "@/contexts/arc3CrewSheetContext";
import { nanoid } from "@/lib/nanoid";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Clock from "@/components/clock";
import ClockCost from "@/components/clock-cost";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import XPClocks from "@/components/character-sheet/xp-clocks";
import { useResource } from "@/contexts/arc3CrewSheetContext";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

type Resource = {
  key: string;
  label: string;
  icon: ReactNode;
  description?: ReactNode;
};

const RESOURCES: Resource[] = [
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

export default function ResourcesDialog() {
  const [selectedKey, setSelectedKey] = useState(RESOURCES[0].key);
  const selected = RESOURCES.find((r) => r.key === selectedKey) ?? RESOURCES[0];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <BookOpen />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden">
        <div className="flex h-135">
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
  const { resource: crewResource, updateResource } = useResource(
    resource.label.toLocaleLowerCase(),
  );
  return (
    <div className="max-w-120 flex flex-col flex-1 p-6 gap-5 overflow-y-auto">
      <div className="flex items-center justify-center gap-2 font-semibold">
        {resource.icon}
        {resource.label}
      </div>

      <XPClocks key={resource.label + crewResource.current}>
        <XPClocks.Clocks
          initial={crewResource.current}
          max={crewResource.max}
          setVal={(n) => updateResource({ current: n })}
        />
        <XPClocks.Controls
          initial={crewResource.current}
          setVal={(n) => updateResource({ current: n })}
          addLabel="+"
          removeLabel="-"
        />
      </XPClocks>

      {resource.description}

      <ResourceProjects name={resource.key} />
    </div>
  );
}

function ResourceProjects({ name }: { name: string }) {
  const { projects, addProject, removeProject, updateProject } =
    useResourceProjects(name);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [cost, setCost] = useState(1);
  const [type, setType] = useState<"repeatable" | "unlockable">("repeatable");

  function handleAdd() {
    const trimmed = projectName.trim();
    if (!trimmed) return;
    addProject({
      id: nanoid(),
      type,
      name: trimmed,
      description: projectDescription.trim() || undefined,
      cost: Math.max(1, cost),
      ...(type === "unlockable" ? { unlocked: false } : {}),
    });
    setProjectName("");
    setProjectDescription("");
    setCost(1);
  }

  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Projects
      </span>

      <div className="flex items-center gap-2">
        <Select value={type} onValueChange={(v) => setType(v as typeof type)}>
          <SelectTrigger className="h-8 w-32 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="repeatable">Repeatable</SelectItem>
            <SelectItem value="unlockable">Unlockable</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="Project name…"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          className="h-8 text-sm"
        />
        <Input
          type="number"
          min={1}
          value={cost}
          onChange={(e) => setCost(Math.max(1, Number(e.target.value)))}
          className="h-8 w-16 text-sm"
          aria-label="Clock cost"
        />
        <Button
          size="sm"
          className="h-8"
          disabled={!projectName.trim()}
          onClick={handleAdd}
        >
          Add
        </Button>
      </div>
      <Input
        placeholder="Description (optional)…"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
        className="h-8 text-sm"
      />

      {projects.length > 0 && (
        <div className="flex flex-col gap-2">
          {projects.map((p) => (
            <ProjectRow
              key={p.id}
              project={p}
              onUpdate={(changes) => updateProject(p.id, changes)}
              onRemove={() => removeProject(p.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectRow({
  project,
  onUpdate,
  onRemove,
}: {
  project: ResourceProject;
  onUpdate: (changes: Partial<Omit<ResourceProject, "id">>) => void;
  onRemove: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(project.name);
  const [editDescription, setEditDescription] = useState(
    project.description ?? "",
  );
  const [editCost, setEditCost] = useState(project.cost);

  function openEdit() {
    setEditName(project.name);
    setEditDescription(project.description ?? "");
    setEditCost(project.cost);
    setEditing(true);
  }

  function handleSave() {
    const trimmed = editName.trim();
    if (!trimmed) return;
    onUpdate({
      name: trimmed,
      description: editDescription.trim() || undefined,
      cost: Math.max(1, editCost),
    });
    setEditing(false);
  }

  const row =
    project.type === "unlockable" ? (
      <div
        className={cn(
          "flex items-start gap-3",
          !project.unlocked && "opacity-50",
        )}
      >
        <Switch
          checked={project.unlocked ?? false}
          onCheckedChange={(checked) => onUpdate({ unlocked: checked })}
          aria-label={project.unlocked ? "Lock project" : "Unlock project"}
        />
        <div className="flex flex-col flex-1 min-w-0">
          <span className="text-sm font-medium">{project.name}</span>
          {project.description && (
            <span className="text-xs text-muted-foreground wrap">
              {project.description}
            </span>
          )}
        </div>
        <ClockCost r={24} ticks={6} num={project.cost} />
        <Button
          size="icon"
          variant="ghost"
          className="h-7 w-7 shrink-0 text-muted-foreground hover:text-destructive"
          onClick={onRemove}
        >
          <Trash2 className="h-3.5 w-3.5" />
        </Button>
      </div>
    ) : (
      <div className="flex items-start gap-3">
        <ClockCost r={24} ticks={6} num={project.cost} />
        <div className="flex flex-col flex-1 min-w-0">
          <span className="text-sm font-medium truncate">{project.name}</span>
          {project.description && (
            <span className="text-xs text-muted-foreground">
              {project.description}
            </span>
          )}
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="h-7 w-7 shrink-0 text-muted-foreground hover:text-destructive"
          onClick={onRemove}
        >
          <Trash2 className="h-3.5 w-3.5" />
        </Button>
      </div>
    );

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger asChild>{row}</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={openEdit}>Edit</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive" onClick={onRemove}>
            Remove
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      <Dialog open={editing} onOpenChange={setEditing}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            <Input
              placeholder="Project name…"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
              className="h-8 text-sm"
            />
            <Input
              placeholder="Description (optional)…"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className="h-8 text-sm"
            />
            <Input
              type="number"
              min={1}
              value={editCost}
              onChange={(e) => setEditCost(Math.max(1, Number(e.target.value)))}
              className="h-8 w-16 text-sm"
              aria-label="Clock cost"
            />
            <Button size="sm" disabled={!editName.trim()} onClick={handleSave}>
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
