import { signin } from "@/services/student.services";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const token = await signin(body)
        const response = NextResponse.json({ message: "user loggedin" }, { status: 200 })
        response.cookies.set({
            name: "student",
            value: `${token}`,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            path: "/"
        })
        return response
    } catch (error) {
        return new NextResponse(`${error}`, {
            status: 400
        })
    }
}