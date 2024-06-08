'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { TypographyH1, TypographyP } from '../ui/typography';

export async function getServerSideProps() {}

export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const handleDiscordSignin = () => {
    signIn('discord', { callbackUrl });
  };
  return (
    <div>
      <TypographyH1 className="mb-4">Welcome back</TypographyH1>
      <TypographyP className="mb-8 text-center">
        Sign in to your account to continue
      </TypographyP>
      <Button
        className="w-full bg-[#7e61ab] text-white"
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
    </div>
  );
}
