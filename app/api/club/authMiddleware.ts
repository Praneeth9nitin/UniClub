import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'


export const middleware = async () => {
    const token = (await cookies()).get("clubAdmin")?.value
    if (!token) {
        throw new Error("plz signin");
    }
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`)
    if (typeof decoded == "string") {
        throw new Error("Invalid token");
    }
    return decoded
}