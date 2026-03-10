import { prisma } from "@/lib/singelton"
import z from "zod"
import bcrypt from "bcrypt"
import { createClubSchema } from "@/app/api/club/auth/signup/route"



export const createClub = async (data: z.infer<typeof createClubSchema>) => {

    const result = await prisma.$transaction(async (tx) => {
        let college = await tx.college.findUnique({
            where: {
                name: data.collegeName
            }
        })
        if (!college) {
            college = await tx.college.create({
                data: {
                    name: data.collegeName,
                    state: data.state,
                    city: data.city
                }
            })
        }
        const hashedPassword = await bcrypt.hash(data.adminPassword, 10)
        const club = await tx.club.create({
            data: {
                name: data.name,
                description: data.description,
                category: data.category,
                college: {
                    connect: {
                        id: college?.id
                    }
                }
            }
        })

        const clubAdmin = await tx.clubAdmin.create({
            data: {
                name: data.adminName,
                email: data.adminEmail,
                password: hashedPassword,
                clubId: club.id
            }
        })
        return { club, clubAdmin }
    })
    return result
}

export const adminLogin = async (email: string, password: string) => {
    const clubAdmin = await prisma.clubAdmin.findUnique({
        where: {
            email
        }
    })
    if (!clubAdmin) throw new Error("Admin not found")
    if (!await bcrypt.compare(password, clubAdmin.password)) throw new Error("Invalid password")
    return clubAdmin
}