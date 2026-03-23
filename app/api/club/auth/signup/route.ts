import { createClub } from "@/services/club.services";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { createClubSchema } from "../../../../../lib/validator/schema";


export async function POST(req: NextRequest) {
    const body = await req.json()
    console.log(body)
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
        console.log(error)
        return NextResponse.json({ message: error instanceof Error ? error.message : "Something went wrong" }, { status: 400 })
    }
}