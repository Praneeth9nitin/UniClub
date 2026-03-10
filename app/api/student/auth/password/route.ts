import { NextRequest, NextResponse } from "next/server";
import { authMiddleWare } from "../../protect";
import { changePassword } from "@/services/student.services";


export async function PUT(req:NextRequest){
    const body = await req.json()
    const user = await authMiddleWare(req)

    try {
        await changePassword(user.id, body.password)
        return NextResponse.json({msg:"password changed"}, {status:200})
    } catch (error) {
        return NextResponse.json({msg:error},{status:400})
    }
}