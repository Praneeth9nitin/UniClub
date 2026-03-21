import * as z from 'zod';
import { statusSchema } from '../../enums/status.schema';
// prettier-ignore
export const StudentInClubInputSchema = z.object({
    id: z.string(),
    clubId: z.string(),
    studentId: z.string(),
    roleId: z.string(),
    status: statusSchema,
    club: z.unknown(),
    role: z.unknown(),
    student: z.unknown()
}).strict();

export type StudentInClubInputType = z.infer<typeof StudentInClubInputSchema>;
