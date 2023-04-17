// magic file name that tells Next that this is a middleware, run this before everything else.

import { withClerkMiddleware } from '@clerk/nextjs/server';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default withClerkMiddleware((req: NextRequest) => {
  console.log('middleware running');
  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = {
  matcher: '/((?!_next/image|_next/static|favicon.ico).*)',
};
