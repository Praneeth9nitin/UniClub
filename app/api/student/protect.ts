import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

export const authMiddleWare = async(req:NextRequest)=>{
    const token = req.cookies.get('student')?.value
    if (!token){
        throw new Error("plz signin");        
    }
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`)
    if (typeof decoded == "string"){
        throw new Error("we want jwt payload");
    }
    return decoded
}