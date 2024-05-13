'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Navbar from '@/components/navbar';

export default function Home() {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <Navbar>
      <main className="grow flex w-full h-full flex-col relative">
        <div
          className={`absolute top-0 left-0 flex w-full h-full grow items-center justify-center bg-gradient-to-bl from-gray-900 from-40% transition-all duration-1000 ${
            theme === 'light' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="w-80 h-80">
            <Image
              alt="logo-dark"
              width={320}
              height={320}
              src="https://provenire.s3.amazonaws.com/logo_3_alpha.png"
              className={`bg-inherit top-0 left-0  rounded-2xl transition-all duration-200  w-80 h-80 object-cover ${
                theme === 'light' ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 flex w-full h-full grow items-center justify-center bg-gradient-to-bl from-gray-50 from-60% transition-all duration-1000 ${
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-80 h-80">
            <Image
              alt="logo-light"
              width={320}
              height={320}
              src="https://provenire.s3.amazonaws.com/logo_2_alpha.png"
              className={`bg-inherit top-0 left-0  rounded-2xl transition-all duration-200  w-80 h-80 object-cover`}
            />
          </div>
        </div>
      </main>
    </Navbar>
  );
}
