import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { db } from '@/drizzle/db';
import { eq } from 'drizzle-orm';
import { RoomUsersTable } from '@/drizzle/schema';

export async function GET(
  _req: Request,
  { params }: { params: { roomId: string } }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!['alpha-tester', 'admin'].includes(session?.user?.role as string)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  const roomId = params.roomId;
  if (!roomId) {
    return NextResponse.json({ error: 'Room ID is required' }, { status: 400 });
  }

  const members = await db.query.RoomUsersTable.findMany({
    where: eq(RoomUsersTable.roomId, roomId),
    with: {
      user: true,
    },
  });
  if (!members) {
    return NextResponse.json({ error: 'No members' }, { status: 404 });
  }
  return NextResponse.json({ members });
}
