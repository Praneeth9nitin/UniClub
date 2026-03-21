import * as z from 'zod';
import { statusSchema } from '../../enums/status.schema';
// prettier-ignore
export const StudentInClubResultSchema = z.object({
    id: z.string(),
    clubId: z.string(),
    studentId: z.string(),
    roleId: z.string(),
    status: statusSchema,
    club: z.unknown(),
    role: z.unknown(),
    student: z.unknown()
}).strict();

export type StudentInClubResultType = z.infer<typeof StudentInClubResultSchema>;
