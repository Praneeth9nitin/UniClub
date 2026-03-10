import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

export const authMiddleware = async (req:NextRequest)=>{
    const token = req.cookies.get('admin')?.value
    console.log("first")
    if (!token){
        return NextResponse.redirect(new URL('/signin', req.url))
    }
    try {
        const decode = jwt.sign(token, `${process.env.JWT_SECREt}`)
        console.log(req.url)
    } catch (error) {
        console.log(error)
    }
}
