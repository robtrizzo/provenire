import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Breadcrumbs({
  crumbs,
}: {
  crumbs?: { name: string; href: string }[];
}) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 py-4">
      <SidebarTrigger className="ml-1" />
      <Separator
        orientation="vertical"
        className={cn(
          "mr-2 h-4",
          crumbs && crumbs?.length > 0 ? "visible" : "hidden"
        )}
      />
      <Breadcrumb>
        <BreadcrumbList>
          {crumbs?.map((crumb, index) => [
            <BreadcrumbItem key={crumb.name} className="hidden md:block">
              {crumb.href === "#" ? (
                <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={crumb.href}>{crumb.name}</BreadcrumbLink>
              )}
            </BreadcrumbItem>,
            index < crumbs.length - 1 && [
              <BreadcrumbSeparator
                className="hidden md:block"
                key={`${crumb.name}-sep`}
              />,
            ],
          ])}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
