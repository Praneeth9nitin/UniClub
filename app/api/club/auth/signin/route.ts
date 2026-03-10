import { NextRequest, NextResponse } from "next/server";
import z from "zod"
import jwt from "jsonwebtoken"
import { adminLogin } from "@/services/club.services";

const signinSchema = z.object({
    email: z.email(),
    password: z.string()
})


export async function POST(req: NextRequest) {
    const body = await req.json()
    try {
        if (!signinSchema.safeParse(body).success) {
            throw new Error("invalid credentials")
        }
        const admin = await adminLogin(body.email, body.password)
        const token = jwt.sign({ id: admin.id }, `${process.env.JWT_SECRET}`, { expiresIn: "1d" })
        const response = NextResponse.json({ message: "user loggedin" }, { status: 200 })
        response.cookies.set({
            name: "clubAdmin",
            value: token,
            httpOnly: true,
            sameSite: "strict",
            path: "/"
        })
        return response
    } catch (error) {
        return NextResponse.json({ error }, { status: 400 })
    }
}