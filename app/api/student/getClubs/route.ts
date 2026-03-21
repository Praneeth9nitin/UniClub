import { getClubs } from "@/services/student.services"
import { middleware } from "../protect"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const session = await middleware()
        const clubs = await getClubs(session?.id)
        return NextResponse.json({ clubs, session }, { status: 200 })
    } catch (error) {
        return NextResponse.json("something went wrong", { status: 500 })
    }
}