import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware (request) {
    const token = await getToken({ req: request });
    const { pathname } = request.nextUrl;

    const isAuth = !!token;
    const isLoginPage = pathname.startsWith('/login');
    const isDashboardRoot = pathname === '/dashboard';


    if (!isAuth && (pathname.startsWith('/dashboard') || !isLoginPage)) {
        return NextResponse.redirect(new URL('/login', request.url));
    }


    if (isAuth && isLoginPage) {
        return redirectToDashboardByRole(token.role, request.url);
    }


    if (isAuth && isDashboardRoot) {
        return redirectToDashboardByRole(token.role, request.url);
    }

    return NextResponse.next();
}

function redirectToDashboardByRole (role, url) {
    switch (role) {
        case 'partner':
            return NextResponse.redirect(new URL('/dashboard/partner', url));
        case 'admin':
            return NextResponse.redirect(new URL('/dashboard/admin', url));
        default:
            return NextResponse.redirect(new URL('/', url));
    }
}

export const config = {
    matcher: ['/dashboard', '/dashboard/:path*', '/login'],
};
