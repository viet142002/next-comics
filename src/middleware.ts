import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "~/helpers/server";

export function middleware(response: NextResponse) {
    return NextResponse.next();
}

export const config = {
    matcher: ["/api/auth/login", "/api/auth/logout", "/api/auth/me"],
};
