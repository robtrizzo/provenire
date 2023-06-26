'use client';

import ThemeProvider from '../app/theme-provider';
import { ReactNode } from 'react';

import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default Providers;
