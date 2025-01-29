import {NextResponse} from "next/server";
import {auth} from "@/auth";
import {Roll, validateRoll} from "@/types/roll";
import redis from "@/lib/redis";
import {checkUserAuthenticated, checkUserRole} from "@/lib/auth";

async function addRoll(userId: string, roll: Roll): Promise<void> {
    const key = `user:${userId}:rolls`;
    roll.timestamp = new Date().toISOString();
    await redis.lpush(key, JSON.stringify(roll));
}

async function getRolls(userId: string, cursor = 0, pageSize = 20): Promise<Roll[]> {
    const key = `user:${userId}:rolls`;
    const rolls = await redis.lrange(key, cursor, cursor + pageSize - 1);
    // @ts-expect-error this shit dumb
    return rolls;
}

async function clearRolls(userId: string): Promise<void> {
    const key = `user:${userId}:rolls`;
    await redis.del(key);
}

export async function POST(request: Request): Promise<NextResponse> {
    const session = await auth();

    const unauthenticatedResponse = checkUserAuthenticated(session);
    if (unauthenticatedResponse) {
        return unauthenticatedResponse;
    }

    const unauthorizedResponse = checkUserRole(session, ["player"]);
    if (unauthorizedResponse) {
        return unauthorizedResponse;
    }

    if (!request.body) {
        return new NextResponse(null, {status: 400});
    }

    const roll = await request.json() as Roll;
    if (!roll) {
        return new NextResponse(null, {status: 400});
    }

    try {
        validateRoll(roll);
    } catch (e) {
        console.error('Error parsing roll', e);
        return NextResponse.json(
            {error: "Error parsing roll"},
            {status: 400});
    }

    try {
        await addRoll(session!.user!.id, roll);
    } catch (error) {
        console.error('Error adding roll', error);
        return NextResponse.json(
            {error: 'Error adding roll'},
            {status: 500}
        );
    }

    return NextResponse.json(
        {message: 'Roll added successfully'},
        {status: 201}
    );
}

export async function GET(request: Request) {
    const session = await auth();

    const unauthenticatedResponse = checkUserAuthenticated(session);
    if (unauthenticatedResponse) {
        return unauthenticatedResponse;
    }

    const unauthorizedResponse = checkUserRole(session, ["player"]);
    if (unauthorizedResponse) {
        return unauthorizedResponse;
    }

    const {searchParams} = new URL(request.url);
    const cursor = parseInt(searchParams.get('cursor') || '0', 10);
    const pageSize = parseInt(searchParams.get('page_size') || '20', 10);

    try {
        const rolls = await getRolls(session!.user!.id, cursor, pageSize);
        return NextResponse.json(rolls);
    } catch (error) {
        console.error('Error getting rolls', error);
        return NextResponse.json(
            {error: 'Error getting rolls'},
            {status: 500}
        );
    }
}

export async function DELETE(request: Request) {
    const session = await auth();

    const unauthenticatedResponse = checkUserAuthenticated(session);
    if (unauthenticatedResponse) {
        return unauthenticatedResponse;
    }

    const unauthorizedResponse = checkUserRole(session, ["player"]);
    if (unauthorizedResponse) {
        return unauthorizedResponse;
    }

    await clearRolls(session!.user!.id);
    return NextResponse.json({message: 'Rolls cleared successfully'}, {status: 200});
}