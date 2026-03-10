import jwt from'jsonwebtoken'
import 'dotenv/config'
import { NextRequest } from 'next/server'

export const authMiddleWare = async(req:NextRequest)=>{
    const token = req.cookies.get('coordinator')?.value
    if (!token){
        throw new Error("token not found");
    }
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`)
    if (typeof decoded === "string"){
        throw new Error('decoded is wrong')
    }
    return decoded
}