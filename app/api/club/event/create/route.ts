import { EventCreateWithoutClubInputObjectSchema } from "@/lib/validator/schemas";
import { NextRequest, NextResponse } from "next/server";
import { middleware } from "../../authMiddleware";
import { createEvent } from "@/services/club.services";


export async function POST(req: NextRequest) {
    try {
        const decoded = await middleware();
        console.log("kmvlksdvmv;m")
        const data = await req.json()
        const parsed = EventCreateWithoutClubInputObjectSchema.safeParse(data)
        if (!parsed.success) {
            throw new Error(parsed.error.message)
        }
        const event = await createEvent(parsed.data, decoded.clubId)
        return NextResponse.json({ message: "event created" }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error instanceof Error ? error.message : "Something went wrong" }, { status: 400 })
    }
}