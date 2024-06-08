import { auth } from '@/auth';
import { db } from '@/drizzle/db';
import { RoomUsersTable } from '@/drizzle/schema';
import { and, eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET(_req: Request) {
  const session = await auth();
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }
  const userId = session?.user?.id;
  if (!userId) {
    return new Response('User ID is required', { status: 400 });
  }
  if (!['alpha-tester', 'admin'].includes(session?.user?.role as string)) {
    return new Response('Unauthorized', { status: 403 });
  }
  try {
    const rooms = await db.query.RoomUsersTable.findMany({
      where: and(
        eq(RoomUsersTable.userId, userId),
        eq(RoomUsersTable.status, 'invited')
      ),
      with: {
        room: true,
      },
    });
    console.debug('Rooms invited to', rooms);
    return NextResponse.json({ rooms });
  } catch (error) {
    console.error('Error fetching room invites', error);
    return new Response('Error fetching room invites', { status: 500 });
  }
}
