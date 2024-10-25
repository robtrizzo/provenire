'use server';

import Navbar from '@/components/navbar';
import Home from '@/components/ui/home';

export default async function Page() {
  return (
    <div className="grid min-h-screen w-full">
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 lg:gap-6">
          <Home />
        </main>
      </div>
    </div>
  );
}
