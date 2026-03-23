import z from 'zod'


export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const createClubSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string(),
    name: z.string(),
    description: z.string(),
    city: z.string(),
    state: z.string(),
    college: z.string(),
    category: z.string()
})

export const EventCreateSchema = z.object({
    name: z.string().min(1),
    description: z.string().max(500),
    venue: z.string().min(1),
    date: z.coerce.date(),
    time: z.string(),
    category: z.string().min(1),
    mode: z.enum(["ONLINE", "OFFLINE", "HYBRID"]),
    capacity: z.number().nullable().optional(),
    registrationFee: z.number().nullable().optional(),
    registrationDeadline: z.coerce.date().nullable().optional(),
    registrationLink: z.string().url().nullable().optional(),
    banner: z.string().nullable().optional(),
})

export const ClubCreateSchema = z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    instagramUrl: z.string().url().nullable().optional(),
    twitterUrl: z.string().url().nullable().optional(),
    linkedinUrl: z.string().url().nullable().optional(),
    youtubeUrl: z.string().url().nullable().optional(),
    websiteUrl: z.string().url().nullable().optional(),
    logoUrl: z.string().nullable().optional(),
})


export const StudentCreateSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string(),
    rollnumber: z.string().optional(),
})