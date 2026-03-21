import * as z from 'zod';
// prettier-ignore
export const RegistrationsInputSchema = z.object({
    id: z.string(),
    studentId: z.string(),
    eventId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    event: z.unknown(),
    student: z.unknown()
}).strict();

export type RegistrationsInputType = z.infer<typeof RegistrationsInputSchema>;
