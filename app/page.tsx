'use client';
import { useContext } from 'react';
import { ThemeContext } from './theme-provider';
export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`App flex w-full h-full flex-col transition-all duration-500 bg-gradient-to-bl ${
        theme === 'light' ? 'from-gray-50 from-60%' : 'from-gray-900 from-40%'
      }`}
    >
      <div className="flex w-full grow items-center justify-center">
        <div className="relative w-80 h-80">
          <img
            src="https://provenire.s3.amazonaws.com/logo_2_alpha.png"
            className={`absolute top-0 left-0 rounded-2xl transition-all duration-400  w-80 h-80 object-cover bg-inherit ${
              theme === 'light' ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <img
            src="https://provenire.s3.amazonaws.com/logo_3_alpha.png"
            className={`bg-inherit top-0 left-0  rounded-2xl transition-all duration-400  w-80 h-80 object-cover ${
              theme === 'light' ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
