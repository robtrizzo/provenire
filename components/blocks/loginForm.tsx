'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn } from 'next-auth/react';
import { Separator } from '../ui/separator';

export async function getServerSideProps() {}

export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const usernameRef = useRef<string>(null!);
  const passwordRef = useRef<string>(null!);
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    usernameRef.current = e.target.value;
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    passwordRef.current = e.target.value;
  };
  const handleDiscordSignin = () => {
    signIn('discord', { callbackUrl });
  };
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your username below to login to your account.
        </CardDescription>
      </CardHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn('credentials', {
            username: usernameRef.current,
            password: passwordRef.current,
            callbackUrl,
          });
        }}
      >
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="username"
              placeholder="jsmith"
              required
              onChange={handleUsernameChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              onChange={handlePasswordChange}
            />
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </CardContent>
      </form>
      <CardFooter>
        <div className="flex flex-col w-full">
          <Separator className="my-4" />
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
      </CardFooter>
    </Card>
  );
}
