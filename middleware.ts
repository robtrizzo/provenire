import { NextResponse } from 'next/server';
import { auth, BASE_PATH } from '@/auth';

export const config = {
  matcher: [
    '/((?!api|signin|_next/static|_next/image|favicon.ico|discord.svg).*)',
  ],
};

const allowedBetaUsers = ['robtrizzo@gmail.com', 'robtrizzo+jerry@gmail.com'];

export default auth((req) => {
  const reqUrl = new URL(req.url);
  if (!req.auth && reqUrl.pathname !== '/') {
    return NextResponse.redirect(
      new URL(
        `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(
          reqUrl?.pathname
        )}`,
        req.url
      )
    );
  }
  if (req.auth) {
    if (req.nextUrl.pathname.startsWith('/chat')) {
      // limit this to the list of allowed beta users
      if (
        !req.auth.user?.email ||
        !['admin', 'alpha-tester'].includes(req.auth.user.role)
      ) {
        const url = req.nextUrl.clone();
        url.pathname = '/closed-alpha';
        return NextResponse.redirect(url);
      }
    }
  }
});
