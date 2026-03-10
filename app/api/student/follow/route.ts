import { NextRequest, NextResponse } from "next/server";
import { authMiddleWare } from "../protect";
import { followCollege } from "@/services/student.services";

export async function PUT(req:NextRequest){
    const body = await req.json()
    const student = await authMiddleWare(req)
    try {
        await followCollege(body.collegeId, student.id)
        return NextResponse.json({msg:"follows the college"}, {status:200})
    } catch (error) {
        return NextResponse.json({msg:error}, {status:400})
    }
}