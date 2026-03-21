import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();
export const RoleInClubCreateManyClubInputObjectSchema: z.ZodType<Prisma.RoleInClubCreateManyClubInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubCreateManyClubInput>;
export const RoleInClubCreateManyClubInputObjectZodSchema = makeSchema();
