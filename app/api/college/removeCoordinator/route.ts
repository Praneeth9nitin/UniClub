import { NextRequest, NextResponse } from "next/server";
import { authMiddleWare } from "../auth/protect";
import { removeFaculty } from "@/services/college.services";


export async function PUT(req:NextRequest){
    const body = await req.json()
    const admin = await authMiddleWare(req)
    try {
        await removeFaculty(body.clubId);
        return NextResponse.json({msg:"removed faculty"},{status : 200})
    } catch (error) {
        return NextResponse.json({error:`${error}`}, {status : 400})
    }
}