import { createClub } from "@/services/coordinator.services";
import { NextRequest, NextResponse } from "next/server";
import { authMiddleWare } from "../protect";


export async function POST(req:NextRequest){
    const data = await req.json()
    const user = await authMiddleWare(req)
    try {
        const club = await createClub(data.name, data?.description, user.id, user.collegeId)
        return NextResponse.json({msg:"all good"}, {status:200})
    } catch (error) {
        return NextResponse.json({msg:error},{status:400})
    }
}