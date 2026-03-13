import { prisma } from "@/lib/singelton"
import z from "zod"
import bcrypt from "bcrypt"
import { createClubSchema } from "@/app/api/club/auth/signup/route"
import { EventCreateWithoutClubInputObjectSchema } from '@/lib/validator/schemas'



export const createClub = async (data: z.infer<typeof createClubSchema>) => {

    const result = await prisma.$transaction(async (tx) => {
        let college = await tx.college.findUnique({
            where: {
                name: data.college
            }
        })
        console.log(!college)
        if (!college) {
            college = await tx.college.create({
                data: {
                    name: data.college,
                    state: data.state,
                    city: data.city
                }
            })
        }
        const hashedPassword = await bcrypt.hash(data.password, 10)
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
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
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

export const createEvent = async (data: z.infer<typeof EventCreateWithoutClubInputObjectSchema>, clubId: string) => {
    const event = await prisma.event.create({
        data: {
            ...data,
            club: {
                connect: {
                    id: clubId
                }
            }
        }
    })
    return event
}

export const getEvents = async (clubId: string) => {
    const events = await prisma.event.findMany({
        where: {
            clubId,
            deletedAt: null
        }
    })
    return events
}

export const getEvent = async (eventId: string, clubId: string) => {
    const event = await prisma.event.findUnique({
        where: {
            id: eventId,
            deletedAt: null,
            clubId
        }
    })
    return event
}

export const deleteEvent = async (eventId: string, clubId: string) => {
    const event = await prisma.event.update({
        where: {
            id: eventId,
            clubId
        },
        data: {
            deletedAt: new Date()
        }
    })
    return event
}

export const updateEvent = async (clubId: string, eventId: string, data: z.infer<typeof EventCreateWithoutClubInputObjectSchema>) => {
    const event = await prisma.event.update({
        where: {
            id: eventId,
            clubId
        },
        data: data
    })
    if (!event) throw new Error("Event not found")
    return event
}