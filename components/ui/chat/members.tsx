'use client';
import { TypographyH3, TypographyH4 } from '@/components/ui/typography';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import InviteMemberForm from './inviteMemberForm';
import { RoomUserWithPopulatedUser } from '@/types/db';
import { Skeleton } from '../skeleton';
import { useEffect, useState } from 'react';
import { pusherClient } from '@/lib/pusher';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../button';
import { Users } from 'lucide-react';

export default function Members({
  roomId,
  className,
}: {
  roomId: string;
  className?: string;
}) {
  const { data, isPending } = useQuery({
    queryKey: [`room-${roomId}`],
    queryFn: async () => {
      const response = await fetch(`/api/rooms/${roomId}/members`);
      return response.json();
    },
  });

  const joinedMembers = data?.members?.filter(
    (member: RoomUserWithPopulatedUser) => member.status === 'joined'
  );
  const invitedMembers = data?.members?.filter(
    (member: RoomUserWithPopulatedUser) => member.status === 'invited'
  );

  if (isPending) {
    return (
      <div className={cn('hidden md:block', className)}>
        <TypographyH3>Members</TypographyH3>
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-4 w-[200px] my-2" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-4 w-[200px] my-2" />
        </div>
        <TypographyH4 className="mt-4">Invited</TypographyH4>
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-4 w-[200px] my-2" />
        </div>
        <InviteMemberForm roomId={roomId} />
      </div>
    );
  }

  return (
    <MembersData
      joinedMembers={joinedMembers}
      invitedMembers={invitedMembers}
      roomId={roomId}
      className={className}
    />
  );
}

function MembersData({
  joinedMembers,
  invitedMembers,
  roomId,
  className,
}: {
  joinedMembers: RoomUserWithPopulatedUser[];
  invitedMembers: RoomUserWithPopulatedUser[];
  roomId: string;
  className?: string;
}) {
  const [jMembers, setJoinedMembers] = useState<RoomUserWithPopulatedUser[]>(
    []
  );
  const [iMembers, setInvitedMembers] = useState<RoomUserWithPopulatedUser[]>(
    []
  );

  /**
   * this is responsible for updating jMembers when the joinedMembers prop changes
   * due to a query invalidation and refetch in the parent component
   */
  useEffect(() => {
    setJoinedMembers(joinedMembers);
  }, [joinedMembers]);
  /**
   * this is responsible for updating iMembers when the invitedMembers prop changes
   * due to a query invalidation and refetch in the parent component
   */
  useEffect(() => {
    setInvitedMembers(invitedMembers);
  }, [invitedMembers]);

  useEffect(() => {
    pusherClient.subscribe(`room__${roomId}__members`);

    const invitedMemberHandler = (member: RoomUserWithPopulatedUser) => {
      if (iMembers?.find((m) => m.userId === member.userId)) {
        console.error('Member already invited', member.userId);
        return;
      }
      setInvitedMembers((prev) => [...(prev || []), member]);
    };
    pusherClient.bind('invited-member', invitedMemberHandler);

    const newMemberHandler = ({ memberId }: { memberId: string }) => {
      const newMember = iMembers?.find((m) => m.userId === memberId);
      if (newMember) {
        setInvitedMembers((prev) => prev?.filter((m) => m.userId !== memberId));
        setJoinedMembers((prev) => [...(prev || []), newMember]);
      } else {
        console.error('New member not found in invited members', memberId);
      }
    };
    pusherClient.bind('new-member', newMemberHandler);

    const rejectedMemberHandler = ({ memberId }: { memberId: string }) => {
      setInvitedMembers((prev) => prev?.filter((m) => m.userId !== memberId));
    };
    pusherClient.bind('rejected-member', rejectedMemberHandler);

    return () => {
      pusherClient.unsubscribe(`room__${roomId}__members`);
      pusherClient.unbind('invited-member', invitedMemberHandler);
      pusherClient.unbind('new-member', newMemberHandler);
      pusherClient.unbind('rejected-member', rejectedMemberHandler);
    };
  }); // todo consider adding roomId to dep array

  return (
    <>
      <div className={cn('hidden md:block', className)}>
        <MembersContent joinedMembers={jMembers} invitedMembers={iMembers} />
        <InviteMemberForm roomId={roomId} />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="shrink-0 md:hidden mt-2"
            size="icon"
            variant="outline"
          >
            <Users />
            <span className="sr-only">Toggle users menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <MembersContent joinedMembers={jMembers} invitedMembers={iMembers} />
          <InviteMemberForm roomId={roomId} />
        </SheetContent>
      </Sheet>
    </>
  );
}

function MembersContent({
  joinedMembers,
  invitedMembers,
}: {
  joinedMembers: RoomUserWithPopulatedUser[];
  invitedMembers: RoomUserWithPopulatedUser[];
}) {
  return (
    <>
      <TypographyH3>Members</TypographyH3>
      {joinedMembers?.map((member: RoomUserWithPopulatedUser) => (
        <div key={member.userId} className="flex items-center gap-2">
          <Image
            src={member.user.avatar || '#'}
            alt={member.user.email}
            width={30}
            height={30}
            className="rounded-full"
          />
          <div className="my-2 w-52">{member.user.displayName}</div>
        </div>
      ))}
      <TypographyH4 className="mt-4">Invited</TypographyH4>
      {invitedMembers?.map((member: RoomUserWithPopulatedUser) => (
        <div key={member.userId} className="flex items-center gap-2">
          <Image
            src={member.user.avatar || '#'}
            alt={member.user.email}
            width={30}
            height={30}
            className="rounded-full"
          />
          <div className="my-2 w-52 text-secondary">{member.user.email}</div>
        </div>
      ))}
    </>
  );
}
