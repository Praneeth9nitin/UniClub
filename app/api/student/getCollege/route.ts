import { NextRequest, NextResponse } from "next/server"
import { authencation } from "../protect"
import { myCollege } from "@/services/student.services"


export async function GET(req :NextRequest){
    try {
        const decoded = await authencation(req)
        const college = await myCollege(decoded.id)
        console.log(college)
        return NextResponse.json({college}, {status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json(`${error}`, {status:404})
    }
}