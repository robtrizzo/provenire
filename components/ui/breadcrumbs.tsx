"use client";
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
import { usePathname } from "next/navigation";

export default function Breadcrumbs({
  crumbs, // optional override
}: {
  crumbs?: { name: string; href: string }[];
}) {
  const pathname = usePathname();
  const generatedBreadcrumbs = crumbs || generateBreadcrumbs(pathname);
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 py-4">
      <SidebarTrigger className="ml-1" />
      <Separator
        orientation="vertical"
        className={cn(
          "mr-2 h-4",
          generatedBreadcrumbs && generatedBreadcrumbs?.length > 0
            ? "visible"
            : "hidden"
        )}
      />
      <Breadcrumb>
        <BreadcrumbList>
          {generatedBreadcrumbs?.map((crumb, index) => [
            <BreadcrumbItem key={crumb.name} className="hidden md:block">
              {crumb.href === "#" ? (
                <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={crumb.href}>{crumb.name}</BreadcrumbLink>
              )}
            </BreadcrumbItem>,
            index < generatedBreadcrumbs.length - 1 && [
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

function generateBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  return segments.map((segment, index) => {
    let href;
    if (index === segments.length - 1) {
      href = "#";
    } else {
      href = "/" + segments.slice(0, index + 1).join("/");
    }
    const name = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
    return { name, href };
  });
}
