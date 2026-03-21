import * as z from 'zod';
export const StudentFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  rollnumber: z.string().optional(),
  collegeId: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  registrations: z.array(z.unknown()),
  college: z.unknown().optional(),
  clubs: z.array(z.unknown()),
  follows: z.array(z.unknown()),
  followsClub: z.array(z.unknown())
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