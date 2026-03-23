import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { adminLogin } from "@/services/club.services";
import { signinSchema } from "../../../../../lib/validator/schema";



export async function POST(req: NextRequest) {
    const body = await req.json()
    try {
        const parsed = signinSchema.safeParse(body)
        if (!parsed.success) {
            throw new Error(parsed.error.message)
        }
        const admin = await adminLogin(parsed.data.email, parsed.data.password)
        const token = jwt.sign({ id: admin.id, clubId: admin.clubId }, `${process.env.JWT_SECRET}`, { expiresIn: "1d" })
        const response = NextResponse.json({ message: "user loggedin" }, { status: 200 })
        response.cookies.set({
            name: "clubAdmin",
            value: token,
            httpOnly: true,
            sameSite: "strict",
            path: "/",
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24
        })
        return response
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error instanceof Error ? error.message : "Something went wrong" }, { status: 400 })
    }
}