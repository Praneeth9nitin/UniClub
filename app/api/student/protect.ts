import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export const middleware = async () => {
    const token = (await cookies()).get("student")?.value
    if (!token) {
        throw new Error("plz signin");
    }
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`)
    if (typeof decoded == "string") {
        throw new Error("we want jwt payload");
    }
    return decoded
}