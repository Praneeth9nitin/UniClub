import * as z from 'zod';
// prettier-ignore
export const StudentResultSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
    rollnumber: z.string().nullable(),
    collegeId: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    registrations: z.array(z.unknown()),
    college: z.unknown().nullable(),
    clubs: z.array(z.unknown()),
    follows: z.array(z.unknown()),
    followsClub: z.array(z.unknown())
}).strict();

export type StudentResultType = z.infer<typeof StudentResultSchema>;
