'use client';

import { Check, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useMutation } from '@tanstack/react-query';
import { getQueryClient } from '@/components/queryClient';
import { acceptRoomInvite } from '@/actions/rooms';
import { useRouter } from 'next/navigation';

const queryClient = getQueryClient();

export default function AcceptInviteButton({
  roomId,
  className,
}: {
  roomId: string;
  className?: string;
}) {
  const router = useRouter();

  const {
    mutateAsync: server_acceptRoomInvite,
    data,
    isPending,
  } = useMutation({
    mutationFn: async () => acceptRoomInvite({ roomId }),
    onError: (error) => {
      console.error('Error accepting invite', error);
    },
    onSuccess: () => {
      console.log('Room invite accepted', data);
      queryClient.invalidateQueries({
        queryKey: ['invited-rooms'],
      });
      router.push(`/chat/${roomId}`);
    },
  });

  async function handleClick() {
    await server_acceptRoomInvite();
  }

  return (
    <Button
      className={cn('flex gap-1 items-center', className)}
      onClick={handleClick}
    >
      {isPending ? <LoaderCircle size={16} /> : <Check size={16} />}
      Accept
    </Button>
  );
}
