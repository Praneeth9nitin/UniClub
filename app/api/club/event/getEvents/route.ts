import { NextRequest, NextResponse } from "next/server";
import { middleware } from "../../authMiddleware";
import { getEvents } from "@/services/club.services";
export const dynamic = "force-dynamic"
export async function GET(req: NextRequest) {
    try {
        const admin = await middleware(req)
        const events = await getEvents(admin.clubId)
        return NextResponse.json(events)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error })
    }
}