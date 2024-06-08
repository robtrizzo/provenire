import { TypographyH3 } from '../typography';
import RoomCard from '@/components/ui/rooms/roomCard';
import { RoomUserWithPopulatedRoom } from '@/types/db';
export default async function UserRooms({
  className,
  rooms,
}: {
  className?: string;
  rooms: RoomUserWithPopulatedRoom[];
}) {
  if (!rooms?.length) {
    return <div className={className}>No rooms</div>;
  }
  return (
    <div className={className}>
      <TypographyH3>Chat Rooms</TypographyH3>
      {rooms.map(({ room }) => (
        <RoomCard key={room.id} room={room} className="mt-1" />
      ))}
    </div>
  );
}
