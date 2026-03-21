import * as z from 'zod';
export const CollegeAdminFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.string().optional(),
  collegeId: z.string(),
  college: z.unknown()
}));