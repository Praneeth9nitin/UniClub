import { prisma } from '../lib/singelton'
import z from 'zod'
import { ClubGroupByResultSchema, StudentCreateInputObjectSchema } from '@/lib/validator/schemas'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { id } from 'zod/v4/locales'
import { getCollege } from './club.services'
import { mode, eventStatus } from '@/lib/prisma/enums'

type student = z.infer<typeof StudentCreateInputObjectSchema>

export const signup = async (body: student) => {
    const check = await prisma.student.findFirst({
        where: {
            email: body.email
        }
    })
    if (check) {
        throw new Error("user alreay exist")
    }
    body.password = await bcrypt.hash(body.password, 10)
    const user = await prisma.student.create({
        data: body
    })
    const token = jwt.sign({ id: user.id }, `${process.env.JWT_SECRET}`, { expiresIn: "7d" })
    return token
}

export const signin = async ({ email, password }: { email: string, password: string }) => {
    const user = await prisma.student.findFirstOrThrow({
        where: {
            email
        }
    })
    if (!await bcrypt.compare(password, user.password)) {
        throw new Error("password incorrect")
    }
    const token = jwt.sign({ id: user.id }, `${process.env.JWT_SECRET}`, { expiresIn: "7d" })
    return token
}

export const getClub = async (id: string) => {
    const clubs = await prisma.club.findMany({
        orderBy: {
            followers: { _count: 'desc' },
        },
        include: {
            followers: true,
            events: true,
            college: true
        },
        take: 10
    })
    const resultClubs = clubs.map(async (club: any) => {
        const college = await getCollege(club.id)
        return { ...club, college: college?.name, isFollowing: club.followers.map((f: any) => f.id).includes(id) }
    })
    return await Promise.all(resultClubs)
}

export const getClubs = async (id: string) => {
    const clubs = await prisma.club.findMany({
        include: {
            followers: true,
            events: true
        }
    })
    const resultClubs = clubs.map(async (club: any) => {
        const college = await getCollege(club.id)
        return { ...club, college: college?.name, isFollowing: club.followers.map((f: any) => f.id).includes(id) }
    })
    return await Promise.all(resultClubs)
}

export const getFollowedClubs = async (id: string) => {
    const clubs = await prisma.student.findFirst({
        where: {
            id
        },
        select: {
            followsClub: true
        }
    })
    return clubs
}

export const followClub = async (id: string, clubId: string, following: boolean) => {
    if (following) {
        const result = await prisma.club.update({
            where: {
                id: clubId
            },
            data: {
                followers: {
                    connect: {
                        id
                    }
                }
            }
        })
    } else {
        const result = await prisma.club.update({
            where: {
                id: clubId
            },
            data: {
                followers: {
                    disconnect: {
                        id
                    }
                }
            }
        })
    }
}

export const getClubById = async (id: string) => {
    const club = await prisma.club.findFirst({
        where: {
            id
        },
        include: {
            followers: true,
            events: {
                where: {
                    isPublic: true
                },
                include: {
                    registrations: true
                }
            },
            college: true
        }
    })
    return club
}

export const getEvents = async (id: string) => {
    const club = await prisma.club.findMany({
        where: {
            followers: {
                some: {
                    id
                }
            }
        },
        include: {
            events: {
                include: {
                    club: true,
                    registrations: true
                }
            }
        }
    })
    const followedId: string[] = []
    const events: ({ club: { id: string; name: string; collegeId: string; description: string | null; cordinatorId: string | null; createdAt: Date; updatedAt: Date; deletedAt: Date | null; onHold: boolean; category: string; logoUrl: string | null; instagramUrl: string | null; twitterUrl: string | null; linkedinUrl: string | null; youtubeUrl: string | null; websiteUrl: string | null }; registrations: { id: string; createdAt: Date; updatedAt: Date; deletedAt: Date | null; studentId: string; eventId: string }[] } & { id: string; name: string; description: string | null; createdAt: Date; updatedAt: Date; deletedAt: Date | null; category: string; clubId: string; date: Date; time: string; mode: mode; registrationLink: string | null; registrationFee: number | null; registrationOpen: boolean; venue: string | null; city: string | null; banner: string | null; capacity: number | null; registrationDeadline: Date | null; status: eventStatus; isPublic: boolean })[] = []

    club.map((cur) => {
        followedId.push(cur.id)
        cur.events.map((event) => {
            events.push(event)
        })
    })
    return { followedId, events: club.length > 0 ? events : [] }
}

export const getEvent = async (id: string) => {
    const event = await prisma.event.findFirst({
        where: {
            id,
            deletedAt: null
        },
        include: {
            club: {
                include: {
                    college: true
                }
            }
        }
    })
    return event
}

export const getMe = async (id: string) => {
    const me = await prisma.student.findFirst({
        where: {
            id
        },
        include: {
            followsClub: {
                select: {
                    id: true, name: true, category: true,
                    college: { select: { name: true } }, logoUrl: true,
                    _count: { select: { followers: true } }
                }
            },
            college: {
                select: {
                    name: true
                }
            },
            registrations: {
                select: {
                    id: true,
                    event: {
                        select: {
                            id: true,
                            name: true,
                            date: true,
                            venue: true,
                            mode: true,
                            registrationFee: true,
                            club: {
                                select: {
                                    id: true,
                                    name: true,
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    return me
}