import z from 'zod'
import 'dotenv/config'
import { CollegeAdminCreateInputObjectSchema, CollegeCreateInputObjectSchema, FacultyCreateInputObjectSchema } from '@/lib/validator/schemas'
import { prisma } from '@/lib/singelton'
import jwt from 'jsonwebtoken'
import bcrpt from 'bcrypt'
type collegeSchema = z.infer<typeof CollegeCreateInputObjectSchema>
type adminSchema = z.infer<typeof CollegeAdminCreateInputObjectSchema>


//create organization
export const createOrganization = async (college:collegeSchema, admin:adminSchema) =>{
    const check = await prisma.college.findUnique({
        where:{
            name : college.name
        }
    })
    if (check){
        throw new Error("college already exist");
    }
    const result = await prisma.$transaction(async(tx)=>{
        const createdCollege = await tx.college.create({
            data:college
        })
        admin.password = await bcrpt.hash(admin.password,10)
        const createdAdmin = await tx.collegeAdmin.create({
            data:{
                ...admin,
                college:{
                    connect:{id:createdCollege.id}
                }
            }
        })
        return {createdCollege, createdAdmin}
    })
    const token = jwt.sign({id:result.createdAdmin.id, collegeId:result.createdCollege.id},`${process.env.JWT_SECRET}`,{expiresIn:"7d"})
    return token
}

//admin login function
export const adminLogin = async ({email, password}:{email : string, password: string}) =>{
    const user = await prisma.collegeAdmin.findUniqueOrThrow({
        where:{
            email:email
        }
    })
    if (!await bcrpt.compare(password, user.password)){
        throw new Error("incorrect password");
    }
    const token = jwt.sign({id:user.id, collegeId:user.collegeId}, `${process.env.JWT_SECRET}`, {expiresIn:"7d"})
    return token
}


//add faculty
export const addCoordinator = async(name:string, email:string, password:string, collegeId:string)=>{
    const check = await prisma.faculty.findFirst({
        where:{
            email
        }
    })
    if (check){
        throw new Error("admin already exist")
    }
    password = await bcrpt.hash(password,10)
    const faculty = await prisma.faculty.create({
        data:{
            name,
            email,
            password,
            collegeId
        }
    })

    return faculty
}

export const removeFaculty = async(id : string)=>{

    await prisma.club.update({
        where:{
            id
        },
        data:{
            coordinator:{
                disconnect:true  
            },
            onHold:true
        }
    })
}

export const assignFaculty = async (facultyId:string, clubId:string)=>{
    await prisma.club.update({
        where:{
            id:clubId
        },
        data:{
            cordinatorId:facultyId
        }
    })
}

export const deletePerminently = async (id : string)=>{
    await prisma.club.delete({
        where:{
            id
        }
    })
}

export const changePassword = async (id : string, password : string)=>{
    await prisma.collegeAdmin.update({
        where:{
            id
        },
        data:{
            password:await bcrpt.hash(password,10)
        }
    })
}