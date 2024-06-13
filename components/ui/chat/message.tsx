import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { MessageWithPopulatedUser } from '@/types/db';
import { User } from 'lucide-react';
export default function Message({
  message,
  className,
}: {
  message: MessageWithPopulatedUser;
  className?: string;
}) {
  if (message.roll) {
    return (
      <div className={cn('my-1 bg-slate-800 p-4 rounded-md', className)}>
        <div className="flex items-center gap-4">
          <Avatar className="h-6 w-6">
            <AvatarImage src={message.user.avatar!} />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>

          <div>
            {message.user.displayName}: rolled {message.roll.count}d
            {message.roll.sides}
            {message.roll.modifier ? message.roll.modifier : ''}: (
            {message.roll.total})
          </div>
        </div>
        <div className="ml-10 flex items-center gap-2">
          {message.roll.rolls.map((r, idx) => (
            <div
              key={idx}
              className="bg-slate-900 p-2 h-8 w-8 text-center leading-none"
            >
              {r}
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={cn('my-1 flex items-center gap-4', className)}>
      <Avatar className="h-6 w-6">
        <AvatarImage src={message.user.avatar!} />
        <AvatarFallback>
          <User />
        </AvatarFallback>
      </Avatar>
      <div>
        {message.user.displayName}: {message.message}
      </div>
    </div>
  );
}
