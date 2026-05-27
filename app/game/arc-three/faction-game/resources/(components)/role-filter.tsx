export const ROLES = [
  "Auger",
  "Cipher",
  "Lock",
  "Pact",
  "Scaffold",
  "Seeker",
  "Shade",
  "Vault",
  "Wright",
] as const;

export type Role = (typeof ROLES)[number];
export const DIM_COLOR = "#374151";

interface RoleFilterProps {
  selectedRoles: Set<Role>;
  onToggle: (role: Role) => void;
  onClear: () => void;
}

export function RoleFilter({
  selectedRoles,
  onToggle,
  onClear,
}: RoleFilterProps) {
  return (
    <div className="flex justify-center flex-wrap gap-2 p-4">
      {ROLES.map((role) => (
        <button
          key={role}
          onClick={() => onToggle(role)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            selectedRoles.has(role)
              ? "bg-primary text-primary-foreground ring-2 ring-primary/50"
              : "bg-muted text-muted-foreground hover:bg-muted/70"
          }`}
        >
          {role}
        </button>
      ))}
      <button
        onClick={onClear}
        className={`px-3 py-1 rounded-full text-sm font-medium bg-destructive/30 text-destructive hover:bg-destructive/60 transition-colors ${
          selectedRoles.size === 0 ? "invisible" : ""
        }`}
      >
        Clear
      </button>
    </div>
  );
}
