import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { auth } from '@/auth/index';

async function insertCharacter(character: unknown) {
  // TODO create character type
  // TODO insert character and return result
  console.log(character);
}

export async function POST(request: Request): Promise<NextResponse> {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  // TODO authorize based on role
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename) {
    return new NextResponse(null, { status: 400 });
  }

  if (!request.body) {
    return new NextResponse(null, { status: 400 });
  }

  // TODO assign results to const blob
  await put(filename, request.body, {
    access: 'public',
  });

  try {
    /**
     * TODO insert character.
     * structure should look like:
     * {
     *  userId: session.user.id,
     *  name: filename,
     *  path: blob.downloadUrl,
     *  createdAt: new Date(),
     *  id: uuidv4(),
     * }
     */
    const character = await insertCharacter('TODO');
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
