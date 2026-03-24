import { NextRequest, NextResponse } from "next/server"
import * as jose from "jose"

const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

async function verifyToken(token: string): Promise<boolean> {
    try {
        await jose.jwtVerify(token, secret)
        return true
    } catch {
        return false
    }
}

export async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    if (
        path.startsWith("/dashboard") ||
        path.startsWith("/api/club")
    ) {
        const token = req.cookies.get("clubAdmin")?.value

        if (!token) {
            if (path.startsWith("/api")) {
                return NextResponse.json(
                    { message: "Unauthorized" },
                    { status: 401 }
                )
            }
            return NextResponse.redirect(new URL("/login", req.url))
        }

        const valid = await verifyToken(token)
        if (!valid) {
            if (path.startsWith("/api")) {
                return NextResponse.json(
                    { message: "Invalid or expired token" },
                    { status: 401 }
                )
            }
            return NextResponse.redirect(new URL("/login", req.url))
        }

        return NextResponse.next()
    }

    if (
        path.startsWith("/feed") ||
        path.startsWith("/clubs") ||
        path.startsWith("/events") ||
        path.startsWith("/profile") ||
        path.startsWith("/api/student")
    ) {
        const token = req.cookies.get("student")?.value

        if (!token) {
            if (path.startsWith("/api")) {
                return NextResponse.json(
                    { message: "Unauthorized" },
                    { status: 401 }
                )
            }
            return NextResponse.redirect(new URL("/login", req.url))
        }

        const valid = await verifyToken(token)
        if (!valid) {
            if (path.startsWith("/api")) {
                return NextResponse.json(
                    { message: "Invalid or expired token" },
                    { status: 401 }
                )
            }
            return NextResponse.redirect(new URL("/login", req.url))
        }

        return NextResponse.next()
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/dashboard/:path*",

        "/feed/:path*",
        "/clubs/:path*",
        "/events/:path*",
        "/profile/:path*",
        "/api/club/:path*",
        "/api/student/:path*",
        "/((?!_next/static|_next/image|favicon.ico).*)",
    ],
}