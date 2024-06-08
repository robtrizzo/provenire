import { auth } from '@/auth/index';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/drizzle/db';
import { MessagesTable } from '@/drizzle/schema';
import { NewMessage } from '@/types/db';
import { pusherServer } from '@/lib/pusher';

async function insertMessage(message: NewMessage) {
  return db.insert(MessagesTable).values(message).returning();
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  if (!['alpha-tester', 'admin'].includes(session?.user?.role as string)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  const { roomId, message } = await req.json();
  if (!roomId) {
    return NextResponse.json({ error: 'Room ID is required' }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 });
  }
  if (message.length > 1000) {
    return NextResponse.json({ error: 'Message is too long' }, { status: 400 });
  }
  const text = message;
  const createdAt = new Date();
  try {
    const [message] = await insertMessage({
      email: session.user.email,
      message: text,
      room: roomId,
      createdAt,
    });
    console.log('Message created', message);
    pusherServer.trigger(`room__${roomId}__messages`, 'new-message', {
      ...message,
      user: {
        email: session.user?.email,
        displayName: session.user?.name,
        avatar: session.user?.image,
        id: session.user?.id,
      },
    });
    return NextResponse.json({ message }, { status: 201 });
  } catch (error) {
    console.error('Error creating message', error);
    return NextResponse.json(
      { error: 'Error creating message' },
      { status: 500 }
    );
  }
}
