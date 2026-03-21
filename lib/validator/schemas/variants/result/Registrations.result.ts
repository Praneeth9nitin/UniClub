import * as z from 'zod';
// prettier-ignore
export const RegistrationsResultSchema = z.object({
    id: z.string(),
    studentId: z.string(),
    eventId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    event: z.unknown(),
    student: z.unknown()
}).strict();

export type RegistrationsResultType = z.infer<typeof RegistrationsResultSchema>;
