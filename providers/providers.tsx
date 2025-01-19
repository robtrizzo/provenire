"use client";
import { ThemeProvider } from "@/providers/theme-provider";
import { SessionProvider } from "next-auth/react";
import { getQueryClient } from "@/providers/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider refetchOnWindowFocus={false}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
