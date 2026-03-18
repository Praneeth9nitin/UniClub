import { getClub } from "@/services/club.services";
import { middleware } from "@/app/api/club/authMiddleware";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try {
        const session = await middleware();
        const club = await getClub(session.clubId);
        const { followers, ...rest } = club!;
        return NextResponse.json(rest, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to get club" }, { status: 500 })
    }
}