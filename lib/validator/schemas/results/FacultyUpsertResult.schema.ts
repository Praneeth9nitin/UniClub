import * as z from 'zod';
export const FacultyUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  collegeId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  email: z.string(),
  password: z.string(),
  club: z.array(z.unknown()),
  college: z.unknown()
});