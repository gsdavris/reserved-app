import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware (request) {
    const token = await getToken({ req: request });

    const isAuth = !!token;
    const isLoginPage = request.nextUrl.pathname.startsWith('/login');

    if (!isAuth && !isLoginPage) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (isAuth && isLoginPage) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/login'],
};
