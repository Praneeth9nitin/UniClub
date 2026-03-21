import * as z from 'zod';
export const StudentInClubFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  clubId: z.string(),
  studentId: z.string(),
  roleId: z.string(),
  status: z.unknown(),
  club: z.unknown(),
  role: z.unknown(),
  student: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});