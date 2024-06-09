import { TypographyH1 } from '@/components/ui/typography';
import MessageForm from '@/components/ui/chat/messageForm';
import Messages from '@/components/ui/chat/messages';
import Members from '@/components/ui/chat/members';
import { getRoom } from '@/actions/rooms';

export default async function Page({ params }: { params: { roomId: string } }) {
  const roomId = params.roomId;
  if (!roomId) {
    return <div>Room Not Found</div>;
  }
  const room = await getRoom({ roomId });
  if (!room) {
    return <div>Room Not Found</div>;
  }
  return (
    <div className="flex flex-col flex-grow p-4 md:p-6">
      <TypographyH1 className="mb-2">{room.name}</TypographyH1>
      <div className="flex flex-row flex-grow align-top gap-2 border-t-2">
        <div className="flex flex-col flex-grow w-full overflow-hidden">
          <Messages className="flex flex-col flex-grow h-0 p-4 overflow-auto" />
          <MessageForm roomId={roomId} />
        </div>
        <Members roomId={roomId} className="border-l-2 pl-6 pt-6 flex-grow " />
      </div>
    </div>
  );
}
