import { NextRequest, NextResponse } from "next/server";
import { middleware } from "../../authMiddleware";
import { deleteEvent } from "@/services/club.services";


export async function DELETE(req: NextRequest) {
    try {
        const body = await req.json()
        const session = await middleware()
        const action = await deleteEvent(body.eventId, session.clubId)
        return NextResponse.json({ success: true, action }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 400 })
    }
}