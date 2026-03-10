import { createOrganization } from "@/services/college.services";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req : NextRequest){
    const body = await req.json()
    const college = body.college
    const admin = body.admin
    try {
        const result = await createOrganization(college, admin)
        const response = NextResponse.json("logged in successfully",{status:200})
        response.cookies.set({
            name:"admin",
            value:`${result}`,
            httpOnly:true,
            sameSite:"strict",
            path:"/"
        })
        return response
    } catch (error) {
        console.log(error)
        return NextResponse.json(`${error}`, 
            {status:400}
        )
    }
}