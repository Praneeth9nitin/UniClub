import { createClub } from "@/services/club.services";
import { NextRequest, NextResponse } from "next/server";
import z from "zod"
import jwt from "jsonwebtoken"

export const createClubSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
    name: z.string(),
    description: z.string(),
    city: z.string(),
    state: z.string(),
    college: z.string(),
    category: z.string()
})

export async function POST(req: NextRequest) {
    const body = await req.json()
    try {
        const parsed = createClubSchema.safeParse(body)
        if (!parsed.success) {
            throw new Error(parsed.error.message);
        }
        const result = await createClub(parsed.data)
        const response = NextResponse.json({ message: "club created" }, { status: 200 })
        const token = jwt.sign({ id: result.clubAdmin.id, clubId: result.club.id }, `${process.env.JWT_SECRET}`, { expiresIn: "1d" })
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
        return NextResponse.json({ message: error instanceof Error ? error.message : "Something went wrong" }, { status: 400 })
    }
}