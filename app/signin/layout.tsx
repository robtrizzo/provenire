'use server';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-12">{children}</div>;
}
