import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { auth } from '@/auth/index';
import { db } from '@/drizzle/db';
import { CharactersTable } from '@/drizzle/schema';
import { NewCharacter } from '@/types/db';
import { v4 as uuidv4 } from 'uuid';

async function insertCharacter(character: NewCharacter) {
  return db.insert(CharactersTable).values(character).returning();
}

export async function POST(request: Request): Promise<NextResponse> {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  if (!['player', 'admin'].includes(session?.user?.role as string)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename) {
    return new NextResponse(null, { status: 400 });
  }

  if (!request.body) {
    return new NextResponse(null, { status: 400 });
  }

  const blob = await put(filename, request.body, {
    access: 'public',
  });

  try {
    const [character] = await insertCharacter({
      userId: session.user.id,
      name: filename,
      path: blob.downloadUrl,
      createdAt: new Date(),
      id: uuidv4(),
    });
    console.log('Character created', character);
  } catch (error) {
    console.error('Error creating character', error);
    return NextResponse.json(
      { error: 'Error saving character' },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: 'character saved successfully' },
    { status: 201 }
  );
}
