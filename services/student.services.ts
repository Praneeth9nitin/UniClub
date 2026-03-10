import { prisma } from '../lib/singelton'
import z from 'zod'
import { StudentCreateInputObjectSchema } from '@/lib/validator/schemas'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

type student = z.infer<typeof StudentCreateInputObjectSchema>

export const signup = async (body:student) =>{
    const check = await prisma.student.findFirst({
        where:{
            email:body.email
        }
    })
    if (check){
        throw new Error("user alreay exist")
    }
    body.password = await bcrypt.hash(body.password, 10)
    const user = await prisma.student.create({
        data:body
    })
    const token = jwt.sign({id:user.id}, `${process.env.JWT_SECRET}`, {expiresIn:"7d"})
    return token
}

export const signin = async({email, password}: {email:string, password:string}) =>{
    const user = await prisma.student.findFirstOrThrow({
        where:{
            email
        }
    })
    if (!await bcrypt.compare(password, user.password)){
        throw new Error("password incorrect")
    }
    const token = jwt.sign({id:user.id}, `${process.env.JWT_SECRET}`, {expiresIn:"7d"})
    return token
}

//get mycollege
export const myCollege = async(id:string)=>{
    const college = await prisma.student.findUnique({
        where:{
            id
        },
        select:{
            college:true
        }
    })
    return college
}

//get all colleges
export const getColleges = async()=>{
    const colleges = await prisma.college.findMany()
    return colleges
}

//get clubs
export const getClubsByCollege = async(collegeId:string) =>{
    const clubs = await prisma.college.findFirst({
        where:{
            id:collegeId
        },
        select:{
            clubs:true
        }
    })
}

//get club
export const getClub = async (id:string) => {
    const club = await prisma.club.findFirst({
        where:{
            id
        }
    })
    return club
}

//follow college
export const followCollege = async (collegeId:string, id:string) =>{
    await prisma.student.update({
        where:{id},
        data:{
            follows:{
                connect:{id:collegeId}
            }
        }
    })
}

//unfollow college
export const unfollowCollege = async (collegeId:string, id:string)=>{
    await prisma.student.update({
        where:{
            id
        },
        data:{
            follows:{
                disconnect:{id:collegeId}
            }
        }
    })
}


export const changePassword = async (id : string, password : string)=>{
    await prisma.student.update({
        where:{
            id
        },
        data:{
            password:await bcrypt.hash(password,10)
        }
    })
}