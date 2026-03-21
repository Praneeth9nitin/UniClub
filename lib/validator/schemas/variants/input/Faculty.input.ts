import * as z from 'zod';
// prettier-ignore
export const FacultyInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    collegeId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    email: z.string(),
    password: z.string(),
    club: z.array(z.unknown()),
    college: z.unknown()
}).strict();

export type FacultyInputType = z.infer<typeof FacultyInputSchema>;
