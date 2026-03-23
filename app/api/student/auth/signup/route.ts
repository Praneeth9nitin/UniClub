import { StudentCreateSchema } from "../../../../../lib/validator/schema";
import { signup } from "@/services/student.services";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        const parse = StudentCreateSchema.safeParse(data)
        if (!parse.success) {
            throw new Error("Invalid credentials")
        }
        const token = await signup(parse.data)
        const response = NextResponse.json({ message: "user loggedin" })
        response.cookies.set({
            name: 'student',
            value: `${token}`,
            httpOnly: true,
            sameSite: 'strict',
            path: '/'
        })
        return response
    } catch (error) {
        console.log(error)
        return new NextResponse(`${error}`, {
            status: 400
        })
    }
}