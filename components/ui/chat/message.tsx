import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { MessageWithPopulatedUser } from '@/types/db';
export default function Message({
  message,
  className,
}: {
  message: MessageWithPopulatedUser;
  className?: string;
}) {
  return (
    <div className={cn('my-1 flex items-center gap-4', className)}>
      <Avatar className="h-6 w-6">
        <AvatarImage src={message.user.avatar || ''} />
        <AvatarFallback>
          {message.user.displayName![0] || message.user.email[0]}
        </AvatarFallback>
      </Avatar>
      <div>
        {message.user.displayName}: {message.message}
      </div>
    </div>
  );
}
