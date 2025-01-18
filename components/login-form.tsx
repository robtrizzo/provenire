'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { TypographyH1, TypographyP } from '@/components/ui/typography';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function Login() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const handleDiscordSignin = () => {
    signIn('discord', { callbackUrl });
  };
  return (
    <Button
      className="w-64 bg-[#7e61ab] text-white"
      onClick={handleDiscordSignin}
    >
      <Image
        src="/discord.svg"
        alt="Discord Logo"
        width={30}
        height={30}
        className="mr-2"
      />
      Sign in with Discord
    </Button>
  );
}

export function LoginForm() {
  return (
    <div className="flex flex-col items-center">
      <TypographyH1 className="mb-4">Welcome back</TypographyH1>
      <TypographyP className="mb-8 text-center">
        Sign in to your account to continue
      </TypographyP>
      <Suspense fallback={<Skeleton className="w-64 rounded-md" />}>
        <Login />
      </Suspense>
    </div>
  );
}
