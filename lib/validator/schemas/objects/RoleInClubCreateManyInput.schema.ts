import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  clubId: z.string()
}).strict();
export const RoleInClubCreateManyInputObjectSchema: z.ZodType<Prisma.RoleInClubCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubCreateManyInput>;
export const RoleInClubCreateManyInputObjectZodSchema = makeSchema();
