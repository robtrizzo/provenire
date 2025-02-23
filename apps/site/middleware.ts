import { NextResponse } from 'next/server';
import { auth, BASE_PATH } from '@/auth';

export const config = {
  matcher: [
    '/((?!api|signin|_next/static|_next/image|favicon.ico|discord.svg).*)',
  ],
};

export default auth((req) => {
  const reqUrl = new URL(req.url);
  if (!req.auth && !['/', '/signin', '/socket.io'].includes(reqUrl.pathname)) {
    console.log('pathname', reqUrl.pathname);
    return NextResponse.redirect(
      new URL(
        `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(
          reqUrl?.pathname
        )}`,
        req.url
      )
    );
  }
});
