import { createClub } from "@/services/club.services";
import { NextRequest, NextResponse } from "next/server";
import z from "zod"
import jwt from "jsonwebtoken"
import 'otenv/config'

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
        if (!createClubSchema.safeParse(body).success) {
            throw new Error("invalid data");
        }
        const result = await createClub(body)
        const response = NextResponse.json({ result })
        const token = jwt.sign({ id: result.clubAdmin.id }, `${process.env.JWT_SECRET}`, { expiresIn: "1d" })
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