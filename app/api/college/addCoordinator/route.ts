import { addCoordinator } from "@/services/college.services";
import { NextRequest, NextResponse } from "next/server";
import { authMiddleWare } from "../auth/protect";


export async function POST(req : NextRequest){
    const body = await req.json()
    const decoded = await authMiddleWare(req)
    try {
        const faculty = await addCoordinator(body.name, body.email, body.password, decoded.collegeId)
        return NextResponse.json({message:"faculty added"}, {status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:error}, {status:400})
    }
}