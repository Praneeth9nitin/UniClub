import * as z from 'zod';
export const clubAdminFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  clubId: z.string(),
  club: z.unknown()
}));