import { NextResponse } from "next/server";

export function middleware(request: Request) {
    const url = new URL(request.url);
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-url", request.url);
    requestHeaders.set("x-protocol", url.protocol);
    requestHeaders.set("x-port", url.port);
    requestHeaders.set("x-host", url.host);
    requestHeaders.set("x-domain", url.protocol + "//" + url.host);
    requestHeaders.set("x-pathname", url.pathname);
    requestHeaders.set("x-search", url.search);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
