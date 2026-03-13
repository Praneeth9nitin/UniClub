import { updateEvent } from "@/services/club.services";
import { NextRequest, NextResponse } from "next/server";
import { middleware } from "../../authMiddleware";


export async function PATCH(req: NextRequest, params: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params.params
        const session = await middleware()
        const body = await req.json()
        const event = await updateEvent(session.clubId, id, body)
        return NextResponse.json(event, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to update event" }, { status: 500 })
    }
}