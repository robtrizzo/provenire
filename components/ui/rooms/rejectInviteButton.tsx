'use client';

import { X, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useMutation } from '@tanstack/react-query';
import { getQueryClient } from '@/components/queryClient';
import { rejectRoomInvite } from '@/actions/rooms';

const queryClient = getQueryClient();

export default function RejectInviteButton({
  roomId,
  className,
}: {
  roomId: string;
  className?: string;
}) {
  const { mutateAsync: server_rejectRoomInvite, isPending } = useMutation({
    mutationFn: async () => rejectRoomInvite({ roomId }),
    onError: (error) => {
      console.error('Error rejecting invite', error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['invited-rooms'],
      });
    },
  });

  async function handleClick() {
    await server_rejectRoomInvite();
  }

  return (
    <Button
      className={cn('flex gap-1 items-center', className)}
      variant="destructive"
      onClick={handleClick}
    >
      {isPending ? <LoaderCircle size={16} /> : <X size={16} />}
      Reject
    </Button>
  );
}
