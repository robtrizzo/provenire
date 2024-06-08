import { TypographyH1 } from '@/components/ui/typography';
import CreateRoomCard from '@/components/ui/rooms/createRoomCard';
import UserRooms from '@/components/ui/rooms/userRooms';
import InvitedToRooms from '@/components/ui/rooms/invitedToRooms';
import { getUserRooms } from '@/actions/rooms';
import { RoomUserWithPopulatedRoom } from '@/types/db';

async function getRooms() {
  try {
    return await getUserRooms();
  } catch (error) {
    console.error('Error getting user rooms', error);
    return [];
  }
}

export default async function Page() {
  let rooms: RoomUserWithPopulatedRoom[] = await getRooms();

  return (
    <div className="p-6">
      <TypographyH1>Start a new chat room</TypographyH1>
      <div className="flex flex-wrap gap-8">
        <CreateRoomCard className="mt-6" />
        <InvitedToRooms className="mt-6" />
      </div>
      <UserRooms className="mt-6" rooms={rooms} />
    </div>
  );
}

export const dynamic = 'force-dynamic';
