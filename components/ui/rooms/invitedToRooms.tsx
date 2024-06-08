'use client';

import { RoomUserWithPopulatedRoom } from '@/types/db';
import RoomInvite from './roomInvite';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { pusherClient } from '@/lib/pusher';
import { useSession } from 'next-auth/react';

export default function InvitedToRooms({ className }: { className?: string }) {
  const { data } = useQuery({
    queryKey: ['invited-rooms'],
    queryFn: async () => {
      const response = await fetch(`/api/rooms/invites`);
      return response.json();
    },
  });

  if (!data) {
    return null;
  }

  const rooms: RoomUserWithPopulatedRoom[] = data.rooms;

  return <InvitedToRoomsContent rooms={rooms} className={className} />;
}

function InvitedToRoomsContent({
  rooms,
  className,
}: {
  rooms: RoomUserWithPopulatedRoom[];
  className?: string;
}) {
  const { data: session } = useSession();

  const [invitedRooms, setInvitedRooms] =
    useState<RoomUserWithPopulatedRoom[]>();

  /**
   * this is responsible for updating invitedRooms when the rooms prop changes
   * due to a query invalidation and refetch in the parent component
   */
  useEffect(() => {
    setInvitedRooms(rooms);
  }, [rooms]);

  useEffect(() => {
    pusherClient.subscribe(`user__${session?.user?.id}__room-invites`);

    const roomInviteHandler = (roomUser: RoomUserWithPopulatedRoom) => {
      setInvitedRooms((prev) => [...(prev || []), roomUser]);
    };
    pusherClient.bind('room-invites', roomInviteHandler);

    const roomRejectHandler = ({ roomId }: { roomId: string }) => {
      setInvitedRooms((prev) => prev?.filter(({ room }) => room.id !== roomId));
    };
    pusherClient.bind('room-reject', roomRejectHandler);

    return () => {
      pusherClient.unsubscribe(`user__${session?.user?.id}__room-invites`);
      pusherClient.unbind('room-invites', roomInviteHandler);
      pusherClient.unbind('room-reject', roomRejectHandler);
    };
  }, [session?.user?.id]);

  if (!invitedRooms || invitedRooms.length === 0) {
    return null;
  }

  return (
    <Card className={cn('p-6 grow basis-96 h-44 overflow-auto', className)}>
      <CardTitle>Invited to Chat Rooms</CardTitle>
      <CardContent className="p-0">
        {invitedRooms?.map(({ room }) => (
          <div key={room?.id} className="mt-2">
            <RoomInvite room={room} />
            <Separator className="mt-1" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
