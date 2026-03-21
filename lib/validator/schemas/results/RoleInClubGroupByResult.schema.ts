import * as z from 'zod';
export const RoleInClubGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  clubId: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    clubId: z.number(),
    club: z.number(),
    members: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    clubId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    clubId: z.string().nullable()
  }).nullable().optional()
}));