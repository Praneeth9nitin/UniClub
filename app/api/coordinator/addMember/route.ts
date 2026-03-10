import { NextRequest, NextResponse } from "next/server";
import { authMiddleWare } from "../protect";
import { addMember } from "@/services/coordinator.services";


export async function POST(req:NextRequest){
    try {
        const faculty = await authMiddleWare(req)
        const body = await req.json();
        const newMember = await addMember(faculty.id, body.studentId, body.clubId, body.name)
        return NextResponse.json({msg:"member added"},{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({err:error}, {status:400})
    }
}