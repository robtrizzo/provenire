import { NextResponse, NextRequest } from 'next/server';
import { auth } from '@/auth';
import { db } from '@/drizzle/db';
import { MessagesTable } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!['alpha-tester', 'admin'].includes(session?.user?.role as string)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  const email = session?.user?.email;
  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 401 });
  }
  const roomId = req.nextUrl.searchParams.get('roomId');
  if (!roomId) {
    return NextResponse.json({ error: 'Room ID is required' }, { status: 400 });
  }

  try {
    const messages = await db.query.MessagesTable.findMany({
      where: eq(MessagesTable.room, roomId),
      with: {
        user: true,
      },
    });
    return NextResponse.json({ messages });
  } catch (error) {
    console.error('Error getting messages', error);
    return NextResponse.json(
      { error: 'Error getting messages' },
      { status: 500 }
    );
  }
}
