import { adminLogin } from "@/services/college.services";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req : NextRequest){
    try {
        const data = await req.json()
        const token = await adminLogin(data)
        const response = NextResponse.json({message:'all good'}, {status:200}) 
        response.cookies.set({
            name:"admin",
            value:token,
            httpOnly:true,
            sameSite:"strict",
            path:'/'
        })
        return response
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:`${error}`}, {status:400})
    }
}