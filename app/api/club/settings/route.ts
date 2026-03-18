import { NextRequest, NextResponse } from "next/server";
import { middleware } from "../authMiddleware";
import { updateClub } from "@/services/club.services";


export async function PUT(req: NextRequest) {
    const body = await req.json();
    try {
        const session = await middleware();
        const club = await updateClub(session.clubId, body)
        return NextResponse.json({ message: "Club updated successfully", club }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to update club" }, { status: 500 })
    }
}