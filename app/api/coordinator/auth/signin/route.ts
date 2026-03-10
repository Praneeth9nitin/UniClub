import { login } from "@/services/coordinator.services";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){
    const data = await req.json()
    const token = await login(data.email, data.password)
    const response = NextResponse.json({message:"logged in"},{status:200})

    response.cookies.set({
        name:'coordinator',
        value:token,
        httpOnly:true,
        sameSite:"strict",
        path:'/'
    })
    return response
}