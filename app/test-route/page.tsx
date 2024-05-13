import { auth } from '@/auth';
import WhoAmIServerAction from './WhoAmIServerAction';
import WhoAmIRSC from './WhoAmIRSC';
export default function Page() {
  const session = auth();

  async function onGetUserAction() {
    'use server';
    const session = await auth();
    return session?.user?.name ?? null;
  }

  return (
    <main>
      <div>Protected Page</div>
      <WhoAmIServerAction onGetUserAction={onGetUserAction} />
      <WhoAmIRSC />
    </main>
  );
}
