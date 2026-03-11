import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'


export const middleware = async (req: NextRequest) => {
    const token = req.cookies.get("clubAdmin")?.value
    console.log(req.cookies.getAll())
    if (!token) {
        throw new Error("plz signin");
    }
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`)
    if (typeof decoded == "string") {
        throw new Error("Invalid token");
    }
    return decoded
}