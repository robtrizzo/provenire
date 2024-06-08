import { Room } from '@/types/db';
import AcceptInviteButton from './acceptInviteButton';
import RejectInviteButton from './rejectInviteButton';

export default function RoomInvite({ room }: { room: Room }) {
  if (!room) {
    return null;
  }
  return (
    <div className="flex gap-2 items-center">
      <span>{room.name}</span>
      <AcceptInviteButton roomId={room.id} className="ml-auto h-8" />
      <RejectInviteButton roomId={room.id} className="h-8" />
    </div>
  );
}
