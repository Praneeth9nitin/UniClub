import * as z from 'zod';
export const RoleInClubDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  clubId: z.string(),
  club: z.unknown(),
  members: z.array(z.unknown())
}));