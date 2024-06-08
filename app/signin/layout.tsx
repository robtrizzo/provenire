'use server';
import Navbar from '@/components/navbar';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Navbar>
      <div className="p-12">{children}</div>
    </Navbar>
  );
}
