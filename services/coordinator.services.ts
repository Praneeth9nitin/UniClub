import { prisma } from '@/lib/singelton'
import bcrypt from 'bcrypt'
import { ClubCreateInputObjectSchema } from '@/lib/validator/schemas'
import jwt from 'jsonwebtoken'
import z from 'zod'

type clubSchema = z.infer<typeof ClubCreateInputObjectSchema>

export const login = async (email: string, password: string) => {
    const user = await prisma.faculty.findUniqueOrThrow({
        where: {
            email
        }
    })
    if (!await bcrypt.compare(password, user.password)) {
        throw new Error("password incorrect");
    }
    const token = jwt.sign({ id: user.id, collegeId: user.collegeId }, `${process.env.JWT_SECRET}`)
    return token
}

export const createClub = async (name: string, description: string, id: string, collegeId: string, category: string) => {
    const club = await prisma.club.create({
        data: {
            name,
            description,
            category,
            coordinator: {
                connect: { id }
            },
            college: {
                connect: { id: collegeId }
            },
            onHold: false
        }
    })
    return club
}

export const addMember = async (id: string, studentId: string, clubId: string, name: string) => {
    const facultyInClub = await prisma.club.findUnique({
        where: {
            id: clubId
        }
    })
    if (facultyInClub?.cordinatorId !== id) {
        throw new Error('Unauthorized')
    }
    const result = await prisma.$transaction(async (tx) => {
        const role = await tx.roleInClub.upsert({
            where: {
                name_clubId: {
                    name,
                    clubId
                }
            },
            update: {},
            create: {
                name,
                clubId
            }
        })
        const assign = await tx.studentInClub.create({
            data: {
                student: {
                    connect: { id: studentId }
                },
                club: {
                    connect: { id: clubId }
                },
                role: {
                    connect: { id: role.id }
                }
            }
        })
        return { role, assign }
    })
    return result
}

export const changePassword = async (id: string, password: string) => {
    await prisma.faculty.update({
        where: {
            id
        },
        data: {
            password: await bcrypt.hash(password, 10)
        }
    })
}