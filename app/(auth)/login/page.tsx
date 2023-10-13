'use client';

import Button from '@/components/ui/Button';
import { FC, useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function loginWithDiscord() {
    setIsLoading(true);
    try {
      await signIn('discord');
    } catch (e) {
      // display err to user
      toast.error('Something went wrong with your login');
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            logo
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-200">
              Sign in to your account
            </h2>
          </div>
          <Button
            isLoading={isLoading}
            type="button"
            className="max-w-sm mx-auto w-full gap-2"
            onClick={loginWithDiscord}
          >
            {isLoading ? null : (
              <Image
                src="https://s3.amazonaws.com/provenire/discord-mark-blue.png"
                width={24}
                height={20}
                alt="Discord logo"
              />
            )}
            Discord
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
