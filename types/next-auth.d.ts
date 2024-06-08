import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface AdapterUser {
    role: string;
  }
  interface User {
    role: string;
  }
}
