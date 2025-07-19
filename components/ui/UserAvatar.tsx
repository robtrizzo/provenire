import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "./skeleton";

export default function UserAvatar({
  user,
}: {
  user?: { image?: string; name?: string };
}) {
  if (!user) {
    return <Skeleton className="h-6 w-6 rounded-full" />;
  }
  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-6 w-6">
        <AvatarImage src={user?.image || ""} />
        <AvatarFallback>{user?.name}</AvatarFallback>
      </Avatar>
      <span>{user?.name}</span>
    </div>
  );
}
