import Image from 'next/image';
import { Button } from './button';
import Link from 'next/link';

export default async function Home() {
  return (
    <main className="grow flex w-full h-full flex-col relative">
      <div className="absolute top-0 left-0 flex flex-col w-full h-full grow items-center justify-center bg-gradient-to-bl from-gray-900 from-40% transition-all duration-1000">
        <div className="w-80 h-80">
          <Image
            alt="logo-dark"
            width={320}
            height={320}
            src="https://provenire.s3.amazonaws.com/logo_3_alpha.png"
            className="bg-inherit top-0 left-0  rounded-2xl transition-all duration-200  w-80 h-80 object-cover"
          />
        </div>
        <Link href="/game">
          <Button className="z-10 mt-8 bg-transparent text-white hover:text-white hover:bg-blue-200 hover:bg-opacity-5 w-32">
            explore
          </Button>
        </Link>
      </div>
    </main>
  );
}
