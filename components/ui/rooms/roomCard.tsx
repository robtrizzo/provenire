import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';
export default function RoomCard({
  room,
  className,
}: {
  room: {
    id: string;
    createdAt: Date | null;
    name: string;
  };
  className?: string;
}) {
  if (!room) {
    return null;
  }
  return (
    <div className={className}>
      <Link href={`/chat/${room.id}`}>
        <Card>
          <CardHeader>
            <CardTitle>{room.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              {room.createdAt?.toLocaleString()}
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
