import { followClub } from "@/services/student.services"
import { middleware } from "../../../protect"
import { NextRequest, NextResponse } from "next/server"


export async function POST(req: NextRequest, { params }: { params: Promise<{ clubId: string, follow: string }> }) {
    try {
        const clubId = (await params).clubId
        const follow = (await params).follow
        const session = await middleware()
        const followFnc = await followClub(session.id, clubId, follow === 'follow')
        return NextResponse.json({ message: "success" })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "error" }, { status: 400 })
    }
}