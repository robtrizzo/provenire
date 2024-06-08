import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import NewRoomForm from '@/components/ui/rooms/newRoomForm';

export default async function CreateChatCard({
  className,
}: {
  className?: string;
}) {
  return (
    <Card className={cn('w-full max-w-sm', className)}>
      <CardHeader>
        <CardTitle>New chat</CardTitle>
        <CardDescription>
          create a room and invite others to join
        </CardDescription>
      </CardHeader>
      <CardContent>
        <NewRoomForm />
      </CardContent>
    </Card>
  );
}
