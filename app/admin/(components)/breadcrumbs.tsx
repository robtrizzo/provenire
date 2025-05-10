import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function Breadcrumbs({
  crumbs,
}: {
  crumbs?: { name: string; href: string }[];
}) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          {crumbs?.map((crumb, index) => [
            <BreadcrumbItem key={crumb.name}>
              {crumb.href === "#" ? (
                <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={crumb.href}>{crumb.name}</BreadcrumbLink>
              )}
            </BreadcrumbItem>,
            index < crumbs.length - 1 && [
              <BreadcrumbSeparator key={`${crumb.name}-sep`} />,
            ],
          ])}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
