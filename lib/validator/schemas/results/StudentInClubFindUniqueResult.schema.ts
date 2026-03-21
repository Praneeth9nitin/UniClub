import * as z from 'zod';
export const StudentInClubFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  clubId: z.string(),
  studentId: z.string(),
  roleId: z.string(),
  status: z.unknown(),
  club: z.unknown(),
  role: z.unknown(),
  student: z.unknown()
}));