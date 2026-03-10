import { NextRequest, NextResponse } from "next/server";
import { authMiddleWare } from "../protect";
import { unfollowCollege } from "@/services/student.services";

export async function PUT(req:NextRequest){
    const body = await req.json()
    const student = await authMiddleWare(req)
    try {
        await unfollowCollege(body.college, student.id)
        return NextResponse.json({msg:"unfollowed"}, {status:200})
    } catch (error) {
        return NextResponse.json({msg:error}, {status:400})
    }
}