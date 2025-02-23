'use client';
import { useSession } from 'next-auth/react';
import { signOut } from '@/auth/helpers';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';

export default function AuthButton() {
  const session = useSession();
  return session?.data?.user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={session.data.user?.image || ''} />
            <AvatarFallback>{session.data.user?.name}</AvatarFallback>
          </Avatar>
          <span>{session.data.user?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Button
            variant="ghost"
            onClick={async () => {
              await signOut();
              if (session) {
                location.reload();
              }
            }}
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Link href="/signin" passHref>
      <Button>Sign In</Button>
    </Link>
  );
}
