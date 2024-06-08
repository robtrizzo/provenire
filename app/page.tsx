'use server';

import Navbar from '@/components/navbar';
import Home from '@/components/ui/home';

export default async function Page() {
  return (
    <Navbar>
      <Home />
    </Navbar>
  );
}
