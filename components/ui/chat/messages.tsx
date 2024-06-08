'use client';
import Message from '@/components/ui/chat/message';
import { MessageWithPopulatedUser } from '@/types/db';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Skeleton } from '../skeleton';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';
import { pusherClient } from '@/lib/pusher';

export default function Messages({ className }: { className?: string }) {
  const params = useParams();
  const roomId = params.roomId;
  const { data, isPending } = useQuery({
    queryKey: ['messages'],
    queryFn: async () => {
      const response = await fetch(
        `/api/messages/get-messages/?roomId=${roomId}`,
        { cache: 'no-cache' }
      );
      return response.json();
    },
    staleTime: 100,
  });

  if (isPending) {
    return (
      <div className="mt-4">
        <div className="my-1 flex items-center gap-4">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
        <div className="my-1 flex items-center gap-4">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={cn('mt-4', className)}>
        <div className="my-1 flex items-center gap-4">No messages found</div>
      </div>
    );
  }

  if (data?.error) {
    return (
      <div className={cn('mt-4', className)}>
        <div className="my-1 flex items-center gap-4 text-red-500">
          There was an error fetching messages: {data.error || 'Unknown'}
        </div>
      </div>
    );
  }

  return (
    <div className={cn('mt-4', className)}>
      <MessagesContent messages={data.messages} roomId={roomId as string} />
    </div>
  );
}

function MessagesContent({
  messages,
  roomId,
}: {
  messages: MessageWithPopulatedUser[];
  roomId: string;
}) {
  const [msgs, setMsgs] = useState<MessageWithPopulatedUser[]>([]);

  /**
   * this is responsible for scrolling to the bottom of the messages
   * when the component mounts
   */
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  });

  /**
   * this is responsible for updating msgs when the messages prop changes
   * due to a query invalidation and refetch in the parent component
   */
  useEffect(() => {
    setMsgs(messages);
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  /**
   * TODO figure out how to optimistically update the messages list
   * without needing to wait for the pusher event. This is a bit tricky
   * and requires hooking into the messageForm component
   */
  useEffect(() => {
    pusherClient.subscribe(`room__${roomId}__messages`);
    const messageHandler = (message: MessageWithPopulatedUser) => {
      setMsgs((prev) => [...(prev || []), message]);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    pusherClient.bind('new-message', messageHandler);
    return () => {
      pusherClient.unsubscribe(`room__${roomId}__messages`);
      pusherClient.unbind('new-message', messageHandler);
    };
  });

  if (!msgs || msgs.length === 0) {
    return null;
  }
  return [
    <div key="spacer" className="mt-auto"></div>,
    msgs.map((message: MessageWithPopulatedUser, idx: Number) => (
      <Message key={`${idx}`} message={message} />
    )),
    <div key="end" ref={messagesEndRef}></div>,
  ];
}
