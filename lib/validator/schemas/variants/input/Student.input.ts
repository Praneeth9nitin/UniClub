import * as z from 'zod';
// prettier-ignore
export const StudentInputSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
    rollnumber: z.string().optional().nullable(),
    collegeId: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    registrations: z.array(z.unknown()),
    college: z.unknown().optional().nullable(),
    clubs: z.array(z.unknown()),
    follows: z.array(z.unknown()),
    followsClub: z.array(z.unknown())
}).strict();

export type StudentInputType = z.infer<typeof StudentInputSchema>;
