import { Condition } from "@/types/game";
import dynamic from "next/dynamic";

interface ConditionDescriptionProps {
  condition: Condition;
}

const componentCache = new Map<string, ReturnType<typeof dynamic>>();

function getConditionComponent(slug: string, name: string) {
  if (!componentCache.has(slug)) {
    componentCache.set(
      slug,
      dynamic(
        () =>
          import(`./conditions/${slug}`).catch(() => ({
            default: () => (
              <span className="text-red-500">Condition not found: {name}</span>
            ),
          })),
        {
          ssr: false,
          loading: () => (
            <span className="text-muted-foreground animate-pulse">
              Loading {name}...
            </span>
          ),
        },
      ),
    );
  }
  return componentCache.get(slug)!;
}

export default function ConditionDescription({
  condition,
}: ConditionDescriptionProps) {
  const { name, slug } = condition;
  const DescriptionComponent = getConditionComponent(slug, name);
  return <DescriptionComponent />;
}
